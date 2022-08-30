import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextButton } from 'components/atoms';

export default {
  title: 'Atoms/TextButton',
  component: TextButton,
  args: {
    label: 'Button',
    type: 'button',
  },
} as ComponentMeta<typeof TextButton>;

export const Default: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
);

Default.storyName = 'Text Button';
