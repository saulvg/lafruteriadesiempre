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
                <Maps/>
                <hr className='separator'/>
                <p>
                    Queremos seguir formando parte de vuestra alimentacion<br/> y por eso estamos aqui.
                </p>
                <div id="timetable">
                    <p>Horario y Telefono</p>
                    <div>
                        <div>
                            <p>
                                Barrio Nuevo: L - V {'->'}   8:30 / 14:00  y  16:30 / 19:30<br/><span>Tlf: 974 xxx xxx </span>
                            </p>
                            <p>
                                Marcelo: L - V {'->'}  8:30 / 14:00  y  17:00 / 20:00<br/><span>Tlf: 974 xxx xxx</span> 
                            </p>
                        </div>
                        <p>
                            Sabados {'->'} 9:00 / 13:30
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuienesSomos;