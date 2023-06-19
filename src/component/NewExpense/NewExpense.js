import React from "react"
import './NewExpense.css'
import { FormExpense } from "./FormExpense"


const NewExpense = (props) => {

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    
  }
    return <div className="new-expense">
      <FormExpense onSaveExpenseData={saveExpenseData}> </FormExpense>
    </div>
 }


export default NewExpense