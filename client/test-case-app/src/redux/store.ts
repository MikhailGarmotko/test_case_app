import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import feedBackReducer from './feedback/reducers'

export const store = configureStore({
  reducer: {
    feedBackPost: feedBackReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
