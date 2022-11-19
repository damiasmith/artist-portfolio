import { render, screen } from '@testing-library/react';
import { MainContainer }from './main-container';
import { cvData } from '../../cvData';

test('renders learn react link', () => {
  render(<MainContainer { ...cvData } />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
