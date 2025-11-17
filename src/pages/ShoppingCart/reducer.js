export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const product = action.payload;

            const existingItem = state.items.find(item => item.id === product.id);

            if (existingItem) {
                // Đã có trong giỏ hàng
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    totalQuantity: state.totalQuantity + 1,
                    totalPrice: state.totalPrice + product.price
                };
            } else {
                // Chưa có trong giỏ hàng
                return {
                    ...state,
                    items: [
                        ...state.items,
                        { ...product, quantity: 1 }
                    ],
                    totalQuantity: state.totalQuantity + 1,
                    totalPrice: state.totalPrice + product.price
                };
            }
        }

        case 'REMOVE_FROM_CART': {
            const productId = action.payload;
            const itemToRemove = state.items.find(item => item.id === productId);

            if (!itemToRemove) return state;

            const newItems = state.items.filter(item => item.id !== productId);

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
                totalQuantity: state.totalQuantity - itemToRemove.quantity
            };
        }

        case 'UPDATE_QUANTITY': {
            const { productId, change } = action.payload;
            const item = state.items.find(i => i.id === productId);
            if (!item) return state;
            const newQuantity = item.quantity + change;

            if (newQuantity <= 0) {
                return reducer(state, { type: 'REMOVE_FROM_CART', payload: productId });
            }

            return {
                ...state,
                items: state.items.map(i =>
                    i.id === productId
                        ? { ...i, quantity: newQuantity }
                        : i
                ),
                totalQuantity: state.totalQuantity + change,
                totalPrice: state.totalPrice + (item.price * change)
            };
        }

        case 'CLEAR_CART': {
            return {
                items: [],
                totalPrice: 0,
                totalQuantity: 0
            };;
        }
    }
}