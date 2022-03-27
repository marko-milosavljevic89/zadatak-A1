import React from 'react'
import './benefits.css'
import PreviousNextMethods from './PreviousNextMethods'


function Benefits() {
  return (
    <section id='pogodnosti'>
      <div className='container benefits-container'>
      <div className='what-benefits'>
        <small>Pogodnosti</small>
        <h1>Šta ima?</h1>
        <p>Net za najvažnije aplikacije i 15 giga uz NEO15</p>
      </div>
      <PreviousNextMethods />
      </div>
    </section>
  )
}

export default Benefits