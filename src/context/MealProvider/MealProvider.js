import React, { createContext } from 'react';
export const MealContext = createContext();

const MealProvider = ({ children }) => {




    const user = {
        name: "Tanmoy"
    }
    return (
        <MealContext.Provider value={user}>
            {children}
        </MealContext.Provider>
    );
};

export default MealProvider;