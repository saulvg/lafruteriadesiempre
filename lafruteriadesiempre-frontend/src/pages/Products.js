import './stylesPage.css'
import { useState } from "react";
import useGetProducts from "../hooks/useGetProducts";
import {Error} from "../components"
import { Link } from 'react-router-dom';

const Products = ()=> {    
    const [error, setError] = useState('')

   const {products} = useGetProducts(setError);
   


    return(
        <>
        {!error ? 
            <ul id='products-list'>
                {products.map((product)=>{
                    return(
                        <li key={product.id}>
                            <img src={`${process.env.REACT_APP_BACKEND}/uploads/${product.photo}`} alt='img'/>
                            <h3>{product.name}</h3>
                            <div>
                                <Link to={`/producto/${product.id}`}>Saber mas</Link>
                                <Link to={"/"}>Añadir a la lista</Link>
                            </div>
                        </li>
                    )
                })}
            </ul> 
            : 
            <Error clas={'page-error'}>{error}</Error>
        }
        </>
            
        );
    
}

export default Products;