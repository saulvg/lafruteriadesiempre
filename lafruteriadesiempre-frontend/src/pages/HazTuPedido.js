const HazTuPedido = () => {
    return(
        <section id='haz-tu-pedido' className='standard-page'>
            <h2 id="haz-pedido-row1" className="haz-pedido-row">Es muy sencillo</h2>
            <div id="haz-pedido-row2" className="haz-pedido-row">
                <div className="haz-tu-pedido-telefono">
                    <figure>
                        <img className="icon-haz-pedido telefono" src="/img/telefono.png" alt="img"/>
                        <figcaption>Av. de Martinez de Velasco<br/>974 xxx xxx</figcaption>
                    </figure>
                </div>
                
                <figure className="haz-pedido-background">
                    <img className="icon-haz-pedido llamanos" src="/img/llamanos.png" alt="img"/>
                    <figcaption>Llamanos</figcaption>
                </figure>
                
                <div className="haz-tu-pedido-telefono">
                    <figure>
                        <img className="icon-haz-pedido telefono" src="/img/telefono.png" alt="img"/>
                        <figcaption>C. Mesnaderos<br/>974 xxx xxx</figcaption>
                    </figure>
                </div>
            </div>
            <h2 id="haz-pedido-row3" className="haz-pedido-row">Haz tu pedido y decide</h2>
            <div id="haz-pedido-row4" className="haz-pedido-row">
                <div className='haz-tu-pedido-columns'>
                    <figure className="haz-pedido-background">
                        <img className="icon-haz-pedido shop" src="/img/shop.png" alt="img"/>
                        <figcaption>Recogelo en tienda</figcaption>
                    </figure>
                    <div className="extra-info">
                        <figure >
                            <img className="icon-haz-pedido" src="/img/mapa.png" alt="img"/>
                            <figcaption>Av. de Martínez de Velasco, 28, 22004 Huesca</figcaption>
                        </figure>
                        <figure>
                            <img className="icon-haz-pedido" src="/img/mapa.png" alt="img"/>
                            <figcaption>C. Mesnaderos, 1, 22003 Huesca</figcaption>
                        </figure>
                    </div>
                </div>
                <h2>O</h2>
                <div className='haz-tu-pedido-columns'>

                    <figure className="haz-pedido-background">
                        <img className="icon-haz-pedido repartidor" src="/img/repartidor.png" alt="img"/>
                        <figcaption>Esperanos en casa</figcaption>
                    </figure>

                 <div className="extra-info">
                    <figure >
                        <img className="icon-haz-pedido" src="/img/horario-de-apertura.png" alt="img"/>
                        <figcaption>Av. de Martínez de Velasco, 28, 22004 Huesca</figcaption>
                    </figure>
                </div>

                </div>
            </div>

        </section>
    )
}
export default HazTuPedido;