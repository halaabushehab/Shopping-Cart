// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reduxToolKit/slices/productsSlice'; // تأكد من المسار الصحيح
import productsReducer from '../reduxToolKit/slices/cartSlice'; // تأكد من المسار الصحيح

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer, // تأكد أنه مضاف هنا
  },
});
console.log("🛍️ Initial Redux Store:", store.getState()); // ✅ تحقق أن البيانات موجودة عند بدء التطبيق

export default store;