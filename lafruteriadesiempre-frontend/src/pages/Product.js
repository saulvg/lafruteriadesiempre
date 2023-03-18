import './stylesPage.css'
import { useState } from "react";
import { useParams } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";
import { Error } from '../components';



const Product = ()=>{

    const {idProduct} = useParams();
    const [error, setError] = useState('');
    const {product} = useGetProduct(idProduct, setError);
    
    return(
        <>
        {!error ? 
            <section id='individual-product' className='standard-page'>
                <figure>
                    <div id='product-content'>
                        <img className="img-product" src={`${process.env.REACT_APP_BACKEND}/uploads/${product[0]?.photo}`} alt='img'/>
                        <span className="yellow-button">Añadir a la lista</span>
                    </div>
                    <div id='product-info'>
                        <h3 className="name-product">{product[0]?.name}</h3>
                        <figcaption>
                            <p>{product[0]?.description}</p>
                            <p id='product-price'>Precio aprox. {'->'} {product[0]?.pricekg} €/Kg <span>El precio puede variar un poco dependiendo del precio del mercado.</span></p>
                        </figcaption>
                    </div>
                </figure>
            </section>
        :
            <Error clas={'page-error'}>{error}</Error>
        }
        </>
    )
           
            
    
    
    
}
export default Product;