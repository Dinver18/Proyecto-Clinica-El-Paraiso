import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollUp() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza hacia la parte superior de la página
  }, [pathname]);

  return null;
}

export default ScrollUp;
