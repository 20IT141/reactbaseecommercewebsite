import React from 'react'
import Head from './Head'
import "./Header.css"
import Navbar from './Navbar'
import Search from './Search'
import "./App.css";


const Header = ({ CartItem }) => {
  return (
    <>
     <Head/>
     <Search CartItem={CartItem}/>
     <Navbar/>

    </>
  )
}

export default Header
