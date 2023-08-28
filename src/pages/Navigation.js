import React, { useEffect, useState } from "react";
import Expenses from "../component/Expenses/Expenses";
import NewExpense from "../component/NewExpense/NewExpense";
import Header from "../component/UI/Header";
import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { creatExpense, getExpense } from "../store/expense-actions";

function Navigation() {
  const token = useLoaderData();
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expenses);

  useEffect(() => {
    if (!token) {
      return;
    }

    dispatch(getExpense(token));
  }, [dispatch, token]);

  function addExpenseHandler(expense) {
    if (token) {
      dispatch(creatExpense(expense, token));
    }
    
  }

  return (
    <div>
      <Header></Header>
      <div style={{ marginTop: "70px" }}>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses}  /> 
      </div>
    </div>
  );
}

export default Navigation;
