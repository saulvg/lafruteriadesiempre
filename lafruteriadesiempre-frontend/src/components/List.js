import { useState, useEffect } from "react";
import useList from "../hooks/useList";


const List = () => {
    const [modal, setModal] = useState(false);
    
   
    
    return(
        <>
        {!modal ? 
            <span id="list" onClick={()=>setModal(!modal)}>
                <img src="./img/lista-de-la-compra.png" alt="img"/>
            </span> 
        :
            <div id="container-modal-list">
                <div id="modal-list">
                    <div onClick={()=>setModal(false)}>
                        <span >X</span>
                    </div>
                    
                    <ul>
                        {/* {x.map((product)=>{
                            return(
                                <li key={product.id} className={'list'}>
                                    <img src={`${product.img}`} alt='img'/>
                                    <div>
                                        <h3 >{product.name}</h3>
                                        <span className='yellow-button'>Eliminar</span>
                                    </div>
                                </li>
                            )
                        })}   */}
                        
                    </ul>
                    
                </div>
            </div>
        }
            
        </>
    )
}

export default List;