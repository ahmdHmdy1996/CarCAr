"use client"
import React,{useEffect,useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Contact from '@/components/Contact/Contact';


const Page = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay:100
    });
    AOS.refresh();
  }, []);
  return (
    <div className='dark:bg-black dark:text-white'>
      <Navbar/>
      <Hero/>
      <Contact/>
      
    </div>  
  )
}

export default Page
