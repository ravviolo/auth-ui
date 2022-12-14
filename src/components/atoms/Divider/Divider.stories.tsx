import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Divider } from 'components/atoms';

export default {
  title: 'Atoms/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <div style={{ width: '20rem' }}>
    <Divider {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithBadge = Template.bind({});
WithBadge.args = {
  label: 'Badge',
};
