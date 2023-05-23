import './App.css';
import Navigation from './components/nav/Navigation';
import { Container } from 'react-bootstrap';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';
import { PortfolioContextProvider } from './context/portfolio';
import Footer from './components/footer/Footer';
import Divider from './components/divider/Divider';


function App() {
  return (
    <>
    <PortfolioContextProvider>
    <Navigation />
    <Container>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <PortfolioSection />
      <Divider />
      <ContactSection />
    </Container>
    <Footer />
    </PortfolioContextProvider>
    </>
  );
}

export default App;
