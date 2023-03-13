import logo from './logo.svg';
import './App.css';
/**
 * ###########
 * ## React ##
 * ###########
 */
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

/**
 * ###########
 * ## Pages ##
 * ###########
 */
import {
  HomePage,
  Products
} from './pages/index'

function App() {
  return (
    
      <BrowserRouter>
      
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <header>
          <div>
              <hr className='black-line'/>
              <Link id='link-logo' to='/' style={{backgroundImage:"url(img/logo.png)"}}></Link>
              <hr className='black-line'/>            
          </div>
            
          
        </header>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/productos-de-hoy' element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
