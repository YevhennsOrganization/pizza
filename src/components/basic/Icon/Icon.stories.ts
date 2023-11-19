import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import '../../../styles/globals.scss';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      options: ['main', 'white', 'accent'],
    },
    svg: {
      options: [
        'basket',
        'logo',
        'user',
        'facebook',
        'instagram',
        'remove',
        'left',
        'right',
        'heart',
        'heart-filled',
        'point',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Basket: Story = {
  args: {
    svg: 'basket',
    color: 'main',
    iconWidth: 100,
    iconHeight: 100,
  },
};

export const Facebook: Story = {
  args: {
    svg: 'facebook',
    color: 'main',
    iconWidth: 100,
    iconHeight: 100,
  },
};

export const Heart: Story = {
  args: {
    svg: 'heart',
    color: 'main',
    iconWidth: 100,
    iconHeight: 100,
  },
};

export const HeartFilled: Story = {
  args: {
    svg: 'heart-filled',
    color: 'main',
    iconWidth: 100,
    iconHeight: 100,
  },
};

export const Instagram: Story = {
  args: {
    svg: 'instagram',
    color: 'main',
    iconWidth: 100,
    iconHeight: 100,
  },
};

export const Left: Story = {
  args: {
    svg: 'left',
    color: 'main',
    iconWidth: 100,
    iconHeight: 100,
  },
};

export const Logo: Story = {
  args: {
    svg: 'logo',
    color: 'main',
    iconWidth: 100,
    iconHeight: 100,
  },
};

export const Point: Story = {
  args: {
    svg: 'point',
    color: 'main',
    iconWidth: 100,
    iconHeight: 100,
  },
};

export const Remove: Story = {
  args: {
    svg: 'remove',
    color: 'main',
    iconWidth: 100,
    iconHeight: 100,
  },
};

export const Right: Story = {
  args: {
    svg: 'right',
    color: 'main',
    iconWidth: 100,
    iconHeight: 100,
  },
};

export const User: Story = {
  args: {
    svg: 'user',
    color: 'main',
    iconWidth: 100,
    iconHeight: 100,
  },
};
