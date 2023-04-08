import React, {useContext} from 'react'
import { ContextGlobal } from "./utils/global.context"


const Footer = () => {

  const {theme } = useContext(ContextGlobal);

  return (
    <footer className={theme}>
      <p>Powered by</p>
      <img src='images\DH.png' alt='DH'/>
      <div className='ico'>
      <img src="images\ico-facebook.png" alt= 'facebook'/>
      <img src="images\ico-instagram.png" alt='Instagram'/>
      <img src="images\ico-whatsapp.png" alt='whatsapp'/>
      <img src="images\ico-tiktok.png" alt='Tiktok'/>
      </div>    
    </footer>
  )
}

export default Footer