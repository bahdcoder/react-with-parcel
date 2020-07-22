import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './index.css'

const App = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
      console.log('________FORM_DATA______', data)
  }

  console.log('I AM RENDERING !!!!!', errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          name='email'
          ref={register({
            required: true
          })}
          className={`form-control ${errors.email ? 'is-invalid': ''}`}
        />
        {errors.email ? <div className="invalid-feedback">The email is required.</div> : null}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name='password'
          ref={register({
            required: true,
          })}
          className={`form-control ${errors.password ? 'is-invalid': ''}`}
        />
        {errors.password ? <div className="invalid-feedback">The password is required.</div> : null}
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="rememberMe"
        />
        <label className="form-check-label" htmlFor="rememberMe">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-block btn-primary">
        Login To your Account
      </button>
    </form>
  );
};

ReactDOM.render(
  <div className="wrapper">
    <div className="app-wrapper">
        <App />
    </div>
  </div>,
  document.querySelector("#root")
);
