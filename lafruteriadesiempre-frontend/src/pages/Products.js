import { useState, useContext } from "react";
import useGetProducts from "../hooks/useGetProducts";
import {AuthContext} from '../App'

const Products = ()=> {    
    const {token} = useContext(AuthContext)
    const [error, setError] = useState('')

   const {products} = useGetProducts(token, setError);
   console.log('Soy productos',products, error);
   


    return(
        token ? ( 
            <h2> Products con token</h2>
        ) : (
            <ul>
                {products.map((product)=>{
                    return(
                        <li>
                            <img src={`${process.env.REACT_APP_BACKEND}/uploads/${product.photo}`} alt='img'/>
                            {product.name}
                        </li>
                    )
                })}
            </ul>
        )
    );
}

export default Products;