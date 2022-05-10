import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  return (
    <div className="App">
      <Header />
      <Main
        users={users}
        setUsers={setUsers}
        setIsOpenModal={setIsOpenModal}
      />
      <Modal 
      users={users}
      isOpen={isOpenModal}
      closeModal={closeModal}/>

    </div>
  )
}

export default App
