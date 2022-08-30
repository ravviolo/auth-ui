import { ComponentMeta, ComponentStory } from '@storybook/react';

import { InputField } from 'components/atoms';

export default {
  title: 'Atoms/InputField',
  component: InputField,
  args: {
    id: 'testField',
    name: 'testField',
  },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Text = Template.bind({});
Text.args = {
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};
