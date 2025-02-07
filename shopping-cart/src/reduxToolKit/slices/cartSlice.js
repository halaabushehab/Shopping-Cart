import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("cart")) || [],
  loading: false,
  error: null
};
console.log("مخؤشم",JSON.parse(localStorage.getItem("cart")));

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.data.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.data)); // ✅ تحديث localStorage مع البيانات الحقيقية
    },

    removeFromCart: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.data)); // ✅ تحديث localStorage
    },

    updateQuantity: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.data)); // ✅ تحديث localStorage
    },

    clearCart: (state) => {
      state.data = []; // ✅ مسح البيانات
      localStorage.removeItem("cart"); // ✅ حذف من التخزين المحلي
    },
  },
});


export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
