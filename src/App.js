import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [categories] = useState([
    { name: 'group projects', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'JavaScript', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'React', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
