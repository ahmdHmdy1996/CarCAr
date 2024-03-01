"use client"
import React,{useEffect,useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Contact from '@/components/Contact/Contact';
import BestCars from '@/components/BestCars/BestCars';
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import AppStore from './../components/AppStore/AppStore';


AppStore
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
      {/* <Navbar/> */}
      <Hero/>
      <Contact/>
      <BestCars/>
      <About/>
      <AppStore/>
      <Testimonials/>
      
    </div>  
  )
}

export default Page
