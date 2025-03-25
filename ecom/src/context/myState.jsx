import React, { useState } from 'react';
import MyContext from './myContext';

export default function MyState({ children }) { 
    const name = "Gagan Goswami";
const [loading, setLoading] = useState(false);

    return (
        <MyContext.Provider value={{
            loading,
            setLoading}}>
            {children} 
        </MyContext.Provider>
    );
}

