import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Heading } from 'components/atoms';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  args: {
    title: 'This is an h1 heading',
  },
} as ComponentMeta<typeof Heading>;

export const Default: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);
Default.storyName = 'Heading';
