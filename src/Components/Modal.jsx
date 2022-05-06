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
                    <button onClick={closeModal}>Cancelar</button>
                    <button>Editar</button>
                    <button>Enviar</button>
                </div>
            </div>
        </div>
      
 
  )
}

export default Modal