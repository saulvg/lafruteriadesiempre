import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../App'; 
import {Error, Loading} from "../components";


const LoginPage = () =>{
    const {token, setToken} = useContext(AuthContext);
    const navigate = useNavigate()
    
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({email, password})
            });

            const body = await res.json();

            if(res.ok) {
                setToken(body.data.token);
                setTimeout(()=>{
                    navigate('/')
                }, 3000)
            }else{
                setError(body.message);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <section id='login-page'>
            {
                !token ? (
                    <div>
                    <h3>Inicio sesion</h3>
                        <form onSubmit={login} id={'login-form'}>
                            <label>Email:
                                <input
                                    type={'mail'}
                                    id={'loginMail'}
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required={'required'}
                                    
                                />
                            </label>
                            <label>Contraseña:
                                <input
                                    type={'password'}
                                    id={'loginPassword'}
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    required={'required'}
                                    
                                />
                            </label>
                            {error ? <Error>{error}</Error> : null}
                            <button type="submit">Entrar</button>
                        </form>
                    </div>  
            ) : (
                <Loading>Cuenta iniciada con exito</Loading>
            )
            }  
        </section>
    )
}

export default LoginPage;