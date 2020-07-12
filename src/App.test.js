import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders tasklist', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TaskBox/i);
  expect(linkElement).toBeInTheDocument();
});
