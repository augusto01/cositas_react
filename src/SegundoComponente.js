import React from 'react'

export const SegundoComponente = () => {
    //const libros = ['Harry Potter' , 'Game of thrones', 'Clean Code'];
    const libros = ['libro1', 'libro2'];
    if (libros.length > 0){
        return (
            <div className='SegundoComponente'>
                <ul>
                   {
                    libros.map((libro,i) => {
                        return <li key={i}>{libro}</li>
                    })
                   }
                </ul>
                
            </div>
          )

    }else{
        return (<h1>Array Vacio!</h1>)
    }

 
}
