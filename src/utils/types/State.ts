import store from '../../redux/store';

// export type StateType = {
//   city: string;
//   offers: OfferType[];
// }
export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
