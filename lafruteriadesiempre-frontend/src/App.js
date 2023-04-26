import './App.css';

/**
 * ###########
 * ## React ##
 * ###########
 */
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import React, { useState, useContext, useEffect, Component } from 'react';


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
  QuienesSomos,
  NewProduct,
  PoliticasPrivacidad,
  AvisoLegal
} from './pages/index'

/**
 * ################
 * ## Components ##
 * ################
 */
import {
  Footer,
  Header,
  List
} from './components'


//Componente para envolver a toda la aplicacion con un contexto para que este dispnible en toda la aplicacion de manera implicita el valro de token
export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  //importamos e utilizamos el customHook de 'useLocalStorage' pasandole como parametro el nombre que queramos que tenga esto qua
  //vamos a guardar en el local storage
  const [token, setToken] = useLocalStorage('token');

  return (
    <AuthContext.Provider value={{ token, setToken}}>
      {props.children}
    </AuthContext.Provider>
  );
};


//Componente para que siempre carge arriba la web
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

 
  const [allProducts, setAllProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  //const {token} = useContext(AuthContext);


  return (
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop/>
        <Header/>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/productos-de-hoy' element={<Products allProducts={allProducts} setAllProducts={setAllProducts} quantity={quantity} setQuantity={setQuantity}/>}/>
          <Route path='/producto/:idProduct' element={<Product allProducts={allProducts} setAllProducts={setAllProducts} quantity={quantity} setQuantity={setQuantity}/>}/>
          <Route path='/haz-tu-pedido' element={<HazTuPedido/>}/>
          <Route path='/quienes-somos' element={<QuienesSomos/>}/>
          <Route path='/politicas-de-privacidad' element={<PoliticasPrivacidad/>}  />
          <Route path='/aviso-legal' element={<AvisoLegal/>}  />
          <Route path='/nuevo-producto' element={<NewProduct/>}/> 
        </Routes>
        <List allProducts={allProducts} setAllProducts={setAllProducts} quantity={quantity} setQuantity={setQuantity}/>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
