import { Link } from 'react-router-dom';
import './stylesPage.css'
import LazyLoad from 'react-lazyload'
const HomePage = () => {
    return(
        <main id='home-page'>
            <LazyLoad>
                <Link to={'/quienes-somos'} className='img-home-page' style={{backgroundImage:"url(img/quienesSomos0.jpg)"}}>
                    <h2>Quienes somos</h2>
                </Link>
            </LazyLoad>
                <Link to={"/productos-de-hoy"}>
                    <section className='img-home-page' style={{backgroundImage:"url(img/productosHoy0.jpg)"}}>
                        <h2>Productos de hoy</h2>
                    </section>
                </Link>
                <Link to={"/haz-tu-pedido"}>
                    <section className='img-home-page' style={{backgroundImage:"url(img/hazPedido0.jpg)"}}>
                        <h2>Haz tu pedido</h2>
                    </section>
                </Link>
          </main>
    );
} 
export default HomePage;