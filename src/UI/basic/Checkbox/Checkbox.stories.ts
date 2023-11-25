import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import '../../../styles/globals.scss';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    label: 'Доставка',
  },
};
