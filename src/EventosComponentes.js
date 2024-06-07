import React from 'react'

export const EventosComponentes = () => {
  return (
    <div>EventosComponentes
        <h1>Eventos React</h1>

        {/**Cuando le doy click a algo pasa esto  */}

        /**Añadimos un valor por parametro */
        <button onClick={(queonda = 'click')=> {
            console.log('Has Hecho ',queonda.type)
        }}>Haz click aqui !</button>
    </div>
  )
}
