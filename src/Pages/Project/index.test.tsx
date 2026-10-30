import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { expect, test } from 'vitest';
import Project from './index';

test('shows project screenshots with navigation and without pagination', () => {
  render(
    <MemoryRouter initialEntries={['/project/avenue-statues-hyperlapse']}>
      <Routes>
        <Route path="/project/:codename" element={<Project />} />
      </Routes>
    </MemoryRouter>,
  );

  expect(screen.getByAltText(/screenshot 1$/)).toBeInTheDocument();
  expect(document.querySelector('.swiper-button-prev')).toBeInTheDocument();
  expect(document.querySelector('.swiper-button-next')).toBeInTheDocument();
  expect(document.querySelector('.swiper-pagination')).not.toBeInTheDocument();
});
