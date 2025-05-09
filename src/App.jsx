// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Hero from './components/Hero'; // Import the Hero component
import Navbar from './components/Navbar'; // Import the Navbar component
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import Services from './components/Services'; // Import the Services component
import ContactUs from './components/ContactUs'; // Import the ContactUs component

function App() {
  return (
    <>
      <Navbar /> {/* Use the Navbar component */}
      
      {/* Add a spacer div to prevent content from being hidden behind the fixed navbar */}
      {/* The height should match the navbar's height. Adjust if needed. */}
      <div style={{ paddingTop: '70px' }}> 
        <main>
          <Hero />
          <AboutUs /> {/* Use the AboutUs component */}
          <Services /> {/* Use the Services component */}
          <ContactUs /> {/* Use the ContactUs component */}
        </main>

        {/* Footer - Placeholder for now */}
        <footer style={{textAlign: 'center', padding: '2rem', backgroundColor: 'var(--primary-color)', color: 'var(--background-color)'}}>
          <p>© 2024 DuDu Technology Ltd. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
