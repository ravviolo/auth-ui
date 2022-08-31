import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from 'components/organisms';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

export const Default: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

Default.storyName = 'LoginForm';
