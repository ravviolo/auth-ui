import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AuthFooter } from 'components/molecules';

export default {
  title: 'Molecules/AuthFooter',
  component: AuthFooter,
  args: {
    btnText: 'Link',
    text: 'Footer text.',
  },
} as ComponentMeta<typeof AuthFooter>;

export const Default: ComponentStory<typeof AuthFooter> = (args) => (
  <AuthFooter {...args} />
);
Default.storyName = 'AuthFooter';
