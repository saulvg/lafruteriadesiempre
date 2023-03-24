import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <footer id="footer">
            <div>
                <p>
                    <Link to={'/politicas-de-privacidad'} target='_blank'>Politicas de privacidad</Link>
                </p>
                {/* <p>Terminos y condiciones</p> */}
                <p>
                    <Link to={'aviso-legal'} target='_blank'>Aviso legal</Link>
                </p>
                <p>Copyright © 2023 tufruteriadesiempre || Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer;