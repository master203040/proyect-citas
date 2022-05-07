import React from 'react'
import '../App.css';
import { useState } from 'react';

export const Main = () => {
    const [nombre,setNombre]=useState('');
    const [documento,setDocumento]=useState('');
    const [fechaIngreso,setFechaIngreso]=useState('');
    const [fechaSalida,setFechaSalida]=useState('');
    const [sintomas,setSintomas]=useState('');
   

    const [error,setError]=useState(false)
    const handleSubmit=(e)=>
    {e.preventDefault();
     //validacion
     if([nombre,documento,fechaIngreso,fechaSalida,sintomas].includes('')){
        console.log('hay Al Menos Un Campo Vacio ')
        setError(true)
        return;
     }else{
       setError(false)
     }

    }

  return (
      
    <div className='padreMain'>
      
        <form onSubmit={handleSubmit} className='mainForm' action="">
            <h1>Registro de citas </h1>

            {error && 
              <div>
                <p>Llenar todos los campos</p>
              </div> 
              }
            <label htmlFor="nombre">Nombre paciente</label>
            <input id='nombre' name='nombre'  onChange={(e)=>setNombre(e.target.value)} value={nombre} type="text" placeholder='Ingrese el nombre' />

            <label htmlFor="documento">Documento</label>
            <input id='documento' name='documento'  onChange={(e)=>setDocumento(e.target.value)} value={documento}  type="text" placeholder='Ingrese documento' />

            <label htmlFor="fechaIngreso">Fecha de ingreso</label>
            <input id='fechaIngreso' name='fechaIngreso' onChange={(e)=>setFechaIngreso(e.target.value)} value={fechaIngreso} type="date" placeholder='ingrese la fecha de ingreso' />

            <label htmlFor="fechaSalida">Fecha de salida</label>
            <input id='fechaSalida' name='fechaSalida'  onChange={(e)=>setFechaSalida(e.target.value)} value={fechaSalida} type="date" placeholder='Ingrese la fecha de salida' />

            <label htmlFor="">Sintomas</label>
            <textarea id="sintomas" name='sintomas'  onChange={(e)=>setSintomas(e.target.value)} value={sintomas} cols="30" rows="5" placeholder='Que sintomas presenta'/>

            <label htmlFor="">Seleccionar especialista</label>
            <select id='doctor' name='doctor' >
                <option value=""></option>
                <option value="">Jaime zatapa</option>
                <option value="">Carlos ortega</option>
                <option value="">Hervis cifuentes</option>
            </select>
              
            
            <input id="btnguardar"className='button' type="submit" value='Guardar Registro'/>
        </form>
    </div>
  )
}
export default Main;
