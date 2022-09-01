import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from 'components/atoms';

export default {
  title: 'Atoms/Flex',
  component: Flex,
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
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
};

export const Row = Template.bind({});
Row.args = {
  direction: 'row',
};
