import React from 'react';

const App = () => {
  return (
    <div className='flex h-[100vh] items-center justify-center'>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">0</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-success">Increment</button>
            <button className="btn btn-error">Decrement</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;