import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Test if button label is displayed', () => {
    render(<Button label='test label'/>);
    const linkElement = screen.queryByRole('button');
    expect(linkElement).toBeInTheDocument();
  });