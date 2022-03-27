import React from 'react'
import './new.css'
import nemasta from '../../assets/nemasta.svg'
import {useState} from 'react'

function New() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <section id='new'>
      <div className='container new-container'>
        <div className='red-container'>
          <img src={nemasta} alt="" />
        </div>
        <div className='neo-tariff'>
          <p style={{color: "var(--color-light)"}}>NEO tarifa</p>
          <h1>NEO15 samo sad 1.499 din</h1>
          <nav>
            <a href="#tarife" onClick={() => setActiveNav('#tarife')} className={activeNav === '#tarife' ? 'active' : ''}>Tarife</a>
            <a href="#pogodnosti"  onClick={() => setActiveNav('#pogodnosti')} className={activeNav === '#pogodnosti' ? 'active' : ''}>Pogodnosti</a>
            <a href="#online"  onClick={() => setActiveNav('#online')} className={activeNav === '#online' ? 'active' : ''}>Zašto Online</a>
            <a href="#dodaci"  onClick={() => setActiveNav('#dodaci')} className={activeNav === '#dodaci' ? 'active' : ''}>Dodaci</a>
        </nav>
        </div>
      </div>
    </section>
  )
}
export default New