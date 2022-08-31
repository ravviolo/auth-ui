import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SignUpTemplate } from 'components/templates';
import { RouterDecorator, RouterLoggerDecorator } from 'storybook/decorators';

export default {
  title: 'Templates/SignUpTemplate',
  component: SignUpTemplate,
  decorators: [RouterLoggerDecorator, RouterDecorator],
  args: {
    footerLinkHref: '/pathname',
    footerLinkText: 'Link',
    footerText: 'Footer text.',
    headerText: 'Header Title',
  },
} as ComponentMeta<typeof SignUpTemplate>;

export const Default: ComponentStory<typeof SignUpTemplate> = (args) => (
  <SignUpTemplate {...args} />
);
Default.storyName = 'SignUpTemplate';
