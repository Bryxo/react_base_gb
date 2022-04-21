import React from 'react';
import { Form } from './Form';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  it('render component with PlaceholderText', () => {
    render(<Form />);
    expect(
      screen.getByPlaceholderText('Ведите сообщение...')
    ).toBeInTheDocument();
  });
  it('render MessageTitle', () => {
    const { getByTestId } = render(<Form />);
    const element = getByTestId('test_messages_title');
    expect(element).toBeInTheDocument();
  });
});
