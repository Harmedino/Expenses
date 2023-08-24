import React, { useState } from "react";
import "./FormExpense.css";
import { redirect, useRouteLoaderData } from "react-router-dom";
import { Timestamp } from "firebase/firestore";

export const FormExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const token = useRouteLoaderData("root");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChange = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput, enteredTitle: event.target.value
    // })
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChange = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChange = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const submit = (e) => {
    e.preventDefault();
    if (!token) {
      alert("you are required to login");
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      return redirect("/login");
    }
    const dateParts = enteredDate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);

    const jsDate = new Date(year, month, day);
    const firestoreTimestamp = Timestamp.fromDate(jsDate);

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: firestoreTimestamp,
    };

    props.onSaveExpenseData(expenseData);
    // console.log(expenseDate);
    // console.log(...userInput);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submit}>
      <div className="new-expense__controls">
        <div className=" new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChange}
            value={enteredTitle}
            required
          />
        </div>
        <div className=" new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChange}
            value={enteredAmount}
            required
          />
        </div>
        <div className=" new-expense__control">
          <label>Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChange}
            value={enteredDate}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
