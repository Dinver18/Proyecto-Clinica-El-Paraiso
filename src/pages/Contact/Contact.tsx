import ContactInfo from './components/ContactInfo';
import CardUbicacion from './components/CardUbicacion';

function Contact() {
  return (
    <div className='relative  flex flex-col items-center w-full top-0 '>
      <div className="p-4 border-b-8 border-b-primary w-full">
        <h2 className="text-2xl font-bold mb-2">Contacto</h2>
      </div>
      
      <ContactInfo />
      <CardUbicacion /> 
    </div>
  );
}

export default Contact;

