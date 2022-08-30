import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from 'components/atoms';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ width: '10rem' }}>
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  label: 'Button',
};

export const Submit = Template.bind({});
Submit.args = {
  type: 'submit',
  label: 'Submit',
};
Submit.argTypes = {
  onClick: { action: 'onSubmit' },
};

export const FullWidth: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
FullWidth.args = {
  ...Default.args,
};
