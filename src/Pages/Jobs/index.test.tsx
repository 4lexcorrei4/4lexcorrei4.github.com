import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import App from '../../App';
import { cssOutsideMedia, mediaBlock } from '../../test/css';

const jobCss = readFileSync(resolve('src/components/JobList/style.css'), 'utf8');

afterEach(() => {
    cleanup();
    window.history.pushState({}, '', '/');
});

test('jobs groups each company, with the logo and name linking out and project links in the description', () => {
    window.history.pushState({}, '', '/jobs');
    render(<App />);

    const sky = screen.getByRole('link', { name: 'Sky Portugal' });
    expect(sky).toHaveAttribute('href', 'https://www.skygroup.sky');
    expect(sky).toHaveAttribute('target', '_blank');
    expect(sky.querySelector('img')).toHaveAttribute('src', '/assets/work/sky.png');
    expect(sky).not.toHaveTextContent('Lisbon');

    const skyCompany = sky.closest('.job-company') as HTMLElement;
    expect(skyCompany.querySelector('.job-location svg')).toBeInTheDocument();
    expect(skyCompany).toHaveTextContent('Lisbon, Portugal');
    expect(skyCompany).toHaveTextContent('Software Engineer');
    expect(skyCompany).toHaveTextContent('Sep 2024 – Present');
    expect(skyCompany.querySelector('.job-dates svg')).toBeInTheDocument();

    const channel = within(skyCompany).getByRole('link', { name: 'Channel Manager' });
    expect(channel).toHaveAttribute('href', '/projects/channel-manager');
    expect(channel.closest('.job-description')).not.toBeNull();
    expect(within(skyCompany).getByRole('link', { name: 'Taxonomy Feedback Loop Dashboard' })).toHaveAttribute('href', '/projects/taxonomy-feedback-loop-dashboard');
    expect(skyCompany).toHaveTextContent('MongoDB, and Kafka');
    expect(skyCompany).toHaveTextContent('2024 Global Streaming Hackathon');
    expect(skyCompany).toHaveTextContent('Azure OpenAI');

    const caixa = screen.getByRole('link', { name: 'Caixa Mágica Software' }).closest('.job-company') as HTMLElement;
    expect(within(caixa).getByRole('link', { name: 'Digitarq' })).toHaveAttribute('href', '/projects/digitarq');
    expect(within(caixa).getByRole('link', { name: 'CAP' })).toHaveAttribute('href', '/projects/cap');
    expect(caixa).toHaveTextContent('Elasticsearch and Neo4j');
    expect(caixa).toHaveTextContent('interviewed engineering candidates');

    const betacode = screen.getByRole('link', { name: 'Betacode' }).closest('.job-company') as HTMLElement;
    expect(within(betacode).getByRole('link', { name: 'WordBucket' })).toHaveAttribute('href', '/projects/wordbucket');
    expect(betacode).toHaveTextContent('SQLite persistence');

    const forall = screen.getByRole('link', { name: 'Forall Phones' }).closest('.job-company') as HTMLElement;
    expect(forall).toHaveTextContent('Shaper / Ambassador');
    expect(forall).toHaveTextContent('Apple accessories');
    expect(within(forall).getByRole('link', { name: 'Forall Family' })).toHaveAttribute('href', '/projects/forall-family');

    const happy = screen.getByRole('link', { name: 'Happy Code Portugal' }).closest('.job-company') as HTMLElement;
    expect(happy).toHaveTextContent('Webmaster');
    expect(happy).toHaveTextContent('Nov 2016 – Jul 2022');
    expect(happy).toHaveTextContent('Content Developer');
    expect(happy).toHaveTextContent('Web Development Kids programme');
    expect(happy).toHaveTextContent('students aged 7–17');
    expect(happy).toHaveTextContent('Teacher');
    const happyWebsite = within(happy).getByRole('link', { name: "company's public website" });
    expect(happyWebsite).toHaveAttribute('href', 'https://www.happycode.pt');
    expect(happyWebsite).toHaveAttribute('target', '_blank');
    expect(happyWebsite).toHaveAttribute('rel', 'noopener noreferrer');
    expect(happy.querySelectorAll('.job-location svg')).toHaveLength(1);
    expect(happy.querySelectorAll('.job-dates svg')).toHaveLength(3);
    expect(within(happy).getAllByRole('link')).toHaveLength(2);
});

test('jobs center the company block below 800px and keep the description indent', () => {
    const narrow = mediaBlock(jobCss, 'max-width: 799px');
    expect(narrow).toMatch(/\.job-logo,\s*\.job-name,\s*\.job-location,\s*\.job-role,\s*\.job-dates\s*\{[^}]*text-align:\s*center/);
    expect(narrow).toMatch(/\.job-description p\s*\{[^}]*text-align:\s*left/);
    expect(narrow).toMatch(/\.job-description p\s*\{[^}]*text-indent:\s*1em/);

    const small = mediaBlock(jobCss, 'max-width: 480px');
    expect(small).toMatch(/width:\s*48px/);
    expect(small).toMatch(/height:\s*48px/);
    expect(small).toMatch(/\.job-name\s*\{[^}]*font-size:\s*18px/);

    expect(cssOutsideMedia(jobCss)).toMatch(/grid-template-columns:\s*var\(--job-logo-size\)\s+minmax\(0,\s*1fr\)/);
});
