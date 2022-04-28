import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import reducer from 'src/redux/slices/songbirdSlice';

const render = (
  component,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { app: reducer },
      preloadedState,
      middleware: [...getDefaultMiddleware({ serializableCheck: false })],
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
