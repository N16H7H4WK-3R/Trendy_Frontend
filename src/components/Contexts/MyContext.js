// MyContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const MyContext = createContext();

const API_URL = 'http://143.198.97.194';

export const Data = ({ children }) => {
    const [myVariable, setMyVariable] = useState(0);
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/services/cart-data/`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setMyVariable(data.length);
            } catch (error) {
                console.error('Error:', error.message);
                return;
            }
        };

        fetchData();
    }, [token]);

    const contextValue = { myVariable, setMyVariable, API_URL };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

export const useDataContext = () => {
    return useContext(MyContext);
};