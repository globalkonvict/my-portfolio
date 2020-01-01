import React from 'react';
import Navbar from '/components/Navbar';
import Hero from '/components/Hero';
import Skills from '/components/Skills';
import Footer from '/components/Footer';
import About from '/components/About';

const Home = () => {
	return (
      <div className='is-family-code' path='/'>
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Footer />        
      </div>
	);
};

export default Home;
