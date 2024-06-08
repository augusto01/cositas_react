import React from 'react';

export const EventosComponentes = () => {
    const manejarClick = () => {
        console.log('Has hecho click');
    };

    const manejarDobleClick = () => {
        console.log('Has hecho doble click');
    };

    const hasEntrado = () => {
        window.alert( 'Has entrado al boton!')
    }
    
    const hasSalido = () => {
        window.alert( 'Has salido del boton !')
    }
    
    return (
        <div>
            <h1>Eventos en React</h1>

            {/* Evento click */}
            <button onClick={manejarClick}>
                ¡Haz click aquí!
            </button>

            {/* Evento doble click */}
            <button onDoubleClick={manejarDobleClick}>
                ¡Haz doble click aquí!
            </button>
            <div> 
                 {/**Evento mouse enter y mouse leaving  */}
                <button id='caja' onMouseEnter={hasEntrado} onMouseLeave = {hasSalido}>     
                    Eventos nuevos   
                </button> 
            </div>         
        </div>
        
    );
};
