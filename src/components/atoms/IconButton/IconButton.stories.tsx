import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconButton } from 'components/atoms';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  args: {
    icon: 'F',
    type: 'button',
    color: 'cyan',
  },
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof IconButton>;

export const Default: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);
Default.storyName = 'IconButton';
