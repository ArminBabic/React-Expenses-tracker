import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //title handler and state

  const [enteredTitle, setEnteredTitle] = useState("");

  function AddTitleHandler(e) {
    setEnteredTitle(e.target.value);
  }
  // amount handler and state

  const [enteredAmount, setEnteredAmount] = useState("");

  function AddAmountHandler(e) {
    setEnteredAmount(e.target.value);
  }
  ///date handler and state
  const [enteredDate, setEnteredDate] = useState("");

  function AddDateHandler(e) {
    setEnteredDate(e.target.value);
  }

  //submit function
  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    props.inputInfo(expense);
  };

  const changeValue = () => {
    props.togglerInfo(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={AddTitleHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AddAmountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={AddDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={changeValue} type="button">
          Cancel
        </button>
        <button onCltype="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
