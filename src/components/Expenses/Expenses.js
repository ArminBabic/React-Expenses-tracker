import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChat";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");
  const YearData = (data) => {
    setEnteredYear(data);

    console.log(data);
  };
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter newYear={enteredYear} yearInfo={YearData} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
