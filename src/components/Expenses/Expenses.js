import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import React from "react";

const DEFAULT_YEAR = 2019;

function Expenses(props) {
  const getFilteredExpenses = (year) => {
    return props.expenses.filter((e) => +e.date.getFullYear() === +year);
  };

  const [selectedYear, setSelectedYear] = useState(DEFAULT_YEAR);
  const [expenses, setExpenses] = useState(getFilteredExpenses(selectedYear));

  const onYearChange = (year) => {
    setSelectedYear(year);
    setExpenses(getFilteredExpenses(year));
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={selectedYear} onYearChange={onYearChange} />
        <ExpensesList items={expenses} />
      </Card>
    </div>
  );
}

export default Expenses;
