import actionTypes from "../actionTypes";

const initialState = {
  card: [],
  isLoading: true,
  error: null,
};

const cardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CART_LOADING:
      return { ...state, isLoading: true };

    case actionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: payload?.message };

    case actionTypes.CART_SUCCESS:
      return { ...state, isLoading: false, error: null, card: payload };

    case actionTypes.CREATE_ITEM:
      return { ...state, card: state.card.concat(payload) };

    case actionTypes.UPDATE_ITEM:
      // aksiyonun payload'ı ile gelen güncel elemanın dizideki eski halini güncelle
      const updated = state.card.map((i) =>
        i.id === payload.id ? payload : i
      );
      return { ...state, card: updated };

    case actionTypes.DELETE_ITEM:
      const filtered = state.card.filter((i) => i.id !== payload);
      return { ...state, card: filtered };
    default:
      return state;
  }
};

export default cardReducer;
