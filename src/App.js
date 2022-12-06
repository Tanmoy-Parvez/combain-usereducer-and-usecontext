import React from 'react';
import Counter from './components/Counter/Counter';
import SubmissionForm from './components/Form/Form';
import MealDB from './components/MealDB/MealDB';

const App = () => {
  return (
    <>
      <Counter />
      <SubmissionForm />
      <MealDB />
    </>
  );
};

export default App;