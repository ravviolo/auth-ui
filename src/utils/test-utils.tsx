import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import {
  create,
  ReactTestRenderer,
  TestRendererOptions,
} from 'react-test-renderer';

import { AppStore, RootState, setupStore } from 'store';

interface StoreOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  preloadedHistory?: MemoryRouterProps['initialEntries'];
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    preloadedHistory = ['/'],
  }: StoreOptions = {},
  renderOptions: RenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <MemoryRouter initialEntries={preloadedHistory}>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export const createWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    preloadedHistory = ['/'],
  }: StoreOptions = {},
  testRendererOptions?: TestRendererOptions
): ReactTestRenderer =>
  create(
    <MemoryRouter initialEntries={preloadedHistory}>
      <Provider store={store}>{ui}</Provider>
    </MemoryRouter>,
    testRendererOptions
  );
