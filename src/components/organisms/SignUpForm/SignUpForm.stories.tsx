import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SignUpForm } from 'components/organisms';

export default {
  title: 'Organisms/SignUpForm',
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

export const Default: ComponentStory<typeof SignUpForm> = (args) => (
  <SignUpForm {...args} />
);
Default.storyName = 'SignUpForm';
