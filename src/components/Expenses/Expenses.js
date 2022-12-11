import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const savedYearHandler = (year) => {
    const selectedYear = year;
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <ul>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSavedYear={savedYearHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList items={filteredExpense}/>
      </Card>
    </ul>
  );
}

export default Expenses;
