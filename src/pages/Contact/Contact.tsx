import ContactInfo from './components/ContactInfo';
import CardUbicacion from './components/CardUbicacion';

function Contact() {
  return (
    <main>
      <div className="p-4 border-b-8 border-b-primary">
        <h2 className="text-2xl font-bold mb-2">Contacto</h2>
      </div>

      <ContactInfo />
      <CardUbicacion />
    </main>
  );
}

export default Contact;

