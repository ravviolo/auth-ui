import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconButton as IconButtonComponent } from 'components/atoms';

export default {
  title: 'Atoms/IconButton',
  component: IconButtonComponent,
} as ComponentMeta<typeof IconButtonComponent>;

export const IconButton: ComponentStory<typeof IconButtonComponent> = (
  args
) => <IconButtonComponent {...args} />;
IconButton.args = {
  icon: 'F',
  type: 'button',
};
