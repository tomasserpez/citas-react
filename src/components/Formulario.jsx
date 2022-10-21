import { useState, useEffect } from "react"


export const Formulario = () => {

    // Definimos los useStates
    const [nombre, setNombre]    = useState('');
    const [propietario, setPropietario]    = useState('');
    const [email, setEmail]    = useState('');
    const [fecha, setFecha]    = useState('');
    const [sintomas, setSintomas]    = useState('');
    
    const [error, setError] = useState(false);
    
    // El handle submit, que se encargará de enviar la información para generar las tarjetas
    const handleSubmit = (e) => {
      e.preventDefault();

      //Validación del formulario
      if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true);
        return;
      }
      setError(false);
    }

  return (
    <>
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {` `}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
              className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
              onSubmit={handleSubmit}
            >
                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                        <p className="font-bold">Hubo un error</p>
                        <p>Todos los campos son obligatorios</p>
                    </div>
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
                    value="Agregar Paciente"
                />
            </form>
        </div>
    </>
  )
}
