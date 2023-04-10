const ProductAdmin = ({token, idProduct, name, setName, pricekg, setPricekg, description, setDescription, showw, setShoww, photo, setError, setUpdate}) => {
    
    const saveChanges = (e) => {
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
    }

    return(
        <>
                <section id='individual-product' className='standard-page'>
                    <figure>
                        <div id='product-content'>
                            <img className="img-product" src={`${process.env.REACT_APP_BACKEND}/uploads/${photo}`} alt='img'/>
                            <span className="yellow-button">Añadir a la lista</span>
                        </div>
                        <div id='product-info'>
                            <h3 className="name-product">{name}</h3>
                            <figcaption>
                                <p>{description}</p>
                                <p id='product-price'>Precio aprox. {'->'} {pricekg} €/Kg <span>El precio puede variar un poco dependiendo del precio del mercado.</span></p>
                            </figcaption>
                        </div>
                    </figure>
                </section>


                <form onSubmit={saveChanges} id="edit-product">
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
                        <button>Actualizar</button>
                    </div> 
                </form>
                </>
    )
}

export default ProductAdmin;