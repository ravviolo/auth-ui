import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AuthHeader } from 'components/molecules';

export default {
  title: 'Molecules/AuthHeader',
  component: AuthHeader,
  args: {
    title: 'Header Title',
  },
} as ComponentMeta<typeof AuthHeader>;

export const Default: ComponentStory<typeof AuthHeader> = (args) => (
  <AuthHeader {...args} />
);
Default.storyName = 'AuthHeader';
