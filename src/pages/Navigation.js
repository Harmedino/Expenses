import React, { useEffect, useState } from "react";
import Expenses from "../component/Expenses/Expenses";
import NewExpense from "../component/NewExpense/NewExpense";
import Header from "../component/UI/Header";
import { useLoaderData } from "react-router-dom";
import { firestore } from "../component/Firebase";
import {
  updateDoc,
  doc,
  arrayUnion,
  getDoc,
  collection,
} from "firebase/firestore";

function Navigation() {
  const token = useLoaderData();
  console.log(token.uid, "change");

  useEffect(() => {
    if (!token) {
      return;
    }
  }, [token]);

  const DommyExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(DommyExpenses);

  // const addExpenseHandler = async (expense) => {
  //   const data = await updateDoc(doc(firestore, "User", token.uid), {
  //     expense: arrayUnion(expense),

  //     getDoc(collection(firestore, 'User',token.uid)).then((result) => {
  //       loadingSpinner.style.display = "none";
  //       result.forEach((user) => {
  //         let id = user.id;
  //         setExpenses({ id, ...user.data() });
  //       });

  // });
  //   });

  const addExpenseHandler = async (expense) => {
    const userDocRef = doc(firestore, "User", token.uid);
    const data = await updateDoc(userDocRef, {
      expense: arrayUnion(expense),
    });

    const result = await getDoc(collection(firestore, "User", token.uid));
    result.expense.forEach((user) => {
      let id = user.id;
      setExpenses({ id, ...user.data() });
    });

    console.log(expense);
  };

  return (
    <div>
      <Header></Header>
      <div style={{ marginTop: "70px" }}>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default Navigation;
