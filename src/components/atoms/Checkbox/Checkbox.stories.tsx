import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from 'components/atoms';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: {
    id: 'testCheckbox',
    name: 'testCheckbox',
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);
Default.storyName = 'Checkbox';
