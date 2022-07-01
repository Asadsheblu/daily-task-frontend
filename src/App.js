import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import {
  
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Todo from './components/Todo';
import Calender from './components/Calender';
import Footer from './components/Footer';
import Edittask from './components/Edittask';
import Notfound from './components/Notfound';
function App() {
  
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/todo' element={<Todo />}></Route>
          <Route path='/calendar' element={<Calender />}></Route>
          <Route path='/todo/:id' element={<Edittask />}></Route>
          <Route path='*' element={<Notfound />}></Route>
          

        </Routes>
        <Footer />
   </div>
  )
}

export default App;
