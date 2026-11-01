import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import App from './App';
import { cssOutsideMedia, mediaBlock } from './test/css';

const indexCss = readFileSync(resolve('src/index.css'), 'utf8');
const homeCss = readFileSync(resolve('src/Pages/Home/style.css'), 'utf8');
const meCss = readFileSync(resolve('src/Pages/me/style.css'), 'utf8');
const iconCss = readFileSync(resolve('src/components/IconLabelRow/style.css'), 'utf8');
const cardCss = readFileSync(resolve('src/components/CardGrid/style.css'), 'utf8');

beforeEach(() => {
    stubNarrowScreen(false);
});

afterEach(() => {
    cleanup();
    window.history.pushState({}, '', '/');
    vi.unstubAllGlobals();
});

function domRect(top: number, height: number): DOMRect {
    return {
        x: 0,
        y: top,
        width: 80,
        height,
        top,
        left: 0,
        right: 80,
        bottom: top + height,
        toJSON() { return this; },
    };
}

function stubNarrowScreen(matches: boolean) {
    vi.stubGlobal('matchMedia', (query: string) => ({
        matches: query === '(max-width: 799px)' && matches,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
    }));
}

test('renders the home page', () => {
    render(<App />);
    expect(screen.getByText('Alexandre Correia')).toBeInTheDocument();
    expect(document.title).toBe('Alexandre Correia');
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Home');

    const pages = screen.getByRole('navigation', { name: 'Pages' });
    expect(within(pages).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(within(pages).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page');
    expect(within(pages).getByRole('link', { name: 'Me' })).toHaveAttribute('href', '/me');
    expect(within(pages).getByRole('link', { name: 'Jobs' })).toHaveAttribute('href', '/jobs');
    expect(within(pages).getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects');
    expect(within(pages).queryByText('·')).not.toBeInTheDocument();
});

test('choosing Me makes that page current', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('link', { name: 'Me' }));

    expect(screen.getByRole('link', { name: 'Me' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current');
});

test('the menu bar slides to the current page', async () => {
    render(<App />);

    const menu = screen.getByRole('navigation', { name: 'Pages' });
    const indicator = menu.querySelector('.menu-indicator') as HTMLElement;
    const me = within(menu).getByRole('link', { name: 'Me' });
    vi.spyOn(menu, 'getBoundingClientRect').mockReturnValue(domRect(0, 400));
    vi.spyOn(me, 'getBoundingClientRect').mockReturnValue(domRect(120, 24));

    await userEvent.click(me);

    expect(indicator.style.transform).toBe('translateY(120px)');
    expect(indicator.style.height).toBe('24px');
    expect(indicator).toHaveAttribute('aria-hidden', 'true');
});

test('a narrow screen opens and closes the menu overlay', async () => {
    stubNarrowScreen(true);
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    expect(document.querySelector('.App')).toHaveClass('is-menu-open');
    expect(document.getElementById('menu')?.style.display).toBe('');
    expect(document.getElementById('footer')?.style.display).toBe('');

    const pages = screen.getByRole('navigation', { name: 'Pages' });
    expect(within(pages).getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(within(pages).getByRole('link', { name: 'Me' })).toBeInTheDocument();
    expect(within(pages).getByRole('link', { name: 'Jobs' })).toBeInTheDocument();
    expect(within(pages).getByRole('link', { name: 'Projects' })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Close menu' }));
    expect(document.querySelector('.App')).not.toHaveClass('is-menu-open');
    expect(document.getElementById('menu')?.style.display).toBe('');
    expect(document.getElementById('footer')?.style.display).toBe('');
});

test('choosing a page on a narrow screen closes the menu overlay', async () => {
    stubNarrowScreen(true);
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    await userEvent.click(screen.getByRole('link', { name: 'Jobs' }));

    expect(document.querySelector('.App')).not.toHaveClass('is-menu-open');
    expect(document.getElementById('menu')?.style.display).toBe('');
    expect(document.getElementById('footer')?.style.display).toBe('');
});

test('menu buttons leave the menu alone on a wide screen', async () => {
    stubNarrowScreen(false);
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    await userEvent.click(screen.getByRole('button', { name: 'Close menu' }));

    expect(document.querySelector('.App')).not.toHaveClass('is-menu-open');
    expect(document.getElementById('menu')?.style.display).toBe('');
    expect(document.getElementById('footer')?.style.display).toBe('');
});

test('the narrow shell uses the viewport height, safe area, and menu class', () => {
    const narrow = mediaBlock(indexCss, 'max-width: 799px');
    expect(narrow).toContain('100dvh');
    expect(narrow).toContain('width: 100%');
    expect(narrow).toContain('safe-area-inset');
    expect(narrow).toMatch(/#menu\s*\{[^}]*display:\s*none/);
    expect(narrow).toMatch(/\.App\.is-menu-open #menu\s*\{[^}]*display:\s*flex/);
    expect(narrow).toMatch(/#footer\s*\{[^}]*display:\s*none/);
    expect(narrow).toMatch(/\.App\.is-menu-open #footer\s*\{[^}]*display:\s*flex/);
    expect(narrow).toMatch(/\.menu-indicator\s*\{[^}]*display:\s*none/);
    expect(narrow).toMatch(/min-width:\s*44px/);
    expect(narrow).toMatch(/min-height:\s*44px/);

    const wide = cssOutsideMedia(indexCss);
    expect(wide).toMatch(/#menu\s*\{[^}]*flex-direction:\s*column/);
    expect(wide).toMatch(/#menu-open,\s*#menu-close\s*\{[^}]*display:\s*none/);
});

test('the home name scales with the screen and can wrap', () => {
    const name = homeCss.match(/#home #name\s*\{[^}]*\}/)?.[0] ?? '';
    expect(name).toContain('clamp(');
    expect(name).toContain('white-space: normal');
});

test('the me column is full width below 800px', () => {
    const narrow = mediaBlock(meCss, 'max-width: 799px');
    expect(narrow).toMatch(/\.me\s*\{[^}]*width:\s*100%/);
});

test('hobby icons use two columns and a smaller mark below 480px', () => {
    const small = mediaBlock(iconCss, 'max-width: 480px');
    expect(small).toMatch(/\.icon-label-row li\s*\{[^}]*width:\s*50%/);
    expect(small).toMatch(/width:\s*48px/);
    expect(small).toMatch(/height:\s*48px/);
});

test('project cards step from three columns to two, then one', () => {
    expect(cssOutsideMedia(cardCss)).toContain('repeat(3, minmax(0, 1fr))');
    expect(mediaBlock(cardCss, 'max-width: 799px')).toContain('repeat(2, minmax(0, 1fr))');
    const phone = mediaBlock(cardCss, 'max-width: 559px');
    expect(phone).toContain('minmax(0, 1fr)');
    expect(phone).not.toContain('repeat(2');
});
