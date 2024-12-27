import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [expense, setexpense] = useState([]);

  const addExpense = () => {
    if (!input || !amount)
      return;

    const newexpense = {
      id: expense.length + 1,
      title: input,
      amount: amount
    };
    setexpense([...expense, newexpense])
    setInput('')
    setAmount('')
  }

  const deleteExpense = (id) => {
    setexpense(expense.filter(item => item.id !== id))
  }
  return (
    <>
      <h2>Expense Tracker</h2>
      <div>
        <input
          type="text"
          placeholder='Expense'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="number"
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={addExpense}>Add Expense</button>

        <ul className='expense-list'>
          {expense.map((expense) => (
            <li key={expense.id}>
              <span>{expense.title}</span>
              <span>{expense.amount}</span>

              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App