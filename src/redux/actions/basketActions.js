import { v4 } from "uuid";
import api from "../../utils/api";
import actionTypes from "../actionTypes";

// asekron thunk aksiyonu
// sepet verilerini api'dan alıp reducer'a dispatch ile haber gönderilecek

export const getCart = () => (dispatch) => {
  dispatch({
    type: actionTypes.CART_LOADING,
  });
  api
    .get("/cart")
    .then((res) =>
      dispatch({ type: actionTypes.CART_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: actionTypes.CART_ERROR, payload: err }));
};

// ürünü api'a kaydettikten sonra reducer'a ekleneceğinin haberini gönder
export const createItem = (item) => (dispatch) => {
  // 1) sepete eklenecek olan ürünün bilgilerini belirle
  const newItem = {
    id: v4,
    productId: item.id,
    category: item.category,
    title: item.title,
    price: item.price,
    photo: item.photo,
    amount: 1,
  };

  // 2) api'a sepete eklemek için istek at
  api
    .post("/cart", newItem)

    // 3) istek başarılı olursa reducer'a haber ver
    .then(() => dispatch({ type: actionTypes.CREATE_ITEM, payload: newItem }));
};

// ürünün api'daki miktarını güncelledikten sonra reducer'a güncellendiğinin haberini gönder
export const updateItem = (id, newAmount) => (dispatch) => {
  // api!a güncelleme isteği at
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    // istek başarılı olursa reducer'a haber gönder
    .then((res) =>
      dispatch({ type: actionTypes.UPDATE_ITEM, payload: res.data })
    );
};

// ürünü api'dan silip reducer'a kaldırılması için haber gönderecek thunk aksiyonu
export const deleteItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => dispatch({ type: actionTypes.DELETE_ITEM, payload: id }));
};
