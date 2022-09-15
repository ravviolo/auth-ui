import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  create,
  ReactTestRenderer,
  TestRendererOptions,
} from 'react-test-renderer';

import { AppStore, RootState, setupStore } from 'store';

interface StoreOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
  }: StoreOptions = {},
  renderOptions: RenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export const createWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
  }: StoreOptions = {},
  testRendererOptions?: TestRendererOptions
): ReactTestRenderer =>
  create(
    <BrowserRouter>
      <Provider store={store}>{ui}</Provider>
    </BrowserRouter>,
    testRendererOptions
  );
