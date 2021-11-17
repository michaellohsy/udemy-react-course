import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onNewExpenseSubmit = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onNewExpenseAdded(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseSubmit={onNewExpenseSubmit} />
    </div>
  );
};

export default NewExpense;
