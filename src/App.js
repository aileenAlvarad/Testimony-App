import './App.css';
import Testimony from './components/Testimony'

function App() {
  return (
    <div className="App"> 
      <div className='main-container'>
      <h1>Esto es lo que dicen nuestros clientes sobre las piñatas:</h1>  
      <Testimony 
        name='Dora Dominga'
        country='Mexico' 
        image='uno' 
        position='Propietaria ' 
        company='Dulceria Bodeguita' 
        testimony='Si buscas piñatas de alta calidad que agreguen diversión y alegría a cualquier celebración, ¡este es definitivamente el lugar para encontrarlas! Recomiendo encarecidamente estas piñatas a todos los que quieran asegurarse de tener una fiesta inolvidable.'/> 
     
      <Testimony
      name='Patricia Vazquez'
        country='Mexico' 
        image='tres' 
        position='Licenciada en Economia ' 
        company='Bancomer' 
        testimony='Lo que más me impresionó fue la atención a los detalles. Cada piñata estaba cuidadosamente
         decorada con colores vibrantes y diseños encantadores. 
         ¡Eran casi demasiado bonitas para romperlas! Pero una vez que los niños
          empezaron a jugar con ellas, quedó claro que estaban hechas para la diversión.'/>
      <Testimony
      name='Patricia Vazquez'
        country='Mexico' 
        image='cinco' 
        position='Licenciada en Economia ' 
        company='Bancomer' 
        testimony='Lo que más me impresionó fue la atención a los detalles. Cada piñata estaba cuidadosamente
         decorada con colores vibrantes y diseños encantadores. 
         ¡Eran casi demasiado bonitas para romperlas! Pero una vez que los niños
          empezaron a jugar con ellas, quedó claro que estaban hechas para la diversión.'/>
      </div>
    </div>
    
  );
}

export default App;
