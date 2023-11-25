import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';
import '../../../styles/globals.scss';

const meta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
  args: {
    label: 'Коментар',
    placeholder: 'Введіть коментар',
  },
};
