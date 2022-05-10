import React from 'react'
import '../estilos/Modal.css'

const Modal = ({users,isOpen,closeModal}) => {
    const {nombre,documento,fechaIngreso,fechaSalida,sintomas,doctor}=users;
  return (
         <div className={`modal ${isOpen && 'modal-open'}`}>
            
            <div className='modal-content'>

                <div className='data'>
                    <label className='name-section-data'>{`Fecha Ingreso: ${fechaIngreso}`}</label>
                    <label className='name-section-data'>{`Fecha Salida: ${fechaSalida}`}</label>
                    <input className='info-form' type="text" />
                    <input className='info-form' type="text" />
                </div>

                <div className='data-info'>
                    <label className='name-section'>{`Nombre Paciente: ${nombre}`}</label>
                    <input className='info-form' type="text" />
                    <label className='name-section'>{`Documento: ${documento}`}</label>
                    <input className='info-form' type="text" />
                    <label className='name-section'>{`Sintomas: ${sintomas}`}</label>
                    <input className='info-form' type="text" />
                    <label className='name-section'>{`Doctor: ${doctor}`}</label>
                    <input className='info-form' type="text" />
                </div>

                <div className='buttons-modal'>
                    <a className='button-modal' onClick={closeModal}>Cancelar</a>
                    <a className='button-modal' >Editar</a>
                    <a className='button-modal' type='submit'>Enviar</a>
                </div>
            </div>
        </div>
  )
}

export default Modal