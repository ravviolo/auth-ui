import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Heading } from 'components/atoms';

export default {
  title: 'Atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'I am a heading',
};
