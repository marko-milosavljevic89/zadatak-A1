import React from 'react'
import {BsSearch} from 'react-icons/bs'
import logoA1 from '../../assets/Logo.svg'

function MainMenu() {
  return (
    <div className='over-container-main'>
        <div className='container main_container'>
            <div className='under_container-main'>               
                <a href="#">
                    <img className='logo' src={logoA1} alt=""/>
                </a>
                <a className='content-a' href="#">                   
                    Aktuelno
                </a>
                <a href="#">Uređaji</a>
                <a href="#">Postpaid</a>
                <a href="#">Prepaid</a>
                <a href="#">Internet</a>
                <a href="#">Digitalni Servisi</a>
                <a href="#">A1 Klub Plus</a>
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