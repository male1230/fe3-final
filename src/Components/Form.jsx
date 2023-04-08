import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [contact, setContact] = useState({})
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isValidName, setIsValidName] = useState(null);

  const handleChange = event => {
    setContact({ ...contact, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    const emailRegex = /\S+@\S+\.\S+/;
    setIsValidEmail(emailRegex.test(contact.email));
    console.log(contact.name.length > 5 ? true : false);
    setIsValidName(contact.name.length > 5 ? true : false);
    console.log("el correo es valido ", isValidEmail);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Nombre completo
          <input type="text" name='name' onChange={handleChange} />
          Email
          <input type="email" name='email' onChange={handleChange} />
        </label>
        <button className="buttonform" type="submit">Enviar</button>
        {isValidEmail && isValidName
          ?
          <p>Gracias {contact.name}, te contactaremos cuanto antes vía email</p>
          :
          null
        }
        {(isValidName === false || isValidEmail === false) && contact.name !== undefined && contact.email !== undefined
          ?
          <p>Por favor verifique su información nuevamente</p>
          :
          null
        }
      </form>
    </div>
  );
};

export default Form;