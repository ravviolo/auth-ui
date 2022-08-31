import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AuthSocials } from 'components/molecules';

export default {
  title: 'Molecules/AuthSocials',
  component: AuthSocials,
} as ComponentMeta<typeof AuthSocials>;

export const Default: ComponentStory<typeof AuthSocials> = (args) => (
  <AuthSocials {...args} />
);
Default.storyName = 'AuthSocials';
