import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/globals.scss';

import TextArea from './TextArea';

const meta = {
  title: 'TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'label',
    },
    placeholder: {
      description: 'placeholder',
    },
    error: {
      description: 'Текст помилки',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Коментар',
    placeholder: 'Введіть коментар',
  },
};
