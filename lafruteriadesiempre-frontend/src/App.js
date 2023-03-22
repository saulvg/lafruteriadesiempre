import logo from './logo.svg';
import './App.css';
/**
 * ###########
 * ## React ##
 * ###########
 */
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import React from 'react';


/**
 * ###########
 * ## Hooks ##
 * ###########
 */
import { useLocalStorage } from './hooks/useSessionStorage';
/**
 * ###########
 * ## Pages ##
 * ###########
 */
import {
  HomePage,
  Products,
  LoginPage,
  Product,
  HazTuPedido,
} from './pages/index'

/**
 * ################
 * ## Components ##
 * ################
 */
import {
  Footer,
  Header
} from './components'


//Componente para envolver a toda la aplicacion con un contexto para que este dispnible en toda la aplicacion de manera implicita el valro de token
export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  //importamos e utilizamos el customHook de 'useLocalStorage' pasandole como parametro el nombre que queramos que tenga esto qua
  //vamos a guardar en el local storage
  const [token, setToken] = useLocalStorage('token');

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/productos-de-hoy' element={<Products/>}/>
          <Route path='/producto/:idProduct' element={<Product/>}/>
          <Route path='/haz-tu-pedido' element={<HazTuPedido/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
