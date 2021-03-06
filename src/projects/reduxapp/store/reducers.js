import { combineReducers } from 'redux';

import mainReducer from './mainReducer';

const appReducer = combineReducers({ main: mainReducer });

const rootReducer = (state, action) => {

  if (action.type === 'CLEAR_STATE') {
    state = void(0);
  }

  return appReducer(state, action);

}

export default rootReducer;
