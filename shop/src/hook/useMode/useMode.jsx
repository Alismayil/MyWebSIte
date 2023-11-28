import React, { useEffect, useState } from 'react'

function useMode() {
    const [mode, setMode] = useState(localStorage.getItem("mode") ? JSON.parse(localStorage.getItem("mode")) : false )
    useEffect(() => {
       localStorage.setItem('mode', JSON.stringify(mode))
       document.body.classList.toggle('dark', mode)
    }, [mode])
    

    function changeMode() {
      document.body.classList.toggle('dark')
      setMode(!mode)
    }

  return {changeMode,mode}
}

export default useMode