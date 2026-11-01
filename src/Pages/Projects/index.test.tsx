import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, expect, test } from 'vitest';
import App from '../../App';
import { cssOutsideMedia, mediaBlock } from '../../test/css';

const projectDetailCss = readFileSync(resolve('src/components/ProjectDetail/style.css'), 'utf8');

afterEach(() => {
    cleanup();
    window.history.pushState({}, '', '/');
});

test('projects shows every card until a group pill is chosen, and choosing it again clears the filter', async () => {
    window.history.pushState({}, '', '/projects');
    render(<App />);

    expect(screen.getByRole('button', { name: 'Technology', pressed: false }).querySelector('svg')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Photography', pressed: false }).querySelector('svg')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Video', pressed: false }).querySelector('svg')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Clear filters' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Channel Manager/ })).toHaveAttribute('href', '/projects/channel-manager');
    expect(screen.getByRole('link', { name: /Thesis/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Avenue Statues Hyperlapse/ })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Technology' }));

    expect(screen.getByRole('button', { name: 'Technology', pressed: true })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Clear filters' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Channel Manager/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Thesis/ })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Avenue Statues Hyperlapse/ })).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Technology' }));

    expect(screen.getByRole('button', { name: 'Technology', pressed: false })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Clear filters' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Avenue Statues Hyperlapse/ })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Photography' }));

    expect(screen.getByRole('link', { name: /Estuary of Tejo/ })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Channel Manager/ })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Avenue Statues Hyperlapse/ })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Description' })).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Technology' }));

    expect(screen.getByRole('button', { name: 'Technology', pressed: true })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Photography', pressed: true })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Video', pressed: false })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Channel Manager/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Estuary of Tejo/ })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Avenue Statues Hyperlapse/ })).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Clear filters' }));

    expect(screen.getByRole('link', { name: /Avenue Statues Hyperlapse/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Technology', pressed: false })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Photography', pressed: false })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Video', pressed: false })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Clear filters' })).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Video' }));

    expect(screen.getByRole('button', { name: 'Video', pressed: true })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Avenue Statues Hyperlapse/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Clérigos Tower Hyperlapse/ })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Channel Manager/ })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Estuary of Tejo/ })).not.toBeInTheDocument();
});

test('opening a project keeps the list and shows the write-up, and closing it returns to the list', async () => {
    window.history.pushState({}, '', '/projects');
    render(<App />);

    await userEvent.click(screen.getByRole('link', { name: /Channel Manager/ }));

    expect(window.location.pathname).toBe('/projects/channel-manager');
    expect(screen.getByRole('link', { name: /Channel Manager/ })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('heading', { name: 'Description' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Digitarq/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Projects list/, hidden: true })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: 'Hide project details' })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: 'Hide project details' }).parentElement).toHaveClass('project-card', 'is-open');
    expect(screen.getByRole('link', { name: 'Close project details' })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: 'Close project details' }).parentElement).toHaveClass('header');
    const headerStyles = document.createElement('style');
    headerStyles.textContent = projectDetailCss;
    document.head.appendChild(headerStyles);
    try {
        expect(screen.getByRole('link', { name: 'Close project details' }).parentElement).toHaveStyle({
            borderRadius: '10px 10px 0 0',
            paddingTop: '8px',
            paddingRight: '48px',
            paddingBottom: '8px',
            paddingLeft: '8px',
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
        });
        expect(screen.getByRole('link', { name: 'Close project details' })).toHaveStyle({
            top: '8px',
            right: '8px',
        });
    } finally {
        headerStyles.remove();
    }

    await userEvent.click(screen.getByRole('link', { name: 'Hide project details' }));

    expect(window.location.pathname).toBe('/projects');
    expect(screen.queryByRole('heading', { name: 'Description' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Avenue Statues Hyperlapse/ })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('link', { name: /Channel Manager/ }));
    await userEvent.click(screen.getByRole('link', { name: 'Close project details' }));

    expect(window.location.pathname).toBe('/projects');
    expect(screen.queryByRole('heading', { name: 'Description' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Avenue Statues Hyperlapse/ })).toBeInTheDocument();
});

test('a project address shows its screenshots, and an unknown project leaves the page', () => {
    window.history.pushState({}, '', '/projects/avenue-statues-hyperlapse');
    const view = render(<App />);

    expect(screen.getByAltText(/screenshot 1$/)).toBeInTheDocument();
    expect(screen.getByAltText(/screenshot 3$/)).toBeInTheDocument();
    expect(document.querySelector('.swiper-button-prev')).toBeInTheDocument();
    expect(document.querySelector('.swiper-button-next')).toBeInTheDocument();
    expect(document.querySelector('.swiper-pagination')).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Avenue Statues Hyperlapse/ })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Video' })).toHaveAttribute('href', 'https://www.instagram.com/reel/DCTdaOFo9ld/');

    view.unmount();
    window.history.pushState({}, '', '/projects/missing');
    render(<App />);
    expect(window.location.pathname).toBe('/');
    expect(screen.queryByRole('heading', { name: 'Description' })).not.toBeInTheDocument();
});

