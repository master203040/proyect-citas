import React from 'react'
import '../App.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DOCTORES } from '../constans'

export const Main = ({ users, setUsers }) => {

  const { register, handleSubmit, formState: { errors }, reset, trigger } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setUsers([...users, data]);
    reset();
  }


  return (

    <div className='padreMain'>

      <form onSubmit={handleSubmit(onSubmit)} className='mainForm' action="">
        <h1>Registro de citas </h1>


        <label htmlFor="nombre">Nombre paciente</label>
        <input className={`form-input ${errors.nombre && "invalid"} `} id='nombre' name='nombre' type="text" placeholder='Ingrese el nombre'
          {...register("nombre", {
            required: "nombre es requerido", pattern: {
              value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, message:
                "no se permiten numeros, ni caracteres especiales",
            }
          })}
          onKeyUp={() => {
            trigger("nombre");
          }} />
        {errors.nombre && (<small>{errors.nombre.message}</small>)}

        <label htmlFor="documento">Documento</label>
        <input className={`form-input ${errors.documento && "invalid"} `} id='documento' name='documento' type="text" placeholder='Ingrese documento'
          {...register("documento", {
            required: "documento es requerido",
            pattern: {
              value: /^[0-9]*$/
              , message: "solo se permiten numeros",
            }
          })}
          onKeyUp={() => {
            trigger("documento");
          }} />
        {errors.documento && (<small>{errors.documento.message}</small>)}

        <label htmlFor="fechaIngreso">Fecha de ingreso</label>
        <input className={`form-input ${errors.fechaIngreso && "invalid"} `} id="fechaIngreso" name="fechaIngreso" type="date" placeholder="ingrese la fecha de ingreso"
          {...register("fechaIngreso", { required: "fecha ingreso es requerido" })}
          onKeyUp={() => {
            trigger("fechaIngreso");
          }} />
        {errors.fechaIngreso && (<small>{errors.fechaIngreso.message}</small>)}

        <label htmlFor="fechaSalida">Fecha de salida</label>
        <input className={`form-input ${errors.fechaSalida && "invalid"} `} id="fechaSalida" name="fechaSalida" type="date" placeholder="Ingrese la fecha de salida"
          {...register("fechaSalida", { required: "fecha de salida es requerida" })}
          onKeyUp={() => {
            trigger("fechaSalida");
          }} />
        {errors.fechaSalida && (<small>{errors.fechaSalida.message}</small>)}

        <label htmlFor="">Sintomas</label>
        <textarea className={`form-input ${errors.sintomas && "invalid"} `} id="sintomas" name="sintomas" cols="30" rows="5" placeholder='Que sintomas presenta'
          {...register("sintomas", {
            required: "campo de sintomas requerido", minLength:
              { value: 10, message: "se requieren minimo 10 caracteres", },
            maxLength: { value: 150, message: "solo se permiten 100 caracteres", }
          })}
          onKeyUp={() => {
            trigger("sintomas");
          }} />
        {errors.sintomas && (<small>{errors.sintomas.message}</small>)}

        <label htmlFor="">Seleccionar especialista</label>
        <select className={`form-input ${errors.doctor && "invalid"} `} id='doctor' name='doctor'
          {...register("doctor", { required: "registre doctor" })}
          onKeyUp={() => {
            trigger("doctor");
          }}  >
          <option value="">        ---seleccione especialista---</option>
          {DOCTORES.map(doctor => (
            <option
              key={doctor.id}
              value={doctor.nombre}>
              {doctor.nombre}
            </option>
          ))}
        </select>
        {errors.doctor && (<small>{errors.doctor.message}</small>)}


        <input id="btnguardar" className='button' type="submit" value='Guardar Registro' />
      </form>
    </div>
  )
}
export default Main;
