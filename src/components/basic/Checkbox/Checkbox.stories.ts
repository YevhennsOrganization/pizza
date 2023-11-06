import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/globals.scss';

import Checkbox from './Checkbox';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Доставка',
  },
};
