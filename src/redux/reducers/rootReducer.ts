import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';
import offerReducer from './offerReducer';


const rootReducer = combineReducers({
  city: cityReducer,
  offers: offerReducer,
});

export default rootReducer;
