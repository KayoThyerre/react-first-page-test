import React from 'react'
import './App.css'
import './reset.css'
import './App-responsive.css'
// import { Logo } from './components/logo'

function App() {

  return (
    <>
      <main>
        <header className='header-container'>
          {/* <Logo /> */}
          <img src="https://placehold.co/300x100" alt="place holder" className='logo' />

          <nav className='menu-options'>
            <a href="">What we offer</a>
            <a href="">How it works</a>
            <a href="">Portifolio</a>
          </nav>
          <button className='header-btn'>
            <div className='btn-default'>
              Contact us ↗
            </div>
            <div className='btn-hover'>
              Contact us ↗
            </div>
          </button>
        </header>
        <div className="content-container">
          <div className='text-container'>
            <h2>Let's grow your </h2>
            <h2>social presence.</h2>
          </div>
          <div className="emoji target">🎯</div>
          <div className="emoji shop">🛍️</div>
          <div className="emoji rocket">🚀</div>
          <div className="emoji fire">🔥</div>
        </div>
      </main >
    </>
  )
}

export default App
