import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginTemplate } from 'components/templates';
import { RouterDecorator, RouterLoggerDecorator } from 'storybook/decorators';

export default {
  title: 'Templates/LoginTemplate',
  component: LoginTemplate,
  decorators: [RouterLoggerDecorator, RouterDecorator],
  args: {
    footerLinkHref: '/pathname',
    footerLinkText: 'Link',
    footerText: 'Footer text.',
    headerText: 'Header Title',
  },
} as ComponentMeta<typeof LoginTemplate>;

export const Default: ComponentStory<typeof LoginTemplate> = (args) => (
  <LoginTemplate {...args} />
);
Default.storyName = 'LoginTemplate';
