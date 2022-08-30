import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from 'components/atoms';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 'testCheckbox',
  name: 'testCheckbox',
};
