import React, { createContext, useReducer } from 'react';
import AppReducer from './app-reducer';

//init state
const initState = {
    transactions: [

    ]
}

//create context

export const GlobalContext = createContext(initState);

//provider component 

export const GlobalProvider = ({ children }) => {
    //need to use dispatch when we use a reducer function
    const [state, dispatch] = useReducer(AppReducer, initState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}</GlobalContext.Provider>)
}