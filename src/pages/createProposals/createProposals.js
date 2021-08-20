import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'
import Select from 'react-select'

import logo from '../../assets/logo.png'

import './createProposals.css'

const createProposals = () => {
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

  const fonte = [
    { value: 'fonte', label: 'Convencional'},
    { value: 'fonte', label: 'Renovável'},
  ]

  const submercado = [
    { value: 'submercado', label: 'Norte'},
    { value: 'submercado', label: 'Nordeste'},
    { value: 'submercado', label: 'Sul'},
    { value: 'submercado', label: 'Suldeste'},
    { value: 'submercado', label: 'Nordeste'}
  ]

  const carga = [
    { value: 'carga', label: '1000 KWh'},
    { value: 'carga', label: '2000 KWh'},
  ]

  return (
    <>
      <header id="header">
        <img src={logo} alt="Logo do site" />
      </header>

      <div className="body">
        <h1>Crie sua proposta</h1>
        <h2>Data de início:</h2>
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className="createProposals">
            <div className="createBox">
              <Field name="Data de início" className="write-Field" />
              <ErrorMessage
                component="span"
                name="Data de início"
                className="Date-Error"
              />
            </div>
            <h2>Data de fim:</h2>
            <div className="createBox">
              <Field name="password" className="write-Field" />
              <ErrorMessage
                component="span"
                name="password"
                className="Login-Error"
              />
            </div>
            <h3>Empresa:</h3>
            <div className="createBox">
              <Field name="password" className="write-Field" />
              <ErrorMessage
                component="span"
                name="password"
                className="Login-Error"
              />
            </div>
            <h4>Fonte de energia:</h4>
            <div className="createBox">
              <Select options={fonte} className="write-Field"/>
              <ErrorMessage
                component="span"
                name="password"
                className="Login-Error"
              />
            </div>
            <h5>Sub-mercado:</h5>
            <div className="createBox">
            <Select options={submercado} className="write-Field"/>
              <ErrorMessage
                component="span"
                name="password"
                className="Login-Error"
              />
            </div>
            <h6>Cargas:</h6>
            <div className="createBox">
            <Select options={carga} className="write-Field"/>
              <ErrorMessage
                component="span"
                name="password"
                className="Login-Error"
              />
            </div>

            <button className="create-Btn" type="submit">
              CRIAR PROPOSTA
            </button>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default createProposals
