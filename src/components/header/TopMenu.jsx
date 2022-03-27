import React from 'react'

function TopMenu() {
  return (
    <div className='over-container'>
        <div className='container header_container'>
            <div className='under_container'>
                <a href="#">PRIVATNI</a>
                <a href="#">POSLOVNI</a>
                <a href="#">NAŠA MREŽA</a>
                <a href="#">BEZBEDNI KLINCI</a>
                <a href="#">O NAMA</a>
            </div>
            <div className='under_container'>
                <a href="#">PODRŠKA</a>
                <a className='nohover'>|</a>
                <a href="#" style={{fontWeight: "bold"}}>SR</a>
                <a href="#">ENG</a>
            </div>
        </div>
    </div>
  )
}

export default TopMenu