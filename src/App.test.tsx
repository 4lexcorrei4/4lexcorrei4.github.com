import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the home page', () => {
  render(<App />);
  expect(screen.getByText('Alexandre Correia')).toBeInTheDocument();
  expect(document.title).toBe('Alexandre Correia');
  expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Home');
});
