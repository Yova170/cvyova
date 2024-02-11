import React from 'react';
import '../app/globals.css'


function Card() {
 

    return(
        <div className="mt-0 md:mt-10 block md:flex justify-center gap-4 ml-3 mr-3"  id="card">
            <div id='fn' className=" border-solid border-2 border-lime-400 rounded-lg bg-gray-900 p-4 w-full md:w-1/5 transition duration-500 hover:scale-105 md:hover:scale-125   " >
                <h2 className="text-2xl font-bold text-center mb-5 text-lime-400 " >Frontend</h2>
                <ul>
                    <div className="flex text-lime-100">
                        <img src="/html.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>HTML</li>
                    </div>

                    <div className="flex text-lime-100">
                        <img src="/css.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>CSS</li>
                    </div>
                
                    <div className="flex text-lime-100">
                        <img src="/js.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>Js</li>
                    </div>
                    <div className="flex text-lime-100">
                        <img src="/reac.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>React</li>
                    </div>
                    <div className="flex text-lime-100">
                        <img src="/bootstrap.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>Bootstrap</li>
                    </div>
                    <div className="flex text-lime-100">
                        <img src="/taildwind.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>Taildwind</li>
                    </div>
                </ul>
            </div>
            
            <div id='fn' className="border-solid border-2 border-lime-400 rounded-lg bg-gray-900 p-4 w-full md:w-1/5 transition duration-500 hover:scale-105 md:hover:scale-125 ">
                <h2 className="text-2xl font-bold text-center text-lime-400">Backend</h2>
                <ul>
                    <div className="flex text-lime-100">
                        <img src="/node.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>Node</li>
                    </div> 
                    <div className="flex text-lime-100">
                        <img src="/php.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>PHP</li>
                    </div>
                    <div className="flex text-lime-100">
                        <img src="python.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>Python</li>
                    </div>
                </ul>
            </div>

            <div id='fn' className="border-solid border-2 border-lime-400 rounded-lg bg-gray-900 p-4 w-full md:w-1/5 transition duration-500 hover:scale-105 md:hover:scale-125 ">
                <h2 className="text-2xl font-bold text-center text-lime-400">Extra</h2>
                <ul>
                    <div className="flex text-lime-100">
                        <img src="/photo.png" alt="Java" className=" mr-4 w-5 h-5 "/>
                        <li>Photoshop</li>
                    </div>
                    <div className="flex text-lime-100">
                        <img src="/clip.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>Clipchamp</li>
                    </div>
                        
                    <div className="flex text-lime-100">
                        <img src="/java.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>Java</li>
                    </div>
                        
                    <div className="flex text-lime-100">
                        <img src="/sql.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>SQL</li>
                    </div>
                        
                    <div className="flex text-lime-100">
                        <img src="/office.png" alt="Java" className=" mr-4 w-5 h-5"/>
                        <li>Office</li>
                    </div>
                </ul>
            </div> 
      </div>
      
            
    )
  
  } 

export default Card;

