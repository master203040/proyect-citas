import React from 'react';
import './Modal.css';

const Modal = ({isOpen, closeModal}) => {
    return (
      
        <div className={`modal ${isOpen && 'modal-open'}`}>
            
            <div className='modal-content'>

                <div className='data'>
                    <label className='name-section-data'>Fecha Ingreso</label>
                    <label className='name-section-data'>Fecha Salida</label>
                    <input className='info-form' type="text" />
                    <input className='info-form' type="text" />
                </div>

                <div className='data-info'>
                    <label className='name-section'>Nombre Paciente</label>
                    <input className='info-form' type="text" />
                    <label className='name-section'>Documento</label>
                    <input className='info-form' type="text" />
                    <label className='name-section'>Sintomas</label>
                    <input className='info-form' type="text" />
                    <label className='name-section'>Doctor</label>
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