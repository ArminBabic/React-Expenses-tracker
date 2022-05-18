import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const ExpenseData = (expenseDataInfo) => {
    const expenseInfo = {
      ...expenseDataInfo,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseInfo);
    setTogglerValue(false);
  };

  let toggler = false;

  const [togglerValue, setTogglerValue] = useState(toggler);

  const changeTogglerValue = () => {
    setTogglerValue(true);
  };

  const getTogglerValue = (data) => {
    setTogglerValue(data);
  };

  if (!togglerValue) {
    return (
      <div className="new-expense">
        <button type="button" onClick={changeTogglerValue}>
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm togglerInfo={getTogglerValue} inputInfo={ExpenseData} />
    </div>
  );
};

export default NewExpenses;
