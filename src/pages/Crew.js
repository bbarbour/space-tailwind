import React from 'react'
import Navigation from '../components/Navigation'
import { useState} from 'react'
import Anasari  from '../assets/crew/image-anousheh-ansari.png'
import Hurly from '../assets/crew/image-douglas-hurley.png'
import Mark from '../assets/crew/image-mark-shuttleworth.png'
import Victor from '../assets/crew/image-victor-glover.png'
import data from '../data/data.json'


function Crew() {
    const [crew, setCrew] = useState(0)
    console.log(data.crew[crew])

    const imgUrls = [ Hurly, Mark, Victor, Anasari]
    function handleCrewClick(e) {
        setCrew(e)
    }


    return (
        <div className="bg-crew-mobile min-h-screen   md:bg-crew-tablet xl:bg-crew-desktop  bg-no-repeat bg-cover flex">
            <div className="mx-auto my-auto min-w-screen overflow-x-hidden block pt-4 mt-8 ">
                <Navigation />
                <div className="text-white font-barlow-condensed text-3xl tracking-widest uppercase min-w-full mt-10 ml-10 xl:mt-32 xl:ml-32">
                    <span className="text-white/25 pr-3">02</span>
                    Meet your Crew
                </div>
                <div className="block lg:flex">

                <div className="w-2/3 text-white  mx-auto p-3 mt-10 lg:p-6 lg:mt-20 lg:ml-10" >
                        <div >
                          
                                <div className="font-bellefair uppercase text-3xl text-spaceGray  pt-2">
                                    {data.crew[crew].role}
                                </div>
                        
                        <div className="">
                            <h1 className="mx-auto mt-3  font-bellefair uppercase text-white text-6xl  tracking-widest"> 
                            {data.crew[crew].name}</h1>
                        </div>
                  
                        <div className="mx-auto  pt-10 block">
                           <div className="font-barlow text-spaceGray text-2xl pt-2">
                                   {data.crew[crew].bio}
                                </div>
                           </div>
            
                        </div>
                        <div className="flex mx-auto justif-around m-10 w-[400px] ">
                            <button href='#' className='uppercase tracking-[2.7px] rounded-full w-4 h-4 mx-1 bg-white'  onClick={() => { handleCrewClick(0); }}></button>
                            <button href='#' className='uppercase tracking-[2.7px] rounded-full w-4 h-4 mx-1 bg-white'  onClick={() => { handleCrewClick(1); }}></button>
                            <button href='#' className='uppercase tracking-[2.7px] rounded-full w-4 h-4 mx-1 bg-white' onClick={() => { handleCrewClick(2); }}></button>
                            <button href='#' className='uppercase tracking-[2.7px] rounded-full w-4 h-4 mx-1 bg-white' onClick={() => { handleCrewClick(3); }}></button>
                        
                        </div>
                    </div>
                    <div className="mx-auto my-auto w-1/3 mt-16 lg:p-6 lg:m-5 lg:ml-20 lg:mt-20" >
                        <img src={imgUrls[crew]} alt="moon"></img>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Crew