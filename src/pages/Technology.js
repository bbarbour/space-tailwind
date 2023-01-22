import React from 'react'
import Navigation from '../components/Navigation'
import { useState } from 'react'
import LaunchLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import LaunchPortrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import CapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg'
import CapsulePotrait from '../assets/technology/image-space-capsule-portrait.jpg'
import SpaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg'
import SpaceportPotrait from '../assets/technology/image-spaceport-portrait.jpg'
import data from '../data/data.json'


function Technology() {
    const [tech, setTech] = useState(0)
    console.log(data.technology[tech])

    const imgUrlsPotrait = [LaunchPortrait, SpaceportPotrait, CapsulePotrait]
    const imgUrlsLandscape = [LaunchLandscape, SpaceportLandscape, CapsuleLandscape]

    function handleCrewClick(e) {
        setTech(e)
    }


    return (
        <div className="bg-tech-mobile min-h-screen   md:bg-tech-tablet xl:bg-tech-desktop  bg-no-repeat bg-cover flex">
            <div className="mx-auto my-auto min-w-full block p-4 m-8 mt-0 ">
                <Navigation />
                <div className="text-white font-barlow-condensed text-3xl tracking-widest uppercase min-w-full mt-10 ml-10 xl:mt-32 xl:ml-32">
                    <span className="text-white/25 pr-3">03</span>
                    Space launch 101
                </div>

                <div className="block lg:flex">
                    <div className="text-white mx-auto px-0 py-3 mt-10 lg:p-6 lg:mt-20 lg:ml-10" >
                         <div className="min-w-full  mx-auto xl:hidden" >
                                <img src={imgUrlsLandscape[tech]} width="100%" alt="moon"></img>
                        </div>
                        <div className="w-1/2 mx-auto block">
                            <div className="flex lg:block mx-auto justify-around min-w-[180px] lg:min-w-[30px] lg:w-[30px] ">
                                <button href='#' className='uppercase rounded-full w-16 h-16 mx-1 lg:m-2 text-xl text-darkGray bg-white' onClick={() => { handleCrewClick(0); }}>1</button>
                                <button href='#' className='uppercase rounded-full w-16 h-16 mx-1 lg:m-2 text-xl text-darkGray bg-white' onClick={() => { handleCrewClick(1); }}>2</button>
                                <button href='#' className='uppercase rounded-full w-16 h-16 mx-1 lg:m-2 text-xl text-darkGray bg-white' onClick={() => { handleCrewClick(2); }}>3</button>
                             
                            </div>
                        </div>
                    </div>
                    <div className="block xl:flex">
                        <div className="block p-4 xl:flex xl:p-2 ">
                            <div className='block mx-auto xl:mx-10'>
                                <div className="font-barlow uppercase text-xl text-spaceGray  pt-2">
                                    The terminology
                                </div>

                                <div className="mx-auto ">
                                    <h1 className="mx-auto mt-3  font-bellefair uppercase text-white text-4xl lg:text-6xl  tracking-widest">
                                        {data.technology[tech].name}</h1>
                                </div>

                                <div className="mx-auto  pt-10 block">
                                    <div className="font-barlow text-spaceGray text-2xl pt-2">
                                        {data.technology[tech].description}
                                    </div>
                                </div>

                            </div>
                            <div className="min-w-[400px] min-h-[400px] ml-3 pt-4 mx-auto hidden lg:flex" >
                                <img src={imgUrlsPotrait[tech]} alt="moon"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology