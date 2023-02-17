import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ShortUrl from './ShortUrl';

describe('ShortUrl', () => {
  test('checking submit button enabled', async () => {
    const onClick = jest.fn();
    render(<ShortUrl addNewShortendUrl={onClick} />);

    userEvent.type(
      screen.getByPlaceholderText(/Shorten a link here.../i),
      'www.google.com',
    );
    expect(
      await screen.findByRole('button', { name: /Submit/i }),
    ).toBeEnabled();
  });

  test('checking submit button disabled', async () => {
    render(<ShortUrl addNewShortendUrl={() => 'joe'} />);

    userEvent.type(screen.getByPlaceholderText(/Shorten a link here.../i), '');
    expect(
      await screen.findByRole('button', { name: /Submit/i }),
    ).toBeDisabled();
  });
});
