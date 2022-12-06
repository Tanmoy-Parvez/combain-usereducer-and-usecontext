import React, { useContext } from 'react';
import { MealContext } from '../../context/MealProvider/MealProvider';


const MealDB = () => {
    const user = useContext(MealContext)
    console.log(user);
    return (
        <div>

        </div>
    );
};

export default MealDB;