import React from 'react'
import TopMenu from './TopMenu'
import MainMenu from './MainMenu'
import './header.css'
import basket from '../../assets/basket.svg'
import user from '../../assets/user.svg'

function Header() {
  return (<div id='navigation'>
        <TopMenu/>
        <MainMenu/>
          <div>
            <a href="">
              <img className='user' src={user} alt="" />
            </a>
            <a href="">
              <img className='basket' src={basket} alt="" />
            </a>
          </div>
        </div>
  )
}

export default Header