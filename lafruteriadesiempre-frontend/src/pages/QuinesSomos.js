import './stylesPage.css'
import Maps from "../components/Mapa";

const QuienesSomos = () =>{
    return(
        <section id='quienes-somos' className='standard-page'>
            <div id="content-quienes-somos">
                <p>Tu “fruteria de siempre” esta formada por dos pequeñas fruterias de Huesca.</p>
                <hr className='separator movile'/>
                <div className="fruit-store">
                    <figure>
                        <figcaption>Fruteria Barrionuevo</figcaption>
                        <img src="/img/fBarrionuevo.png" alt="img"/>
                    </figure>

                    <div className='telf-ubi'>
                    <figure >
                            <img src="/img/mapa.png" alt="img"/>
                            <figcaption>C. Mesnaderos, 1, 22003 Huesca</figcaption>
                        </figure>
                        <figure>
                            <img src="/img/telefono.png" alt="img"/>
                            <figcaption>974 xxx xxx</figcaption>
                        </figure>  
                    </div>
                
                    <figure>
                        <figcaption>Fruteria Marcelo</figcaption>
                        <img src="/img/fMarcelo.jpg" alt="img"/>
                    </figure>
                    <div className='telf-ubi'>
                        <figure >
                            <img src="/img/mapa.png" alt="img"/>
                            <figcaption>Av. de Martínez de Velasco, 28, 22004 Huesca</figcaption>
                        </figure>
                        <figure>
                            <img src="/img/telefono.png" alt="img"/>
                            <figcaption>974 xxx xxx</figcaption>
                        </figure>
                    </div>
                </div>
                <p>
                    Que desde el año 1998 se esfuerzan en tener el mejor y mas fresco producto posible para que sus clientes puedan disfrutar del sabor y la experiencia de comer frutas, verduras y hortalizas. 
                </p>
                <hr className='separator desktop'/>
                <Maps id='map'/>
                <hr className='separator'/>
                <p className='special-p'>
                    Queremos seguir formando parte de vuestra alimentacion<br/> y por eso estamos aqui.
                </p>
                <div id="timetable">
                    <p>Horario y Telefono</p>
                    <div>
                        <div>
                            <p>
                                Barrio Nuevo: L - V {'->'}   8:30 / 14:00  y  16:30 / 19:30<br/><span className='desktop'>Tlf: 974 xxx xxx </span>
                            </p>
                            <p>
                                Marcelo: L - V {'->'}  8:30 / 14:00  y  17:00 / 20:00<br/><span className='desktop'>Tlf: 974 xxx xxx</span> 
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