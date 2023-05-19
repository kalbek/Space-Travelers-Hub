import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navigation from '../components/Navigation';

describe('Navigation component', () => {
  test('renders Navigation component', () => {
    const { container } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  test('checks if the text "Space Travellers\' Hub" is present', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    const linkElement = getByText(/Space Travellers' Hub/i);
    expect(linkElement).toBeInTheDocument();
  });
});
