import { createReducer } from '@reduxjs/toolkit';
import { fetchOffers } from '../actions/offerActions';
import { OfferType } from '../../utils/types/OfferType';
import cardsMockList from '../../mockData/cardData';


const initialState: {offers: OfferType[]} = {
  offers: cardsMockList
};


const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    });
});


export default offerReducer;
