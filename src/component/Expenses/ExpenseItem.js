import React, { useEffect, useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useLoaderData } from "react-router-dom";
import { deleteExpense } from "../../store/expense-actions";
import { useDispatch } from "react-redux";

function ExpenseItem(props) {
  const token = useLoaderData();
  const dispatch = useDispatch();

  async function handleDelete(element) {
    dispatch(deleteExpense(element, token));
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description" id={props.id}>
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button className="delete" onClick={() => handleDelete(props)}>
          delete
        </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
