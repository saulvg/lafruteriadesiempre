// ## Style ##
import './components.css';

//Componente para pintar errores o mensajes de alerta, recibe como prop el mensaje que mostrara
const Error = ({ children, clas }) => {
  
  return (
      <div id='container-error'>
        <div>❗ {children}</div>
      </div>
  );
};
export default Error;