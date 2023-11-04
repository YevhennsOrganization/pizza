import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { RiShoppingBasket2Line } from 'react-icons/ri';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Текст кнопки',
    },
    typeSubmit: {
      description: 'Тип кнопки',
      defaultValue: true,
    },
    isIcon: {
      description: 'Наявність іконки',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Кнопка',
    isIcon: true,
    typeSubmit: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Кнопка',
    isIcon: false,
    typeSubmit: false,
  },
};
