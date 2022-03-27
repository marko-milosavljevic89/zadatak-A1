import React from 'react'
import samoonline from '../../assets/3 meseca.png'
import phone from '../../assets/phone.png'
import wire from '../../assets/mreža.svg'
import './online.css'

function Online() {
  return (
    <section id='online'>
      <div className="container online-container">
        <div className='left-online-container'>
          <div className='online-image-container'>
            <img src={phone} alt="" />
            <div className='online-image-text-container'>
              <h1>Zašto da kupiš online?</h1>
              <p>Pored toga što kupovinu možeš obaviti gde god da se nalaziš, svakom online kupovinom u Vipu dobijaš još više.</p>
            </div>
          </div>
          <div className='online-months-container'>
            <div >
              <h1>Dobijaš osiguranje telefona</h1>
              <p>Poruči telefon online i dobijaš prva 3 meseca osiguranje uređaja bez naknade.</p>
            </div>
            <img className='months-image' src={samoonline} alt="" />
          </div>
        </div>
        <div className='right-online-container'>
          <div className='right-online-container-text'>
            <h1>Plati prilikom preuzimanja, a dostavljamo ti besplatno</h1>
            <p>Izaberi najbolju opciju za sebe i plati svoju porudžbinu online ili prilikom preuzimanja. Dostavljamo na tvoju adresu besplatno!</p>
          </div>         
        </div>
      </div>
    </section>
  )
}

export default Online