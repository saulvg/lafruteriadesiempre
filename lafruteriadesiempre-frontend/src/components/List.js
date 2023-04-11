import { useState } from "react";

const List = ({allProducts, setAllProducts, quantity, setQuantity}) => {
    const [modal, setModal] = useState(false);
    
        
      const deleteProductList = (productId) => {
        setAllProducts(allProducts.filter(item => item.id !== productId))
        setQuantity(quantity - 1)
      }
    
    return(
        <>
        {!modal ? 
            <span id="list" onClick={()=>setModal(!modal)}>
                
                <img src="../img/lista-de-la-compra.png" alt="icono de lista de la compra"/> 
                <div id="quantity">{quantity}</div>
            </span> 
        :
            <div id="container-modal-list">
                <div id="modal-list">
                    <div id="header-list">
                        <div className="empty-list" onClick={()=>{
                            setAllProducts([])
                            setQuantity(0)
                        }}
                        >Vaciar la lista</div>
                        <div id='x-button' onClick={()=>setModal(false)}>
                            <span >X</span>
                        </div>

                    </div>
                    {allProducts.length !== 0 ? 
                        <ul>
                            {allProducts.map((product)=>{
                            return(
                                <li key={product.id} className={'list'}>
                                    <img src={`${process.env.REACT_APP_BACKEND}/uploads/${product.photo}`} alt='img'/>
                                    <div>
                                        <h3 >{product.name}</h3>
                                        <span className='yellow-button' onClick={()=>deleteProductList(product.id)}>Eliminar</span>
                                    </div>
                                </li>
                            )
                        })}  
                        </ul>
                    :
                        <p>La lista esta vacia</p>
                    
                    }
                    
                </div>
            </div>
        }
            
        </>
    )
}

export default List;
