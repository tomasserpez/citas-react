import { Paciente } from "./Paciente"

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <>    
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            { pacientes && pacientes.length ? (
              <>
              <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {' '}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            {/* Creamos una tarjeta por cáda paciente en el array pacientes. */}
            {
                pacientes.map(paciente => (
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                ))
            }</>):(
              <>
              
              <h2 className="font-black text-3xl text-center">Aún no has agregado pacientes.</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                  Administra tus pacientes y citas {' '}
                  <span className="text-indigo-600 font-bold">completando el formulario.</span>
              </p>
              </>)}
        </div>
    </>
  )
}
