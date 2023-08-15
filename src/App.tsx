import * as React from 'react';
import IconMail from './assets/IconMail';
import './style.scss';

export default function App() {
  return (
    <div className="container">
      <form action="" className="form">
      <h1 className="form-title">Create new Account</h1>
        <div className="form-field">
          <input type="text" id="formEmail" placeholder="Input E-mail"/>
          <label htmlFor="formEmail">
            <IconMail icon="email"/>
          </label>
        </div>
        <div className="form-field">
          <input type="password" id="formPass" placeholder="Input Password"/>
          <label htmlFor="formPass">
          <IconMail icon="password"/>
          </label>
        </div>
        <div className="form-field">
          <input type="password" id="formPassConfirm" placeholder="Confirm password"/>
          <label htmlFor="formPassConfirm">
          <IconMail icon="password"/>
          </label>
        </div>
        <div className="form-field">
          <button className="cta">Create account</button>
        </div>
      </form>
    </div>
  );
}
