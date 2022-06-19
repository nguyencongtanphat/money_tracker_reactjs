import Card from "../UI/Card";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
