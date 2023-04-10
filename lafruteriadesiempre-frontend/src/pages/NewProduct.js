import { useState } from "react";


const NewProduct = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [pricekg, setPricekg] = useState('');
    const [update, setUpdate] = useState('');
    const [showw, setShoww] = useState('')
    const [photo, setPhoto] = useState('');

    const newProduct = (e) =>{
        e.preventDefault();
        console.log('chi');
    }
    /* const saveChanges = (e) => {
        e.preventDefault();
        setUpdate('')
        const save = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND}/products/edit-product/${idProduct}`, {
                    method:'PUT',
                    headers:{
                        Authorization: token, 
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({
                        "name":`${name}`,
                        "pricekg":`${pricekg}`,
                        "description":`${description}`,
                        "showw":`${showw}`
                    })
                })
                const body = await res.json()
                
                if (res.ok){
                    setUpdate(body.message)
                }else{
                    setError(body.message)
                }
                
            } catch (error) {
                console.error(error);
            }
        }
        save();
    } */

    return(
        
        <section id='new-product' className="standard-page">
            <form onSubmit={newProduct} id="edit-product">
                <label>
                    <span>Nombre:</span>
                    <input 
                        type={'text'}
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
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
                    />
                </label>
                <label>
                <span>Precio aprox €/Kg</span>
                    <input 
                        type={'text'}
                        value={pricekg}
                        onChange={(e)=>setPricekg(e.target.value)}
                    /> 

                </label>   
                <label>
                    <span>Visible {showw ? 'Si' : 'No'}</span>
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
        </section>
                
                
    )

}

export default NewProduct;