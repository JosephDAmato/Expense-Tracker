import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [status, setStatus] = useState(false);
  //const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  // });

  const titleHandleChange = (e) => {
    const change = e.target.value;
    console.log(`You Typed something! It was : ${change}`);
    setExpenseTitle(e.target.value);
    // setUserInput((prevState) => {
    //     return {...prevState, title: e.target.value };
    // })
    // console.log(`this is ${JSON.stringify(userInput)}`)
  };

  const amountHandleChange = (e) => {
    const change = e.target.value;
    console.log(`You changed something! It was : ${change}`);
    setExpenseAmount(e.target.value);
  };

  const dateHandleChange = (e) => {
    const change = e.target.value;
    console.log(`You effected something! It was : ${change}`);
    setExpenseDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate),
    };
    props.onSaveExpenseData(expenseData);
    setExpenseAmount("");
    setExpenseDate("");
    setExpenseTitle("");
  };

  const statusHandler = () => {
    setStatus(true);
  };

  const handleClearForm = () => {
    setStatus(false);
  }

  const expenseForm = (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseTitle}
            onChange={titleHandleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={expenseAmount}
            min="0.01"
            step="0.01"
            onChange={amountHandleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={expenseDate}
            min="2022-01-01"
            max="2025-01-01"
            onChange={dateHandleChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={handleClearForm}>Clear Form</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

  const formButton = <button className="new-expense__actions" type="button" onClick={statusHandler}>Add New Expense</button>;

  return (<>{!status ? formButton : expenseForm}</>);
};

export default ExpenseForm;
