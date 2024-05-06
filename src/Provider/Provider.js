import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from './Reducer'
export const globalContext = createContext()
const Provider = ({ children }) => {

    const [values, dispatch] =useReducer(reducer, initialState)
    console.log(values)
    return (
        <globalContext.Provider value={{ values, dispatch }}>
            {children}
        </globalContext.Provider>
    )
}

export default Provider;

