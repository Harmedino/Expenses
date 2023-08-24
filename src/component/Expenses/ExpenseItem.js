import React, { useEffect, useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { firestore } from "../Firebase";
import { useLoaderData } from "react-router-dom";

function ExpenseItem(props) {
  const token = useLoaderData();
  const [expense, setExpense] = useState();

  useEffect(() => {
    getExpense();
  }, []);

  async function getExpense() {
    const result = await getDoc(doc(firestore, "User", token.uid));
    const userData = await result.data();
    setExpense(userData.expense);
  }

  async function handleDelete(element) {
    const updatedArray = expense.filter((e) => e.id !== element.id);

    const data = await updateDoc(doc(firestore, "User", token.uid), {
      expense: updatedArray,
    });
    // try {
    //   await updateDoc(doc(firestore, "User", token.uid), {
    //     expense: arrayRemove(element),
    //   });

    //   console.log("item deleted");
    // } catch (error) {
    //   console.log(error);
    // }
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
