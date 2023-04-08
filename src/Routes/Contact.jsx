import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='form'>
      <h2>¿Quiere saber mas?</h2>
      <p>Envienos su consulta y le contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact