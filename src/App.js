import {Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as authService from './services/AuthService.js';

import Header from "./components/Header/Header.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Login from "./components/Login/Login.js";
import Register from './components/Register/Register.js';
import Create from './components/Create/Create.js';
import Edit from './components/Edit/Edit.js';
import MyPets from './components/MyPets/MyPets.js';


function App() {
  const [userInfo, setUserInfo] = useState({isAuthenticated: false, email: ''});

  useEffect(()=>{
    let userInfo = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(userInfo),
      email: userInfo
    });

  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      email: username
    });
  };

  return (
    <div>
      <div id="container">
        
        <Header {...userInfo}/>       
        
        <main id="site-content">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login onLogin={onLogin}/>}/>
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='/my-pets' element={<MyPets />} />
          </Routes>
        </main>       
        

        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
