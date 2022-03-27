import React from 'react'
import {Tabs, Tab} from '@material-ui/core'
import './package.css'
import viber from '../../assets/viber.svg'
import fb from '../../assets/fb-logo.svg'
import messinger from '../../assets/messinger.svg'
import instagram from '../../assets/Instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import tiktok from '../../assets/tiktok.svg'
import deezer from '../../assets/deezer.svg'
import hopster from '../../assets/hopster.svg'
import {IoIosArrowForward} from 'react-icons/io'
import {AiOutlineCheck} from 'react-icons/ai'


const data1 = [
  {
    id:1,
    type: 'red-package-container',
    neo: 'NEO 15',
    gb: '15GB',
    socials_text1: 'Neograničem net za:',
    socials_text2: '',
    viber: viber,
    fb: fb,
    messinger: messinger,
    instagram: instagram,
    whatsapp: whatsapp,
    tiktok: tiktok,
    additional_text1: 'Besplatno preko ',
    additional_text2: <span className="underline">Moj A1:</span>,
    deezer: deezer,
    hopster: hopster,
    previous_price: <span classname="line-through">2.899</span>,
    price: 2.399, 
    button: 'Izaberi telefon'
    
  },
  {
    id:2,
    type: 'gray-package-container',
    neo: 'NEO 5',
    gb: '5GB',
    socials_text1: 'Besplatno preko ',
    socials_text2: <span className="underline">Moj A1:</span>,
    viber: viber,
    fb: fb,
    messinger: messinger,
    instagram: instagram,
    whatsapp: whatsapp,
    tiktok: tiktok,
    additional_text1: '',
    additional_text2: '',
    deezer: '',
    hopster: '',
    previous_price: '',
    price: 2.099, 
    button: 'Izaberi telefon'
  },
  {
    id:3,
    type: 'gray-package-container',
    neo: 'NEO 3',
    gb: '3GB',
    socials_text1: '',
    socials_text2: '',
    viber: '',
    fb: '',
    messinger: '',
    instagram: '',
    whatsapp: '',
    tiktok: '',
    additional_text1: '',
    additional_text2: '',
    deezer: '',
    hopster: '',
    previous_price: '',
    price: 1.799, 
    button: 'Izaberi telefon'
    
  }
]

const data2 = [
  {
    id:1,
    type: 'red-package-container',
    neo: 'NEO 15',
    gb: '15GB',
    socials_text1: 'Neograničem net za:',
    socials_text2: '',
    viber: viber,
    fb: fb,
    messinger: messinger,
    instagram: instagram,
    whatsapp: whatsapp,
    tiktok: tiktok,
    additional_text1: 'Besplatno preko ',
    additional_text2: <span className="underline">Moj A1:</span>,
    deezer: deezer,
    hopster: hopster,
    previous_price: <span classname="line-through">1.999</span>,
    price: 1.499, 
    button: 'Dodaj u korpu'
    
  },
  {
    id:2,
    type: 'gray-package-container',
    neo: 'NEO 5',
    gb: '5GB',
    socials_text1: 'Besplatno preko ',
    socials_text2: <span className="underline">Moj A1:</span>,
    viber: viber,
    fb: fb,
    messinger: messinger,
    instagram: instagram,
    whatsapp: whatsapp,
    tiktok: tiktok,
    additional_text1: '',
    additional_text2: '',
    deezer: '',
    hopster: '',
    previous_price: '',
    price: 1.599, 
    button: 'Dodaj u korpu'
  },
  {
    id:3,
    type: 'gray-package-container',
    neo: 'NEO 3',
    gb: '3GB',
    socials_text1: '',
    socials_text2: '',
    viber: '',
    fb: '',
    messinger: '',
    instagram: '',
    whatsapp: '',
    tiktok: '',
    additional_text1: '',
    additional_text2: '',
    deezer: '',
    hopster: '',
    previous_price: '',
    price: 1.299, 
    button: 'Dodaj u korpu'
    
  }
]

