import React from 'react';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
