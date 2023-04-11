import './stylesPage.css'
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";
import { Error } from '../components';
import { AuthContext } from '../App';
import {ProductAdmin} from '../components';




const Product = ({allProducts, setAllProducts, quantity, setQuantity})=>{
    const {token} = useContext(AuthContext);

    const {idProduct} = useParams();
    const [error, setError] = useState('');
    const {name, setName, description, setDescription, pricekg, setPricekg, showw, setShoww, photo, setUpdate} = useGetProduct(idProduct, setError);
    
    const onAddProduct = (product) => {
        if(!(allProducts.find(item => item.id === product.id))){
            setAllProducts([...allProducts, product]);
            setQuantity(quantity+1)
        }
    }

    
    return(
        <>
        {!error ? 
            <>
            <Link to={'/productos-de-hoy'} id='back-arrow'>
                <img src="../img/atras.png" alt="flecha atras"/>
            </Link>
        
            {token ? 
                <ProductAdmin token={token} idProduct={idProduct} name={name} setName={setName} pricekg={pricekg} setPricekg={setPricekg} description={description} setDescription={setDescription} showw={showw} setShoww={setShoww} photo={photo} setError={setError} setUpdate={setUpdate}/>
                :
                
                <section id='individual-product' className='standard-page'>
                    <figure>
                        <div id='product-content'>
                            <img className="img-product" src={`${process.env.REACT_APP_BACKEND}/uploads/${photo}`} alt='img'/>
                            <span className="yellow-button" onClick={()=>onAddProduct({id:idProduct, name:name, photo:photo})}>Añadir a la lista</span>
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
            }
            </>
        :
            <Error clas={'page-error'}>{error}</Error>
        }
        </>
    )
           
            
    
    
    
}
export default Product;