import React from 'react'
import '../App.css';

export const Main = () => {
  
  return (

    <div className='padreMain'>
        <form className='mainForm' action="">
            <h1>Registro de citas </h1>

            <label htmlFor="nombre">Nombre paciente</label>
            <input id='nombre' type="text" placeholder='Ingrese el nombre' />

            <label htmlFor="documento">Documento</label>
            <input id='documento'  type="text" placeholder='Ingrese documento' />

            <label htmlFor="fechaIngreso">Fecha de ingreso</label>
            <input id='fechaIngreso'  type="date" placeholder='ingrese la fecha de ingreso' />

            <label htmlFor="fechaSalida">Fecha de salida</label>
            <input id='fechaSalida'  type="date" placeholder='Ingrese la fecha de salida' />

            <label htmlFor="">Sintomas</label>
            <textarea name="" id="sintomas" cols="30" rows="5" placeholder='Que sintomas presenta'></textarea>

            <label htmlFor="">Seleccionar especialista</label>
            <select name="" id="doctor">
                <option  value=""></option>
                <option value="">Jaime zatapa</option>
                <option value="">Carlos ortega</option>
                <option value="">Hervis cifuentes</option>
            </select>

            <input className='button' type="button" value='Guardar Registro' />
        </form>
    </div>
  )
}
export default Main;