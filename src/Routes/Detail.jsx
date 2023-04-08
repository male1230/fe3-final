import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, [id]);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <div className='detail'>
        <h1 className='dentist'>Detalle del dentista </h1>
        {console.log(data)}
        <h3> Nombre: {data.name}</h3>
        <p>Email: {data.email}</p>
        <p>Telefono: {data.phone}</p>
        <p>Sitio web: {data.website}</p>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </>
  )
}

export default Detail