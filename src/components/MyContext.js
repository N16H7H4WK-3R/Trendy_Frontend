import React, { createContext, useContext, useState, useEffect } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [myVariable, setMyVariable] = useState(0);
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/services/cart-data/', {
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

    return (
        <MyContext.Provider value={{ myVariable, setMyVariable }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};
