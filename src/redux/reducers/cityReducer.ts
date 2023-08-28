import { createReducer } from '@reduxjs/toolkit';
import { fetchCity } from '../actions/offerActions';


const initialState: {city: string} = {
  city: 'Paris',
};

export const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCity, (state, action) => {
      state.city = action.payload;
    });
});
