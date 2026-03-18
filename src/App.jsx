import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Expert from './components/Expert';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <Expert />
        <Services />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
