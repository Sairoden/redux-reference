import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer(state, action) {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalID;
      state.createdAt = new Date().toISOString();
    },

    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

console.log(customerSlice);

export default customerSlice.reducer;
export const { createCustomer, updateName } = customerSlice.actions;
