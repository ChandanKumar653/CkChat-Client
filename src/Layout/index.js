import React from 'react'
import Body from './Body'
import NavBar from '../Components/NavBar';
export default function index() {
    let shouldRenderNavbar=false;
    return (
        <>
            {shouldRenderNavbar && <NavBar />}
            <Body />
        </>
    )
}
