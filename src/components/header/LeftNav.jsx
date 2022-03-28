import React from 'react'
import styled from '@emotion/styled'

const Leftdiv = styled.div`
    display: flex;
    flex-wrap: wrap;

    
    
    @media screen and (max-width: 1024px) {
        {
            transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
            flex-flow: column nowrap;
            background-color: var(--color-white);
            position: fixed;
            top: 0;
            left: 0;
            height: 60vh;
            padding: 1rem;
            width: 25rem;
            z-index: 10;
            padding-top: 3.5rem;
            transition: transform 0.3s ease-in-out;
        }
        a {
            border-bottom: 1px solid var(--color-bg-variant);
        }
        
    }

    @media screen and (max-width: 600px) {
        {
            transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'}
            flex-flow: column nowrap;
            z-index: 10;
            position: fixed;
            background-color: var(--color-white);
            top: 0;
            left: 0;
            margin: 0;
            height: 60vh;
            width: 25rem;
            transition: transform 0.3s ease-in-out;
        }

        a {
            border-bottom: 1px solid var(--color-bg-variant);
        }
    }
`

function LeftNav({ open }) {
  return (
        <Leftdiv open={open}>
            <a className='content-a' href="#new">                   
                Aktuelno
            </a>
            <a href="#">Uređaji</a>
            <a href="#">Postpaid</a>
            <a href="#">Prepaid</a>
            <a href="#">Internet</a>
            <a href="#">Digitalni Servisi</a>
            <a href="#">A1 Klub Plus</a>
        </Leftdiv>
  )
}

export default LeftNav