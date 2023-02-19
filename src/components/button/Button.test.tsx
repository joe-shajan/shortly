import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  test.only('should render button text', () => {
    render(<Button value="Submit" />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('should call onClick function when clicked', () => {
    const onClick = jest.fn();
    render(<Button value="Submit" onClick={onClick} />);
    fireEvent.click(screen.getByText('Submit'));
    expect(onClick).toHaveBeenCalled();
  });

  test('should disable the button if isLoading prop is true', () => {
    render(<Button value="Submit" isLoading={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('should disable the button if disabled prop is true', () => {
    render(<Button value="Submit" disabled={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('should display a loading spinner if isLoading prop is true', () => {
    render(<Button value="Submit" isLoading={true} />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
