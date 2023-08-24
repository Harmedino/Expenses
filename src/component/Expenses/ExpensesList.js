import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  let expensesContent = (
    <h2 className="expenses-list__fallback">No expenses found</h2>
  );
  if (props.items.length > 0) {
    expensesContent = props.items.map((element) => (
      <ExpenseItem
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
        id={element.id}
      />
    ));
  }
  return (
    <div>
      <ul className="expenses-list">{expensesContent}</ul>
    </div>
  );
};
