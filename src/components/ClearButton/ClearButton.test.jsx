import React from 'react';
import { ClearButton } from './ClearButton';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
const user = userEvent.setup();

it('button click', async () => {
  const func = jest.fn();
  render(<ClearButton click={func} data-testid="test-id" />);
  user.click(screen.getByTestId('test-id'));
  await waitFor(() => expect(func).toHaveBeenCalledTimes(1));
});
