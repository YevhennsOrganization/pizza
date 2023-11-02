import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Текст кнопки',
    },
    typeSubmit: {
      description: 'Тип кнопки',
      defaultValue: true,
    },
    icon: {
      description: 'Наявність іконки',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Кнопка',
    icon: true,
    typeSubmit: true,
  },
};

export const Secondary: Story = {
  args: {
    text: 'Кнопка',
    icon: false,
    typeSubmit: false,
    onClick() {
      alert('Працює');
    },
  },
};
