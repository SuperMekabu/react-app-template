import { render, screen } from '@testing-library/react';
import React from 'react';

import Index from "@routes/index"

test('renders learn react link', () => {
  render(<Index />);
  const linkElement = screen.getByText(/To Other/i);
  expect(linkElement).toBeInTheDocument();
});
