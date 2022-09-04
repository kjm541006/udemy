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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeYear={addYearHandler} selectedYear={filteredYear} />
        {props.data.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
      </Card>
    </div>
  );
}
