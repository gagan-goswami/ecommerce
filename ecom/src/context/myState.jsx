import React from 'react';
import MyContext from './myContext';

export default function MyState({ children }) { // Fixed prop name and component name
    const name = "Gagan Goswami";

    return (
        <MyContext.Provider value={name}>
            {children} {/* Fixed case-sensitive prop reference */}
        </MyContext.Provider>
    );
}
