import type { Meta, StoryObj } from '@storybook/react';
import '../../styles/globals.scss';

import Input from './Input';
import { RiShoppingBasket2Line } from 'react-icons/ri';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'label',
    },
    error: {
      description: 'Текст помилки',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Ім'я",
  },
};
