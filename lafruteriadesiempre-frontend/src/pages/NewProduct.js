import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { Error, Loading } from "../components";
import { useNavigate } from "react-router-dom";



const NewProduct = () => {
    const {token} = useContext(AuthContext);
    const navigate = useNavigate()


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [pricekg, setPricekg] = useState('');
    const [showw, setShoww] = useState('');
    const [photo, setPhoto] = useState('');
    const [error, setError] = useState('');
    const [done, setDone] = useState('')

    const newProduct = (e) =>{
        e.preventDefault();
        
        const upProduct = async () => {
            try {
                const data = {
                    name:name,
                    photo:photo,
                    pricekg:pricekg,
                    description:description,
                    showw:showw
                }
                const payload = new FormData();
                //Object.entries devuelve una matriz de pares [[Name, elNombre], [Name, elNombre], [], ...]
                //Y en cada vuelta del bucle añadimos new Format()
                for (const [key, value] of Object.entries(data)) {
                  payload.append(key, value);
                }
                const res = await fetch(`${process.env.REACT_APP_BACKEND}/products/new-product`,{
                    method:'POST',
                    headers:{
                        Authorization: token,
                        
                    },
                    body:payload
                })
                const body = await res.json();

                if(res.ok){
                    setDone(body.message)
                    setTimeout(()=>{
                        navigate('/productos-de-hoy')
                    }, 3000)
                }else{
                    setError(body.message)
                }
            } catch (error) {
                console.error(error);
            }
        }
        upProduct();
    }
   

    return(
    <>
        
        {token ? 
            <>
            {!done ? 

                <section id='new-product' className="standard-page">
                    <form onSubmit={newProduct} id="edit-product">
                        <label>
                            <span>Nombre:</span>
                            <input 
                                type={'text'}
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            <span>Descripcion:</span>
                            <textarea 
                                type={'text'}
                                cols={'40'}
                                rows={'4'} 
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                        <span>Precio aprox €/Kg</span>
                            <input 
                                type={'text'}
                                value={pricekg}
                                onChange={(e)=>setPricekg(e.target.value)}
                                required
                            /> 

                        </label>   
                        <label>
                            <span>Imagen</span>
                            <input
                                type={'file'}
                                onChange={(e)=>setPhoto(e.target.files[0])}
                                required
                            />
                        </label>
                        <label>
                            <span>Visible</span>
                            <select 
                            defaultValue={'selecciona'}
                            onChange={(e)=>setShoww(e.target.value)}>   
                                <option value='selecciona'>Elige</option>
                                <option value='1'>Si</option>
                                <option value='0'>No</option>

                            </select>
                        </label>
                        <div>
                            <button>Añadir</button>
                        </div> 
                    </form>
                    {error ? <Error>{error}</Error> : null}
                </section>
            :
            
                <Loading>{done}</Loading>
            }
            </>
            

        :
            
            <Error>Invalid token</Error>
        }

    </>
        
        
                
                
    )

}

export default NewProduct;