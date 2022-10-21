import { useState, useEffect } from "react"
import { Error } from "./Error";


export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    // Definimos los useStates
    const [nombre, setNombre]    = useState('');
    const [propietario, setPropietario]    = useState('');
    const [email, setEmail]    = useState('');
    const [fecha, setFecha]    = useState('');
    const [sintomas, setSintomas]    = useState('');
    
    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length !== 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const generarID = () => {
        const random = Math.random().toString(36).substr(2, 9);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }
    
    // El handle submit, que se encargará de enviar la información para generar las tarjetas
    const handleSubmit = (e) => {
      e.preventDefault();

      //Validación del formulario
      if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true);
        return;
      }
      setError(false);
      
      //Construimos el objeto de paciente con los datos del formulario y lo añadimos al array de pacientes
      const objetoPaciente = {
          nombre,
          propietario,
          email,
          fecha,
          sintomas,
      }

      // Si el objeto paciente está vacío, es que estamos creando un nuevo paciente y le asignamos un ID nuevo, si no estamos editando y no le asignamos un ID nuevo
      if(paciente.id){
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
            setPacientes(pacientesActualizados);
            setPaciente({});
      }else{
            objetoPaciente.id = generarID();
            setPacientes([...pacientes, objetoPaciente]);
      }

      // Reiniciamos el formulario
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
    }

    

  return (
    <>
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

                <p className="text-xl mt-5 text-center mb-10">
                    Añade pacientes y {` `}
                    <span className="text-indigo-600 font-bold">Administralos</span>
                </p>

            <form
              className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
              onSubmit={handleSubmit}
            >
                {error && (
                    <Error>
                        Todos los campos son obligatorios.
                    </Error>
                )}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-grey-700 uppercase font-bold">Nombre Mascota*</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-grey-700 uppercase font-bold">Nombre Propietario*</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-grey-700 uppercase font-bold">Email*</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-grey-700 uppercase font-bold">Alta*</label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-grey-700 uppercase font-bold">Síntomas*</label>
                    <textarea 
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describa los síntomas de su mascota."
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>

                {/* Aviso de campos obligatorios */}
                <p className="text-sm text-gray-500 mb-5">* Campos obligatorios</p>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-all"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    </>
  )
}
