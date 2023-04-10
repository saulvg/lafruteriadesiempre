// ## Style ##
import './components.css';

//Componente para pintar errores o mensajes de alerta, recibe como prop el mensaje que mostrara
const Error = ({ children, clas }) => {
  
  return (
    <section className='standard-page error'>
      <div id='container-error' className={clas}>
        <div>❗ {children}</div>
      </div>
    </section>
  );
};
export default Error;