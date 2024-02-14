import { useEffect, useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseItem from "./components/ExpenseItem"
import axios from "axios"

const App = () => {
  const [expenses, setExpenses]  = useState([
])
useEffect(() => {
  AxiosError.get('https://expensetracker-d2zd.onrender.com/entry')
  .then(res => {
    console.log(res.date)
    setExpenses(res.date)
  })
})




const addExpense = (title, amount) => {
  setExpenses([...expenses, {title: title, amount: amount}])
}
const deleteExpense = (id) => {
  setExpenses(expenses.filter((exp) => exp.id !== id))
  }
let income = 0, expense = 0
let spent = 0
expenses.forEach((exp) => {
  if(exp.amount>0) {
    income += exp.amount
  } else {
    expense += exp.amount
  }
})
  return (
    <>
    <div>
      <div className="heading">Expense Tracker
      <div className="balance">Balance ---: {income-spent}</div></div>
      <div className="income-expense-container">
      <div className="income">
        <span className="title">Income</span>
        <span>{income}</span>
    </div>
    <div className="block"></div>
          <div className="expense">
            <span className="title">Expenditure</span>
            <span>{spent}</span>
            </div>
          </div>
    </div>
    <div>
      <ExpenseForm addExpense={addExpense}
      />
    </div>
    {expenses.map((expense) => (
      <ExpenseItem key = {expense.id} title={expense.title} amount={expense.amount} />
    ))}
    </>
  )
}
export default App