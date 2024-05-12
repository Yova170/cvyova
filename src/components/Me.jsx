import React from 'react';


function Me() {
    return(
        <div className="bg-gray-900 ">

       
        <a id='me' className="mt-20 mx-auto flex flex-col items-center bg-gray-900  rounded-lg shadow md:flex-row md:w-4/6   ">
            
           
            <img id="yo" className="ml-5 mt-5 mb-5 mr-4 h-auto max-w-full " src="/me.png" alt="image description"/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 id="texto1"className="mb-2 text-3xl font-bold tracking-tight text-lime-300 md:text-3x1">Hola Soy Bryan!!!</h5>
                <p id="texto2" className="mb-3 text-2xl font-normal text-lime-100 md:text-2x1">Hola soy un desarrollador jr y actualmete resido en Chiriquí, Panamá. Tengo 23 años y actualmete estoy cursando el ultimo año de la carrera de Desarrollo de Software en la Universidad Tecnologica 
                    de Panamá y en busca de mi primer reto como profecional, se que tengo aptitudes optimas para poder cumplir la mayoria de roles que se necesitan hoy en dia, asi como poder
                    integrarme en cualquier area de trabajo con mucha facilidad, espero ser parte de tu equipo.</p>
            </div>
            
        </a> 
        </div>

        
    )
  
  }

export default Me;

