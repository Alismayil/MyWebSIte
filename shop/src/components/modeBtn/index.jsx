import React, { useState } from 'react'
import './mode.css'
import useMode from '../../hook/useMode/useMode'

function Mode() {
  ;const  {changeMode,mode}=useMode()

  return (
    <button className={`modeBtn fa-solid ${mode ? "fa-sun" : "fa-moon "}`} onClick={changeMode}>  </button>
  )
}

export default Mode