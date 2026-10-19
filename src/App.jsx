import Nav from './components/Nav';
import Hero from './components/Hero';
import Product from './components/Product';
import About from './components/About';
import SiteFooter from './components/SiteFooter';
import Workflow from './components/Workflow';
import Faq from './components/Faq';
import Contact from './components/Contact';
import { useReveal } from './useReveal';

function App() {
  useReveal();

  return (
    <div className="site">
      <a href="#main-content" className="sr-only">跳到主要內容</a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Product />
        <Workflow />
        <About />

        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
