import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/globals.scss';

import Icon from './Icon';
// import TypeIcons from './TypeIcon'

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

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    svg: 'basket',
    color: 'main',
    iconWidth: 100,
    iconHeight: 100,
  },
};
