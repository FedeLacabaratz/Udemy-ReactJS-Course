import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';

const Formulario = ({ crearCita }) => {

    // Crear State de citas
    const [cita, setCita] = useState({
        paciente: '',
        responsable: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // Crear State de errores
    const [error, setError] = useState(false)

    // Function que se ejecuta cada vez que el usuario escribe en un input
    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores
    const { paciente, responsable, fecha, hora, sintomas } = cita;

    // Cuando el usuario envia el formulario
    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if (paciente.trim() === '' || responsable.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 1500);
            return;
        }

        // Asignar un ID
        cita.id = uuid();

        // Crear la cita
        crearCita(cita)

        // Reiniciar el form
        setCita({
            paciente: '',
            responsable: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error" >Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={handleSubmit}
            >
                <label>Paciente</label>
                <input
                    type="text"
                    name="paciente"
                    className="u-full-width"
                    placeholder="Nombre del Paciente"
                    onChange={handleChange}
                    value={paciente}
                />
                <label>Responsable*</label>
                <input
                    type="text"
                    name="responsable"
                    className="u-full-width"
                    placeholder="Nombre del Responsable *(Si el paciente es menor)"
                    onChange={handleChange}
                    value={responsable}
                />
                <label>Fecha de la Cita</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora de la Cita</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Especifique el motivo de la cita o los síntomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;