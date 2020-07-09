import React from 'react';

import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpense } from './components/income-expense';
import { TransactionList } from './components/transaction-list';
import { AddTransaction } from './components/add-transaction';

import { GlobalProvider } from './context/global-state';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
