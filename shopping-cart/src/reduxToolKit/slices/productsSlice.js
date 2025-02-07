import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; // استيراد createAsyncThunk و createSlice معًا

// ✅  جلب المنتجات باستخدام createAsyncThunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://6784de3b1ec630ca33a61161.mockapi.io/Products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      console.log("✅ Products from API:", data); // ✅ تحقق من البيانات المسترجعة
      return data;
    } catch (error) {
      console.error("❌ Error fetching products:", error);
      return rejectWithValue(error.message);
    }
  }
);

// ✅  إنشاء Slice المنتجات
const productsSlice = createSlice({
  name: "products",
  initialState: { data: [], loading: false, error: null },
  reducers: {}, // لا يوجد أي `reducers` هنا، لأنه يتم التحكم من خلال `extraReducers`
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("✅ Products received in Redux:", action.payload);
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
