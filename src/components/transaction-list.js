import React, { useContext } from 'react'
import { GlobalContext } from '../context/global-state';
import { Transaction } from './transaction';
//import transactions from our context

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);


    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction transaction={transaction} />))}
            </ul>
        </div>
    )
}
