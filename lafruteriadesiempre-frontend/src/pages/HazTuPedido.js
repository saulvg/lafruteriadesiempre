const HazTuPedido = () => {
    return(
        <section id='haz-tu-pedido' className='standard-page'>
            <h2 id="haz-pedido-row1" className="haz-pedido-row">Es muy sencillo</h2>
            <div id="haz-pedido-row2" className="haz-pedido-row">
                <div className="haz-tu-pedido-telefono">
                    <a href="tel:+34974214025" target="_blank" rel="nofollow">
                        <figure>
                            <img className="icon-haz-pedido telefono" src="/img/telefono.png" alt="icono telefono de fruteria Marcelo"/>
                            <figcaption>Av. de Martínez de Velasco<br/>974 21 40 25</figcaption>
                        </figure>
                    </a>
                </div>
                
                <figure className="haz-pedido-background">
                    <img className="icon-haz-pedido llamanos" src="/img/llamanos.png" alt="img de llamada"/>
                    <figcaption>Llamanos</figcaption>
                </figure>
                
                <div className="haz-tu-pedido-telefono">
                    <a href="tel:+34974224712" target="_blank" rel="nofollow">
                        <figure>
                            <img className="icon-haz-pedido telefono" src="/img/telefono.png" alt="icono telefono de fruteria Barrionuevo"/>
                            <figcaption>C. Mesnaderos<br/>974 22 47 12</figcaption>
                        </figure>
                    </a>
                </div>
            </div>
            <h2 id="haz-pedido-row3" className="haz-pedido-row">Haz tu pedido y decide</h2>
            <div id="haz-pedido-row4" className="haz-pedido-row">
                <div className='haz-tu-pedido-columns'>
                    <figure className="haz-pedido-background">
                        <img className="icon-haz-pedido shop" src="/img/shop.png" alt="img de tienda"/>
                        <figcaption>Recógelo en tienda</figcaption>
                    </figure>
                    <div className="extra-info">
                        <a href="https://goo.gl/maps/HKAHZc9h4UBXhKYu5" target="_blank" rel="nofollow">
                            <figure >
                                <img className="icon-haz-pedido map" src="/img/mapa.png" alt="icono ubicacion de fruteria Marcelo en huesca"/>
                                <figcaption>Av. de Martínez de Velasco, 28, 22004 Huesca</figcaption>
                            </figure>
                        </a>
                        <a href="https://goo.gl/maps/Pfv81Xwgr6L9yrem7" target="_blank" rel="nofollow">
                            <figure>
                                <img className="icon-haz-pedido map" src="/img/mapa.png" alt="icono ubicacion de fruteria Barrionuevo en huesca"/>
                                <figcaption>C. Mesnaderos, 1, 22003 Huesca</figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
                <h2>O</h2>
                <div className='haz-tu-pedido-columns'>

                    <figure className="haz-pedido-background">
                        <img className="icon-haz-pedido repartidor" src="/img/repartidor.png" alt="img de repartidor"/>
                        <figcaption>Esperanos en casa</figcaption>
                    </figure>

                 <div className="extra-info">
                    <figure >
                        <img className="icon-haz-pedido" src="/img/horario-de-apertura.png" alt="img de horario"/>
                        <figcaption>Huesca capital de 9:00  a   14:00</figcaption>
                    </figure>
                </div>

                </div>
            </div>

        </section>
    )
}
export default HazTuPedido;