import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import '../../../styles/globals.scss';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: "Ім'я",
    placeholder: "Введіть ім'я",
  },
};
