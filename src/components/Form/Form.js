import React, { useReducer } from 'react';
import { initialState, reducer } from './FormStates';


const SubmissionForm = () => {



    const [state, dispatch] = useReducer(reducer, initialState);



    const handleFormSubmit = (e) => {
        console.log(state);
        e.preventDefault();
    }

    return (
        <div className="hero min-h-screen bg-base-200 w-[100%]">

            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleFormSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} type="text" name="name" placeholder="name" className="input input-bordered" />
                        <label className="label mt-3">
                            <span className="label-text">Email</span>
                        </label>
                        <input onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} type="email" name="email" placeholder="email" className="input input-bordered" />
                        <label className="label mt-3">
                            <span className="label-text">Gender</span>
                        </label>
                        <span className='flex' onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}>
                            <input type="radio" name="gender" className="radio radio-primary mr-2" value="male" />
                            Male
                            <input type="radio" name="gender" className="radio radio-primary mr-2 ml-5" value="female" />
                            Female
                            <input type="radio" name="gender" className="radio radio-primary mr-2 ml-5" value="other" />
                            Other
                        </span>
                        <label className="label mt-3">
                            <span className="label-text">Education</span>
                        </label>

                        <select onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} className="select select-bordered" name="education">
                            <option>HSC</option>
                            <option>SSC</option>
                        </select>

                        <label className="label cursor-pointer mt-4 justify-start">
                            <input onClick={() => dispatch({ type: "TOGGLE" })} name="term" type="checkbox" className="checkbox checkbox-primary mr-2" />
                            <span className="label-text">I agree to terms and conditions</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button disabled={!state.term} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default SubmissionForm;