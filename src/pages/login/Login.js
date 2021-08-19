import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import logo from '../../assets/logo.png'

import './Login.css'

const Login = () => {
  const handleSubmit = values => {
    axios.post('http://localhost:8080/v1/api/auth', values).then(resp => {
      const { data } = resp
      if (data) {
        localStorage.setItem('app-token', data)
        history.push('/')
      }
    })
  }

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })
  return (
    <>
      <header id="header">
        <img src={logo} alt="Logo do site" />
      </header>
      <div className="Body">
        <h1>Entrar</h1>
        <h2>Email</h2>
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className="Login">
            <div className="Login-Group">
              <Field name="email" className="Login-Field" />
              <ErrorMessage
                component="span"
                name="email"
                className="Login-Error"
              />
            </div>
            <h2>Senha</h2>
            <div className="Login-Group">
              <Field name="password" className="Login-Field" />
              <ErrorMessage
                component="span"
                name="password"
                className="Login-Error"
              />
            </div>
            <h3>Primeira vez! Faça o seu registro.</h3>
            <button className="Login-Btn" type="submit">
              Register
            </button>
            <button className="Login-Btn" type="submit">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default Login
