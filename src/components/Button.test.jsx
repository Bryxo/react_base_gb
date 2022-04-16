import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('render component', () => {
    render(<Button />);
  });
  it('render component with text', () => {
    render(<Button />);
    expect(screen.getByText('Опубликовать')).toBeInTheDocument();
  });
  it('render with snapshot', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
});
