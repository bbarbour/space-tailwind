import React from 'react'
import Navigation from '../components/Navigation'
import { useState} from 'react'
import data from '../data/data.json'

function Technology() {
    return (
        <div className="bg-tech-mobile min-h-screen   md:bg-tech-tablet xl:bg-tech-desktop  bg-no-repeat bg-cover flex">
            <div className="mx-auto my-auto min-w-full block p-4 m-8 mt-0 ">
                <Navigation />

                <div className="text-white font-bellefair text-3xl uppercase min-w-full">Hello Technology</div>
            </div>
        </div>
    )
}

export default Technology