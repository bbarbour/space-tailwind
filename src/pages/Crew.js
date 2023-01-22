import React from 'react'
import Navigation
 from '../components/Navigation'
function Crew() {
    return (
        <div className="bg-crew-mobile min-h-screen   md:bg-crew-tablet xl:bg-crew-desktop  bg-no-repeat bg-cover flex">
            <div className="mx-auto my-auto min-w-full block p-4 m-8 mt-0 ">
                <Navigation />

                <div className="text-white font-bellefair text-3xl uppercase min-w-full">Hello Crew</div>
            </div>
        </div>
    )
}

export default Crew