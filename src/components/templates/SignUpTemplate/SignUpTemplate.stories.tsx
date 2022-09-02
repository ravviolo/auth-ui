import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SignUpTemplate } from 'components/templates';

export default {
  title: 'Templates/SignUpTemplate',
  component: SignUpTemplate,
  args: {
    footerBtnText: 'Link',
    footerText: 'Footer text.',
    headerText: 'Header Title',
  },
} as ComponentMeta<typeof SignUpTemplate>;

export const Default: ComponentStory<typeof SignUpTemplate> = (args) => (
  <SignUpTemplate {...args} />
);
Default.storyName = 'SignUpTemplate';
