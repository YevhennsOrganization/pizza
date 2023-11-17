import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/globals.scss';

import Button from './Button';
import Icon from '../Icon/Icon';
import Icon1 from '../Icon/Icon.stories';
import { type } from 'os';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { options: [typeof Icon1, 'ds'] },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'button',
    children: 'Кніпочка',
  },
};

export const Secondary: Story = {
  args: {
    type: 'submit',
    children: 'Кніпочка',
  },
};
