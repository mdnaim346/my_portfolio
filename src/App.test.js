import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio owner and work section', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /naim reza/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /case studies across erp/i })).toBeInTheDocument();
});
