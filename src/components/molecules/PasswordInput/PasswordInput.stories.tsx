import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PasswordInput } from 'components/molecules';

export default {
  title: 'Molecules/PasswordInput',
  component: PasswordInput,
  args: {
    name: 'password',
    id: 'password',
  },
} as ComponentMeta<typeof PasswordInput>;

export const Default: ComponentStory<typeof PasswordInput> = (args) => (
  <PasswordInput {...args} />
);
Default.storyName = 'PasswordInput';
