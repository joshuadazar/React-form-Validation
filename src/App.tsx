import * as React from 'react';
import IconMail from './assets/IconMail';
import { useState } from 'react';
import './style.scss';

export default function App() {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const cta = document.querySelector('.cta');
  const validateFields = (e) => {
    const form = document.forms['login'];
    e.preventDefault();

    console.log(form.elements.password, 'miau');

    e.target.name == 'email' && setEmailField(e.target.value);
    e.target.name == 'password1' && setPasswordField(e.target.value);
    if (validatePassword(e.target)) {
      setPasswordField(e.target.value);
      cta.removeAttribute('disabled');
    } else {
      form.elements.btn.setAttribute('disabled', true);
      form.elements.email.value = 'miaii';
    }
  };

  const validatePassword = (e) => {
    if (e.name === 'password2' && e.value === passwordField) {
      return true;
    }
  };

  return (
    <div className="container">
      <h1 className="form-title">
        User: {emailField} pass:{passwordField}
      </h1>
      <form name="login" className="form">
        <div className="form-field">
          <input
            type="text"
            name="email"
            id="formEmail"
            placeholder="Input E-mail"
            onChange={validateFields}
          />
          <label htmlFor="formEmail">
            <IconMail icon="email" />
          </label>
        </div>
        <div className="form-field">
          <input
            type="password"
            name="password1"
            id="formPass"
            placeholder="Input Password"
            onChange={validateFields}
          />
          <label htmlFor="formPass">
            <IconMail icon="password" />
          </label>
        </div>
        <div className="form-field">
          <input
            type="password"
            name="password2"
            id="formPassConfirm"
            placeholder="Confirm password"
            onChange={validateFields}
          />
          <label htmlFor="formPassConfirm">
            <IconMail icon="password" />
          </label>
        </div>
        <div className="form-field">
          <button name="btn" className="cta" disabled>
            Create account
          </button>
        </div>
      </form>
    </div>
  );
}
