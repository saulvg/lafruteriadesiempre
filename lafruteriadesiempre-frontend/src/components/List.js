import { useState } from "react";


const List = () => {
    const [modal, setModal] = useState(false)
   

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
                        <li>Pedido 1</li>
                        <li>Pedido 2</li>
                        <li>Pedido 3</li>
                        <li>Pedido 4</li>
                    </ul>
                </div>
            </div>
        }
            
        </>
    )
}

export default List;