import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpensesChart from "./components/Expenses/ExpensesChart";
import NewExpense from "./components/NewExpense/NewExpense";

  const dummyData = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 98.76,
      date: new Date(2022, 3, 18),
    },
    {
      id: "e3",
      title: "Bootcamp",
      amount: 8000,
      date: new Date(2022, 6, 28),
    },
    {
      id: "e4",
      title: "Holiday Shopping",
      amount: 294.67,
      date: new Date(2022, 12, 10),
    },
  ];

function App() {
  const [expenses, setExpenses] = useState([]);



const addExpenseHandler = (expense) => {
  // console.log('in Appjs')
  // console.log(expense);
  setExpenses((prevState) => {
    return [expense, ...prevState]})
};

  return (

    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
