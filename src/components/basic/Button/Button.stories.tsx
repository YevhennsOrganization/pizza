import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/globals.scss';

import Button from './Button';
import { RiShoppingBasket2Line } from 'react-icons/ri';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      description: 'Текст кнопки',
    },
    type: {
      description: 'Тип кнопки',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

const WithIcon: Story = {
  render: ({ ...args }) => {
    return <Button type={args.type}>{args.children}</Button>;
  },
};

export const Primary = {
  ...WithIcon,
  args: {
    children: [<RiShoppingBasket2Line key={'icon'} />, 'Кніпочка'],
    type: 'button',
  },
};

const TextOnly: Story = {
  render: ({ ...args }) => {
    return <Button type={args.type}>{args.children}</Button>;
  },
};

export const Secondary = {
  ...TextOnly,
  args: {
    children: 'Кніпочка',
    type: 'submit',
  },
};
