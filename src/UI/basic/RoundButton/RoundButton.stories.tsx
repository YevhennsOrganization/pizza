import type { Meta, StoryObj } from '@storybook/react';
import RoundButton from './RoundButton';
import Icon from '../Icon/Icon';
import '../../../styles/globals.scss';
import * as Icons from '../Icon/Icon.stories';

const meta: Meta<typeof RoundButton> = {
  title: 'RoundButton',
  component: RoundButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RoundButton>;

export const Favorite: Story = {
  args: {
    children: <Icon key={1} svg="heart" iconWidth={16} iconHeight={16} />,
  },
};

export const FavoriteFilled: Story = {
  args: {
    children: (
      <Icon
        key={1}
        svg="heart-filled"
        iconWidth={16}
        iconHeight={16}
        color="accent"
      />
    ),
  },
};

export const Delete: Story = {
  args: {
    children: (
      <Icon
        key={1}
        svg="remove"
        iconWidth={16}
        iconHeight={16}
        color="accent"
      />
    ),
  },
};

export const Left: Story = {
  args: {
    children: (
      <Icon key={1} svg="left" iconWidth={16} iconHeight={16} color="accent" />
    ),
  },
};

export const Right: Story = {
  args: {
    children: (
      <Icon key={1} svg="right" iconWidth={16} iconHeight={16} color="accent" />
    ),
  },
};
