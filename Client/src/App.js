import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false)

   const location = useLocation()
   const navigate = useNavigate()

   const email = 'daniel@gmail.com'
   const password = '123asd'

   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAccess(true)
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])


   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(response => response.data)
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== parseInt(id))
      setCharacters(characterFiltered)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} />
         }

         <Routes >
            <Route path='/' element={<Form login={login} />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
