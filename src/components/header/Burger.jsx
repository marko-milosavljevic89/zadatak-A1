import React, { useState } from 'react'
import styled from '@emotion/styled'
import { initializedState } from 'react-slick/lib/utils/innerSliderUtils'
import LeftNav from './LeftNav'

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 2rem;
    left: 1rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;
    display: none;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#DA2A1C' : 'black'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'}
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 2};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}
        }
    }

    @media screen and (max-width: 1024px) {
        display:flex
    }

    @media screen and (max-width: 600px) {
        display:flex
    }
    
`

function Burger() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <LeftNav open={open}/>
        </>
  )
}

export default Burger