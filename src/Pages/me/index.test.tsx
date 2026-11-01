import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, expect, test } from 'vitest';
import App from '../../App';

const headline = 'Full-Stack Engineer | React, TypeScript, Node.js, Python - AI when it helps';

afterEach(() => {
    cleanup();
    window.history.pushState({}, '', '/');
});

test('me keeps the photo and headline, and opens on the description', async () => {
    window.history.pushState({}, '', '/me');
    render(<App />);

    expect(screen.getByRole('link', { name: 'Me' })).toHaveAttribute('href', '/me');
    expect(screen.queryByRole('link', { name: 'About' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Profile' })).not.toBeInTheDocument();
    expect(document.querySelector('.intro-picture')).toHaveAttribute('src', '/img/profile.jpg');
    expect(screen.getByText(headline)).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'About', selected: true })).toBeInTheDocument();
    const about = screen.getByRole('tabpanel', { name: 'About' });
    expect(about).toBeVisible();
    expect(about).toHaveTextContent(/I build full-stack products/);
    expect(about).toHaveTextContent('Hike');
    expect(screen.queryByRole('button', { name: 'Clear filters' })).not.toBeInTheDocument();
    expect(screen.queryByRole('tabpanel', { name: 'Profile' })).not.toBeInTheDocument();
    expect(document.getElementById('me-panel-profile')).toHaveAttribute('aria-hidden', 'true');
    expect(document.getElementById('me-panel-profile')).not.toHaveClass('is-active');

    await userEvent.click(screen.getByRole('tab', { name: 'Profile' }));

    expect(document.querySelector('.intro-picture')).toHaveAttribute('src', '/img/profile.jpg');
    expect(screen.getByText(headline)).toBeInTheDocument();
    expect(window.location.search).toBe('?tab=profile');
    expect(screen.getByRole('tab', { name: 'Profile', selected: true })).toBeInTheDocument();
    const profile = screen.getByRole('tabpanel', { name: 'Profile' });
    expect(profile).toBeVisible();
    expect(profile).toHaveTextContent('Full-Stack Development');
    expect(profile).toHaveTextContent('Software Architecture');
    expect(profile).toHaveTextContent('Generative AI');
    expect(profile).toHaveTextContent('Portuguese');
    expect(profile).toHaveTextContent('Knowledge lover');
    expect(screen.queryByRole('button', { name: 'Knowledge lover' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Clear filters' })).not.toBeInTheDocument();
    expect(profile).not.toHaveTextContent('Hike');
    expect(screen.queryByRole('tabpanel', { name: 'About' })).not.toBeInTheDocument();
    expect(document.getElementById('me-panel-about')).toHaveAttribute('aria-hidden', 'true');
    expect(document.getElementById('me-panel-about')).not.toHaveClass('is-active');
});

test('the tab query selects about or profile', async () => {
    window.history.pushState({}, '', '/me?tab=about');
    const aboutView = render(<App />);
    expect(screen.getByRole('tab', { name: 'About', selected: true })).toBeInTheDocument();
    expect(screen.getByRole('tabpanel', { name: 'About' })).toBeVisible();

    aboutView.unmount();
    window.history.pushState({}, '', '/me?tab=profile');
    const profileView = render(<App />);
    expect(screen.getByRole('tab', { name: 'Profile', selected: true })).toBeInTheDocument();
    expect(screen.getByRole('tabpanel', { name: 'Profile' })).toBeVisible();

    await userEvent.click(screen.getByRole('tab', { name: 'About' }));
    expect(window.location.search).toBe('?tab=about');
    expect(screen.getByRole('tab', { name: 'About', selected: true })).toBeInTheDocument();

    profileView.unmount();
    window.history.pushState({}, '', '/me?tab=nope');
    render(<App />);
    expect(screen.getByRole('tab', { name: 'About', selected: true })).toBeInTheDocument();
});
