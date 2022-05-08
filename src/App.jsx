import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <Header />
      <Main
        users={users}
        setUsers={setUsers}
      />
    </div>
  )
}

export default App
