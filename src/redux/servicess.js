import * as Types from '../constants/services';

const initialState = {
  services: [],
  providres: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case Types.SET_SERVICES:
    return {
      ...state,
      ...{
        services: action.payload
      }
    };
  case Types.SET_PROVIDERS:
    return {
      ...state,
      ...{
        providres: action.payload
      }
    };
  default:
    return state;
  }
};

export default reducer;
