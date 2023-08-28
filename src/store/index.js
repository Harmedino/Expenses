import { configureStore } from "@reduxjs/toolkit";

import expenseSlice from "./expense-management";

const store = configureStore({
  reducer: { expense: expenseSlice.reducer },
});
 

export default store
