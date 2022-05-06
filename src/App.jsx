import { useState } from 'react'
import './App.css'
import Modal from './Components/Modal'

function App() {
  const [isOpenModal, setIsOpenModal] = useState(true);

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  return (
    <div className="App">
      <button className='boton' onClick={openModal}>
        Modal
      </button>
      
      <Modal
        isOpen={isOpenModal}
        closeModal={closeModal}
      />
    </div>
  )
}

export default App
