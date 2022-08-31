import { ComponentMeta, ComponentStory } from '@storybook/react';

import { EmailInput } from 'components/molecules';

export default {
  title: 'Molecules/EmailInput',
  component: EmailInput,
  args: {
    id: 'email',
    name: 'email',
  },
} as ComponentMeta<typeof EmailInput>;

export const Default: ComponentStory<typeof EmailInput> = (args) => (
  <EmailInput {...args} />
);
Default.storyName = 'EmailInput';
