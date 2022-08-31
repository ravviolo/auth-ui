import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory, DecoratorFn } from '@storybook/react';
import { useEffect } from 'react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';

import { AuthFooter } from 'components/molecules';

const ReactRouterLoggerDecorator: DecoratorFn = (Story) => {
  const location = useLocation();
  useEffect(() => {
    action('location')(location);
  }, [location]);

  return <Story />;
};

const reactRouterDecorator: DecoratorFn = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route element={<Story />} path="/*" />
      </Routes>
    </MemoryRouter>
  );
};

export default {
  title: 'Molecules/AuthFooter',
  component: AuthFooter,
  decorators: [ReactRouterLoggerDecorator, reactRouterDecorator],
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