test('a new video and Aqua2Value show their saved stills, and Aqua2Value links to the app', () => {
    window.history.pushState({}, '', '/projects/fruitless-shortfilm');
    const view = render(<App />);

    expect(screen.getByAltText(/screenshot 1$/)).toBeInTheDocument();
    expect(screen.getByAltText(/screenshot 2$/)).toBeInTheDocument();
    expect(screen.getByAltText(/screenshot 3$/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Video' })).toHaveAttribute('href', 'https://www.instagram.com/p/DCHonmoN81q/');
    expect(document.querySelector('.project-detail .logo')).toHaveStyle({
        backgroundImage: 'url("/assets/projects/fruitless-shortfilm/logo.png")',
    });

    view.unmount();
    window.history.pushState({}, '', '/projects/aqua2value');
    render(<App />);

    expect(screen.getByAltText(/screenshot 1$/)).toBeInTheDocument();
    expect(screen.getByAltText(/screenshot 3$/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'https://waste-to-value-ui-szadzmna2a-ew.a.run.app' })).toHaveAttribute(
        'href',
        'https://waste-to-value-ui-szadzmna2a-ew.a.run.app',
    );
    expect(document.querySelector('.project-detail .logo')).toHaveStyle({
        backgroundImage: 'url("/assets/projects/aqua2value/logo.png")',
    });
    expect(document.querySelector('.project-detail .info span svg')).toBeInTheDocument();
    expect(document.querySelector('.project-detail .url svg')).toBeInTheDocument();
});

test('project detail centers the header below 800px and keeps the description indent', () => {
    const narrow = mediaBlock(projectDetailCss, 'max-width: 799px');
    expect(narrow).toMatch(/\.project-detail \.header \.logo\s*\{[^}]*text-align:\s*center/);
    expect(narrow).toMatch(/\.project-detail \.header \.name\s*\{[^}]*text-align:\s*center/);
    expect(narrow).toMatch(/\.project-detail \.header \.info\s*\{[^}]*text-align:\s*center/);
    expect(narrow).toMatch(/\.project-detail \.header \.url\s*\{[^}]*text-align:\s*center/);
    expect(narrow).toMatch(/\.project-detail \.description p\s*\{[^}]*text-align:\s*left/);
    expect(narrow).toMatch(/\.project-detail \.description p\s*\{[^}]*padding:\s*0 0 0 10px/);
    expect(narrow).toMatch(/\.project-detail \.description p\s*\{[^}]*text-indent:\s*10px/);

    const wide = cssOutsideMedia(projectDetailCss);
    expect(wide).toMatch(/\.project-detail \.header\s*\{[^}]*flex-direction:\s*row/);
    expect(wide).toMatch(/\.project-detail \.header \.logo\s*\{[^}]*margin-right:\s*20px/);
});

test.each([
    'clerigos-tower-hyperlapse',
    'dance-overboard-shortfilm',
    'nomad-bar-ad',
    'memory-shortfilm',
    'remission-shortfilm',
    'fruitless-shortfilm',
    'avenue-statues-hyperlapse',
])('%s uses a separate video logo in the card and detail while keeping carousel stills', (codename) => {
    window.history.pushState({}, '', `/projects/${codename}`);
    render(<App />);

    const backgroundImage = `url("/assets/projects/${codename}/logo.png")`;
    expect(document.querySelector(`a.link-card[href="/projects/${codename}"] .link-card-image`)).toHaveStyle({
        backgroundImage,
    });
    expect(document.querySelector('.project-detail .logo')).toHaveStyle({ backgroundImage });
    for (const number of [1, 2, 3]) {
        expect(screen.getByAltText(new RegExp(`screenshot ${number}$`))).toHaveAttribute(
            'src',
            `/assets/projects/${codename}/screenshot${number}.png`,
        );
    }
});

test('WordBucket, Schedule Simulator, and CLIP have no external link, and Schedule Simulator and CLIP keep their logos', () => {
    const cards = [
        ['/projects/wordbucket', '/assets/projects/wordbucket/screenshot1.png'],
        ['/projects/simulador-horarios', '/assets/projects/simulador-horarios/logo.png'],
        ['/projects/clip-cadeiras', '/assets/projects/clip-cadeiras/logo.png'],
    ] as const;

    for (const [path, image] of cards) {
        window.history.pushState({}, '', path);
        const view = render(<App />);
        expect(document.querySelector('.project-detail a.url')).not.toBeInTheDocument();
        expect(document.querySelector('.project-detail .logo')).toHaveStyle({
            backgroundImage: `url("${image}")`,
        });
        view.unmount();
    }
});

test('Estuary of Tejo shows the credited PDF section and uses a photograph for its logo', () => {
    window.history.pushState({}, '', '/projects/estuary-of-tejo');
    render(<App />);

    expect(screen.getByRole('link', { name: 'Ebook' })).toHaveAttribute(
        'href',
        '/assets/projects/estuary-of-tejo/ocafédafoto-estuary-final.pdf',
    );
    for (const number of [1, 2, 3]) {
        expect(screen.getByAltText(`Estuary of Tejo screenshot ${number}`)).toHaveAttribute(
            'src',
            `/assets/projects/estuary-of-tejo/screenshot${number}.png`,
        );
    }
    expect(document.querySelector('.project-detail .logo')).toHaveStyle({
        backgroundImage: 'url("/assets/projects/estuary-of-tejo/screenshot2.png")',
    });
});
