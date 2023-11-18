import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import Icon from '../Icon/Icon';
import '../../../styles/globals.scss';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary1: Story = {
  args: {
    type: 'button',
    children: [
      <Icon
        key={1}
        svg="basket"
        iconWidth={16}
        iconHeight={16}
        color="white"
      />,
      'Кніпочка',
    ],
  },
};

export const Secondary: Story = {
  args: {
    type: 'submit',
    children: 'Кніпочка',
  },
};
