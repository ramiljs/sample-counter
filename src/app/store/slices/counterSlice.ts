import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number
};

const initialState: CounterState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAnmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  },
  extraReducers: {
    
  }
})

export const { increment, decrement, incrementByAnmount } = counterSlice.actions;

export default counterSlice.reducer;