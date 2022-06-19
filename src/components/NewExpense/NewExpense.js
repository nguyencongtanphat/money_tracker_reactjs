import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expense);
    console.log(expense);
  };

  const [isOpenForm, setIsOpenForm] = useState(false);

  const toggleIsOpenForm = () => {
    setIsOpenForm((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {!isOpenForm && <button onClick={toggleIsOpenForm}>Add new</button>}
      {isOpenForm && (
        <ExpenseForm
          toggleIsOpenForm={toggleIsOpenForm}
          onSaveExpenseData={onSaveExpenseDataHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
