import React from 'react'
import Logo from '../assets/shared/logo.svg'
import { Link } from 'react-router-dom'


function Navigation() {
  return (
    <div id="nav" className="sticky top-0 min-w-full items-center flex">
          <div className="w-1/3 text-white top-0 ml-6 mt-2"><img src={Logo} alt="logo" /></div>
          <hr className="h-[1] bg-white left-20 min-w-[473px] opacity-25  z-40 hidden xl:block"></hr>
          <div id="nav" className="hidden xl:flex bg-spaceGray/10  min-h-[96] justify-end items-center ml-auto p-6 mt-2 mr-9 backdrop-blur-lg top-2 w-2/3">
          <Link to="/" className="mx-auto my-auto">
            <h3 className="font-barlow  mx-auto my-auto text-white  text-lg uppercase">
              <span className='text-lg text-white font-barlow-condensed  font-extrabold pr-1'>00</span>
               Home
              
            </h3>
            </Link>
            <Link to="/tours" className="mx-auto my-auto">
            <h3 className="font-barlow  mx-auto my-auto text-white text-lg uppercase">
              <span className='text-lg text-white font-barlow-condensed  font-extrabold pr-1'>01</span> Tours
            </h3>
            </Link>
            <Link to="/crew" className="mx-auto my-auto">
            <h3 className="font-barlow   text-white text-lg uppercase">
              <span className='text-lg text-swhite font-barlow-condensed  font-extrabold pr-1'>02</span> Crew
            </h3>
            </Link>
            <Link to="/technology" className="mx-auto my-auto">
            <h3 className="font-barlow  mx-auto my-auto text-white text-lg uppercase">
              <span className='text-lg text-white font-barlow-condensed  font-extrabold pr-1'>03</span> Technology
            </h3>
            </Link>
          </div>
        </div>
  )
}

export default Navigation