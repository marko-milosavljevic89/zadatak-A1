import React from 'react'
import {BsSearch} from 'react-icons/bs'
import logoA1 from '../../assets/Logo.svg'

import Burger from './Burger'

function MainMenu() {
  return (
    <div className='over-container-main'>
        <div className='container main_container'>
            <div className='under_container-main'>               
                <a href="#">
                    <img className='logo' src={logoA1} alt=""/>
                </a>
                <Burger />                
            </div>
            <div className='under_container-main'>
                <BsSearch className='search-logo'/>
                <a href="#">Moj A1</a>
            </div>
        </div>
    </div>
  )
}

export default MainMenu