function Package() {
  const [value, setValue]=React.useState(0)
  const handleTabs=(e,val)=> {
    console.warn(val)
    setValue(val)
  }

  return (
    <section id='tarife'>
      <div className='container'>
      <div className='package-title'>
        <h1>Izaberi svoj NEO</h1>
      </div>
        <div className='tabs'>
        <Tabs value={value} onChange={handleTabs} className='tabs'>
          <Tab label="Sa uređajem"/>
          <Tab label="Bez uređaja"/>
        </Tabs>
        </div>
          <TabPanel value={value} index={0}>
          <div className='package-container'>
          {
          data1.map(({id, type, neo, gb, socials_text1, socials_text2, viber, fb, messinger, instagram, whatsapp, tiktok, additional_text1, additional_text2, deezer, hopster, previous_price, price, button}) => {
            return (          
            <div className={type}>
              <div>
              <h3>{neo}</h3>
              <h2 className='gb-h2'>{gb}</h2>
              
                <div className='package-check-div'>
                  <AiOutlineCheck className='package-check'/>
                  <p>NEOgraničeni minuti i poruke ka svima</p>
                </div>
                <div className='package-check-div'>
                  <AiOutlineCheck className='package-check'/>
                  <p>XX interneta u zoni Zapadnog Balkana</p>
                </div>                
              
              <p>{socials_text1}{socials_text2} </p>
              <div>
                <img className='social-package' src={viber} alt="" />
                <img className='social-package' src={fb} alt="" />
                <img className='social-package' src={messinger} alt="" />
                <img className='social-package' src={instagram} alt="" />
                <img className='social-package' src={whatsapp} alt="" />
                <img className='social-package' src={tiktok} alt="" />
              </div>
              <p>{additional_text1}{additional_text2}</p>
              <div>
                <img className='social-package' src={deezer} alt="" />
                <img className='social-package' src={hopster} alt="" />            
              </div>
              </div>
              <div className='position-price'>
                <small className='line-through'>{previous_price}</small>
                <h2>{price} <sup className='sup-class'>RSD/mes</sup></h2>
                <p>Uz 24 meseca ugovnorne obaveze i e-račun</p>
                <div className='button-package'>                
                  <a href="">{button}</a>
                  <IoIosArrowForward className='forward-package'/>
                </div>
                <p className='choose-style'>Izaberi Tv ili laptop</p>
              </div>
            </div>
            )
          })
          }    
          </div>     
          </TabPanel>
          <TabPanel value={value} index={1}>
          <div  className='package-container'>
          {
          data2.map(({id, type, neo, gb, socials_text1, socials_text2, viber, fb, messinger, instagram, whatsapp, tiktok, additional_text1, additional_text2, deezer, hopster, previous_price, price, button}) => {
            return (          
            <div className={type}>
              <div>
              <h3>{neo}</h3>
              <h2 className='gb-h2'>{gb}</h2>
              
                <div className='package-check-div'>
                  <AiOutlineCheck className='package-check'/>
                  <p>NEOgraničeni minuti i poruke ka svima</p>
                </div>
                <div className='package-check-div'>
                  <AiOutlineCheck className='package-check'/>
                  <p>XX interneta u zoni Zapadnog Balkana</p>
                </div>  
              
              <p>{socials_text1}{socials_text2} </p>
              <div>
                <img className='social-package' src={viber} alt="" />
                <img className='social-package' src={fb} alt="" />
                <img className='social-package' src={messinger} alt="" />
                <img className='social-package' src={instagram} alt="" />
                <img className='social-package' src={whatsapp} alt="" />
                <img className='social-package' src={tiktok} alt="" />
              </div>
              <p>{additional_text1}{additional_text2}</p>
              <div>
                <img className='social-package' src={deezer} alt="" />
                <img className='social-package' src={hopster} alt="" />            
              </div>
              </div>
              <div className='position-price'>
                <small className='line-through'>{previous_price}</small>
                <h2>{price} <sup className='sup-class'>RSD/mes</sup></h2>
                <p>Uz 24 meseca ugovnorne obaveze i e-račun</p>
                <div className='button-package'>                
                  <a href="">{button}</a>
                  <IoIosArrowForward className='forward-package'/>
                </div>
                <p className='choose-style'>Izaberi Tv ili laptop</p>
              </div>
              
            </div>
            )
          })
          }
          </div>         
          </TabPanel>
        
          
      </div>
    </section>
  )
}

function TabPanel(props) {
  const {children,value,index} =props;
  return (<div>
          {
            value===index && (
              <h2>{children}</h2>
            )
          }
  </div>)
}

export default Package