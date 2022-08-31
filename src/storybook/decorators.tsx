import { action } from '@storybook/addon-actions';
import { DecoratorFn } from '@storybook/react';
import { useEffect } from 'react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';

export const RouterLoggerDecorator: DecoratorFn = (Story) => {
  const location = useLocation();
  useEffect(() => {
    action('location')(location);
  }, [location]);

  return <Story />;
};

export const RouterDecorator: DecoratorFn = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route element={<Story />} path="/*" />
      </Routes>
    </MemoryRouter>
  );
};
