import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
    tables: {}, // This will hold the table states, keyed by tableId
};

// Create context
export const GlobalStateContext = createContext(initialState);

// Reducer
const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_TABLES':
            return {
                ...state,
                tables: action.payload,
            };
        case 'UPDATE_TABLE_STATUS':
            return {
                ...state,
                tables: {
                    ...state.tables,
                    [action.payload.tableId]: {
                        ...state.tables[action.payload.tableId],
                        status: action.payload.status,
                    },
                },
            };
        default:
            return state;
    }
};

// Global state provider
export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    );
};
