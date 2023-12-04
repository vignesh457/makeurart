import React from 'react'
import css from './Loader.module.css'

function Loader() {
  return (
    <div className={css.main}>
        <span className={css.loader}></span>
    </div>
)}

export default Loader