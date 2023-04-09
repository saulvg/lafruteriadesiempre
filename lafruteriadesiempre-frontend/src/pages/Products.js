import './stylesPage.css'
import { useContext, useState } from "react";
import useGetProducts from "../hooks/useGetProducts";
import {Error} from "../components"
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';


const Products = ({allProducts, setAllProducts, quantity, setQuantity})=> {    
    const {token} = useContext(AuthContext);
    const [error, setError] = useState('');
    const {products} = useGetProducts(setError);
    const productShoww = products.filter((product)=>product.showw===1);
 
    const onAddProduct = (product) => {
        if(!(allProducts.find(item => item.id === product.id))){
            setAllProducts([...allProducts, product]);
            setQuantity(quantity+1)
        }
    }
   
    return(
        <>
            {!error ? 
                <ul id='products-list' className='standard-page'>
                    
                {token ? 
                    <>  
                        {products.map((product)=>{

                            return(
                                
                                <li key={product.id} className={`showw${product.showw}`}>
                                    <img className='img-product' src={`${process.env.REACT_APP_BACKEND}/uploads/${product.photo}`} alt='img'/>
                                    <h3 className="name-product">{product.name}</h3>
                                    <div>
                                        <Link className='yellow-button' to={`/producto/${product.id}`}>Saber mas</Link>
                                        <span className='yellow-button'>Añadir a la lista</span>
                                    </div>
                                </li>
                            )
                        })}
                    </>
                    
                :
                    <>
                        {productShoww.map((product)=>{
                            return(
                                <li key={product.id}>
                                    <img className='img-product' src={`${process.env.REACT_APP_BACKEND}/uploads/${product.photo}`} alt='img'/>
                                    <h3 className="name-product">{product.name}</h3>
                                    <div>
                                        <Link className='yellow-button' to={`/producto/${product.id}`}>Saber mas</Link>
                                        <span className='yellow-button' onClick={()=>onAddProduct(product)}>Añadir a la lista</span>   
                                     </div>
                                </li>
                            )
                        })}

                    </>
                }
                </ul>
            : 
                <Error clas={'page-error'}>{error}</Error>}
        </>
    )
}

export default Products;