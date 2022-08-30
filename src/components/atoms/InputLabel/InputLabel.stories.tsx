import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputLabel } from 'components/atoms';

export default {
  title: 'Atoms/InputLabel',
  component: InputLabel,
  args: {
    htmlFor: 'inputFieldId',
    label: 'Test Label',
  },
} as ComponentMeta<typeof InputLabel>;

export const Default: ComponentStory<typeof InputLabel> = (args) => (
  <InputLabel {...args} />
);
Default.storyName = 'InputLabel';
