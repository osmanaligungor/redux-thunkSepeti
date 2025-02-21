import actionTypes from "../actionTypes";

const initialState = {
  restaurants: [],
  isLoading: true,
  error: null,
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REST_LOADING:
      return { ...state, isLoading: true };

    case actionTypes.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload.message };

    case actionTypes.REST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
