const ListadoEstudiantes = ({estudiantes}) => {
    console.log(estudiantes)
  return (
    <section className="cards">
      {
        estudiantes.map((estudiante)=>(
            <section className="card">
                <p>Nombre: {estudiante.nombre}</p>
                <p>Edad: {estudiante.edad}</p>
                <p>Nota: {estudiante.nota}</p>
            </section>
        ))
      }
    </section>
  )
}

export default ListadoEstudiantes  
