import React, { useReducer } from 'react';

const App = () => {

  const initialState = 0;

  const reducer = (state, action) => {

    switch (action.type) {
      case "INCREMENT":
        return state + action.payload;

      case "DECREMENT":
        return state - action.payload;

      default:
        return state;
    }

  }

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className='flex h-[100vh] items-center justify-center'>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{state}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-success" onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>Increment</button>
            <button className="btn btn-error" onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>Decrement</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;