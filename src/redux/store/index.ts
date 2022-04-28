import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from 'src/redux/slices/songbirdSlice';

export const store = configureStore({
  reducer: {
    app: reducer
  },
  middleware: [...getDefaultMiddleware({ serializableCheck: false })]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
