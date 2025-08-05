import React, { useReducer, useState } from 'react';

function ExpenseReducer() {
  const [amount, setAmount] = useState(0);
  const [paidBy, setPaidBy] = useState(1);
  const [splitAmong, setSplitAmong] = useState([1, 2]);

  const initialState = {
    friends: [
      { id: 1, name: "Anik" },
      { id: 2, name: "Tania" }
    ],
    expense: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD EXPENSE":
        return {
          ...state,
          expense: [...state.expense, action.payload]
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const calculateBalance = (friends, expenses) => {
    const balances = {};

    // Initialize balances
    friends.forEach(friend => {
      balances[friend.id] = 0;
    });

    expenses.forEach(({ amount, paidBy, splitAmong }) => {
      const share = amount / splitAmong.length;
      splitAmong.forEach(id => {
        if (id !== paidBy) {
          balances[id] -= share;
          balances[paidBy] += share;
        }
      });
    });

    return balances;
  };

  const handleExpense = () => {
    dispatch({
      type: "ADD EXPENSE",
      payload: {
        id: Date.now(),
        amount: Number(amount),
        paidBy: Number(paidBy),
        splitAmong: splitAmong.map(Number)
      }
    });

    setAmount(0);
  };

  const balances = calculateBalance(state.friends, state.expense);

  return (
    <div>
      <h1>Expense Reducer</h1>

      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />

        <select value={paidBy} onChange={(e) => setPaidBy(Number(e.target.value))}>
          {state.friends.map((friend) => (
            <option value={friend.id} key={friend.id}>
              {friend.name}
            </option>
          ))}
        </select>

        <button onClick={handleExpense}>Add Expense</button>
      </div>

      <div>
        <h3>Expense History</h3>
        <ul>
          {state.expense.map((expens) => (
            <li key={expens.id}>
              {state.friends.find((f) => f.id === expens.paidBy)?.name} paid $
              {expens.amount} for {expens.splitAmong.length} people
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Balance Summary</h4>
        {state.friends.map((friend) => (
          <p key={friend.id}>
            {friend.name} {balances[friend.id] < 0
              ? `owes $${Math.abs(balances[friend.id]).toFixed(2)}`
              : `will get $${balances[friend.id].toFixed(2)}`}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ExpenseReducer;
