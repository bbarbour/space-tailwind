import React from 'react'
import Logo from '../assets/shared/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {

  const [isOpen, setIsOpen] = useState(false)

  function toggleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <div id="nav" className="sticky top-0 min-w-full items-center flex">
      <div className="w-1/3 text-white top-0 ml-6 mt-2"><img src={Logo} alt="logo" /></div>
      <hr className="h-[1] bg-white left-20 min-w-[473px] opacity-25  z-40 hidden xl:block"></hr>

      {/* main menu */}
      <div id="nav" className="hidden xl:flex bg-spaceGray/10  min-h-[96] justify-end items-center
           ml-auto p-6 mt-2 mr-9 backdrop-blur-lg top-2 w-2/3">
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

      {/* mobile menu - not sure i need this here yet  */}

      <div className="block justify-end absolute top-0 p-0 m-0  right-0">
        <div id="hamburger" className={`${!isOpen ? 'flex' : 'hidden'} pr-6  w-full 
              justify-end xl:hidden text-white hover:cursor-pointer hover:text-spaceGray p-1`}
              onClick={() => { toggleClick(); }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
        </div>
        <div id="close" className={`${isOpen ? 'flex' : 'hidden'} 
                relative w-full mr-auto justify-end xl:hidden text-white hover:cursor-pointer
                 hover:text-spaceGray  bg-spaceGray/10 backdrop-blur-lg min-w-[300px] top-0 p-2 pr-6`}
          onClick={() => { toggleClick(); }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg>
        </div>

        <div id="nav" className={`${isOpen ? 'block translate-x-0' : 'translate-x-full'}  overflow-hidden right-0 xl:hidden justify-end mr-auto
         bg-spaceGray/10 backdrop-blur-lg h-screen shadow-md duration-300`}>
          <Link to="/" className="mx-auto my-auto ">
            <h3 className="font-barlow  mx-auto my-auto text-white py-2 ml-2 text-lg uppercase">
              <span className='text-lg text-white font-barlow-condensed  font-extrabold pr-1'>00</span>
              Home

            </h3>
          </Link>
          <Link to="/tours" className="mx-auto my-auto ">
            <h3 className="font-barlow  mx-auto my-auto text-white text-lg ml-2 py-2 uppercase">
              <span className='text-lg text-white font-barlow-condensed  font-extrabold pr-1'>01</span> Tours
            </h3>
          </Link>
          <Link to="/crew" className="mx-auto my-auto py-6">
            <h3 className="font-barlow   text-white text-lg uppercase py-2 ml-2">
              <span className='text-lg text-swhite font-barlow-condensed  font-extrabold pr-1'>02</span> Crew
            </h3>
          </Link>
          <Link to="/technology" className="mx-auto my-auto">
            <h3 className="font-barlow  mx-auto my-auto text-white text-lg ml-2 uppercase">
              <span className='text-lg text-white font-barlow-condensed  font-extrabold pr-1'>03</span> Technology
            </h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation