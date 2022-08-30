import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex as FlexComponent } from 'components/atoms';

export default {
  title: 'Atoms/Flex',
  component: FlexComponent,
  args: {
    children: Array(10)
      .fill(1)
      .map((_, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          style={{
            width: '5rem',
            height: '5rem',
            margin: '1rem',
            backgroundColor: 'cyan',
          }}
        />
      )),
  },
} as ComponentMeta<typeof FlexComponent>;

const Template: ComponentStory<typeof FlexComponent> = (args) => (
  <FlexComponent {...args} />
);

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
};

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
};
