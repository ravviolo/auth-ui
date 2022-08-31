import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AuthFooter } from 'components/molecules';
import { RouterDecorator, RouterLoggerDecorator } from 'storybook/decorators';

export default {
  title: 'Molecules/AuthFooter',
  component: AuthFooter,
  decorators: [RouterLoggerDecorator, RouterDecorator],
  args: {
    linkHref: '/pathname',
    linkText: 'Link',
    text: 'Footer text.',
  },
} as ComponentMeta<typeof AuthFooter>;

export const Default: ComponentStory<typeof AuthFooter> = (args) => (
  <AuthFooter {...args} />
);
Default.storyName = 'AuthFooter';
