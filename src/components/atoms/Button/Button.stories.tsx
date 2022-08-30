import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from 'components/atoms';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    type: 'button',
    label: 'Button',
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
Default.storyName = 'Button';
