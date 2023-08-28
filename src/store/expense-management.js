import { createSlice } from "@reduxjs/toolkit";


const expenseSlice = createSlice({
  name: "expense",
  initialState: {
      expenses: [],
  },
  reducers: {
      deleteExpense(state, action) {
        
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
          );
          
    },
    addExpense(state, action) {
      state.expenses.push(action.payload);
    },
    showExpense(state, action) {
        state.expenses = action.payload
  }
  }
}); 



  

export const expenseActions = expenseSlice.actions;

export default expenseSlice;
