import React from 'react';

export const EventosComponentes = () => {
    const manejarClick = () => {
        console.log('Has hecho click');
    };

    const manejarDobleClick = () => {
        console.log('Has hecho doble click');
    };

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
        </div>
    );
};
