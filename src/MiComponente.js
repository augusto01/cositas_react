//importar modulos de react o dependencias 


// definicion del componente 
function MiComponente(){
    
    let user ={
        nombre : 'Augusto',
        web : 'almironaugusto.com',
    }
    return (

    <div className="mi-componente">
        <hr></hr>
        <h2>Componente Creado</h2>
        <h3>Datos del usuario: {user.nombre}, pagina: {user.web}</h3>
        <li>React</li>
        <li>Angular</li>
        <li>Vue Js</li>
        <p>Este es mi primer componente</p>
    </div>
    )
    

    
}


//export del componente 

export default MiComponente;