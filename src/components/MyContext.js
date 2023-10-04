import React, { createContext, useContext, useState, useEffect } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [myVariable, setMyVariable] = useState(0); // Set an initial value

    useEffect(() => {
        // Fetch cart data (use HTTPS)
        fetch('http://127.0.0.1:8000/services/cart-data/', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
        })
            .then(async (response) => {
                if (!response.ok) {
                    // Handle HTTP error status
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setMyVariable(data.length);
                console.log(setMyVariable); // You may want to log data.length instead
            })
            .catch(error => {
                console.error('Error fetching data:', error.message);
            });
    }, []); // Empty dependency array means this effect runs once on component mount

    return (
        <MyContext.Provider value={{ myVariable, setMyVariable }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};
