import React from 'react'

import { ErrorMessage, Formik, Form, Field, FieldArray} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'
import Select from 'react-select'

import logo from '../../assets/logo.png'

import './listProposals.css'

const initialValues = {
    proposals: [
      {
        name: '',
        email: '',
      },
    ],
  };

const listProposals = () => {
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
        <h1>Suas proposta</h1>
        <h2>Ordem decrescente de acordo com a criação</h2>
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
            <div className="createBox">
              <Field name="Data-de-Fim" className="write-Field" />
              <ErrorMessage
                component="span"
                name="Data-de-fim"
                className="Login-Error"
              />
            </div>
            <div className="createBox">
              <Field name="Data-de-Fim" className="write-Field" />
              <ErrorMessage
                component="span"
                name="Data-de-fim"
                className="Login-Error"
              />
            </div>
            <div className="createBox">
              <Field name="Data-de-Fim" className="write-Field" />
              <ErrorMessage
                component="span"
                name="Data-de-fim"
                className="Login-Error"
              />
            </div>
            <div className="createBox">
              <Field name="Data-de-Fim" className="write-Field" />
              <ErrorMessage
                component="span"
                name="Data-de-fim"
                className="Login-Error"
              />
            </div>

            <button className="chose-Btn" type="submit">
              SELECIONAR PROPOSTA(S)
            </button>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default listProposals
