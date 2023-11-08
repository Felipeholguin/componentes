import { estudiantes } from "./Components/Config/dataBase" 
import ListadoEstudiantes from "./Components/layouts/ListadoEstudiantes"

function App() {
  //console.log(estudiantes)
  return (
    <section>
      <ListadoEstudiantes estudiantes={estudiantes}/>
    </section>
  )
}

export default App
