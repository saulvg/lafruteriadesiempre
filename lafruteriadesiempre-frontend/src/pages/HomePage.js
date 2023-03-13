import { Link } from 'react-router-dom';
import './stylesPage.css'
const HomePage = () => {
    return(
            <main id='home-page'>
                <section className='img-home-page' style={{backgroundImage:"url(img/quienesSomos.jpg)"}}>
                    <h2>Quienes somos</h2>
                </section>
                <Link to={"/productos-de-hoy"}>
                    <section className='img-home-page' style={{backgroundImage:"url(img/productosHoy.jpg)"}}>
                        <h2>Productos de hoy</h2>
                    </section>
                </Link>
                <Link to={""}>
                    <section className='img-home-page' style={{backgroundImage:"url(img/hazPedido.jpg)"}}>
                        <h2>Haz tu pedido</h2>
                    </section>
                </Link>
                
                
            </main>
    );
} 
export default HomePage;