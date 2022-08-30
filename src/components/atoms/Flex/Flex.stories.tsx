import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex as FlexComponent } from 'components/atoms';

export default {
  title: 'Atoms/Flex',
  component: FlexComponent,
  argTypes: {
    direction: { control: 'radio' },
  },
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

export const Flex: ComponentStory<typeof FlexComponent> = (args) => (
  <FlexComponent {...args} />
);
