export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    // Formateamos la fecha a Día del Mes, Año
    const fecha = new Date(paciente.fecha);
    // Obtener el nombre del mes
    const mes = fecha.toLocaleString('es-ES', { month: 'long' });
    const fechaFormateada = `${fecha.getDate()} de ${mes} ${fecha.getFullYear()}`;

    const estasSeguro = () => {
        if (window.confirm('¿Estás seguro de eliminar este paciente?')) {
            eliminarPaciente(paciente.id);
        }
    }
  return (
    <>
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-grey-700 uppercase">
                Nombre: {' '}
                <span className="font-normal normal-case">{paciente.nombre}</span>
            </p>


            <p className="font-bold mb-3 text-grey-700 uppercase">
                Propietario: {' '}
                <span className="font-normal normal-case">{paciente.propietario}</span>
            </p>


            <p className="font-bold mb-3 text-grey-700 uppercase">
                Email: {' '}
                <span className="font-normal normal-case">{paciente.email}</span>
            </p>


            <p className="font-bold mb-3 text-grey-700 uppercase">
                Fecha Alta: {' '}
                <span className="font-normal normal-case">{fechaFormateada}</span>
            </p>


            <p className="font-bold mb-3 text-grey-700 uppercase">
                Síntomas: {' '}
                <span className="font-normal normal-case">{paciente.sintomas}</span>
            </p>

            {/* Añadimos boton de Editar y de Eliminar */}
            <div className="flex justify-between mt-10">
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
                    type="button"
                    onClick={estasSeguro}
                >
                    Eliminar
                </button>

                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded-lg"
                    type="button"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
            </div>
        </div>
    </>
  )
}
