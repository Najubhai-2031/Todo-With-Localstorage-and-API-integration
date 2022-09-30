import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Deshboard from './Components/Deshboard';
import AddUser from './Components/AddUser';
import MenuAndSidebar from './Components/MenuAndSidebar';
import Users from './Components/Users';


function App() {

  const [user, setUser] = useState([])
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => setUser(res.data))
  }, [])

  return (
    <React.Fragment>
      <Router>
        <MenuAndSidebar />
        <Routes>
          <Route path='/' element={<Deshboard />} />
          <Route path='/Add' element={<AddUser />} />
          <Route path='/user' element={<Users user={user} />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
