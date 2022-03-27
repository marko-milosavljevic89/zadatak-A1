import React from 'react'
import healthy from '../../assets/healthy.png'
import appstore from '../../assets/apple-store.svg'
import googlestore from '../../assets/google-store.svg'
import {FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {BsYoutube} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import phone from '../../assets/phoneus.svg'
import email from '../../assets/A1_Email_icon 1.svg'
import scrollup from '../../assets/Scroll-up.svg'

function Information() {
  return (
    <div>
        <a href="#new" className='scroll__up'>
        <img className='scroll-up' src={scrollup} alt="" />
    </a>

    <div className='information-container'>        
        <div className='information-image-container'>
            <img src={healthy} alt="" />
            <div className='information-image-text'>
                <h1>Preuzmi Moj A1 aplikaciju</h1>
                <p>I u svakom trenutku proveri stanje na računu. Aktiviraj dodatke i budi u toku sa aktuelnostima.</p>
                <div className='information-image-store'>
                    <img src={appstore} alt="" />
                    <img src={googlestore} alt="" />
                </div>                
            </div>
        </div>
        <div className='intormation-content-container'>
            
            <div className='information-content-nav'>
                <div className='information-footer-under_container'>
                    <a href="#">O nama</a>
                    <a href="#">Press centar</a>
                    <a href="#">Podrška zajednici</a>
                    <a href="#">Karijera</a>
                    <a href="#">A1 mreža</a>
                </div>                
                <div className='information-footer-under_container'>
                    <a href="#"><FaFacebookF/></a>
                    <a href="#"><RiInstagramFill/></a>
                    <a href="#"><BsYoutube/></a>
                    <a href="#"><BsTwitter/></a>                     
                </div>
            </div>
            <div className='information-content-grid'>
                <div className='information-div'>
                    <h2>Prodajna Mesta</h2>
                    <div><a href="">Online prodavnica</a></div>
                    <div><a href="">A1 centri</a></div>
                </div>
                <div className='information-div'>
                    <h2>Informacije</h2>
                    <div><a href="">Podrška</a></div>
                    <div><a href="">Cenovnici i opšti uslovi</a></div>
                    <div><a href="">Politika i opšti uslovi</a></div>
                    <div><a href="">Obaveptenja za korisnike</a></div>
                </div>
                <div className='information-div'>
                    <div className='information-private'>
                        <h2>Kontakt za privatne korisnike</h2>
                        <div>
                            <a href="">
                                <img className='information-contacs-phone' src={phone} alt="" />
                                060 1234 (00-24)
                            </a>
                        </div>
                        <div>                       
                            <a href="">
                                <img className='information-contacs-symbol' src={email} alt="" />
                                Piši nam
                            </a>
                        </div>
                    </div>
                    <div className='information-business'>
                        <h2>Kontakt za poslovne korisnike</h2>
                        <div>                        
                            <a href="">
                                <img className='information-contacs-phone' src={phone} alt="" />
                                060 1230 (08-20)
                            </a>
                        </div>
                        <div>                       
                            <a href="">
                                <img className='information-contacs-symbol' src={email} alt="" />
                                Pišite nam
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
    </div>
  )
}

export default Information