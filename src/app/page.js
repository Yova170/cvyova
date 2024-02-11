'use client'
import React from "react";
import "./globals.css";
import Navbar from "../components/Navbar"
import Me from "../components/Me"
import Skills from "../components/Skills"
import Card from "../components/Cards";
import Proyectos from "../components/Proyectos";
import Deg from "../components/Deg";
import Head from 'next/head';
import Contact from '../components/Contact';
import Cv from '../components/Cv';

export default function Home() {

  return (
    <>
  
    <Head>
      
    </Head>
    <body className="bg-gray-900" >  
      
      <Navbar/> 
      <Me/>
      <Skills/>
      <Card/>
      <Deg/>
      <Proyectos/>
      <Cv/>
      <Contact/>
     
    </body>
    <h1 className="text-white text-center">  © Bryan Martinez 2024</h1>
    </>
   
  );

}
