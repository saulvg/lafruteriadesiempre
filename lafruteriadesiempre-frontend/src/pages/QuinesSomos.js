import Maps from "../components/Mapa";

const QuienesSomos = () =>{
    return(
        <section id='quienes-somos' className='standard-page'>
            <div id="content-quienes-somos">
                <p>Tu “fruteria de siempre” esta formada por dos pequeñas fruterias de Huesca.</p>
                <div className="fruit-store">
                    <figure>
                        <figcaption>Fruteria Barrionuevo</figcaption>
                        <img src="/img/fBarrionuevo.png" alt="img"/>
                    </figure>
                    <figure>
                        <figcaption>Fruteria Marcelo</figcaption>
                        <img src="/img/fMarcelo.jpg" alt="img"/>
                    </figure>
                </div>
                <p>
                    Que desde el año 1998 se esfuerzan en tener el mejor y mas fresco producto posible para que sus clientes puedan disfrutar del sabor y la experiencia de comer frutas, verduras y hortalizas. 
                </p>
                <hr className='separator'/>
                {/* <Maps/> */}
                <hr className='separator'/>
            </div>
        </section>
    )
}

export default QuienesSomos;