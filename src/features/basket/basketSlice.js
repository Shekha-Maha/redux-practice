import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {
    addItem: (state, action) => {
      let updatedBasket = [...state.basket, action.payload];
      
      state.basket = updatedBasket;
    },
    deleteItem: (state, action) => {
      const index = state.basket.findIndex(item => item.id === action.payload.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
          newBasket.splice(index, 1);
        }
       else {
        console.warn(
          `can't remove the product (id: ${action.payload.id}) as its not in the basket`
        );
      }
      state.basket = newBasket;
    },
  },
});

export const {addItem, deleteItem } = basketSlice.actions;

export const selectBasket = (state) => state.basket.basket;

export default basketSlice.reducer;