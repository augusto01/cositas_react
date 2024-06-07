import React from 'react';
import PropTypes from 'prop-types';


export const TercerComponente = ({nombre, web, datos_usuario}) => {
  return (
        <div>
                <h1>Comunicacion entre Componentes</h1>
                <h1>Datos del usuario</h1>
                <h2>Nombre: {nombre}</h2>
                <h2>pagina: {web}</h2>
                <h2>peso: {datos_usuario.peso}</h2>
                <h2></h2>
        </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string, 
    pagina: PropTypes.string,
    

}


