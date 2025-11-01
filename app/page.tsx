import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOSInit from './components/AOSInit';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AOSInit />
      <Header />
      <Hero />
      <About />
      <Facilities />
      {/* <Booking /> */}
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
