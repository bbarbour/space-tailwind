import React from 'react'
import Navigation from '../components/Navigation'
import Moon from '../assets/destination/image-moon.png'
import Mars from '../assets/destination/image-mars.png'
import Europa from '../assets/destination/image-europa.png'
import Titan from '../assets/destination/image-titan.png'
import { useState} from 'react'
import data from '../data/data.json'


function Tours() {
    const [destination, setDestination] = useState(0)
    console.log(data.destinations[destination])

    const imgUrls = [
        Moon,Mars,Europa, Titan

    ]
    function handleTourClick(e) {

        setDestination(e)
       
  
    }


    return (
        <div className="bg-tour-mobile min-h-screen lg:bg-tour-tablet xl:bg-tour-desktop  bg-no-repeat bg-cover flex">
            <div className="mx-auto my-auto min-w-full block pt-4 mt-8 ">
              
                <Navigation />
   
                <div className="text-white font-barlow-condensed text-3xl tracking-widest uppercase min-w-full mt-10 ml-10 xl:mt-32 xl:ml-32">
                    <span className="text-white/25 pr-3">01</span>
                    Pick your destination
                </div>
                <div className="block lg:flex">

                    <div className="mx-auto my-auto sm:w-1/3 sm:mt-16 lg:p-6 lg:m-5 lg:ml-20 lg:mt-20" >
                        <img src={imgUrls[destination]} alt="moon"></img>
                    </div>
                    <div className="w-2/3 text-white  mx-auto sm:p-3 sm:mt-10 lg:p-6 lg:mt-20 lg:ml-10" >
                        <div className="flex mx-auto justify-between sm:w-[400px] sm:mb-5 font-barlow-condensed uppercase tracking-[2.7px] sm:text-xl">
                            <button href='#' className='uppercase tracking-[2.7px]' onClick={() => { handleTourClick(0); }}>Moon</button>
                            <button href='#' className='uppercase tracking-[2.7px]' onClick={() => { handleTourClick(1); }}>Mars</button>
                            <button href='#' className='uppercase tracking-[2.7px]' onClick={() => { handleTourClick(2); }}>Europa</button>
                            <button href='#' className='uppercase tracking-[2.7px]' onClick={() => { handleTourClick(3); }}>Titan</button>
                        
                        </div>
                        <div className="flex mb-10">
                            <h1 className="mx-auto mt-3 font-bellefair uppercase text-white text-7xl duration-300 tracking-widest"> 
                            {data.destinations[destination].name}</h1>
                        </div>
                        <div className="mx-auto lg:px-36">
                        {data.destinations[destination].description}
                        </div>
                       
                        <div className="mx-auto lg:px-36 pt-10">
                            <hr className='h-1px bg-spaceGray text-white/20 '></hr>
                        </div>
                        <div className="mx-auto lg:px-36 pt-10 flex">
                            <div className="w-1/2" >
                                <span className="font-barlow-condensed uppercase text-spaceGray tracking-widest">Avg. Distinace</span>
                                <div className="font-bellefair uppercase text-3xl pt-2">
                                    {data.destinations[destination].distance}
                                </div>
                           </div>
                           <div className="w-1/2 pl-20">
                           <span className="font-barlow-condensed uppercase text-spaceGray tracking-widest "> Est Travel time </span>
                           <div className="font-bellefair uppercase text-3xl pt-2">
                                    {data.destinations[destination].travel}
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tours