import React, { useEffect, useState } from "react";
import Expenses from "../component/Expenses/Expenses";
import NewExpense from "../component/NewExpense/NewExpense";
import Header from "../component/UI/Header";
import { useLoaderData } from "react-router-dom";
import { firestore } from "../component/Firebase";
import { updateDoc, doc, arrayUnion, getDoc } from "firebase/firestore";

function Navigation() {
  const token = useLoaderData();

  useEffect(() => {
    if (!token) {
      return;
    }
    initialData();
  }, [token]);

  const DommyExpenses = [];
  const [expenses, setExpenses] = useState(DommyExpenses);

  const addExpenseHandler = async (expense) => {
    const data = await updateDoc(doc(firestore, "User", token.uid), {
      expense: arrayUnion(expense),
    });
    initialData();
  };

  const initialData = () => {
    if (token.uid) {
      getDoc(doc(firestore, "User", token.uid)).then((result) => {
        const userData = result.data();
        const formattedExpenses = userData.expense.map((expense) => {
          const timestamp = expense.date;
          const jsDate = timestamp.toDate();
          const year = jsDate.getFullYear();
          const month = jsDate.getMonth();
          const day = jsDate.getDate();
          return {
            ...expense,
            date: new Date(
              jsDate.getFullYear(),
              jsDate.getMonth(),
              jsDate.getDate()
            ),
          };
        });

        setExpenses(formattedExpenses);
        console.log(formattedExpenses);
      });
    }
  };

  return (
    <div>
      <Header></Header>
      <div style={{ marginTop: "70px" }}>
        <NewExpense onAddExpense={addExpenseHandler} />
        {expenses && <Expenses items={expenses} />}
      </div>
    </div>
  );
}

export default Navigation;
