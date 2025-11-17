import { useCallback, useEffect, useMemo, useReducer } from "react";
import { CartContext } from "./Context";
import { reducer } from "../../pages/ShoppingCart/reducer";
import PropTypes from "prop-types";

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const init = () => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : initialState;
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addToCart = useCallback(
    (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    },
    [dispatch]
  );

  const removeFromCart = useCallback(
    (productId) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: productId });
    },
    [dispatch]
  );

  const updateQuantity = useCallback(
    (productId, change) => {
      dispatch({ type: "UPDATE_QUANTITY", payload: { productId, change } });
    },
    [dispatch]
  );

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, [dispatch]);

  const value = useMemo(
    () => ({
      items: state.items,
      totalPrice: state.totalPrice,
      totalQuantity: state.totalQuantity,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [
      state.items,
      state.totalPrice,
      state.totalQuantity,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
