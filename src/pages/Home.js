import React from 'react'
import Navigation from '../components/Navigation'

function Home() {
    return (
        <div className="bg-mobile-img min-h-screen   md:bg-tablet-img xl:bg-desktop-img  bg-no-repeat bg-cover flex">
            <div className="md:mx-auto my-auto min-w-full block pt-4 mt-8   ">
            <Navigation />
                <div className=" block xl:flex lg:justify-between pt-10 mx-auto my-auto xl:pt-40 xl:pr-40">
                    <div className="block">
                        <div className="flex ml-0">
                            <div className="font-barlow mx-auto xl:ml-2 xl:p-4 uppercase text-xl lg:text-3xl
         text-spaceGray tracking-widest">So, you want to travel to</div>
                        </div> <div className="flex">
                            <h1 className="mx-auto mt-3 xl:ml-0 xl:p-4 font-bellefair uppercase text-white 
      text-8xl md:text-9xl tracking-widest"> Space</h1>
                        </div>

                        <div className="flex mx-auto p-0 justify-around xl:justify-start">
                            <div className="text-spaceGray text-center 
      lg:text-left p-4 pr-10 pb-8 md:p-3 xl:p-4 xl:ml-4 items-center
  text-xl font-barlow mt-10 w-screen md:w-7/12  xl:w-3/5">Let's face it; if you want to go to
                                space, you might as well genuinely go to outer
                                space and not hover kind of on the edge of it. Well sit
                                back, and relax because we'll give you a truly out of this
                                world experience!</div>
                        </div>
                    </div>
                    <div className='p-4 pt-16 xl:pt-36 items-baseline'>
                        <div className=" w-[225px] h-[225px] t-[495px] rounded-full bg-white mx-auto my-auto  flex hover:shadow-[0_0_0_45px_rgba(255,255,255,0.2)] hover:cursor-pointer duration-500">
                            <div className=" my-auto font-bellefair text-3xl  mx-auto uppercase tracking-widest text-darkGray">
                                Explore
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home