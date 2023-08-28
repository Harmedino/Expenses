import { updateDoc, doc, arrayUnion,getDoc,arrayRemove, Timestamp } from "firebase/firestore";
// import { updateDoc, doc, arrayRemove, Timestamp } from "firebase/firestore";
import { firestore } from "../component/Firebase";
import { expenseActions } from './expense-management'



// import { expenseActions } from "./expenseSlice";

export const deleteExpense = (expense, token) => {
  return async (dispatch) => {
    if (token) {
      const docRef = doc(firestore, "User", token.uid);

      const deleteFirestore = async () => {
        await updateDoc(docRef, {
          expenses: arrayRemove(expense),
        });
      };

      try {
        await deleteFirestore();
        dispatch(expenseActions.deleteExpense(expense));
      } catch (error) {
        console.log(error, "from reducer");
      }
    }
  };
};


export const creatExpense = (expenseData, token) => {
    return async (dispatch) => {
      if (token) {
        const docRef = doc(firestore, "User", token.uid);
  
        const updateFirestore = async () => {
          await updateDoc(docRef, {
            expenses: arrayUnion(expenseData),
          });
        };
  
        try {
          await updateFirestore();
          dispatch(expenseActions.addExpense(expenseData));
          console.log(expenseData)
        } catch (error) {
          console.log(error, 'from reducer');
        }
      }
    };
  };

  export const getExpense = (token) => {
    return async (dispatch) => {
      const initialData = async () => {
        if (token.uid) {
          try {
            const result = await getDoc(doc(firestore, "User", token.uid));
            const userData = result.data();
            
            if (userData.expenses && Array.isArray(userData.expenses)) {
              const formattedExpenses = userData.expenses
  
  
              return formattedExpenses;
            } else {
              return [];
            }
          } catch (error) {
            console.log(error);
            return [];
          }
        } else {
          return [];
        }
      };
  
      try {
        const userData = await initialData();
        // Dispatch the fetched expenses to the Redux store
        dispatch(expenseActions.showExpense( userData ));
      } catch (error) {
        console.log(error);
      }
    };
  };
  
//   .map((expense) => {
//     const isoDate = expense.date;
//     const jsDate = new Date(isoDate);
//     return {
//       ...expense,
//       date: new Date(jsDate.getFullYear(), jsDate.getMonth(), jsDate.getDate()),
//     };
//   });