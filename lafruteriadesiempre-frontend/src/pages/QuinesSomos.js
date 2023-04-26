import './stylesPage.css'
import Maps from "../components/Mapa";

const QuienesSomos = () =>{
    return(
        <section id='quienes-somos' className='standard-page'>
            <div id="content-quienes-somos">
                <p>Tu "frutería de siempre” esta formada por dos pequeñas <strong>fruterías de Huesca</strong>.</p>
                <hr className='separator movile'/>
                <div className="fruit-store">
                    <figure>
                        <figcaption><strong>Frutería Barrionuevo</strong></figcaption>
                        <img src="/img/fBarrionuevo.png" alt="img fruteria Barrionuevo huesca"/>
                    </figure>

                    <div className='telf-ubi'>
                        <a href="https://goo.gl/maps/Pfv81Xwgr6L9yrem7" target="_blank" rel="nofollow">
                            <figure >
                                <img src="/img/mapa.png" alt="icon ubicacion fruteria Barrionuevo"/>
                                <figcaption>C. Mesnaderos, 1, 22003 Huesca</figcaption>
                            </figure>
                        </a>
                        <a href='tel:+34974224712' target='_blank' rel='nofollow'>
                            <figure>
                                <img src="/img/telefono.png" alt="icon telefono fruteria Barrionuevo"/>
                                <figcaption>974 22 47 12</figcaption>
                            </figure>  
                        </a>
                    </div>
                
                    <figure>
                        <figcaption><strong>Frutería Marcelo</strong></figcaption>
                        <img src="/img/fMarcelo.jpg" alt="img fruteria Marcelo huesca"/>
                    </figure>
                    <div className='telf-ubi'>
                        <a href="https://goo.gl/maps/HKAHZc9h4UBXhKYu5" target="_blank" rel="nofollow">
                            <figure >
                                <img src="/img/mapa.png" alt="icon ubicacion fruteria Marcelo"/>
                                <figcaption>Av. de Martínez de Velasco, 28, 22004 Huesca</figcaption>
                            </figure>
                        </a>
                        <a href='tel:+34974214025' target='_blank' rel='nofollow'>
                            <figure>
                                <img src="/img/telefono.png" alt="icon telefono fruteria Marcelo"/>
                                <figcaption>974 21 40 25</figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
                <p>
                    Que desde el año 1990 se esfuerzan en tener el mejor y más fresco producto posible para que sus clientes puedan disfrutar del sabor y la experiencia de comer frutas, verduras y hortalizas. 
                </p>
                <hr className='separator desktop'/>
                <Maps id='map'/>
                <hr className='separator'/>
                <p className='special-p'>
                    Queremos seguir formando parte de vuestra alimentacion<br/> y por eso estamos aquí.
                </p>
                <div id="timetable">
                    <p>Horario y Teléfono</p>
                    <div>
                        <div>
                            <p>
                                Barrionuevo: L - V {'->'}   8:30 / 14:00  y  17:00 / 19:30<br/><a href='tel:+34974224712' target='_blank' rel='nofollow'><span className='desktop'>Tlf: 974 22 47 12 </span></a>
                            </p>
                            <p>
                                Marcelo: L - V {'->'}  8:30 / 14:00  y  17:00 / 20:00<br/><a href='tel:+34974214025' target='_blank' rel='nofollow'><span className='desktop'>Tlf: 974 21 40 25</span></a>
                            </p>
                        </div>
                        <p>
                            Sábados {'->'} 9:00 / 13:30
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuienesSomos;