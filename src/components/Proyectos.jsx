import React from "react";


function  Proyectos() {
    
    return(
        <div id="pr"className="  relative bg-white px-6 pb-20 lg:px-8 lg:pb-28">
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Proyectos</h2>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 grid-cols-1 md:grid-cols-2">

                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition duration-500 hover:scale-105 md:hover:scale-110">
                    <a href="https://github.com/Yova170/Calculator-Python" target="_blank">
                        <img className="h-48 w-full object-cover" src="/calc.jpg" alt="Calculator Image"/>
                    </a>

                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                        <div className="flex-1">
                        <p className="text-xl font-semibold text-gray-900">Calculadora Python</p>
                        <p className="text-2x1  text-gray-900 mt-3">Calculadora hecha con python, un Proyecto para probar un nuevo framework visual de Python TKinter</p>

                        <a  className="flex">
                            
                            <img src="python.png" alt="Java" className="mt-5 w-5 h-5"/>
                            <a className="ml-auto mt-5 w-5 h-5" target="_blank" href="https://github.com/Yova170/Calculator-Python">
                                <img src="github.png" alt="GitHub" />
                            </a>
                            
                        </a>
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition duration-500 hover:scale-105 md:hover:scale-110">
                    <a href="https://github.com/Yova170/Calculator-Python" target="_blank">
                        <img className="h-48 w-full object-cover" src="/captia.jpg" alt="Calculator Image"/>
                    </a>

                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                        <div className="flex-1">
                        <p className="text-xl font-semibold text-gray-900">ScreenShot IA</p>
                        <p className="text-2x1  text-gray-900 mt-3">Una forma de hacer consultas rapida utilizando los screenshots y la api de bard, lo que permite resolver una pregunta rapida y sencilla.</p>

                        <a  className="flex">
                            
                            <img src="python.png" alt="Java" className="mt-5 w-5 h-5"/>
                            <a className="ml-auto mt-5 w-5 h-5" href="https://github.com/Yova170/Calculator-Python" target="_blank">
                                <img src="github.png" alt="GitHub" />
                            </a>
                            
                        </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition duration-500 hover:scale-105 md:hover:scale-110">
                    <a href="https://github.com/Yova170/Calculator-Python" target="_blank">
                        <img className="h-48 w-full object-cover" src="/calc.jpg" alt="Calculator Image"/>
                    </a>

                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                        <div className="flex-1">
                        <p className="text-xl font-semibold text-gray-900">Calculadora Python</p>
                        <p className="text-2x1  text-gray-900 mt-3">Calculadora hecha con python, un Proyecto para porbar un nuevo framework visual de Python PQT5</p>

                        <a  className="flex">
                            
                            <img src="python.png" alt="Java" className="mt-5 w-5 h-5"/>
                            <a className="ml-auto mt-5 w-5 h-5" href="https://github.com/Yova170/Calculator-Python" target="_blank">
                                <img src="github.png" alt="GitHub" />
                            </a>
                            
                        </a>
                        </div>
                    </div>
                </div>


                </div>
                    
            </div>            
        </div>
    )

}

export default Proyectos;