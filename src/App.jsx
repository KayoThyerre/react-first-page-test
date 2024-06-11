import React from 'react'
import './App.css'
import './reset.css'
import { Logo } from './components/logo'

function App() {

  return (
    <>
     <main>
        <header className='header-container'>
          <Logo />

          <nav className='menu-options'>
            <a href="">What we offer</a>
            <a href="">How it works</a>
            <a href="">Portifolio</a>
          </nav>

          <div className='header-btn'>
            <button>Contact us</button>
          </div>
        </header>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur debitis culpa ullam recusandae iure molestiae, quae omnis perferendis! Laudantium maxime consequatur inventore animi consequuntur? Vitae necessitatibus omnis ipsa recusandae nisi?</span>
     </main>
    </>
  )
}

export default App
