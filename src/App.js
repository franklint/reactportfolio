import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer'; 
import Resume from './components/Resume'; 

function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Portfolio of Coded Projects',
    },
    {
      name: 'resume', 
      description: 'Front-End Proficiencies: HTML5, CSS3, JavaScript, jQuery, Bootstrap, React, version control/Git, responsive design',
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false); 

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            <Resume></Resume>
          
          </>
        ) : (
          <ContactForm></ContactForm>
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
