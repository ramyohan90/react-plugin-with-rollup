import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
    title: 'Autocomplete library',
    component: Button,
    tags: ['autocomplete'],
    parameters: { layout: 'centered' },
  } satisfies Meta<typeof Button>;

  export default meta;

  type Story = StoryObj<typeof meta>;

  export const Autocomplete: Story = {
    args: { label: "Test label" }
  };


