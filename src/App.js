import './App.css';
import Testimony from './components/Testimony'

function App() {
  return (
    <div className="App"> 
      <div className='main-container'>
      <h1>Esto es lo que dicen nuestros clientes sobre las piñatas:</h1>  
      <Testimony 
        name='Dora Dominga'
        country='M&eacute;xico' 
        image='uno' 
        position='Propietaria ' 
        company='Dulceria Bodeguita' 
        testimony='Si buscas piñatas de alta calidad que agreguen diversi&oacute;n y alegr&iacute;a a cualquier celebraci&oacute;n, ¡este es definitivamente el lugar para encontrarlas! Recomiendo encarecidamente estas piñatas a todos los que quieran asegurarse de tener una fiesta inolvidable.' /> 
     
      <Testimony
      name='Mar&iacute;a Vazquez'
        country='M&eacute;xico' 
        image='tres' 
        position='Ama de Casa ' 
        company='' 
        testimony='Lo que m&aacute;s me impresion&oacute; fue la atenci&oacute;n a los detalles. Cada piñata estaba cuidadosamente
         decorada con colores vibrantes y diseños encantadores. 
         ¡Eran casi demasiado bonitas para romperlas! Pero una vez que los niños
          empezaron a jugar con ellas, qued&oacute; claro que estaban hechas para la diversi&oacute;n.' />
      <Testimony
      name='Juan Ramirez'
        country='Guadalajara' 
        image='cinco' 
        position='Comerciante ' 
        company='Abarrotes Don Juan' 
        testimony='¡No puedo estar m&aacute;s contento con las piñatas que compré 
        aqu&iacute;! Fue la mejor elecci&oacute;n para la fiesta de cumpleaños de mi hijo.
         La calidad de estas piñatas es excepcional. Est&aacute;n elaboradas con un
          material resistente y duradero, lo que garantiza que aguanten los 
          golpes de los niños sin desarmarse.' />
      </div>
    </div>
    
  );
}

export default App;
