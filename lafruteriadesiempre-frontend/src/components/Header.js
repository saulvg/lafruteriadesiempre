import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../App'; 
import { useContext } from "react";



const Header = () =>{
    const {token, setToken} = useContext(AuthContext);
    const navigate = useNavigate()

    const signOut = () => {
        setToken('');
        navigate('/')
    }

    return(
        <header>
            <h1 className='bye'>Fruterias huesca, Fruteria Marcelo, Fruteria Barrionuevo</h1>
            <div>
                <hr className='black-line'/>
                <Link id='link-logo' to='/' style={{backgroundImage:`url(/img/logo.png)`}}></Link>
                {token ? <span onClick={signOut}>Cerrar sesion</span> : <hr className='black-line'/>}            
            </div>
        </header>
    )
}

export default Header;