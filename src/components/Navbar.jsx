'use Client'
import React, { useState,useEffect, useRef } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {  //funcion para abrir y cerrar el boton de hamburguesa
    setIsOpen(!isOpen);
  };

  const sections = useRef([]);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '100px' });

    sections.current.forEach(section => sectionObserver.observe(section));

    return () => sectionObserver.disconnect();
  }, []);

  const handleSmoothScroll = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const descarga = () => {
    const url = '/BryanMartinez_Curriculum.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Bryan_cv.pdf';
    link.click();
  };

  return (
    <div className="bg-white shadow-md border-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4 max-w-screen-xl flex-wrap ">
        <div className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">Desarrollador de Software</div>
        <button onClick={handleClick} className="lg:hidden text-gray-900">
          <div className="w-6 h-6 relative">
            <svg
              className={`w-6 h-6 ${isOpen ? 'hidden' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              className={`w-6 h-6 ${isOpen ? '' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>
        <div className="hidden lg:flex ">
          <ul className="lg:flex space-x-4 font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <a className="block py-2 px-3 bg-white text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 md:dark:hover:bg-transparent"   href="#me"
          onClick={() => handleSmoothScroll('me')}>
                Sobre Mi
              </a>
              
            </li>
            <li>
              <a className="block py-2 px-3 bg-white text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 md:dark:hover:bg-transparent" href="#me1">
               Tecnologias
              </a>
            </li>
            <li>
              <a className="block py-2 px-3 bg-white text-gray-900  md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 md:dark:hover:bg-transparent" href="#pr">
                Proyectos
              </a>
            </li>
            <li>
              <a className="block py-2 px-3 bg-white text-gray-900  md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 md:dark:hover:bg-transparent" href="#exp">
               Experiencia
              </a>
            </li>
            <li>
              <button className="block py-2 px-3 bg-white text-gray-900  md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 md:dark:hover:bg-transparent"onClick={descarga}>
               CV
              </button>
            </li>
            <li>
              <a className="block py-2 px-3 bg-white text-gray-900  md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 md:dark:hover:bg-transparent" href="#contacto">
               Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}
      >
        <ul className="bg-white p-4">
        <li>
              <a className="block py-2 px-3 bg-white text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 md:dark:hover:bg-transparent" href="#me">
                Sobre Mi
              </a>
            </li>
            <li>
              <a className="block py-2 px-3 bg-white text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 md:dark:hover:bg-transparent" href="#me1">
               Tecnologias
              </a>
            </li>
            <li>
              <a className="block py-2 px-3 bg-white text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 md:dark:hover:bg-transparent" href="#pr">
                Proyectos
              </a>
            </li>
            <li>
              <a className="block py-2 px-3 bg-white text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 md:dark:hover:bg-transparent" href="#exp">
                Experiencia
              </a>
            </li>
            <li>
              <button className="block py-2 px-3 bg-white text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 md:dark:hover:bg-transparent" onClick={descarga} >
               CV
              </button>
            </li>
            <li>
              <a className="block py-2 px-3 bg-white text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 md:dark:hover:bg-transparent" href="#contacto">
               Contacto
              </a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;