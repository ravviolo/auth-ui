import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginTemplate } from 'components/templates';

export default {
  title: 'Templates/LoginTemplate',
  component: LoginTemplate,
  args: {
    footerBtnText: 'Link',
    footerText: 'Footer text.',
    headerText: 'Header Title',
  },
} as ComponentMeta<typeof LoginTemplate>;

export const Default: ComponentStory<typeof LoginTemplate> = (args) => (
  <LoginTemplate {...args} />
);

Default.storyName = 'LoginTemplate';
