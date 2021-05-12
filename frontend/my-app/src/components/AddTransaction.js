import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
            category
        }
        addTransaction(newTransaction);
    }
    return (
    <>
        <h3>Add a new expense</h3>
        <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text">Name</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter name..." />
        </div>
        <div className="form-control">
            <label htmlFor="amount"
            >Cost <br />
            </label
            >
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div className="form-control">
            <label htmlFor="category">Category</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter category..." />
        </div>
        <button className="btn">Add transaction</button>
        </form>

    </>
    )
}