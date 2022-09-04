import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const addYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter(
    (idx) => idx.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeYear={addYearHandler} selectedYear={filteredYear} />
        {expensesContent}
      </Card>
    </div>
  );
}
