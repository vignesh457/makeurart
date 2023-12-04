import React, { useState } from 'react'
import css from './Navinner.module.css'
import {Link} from "react-router-dom";

const Navinner = React.memo(() => {
  const [active, setactive] = useState('gallery');
  return (
    <div className={css.main}>
      <Link to="./" onClick={()=>setactive('gallery')}>
        <button className={(active==='gallery')?css.active:css.notActive}>Gallery</button>
      </Link>
      <Link to="./contact" onClick={()=>setactive('contact')}>
        <button className={(active==='contact')?css.active:css.notActive}>Contact</button>
      </Link>
    </div>
  )
})

export default Navinner