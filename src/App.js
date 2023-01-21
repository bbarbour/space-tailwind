
import './App.css';
import Logo from './assets/shared/logo.svg'

function App() {
  return (

    <div className="bg-mobile-img  md:bg-tablet-img xl:bg-desktop-img min-h-screen  bg-no-repeat bg-cover flex">
      <div className="mx-auto my-auto block p-4 m-8 mt-0 ">
        {/* Nav Bar */}
        <div id="nav" className="sticky top-0 min-w-full items-center flex">
          <div className="w-1/3 text-white top-0 ml-6 mt-2"><img src={Logo} alt="logo" /></div>
          <hr className="h-[1] bg-white left-20 min-w-[473px] opacity-25  z-40 hidden xl:block"></hr>
          <div id="nav" className="hidden xl:flex bg-spaceGray/10  min-h-[96] justify-end items-center ml-auto p-6 mt-2 mr-9 backdrop-blur-lg top-2 w-2/3">
            <h3 className="font-barlow  mx-auto my-auto text-white  text-lg uppercase">
              <span className='text-lg text-white font-barlow-condensed  font-extrabold pr-1'>00</span> Home
            </h3>
            <h3 className="font-barlow  mx-auto my-auto text-white text-lg uppercase">
              <span className='text-lg text-white font-barlow-condensed  font-extrabold pr-1'>01</span> Tours
            </h3>
            <h3 className="font-barlow  mx-auto my-auto text-white text-lg uppercase">
              <span className='text-lg text-swhite font-barlow-condensed  font-extrabold pr-1'>02</span> Crew
            </h3>
            <h3 className="font-barlow  mx-auto my-auto text-white text-lg uppercase">
              <span className='text-lg text-white font-barlow-condensed  font-extrabold pr-1'>03</span> Technology
            </h3>
          </div>
        </div>

        <div className=" block lg:flex lg:justify-between pt-10 mx-auto my-auto lg:pt-40 lg:pr-40">
          <div className="block">
            <div className="flex ml-0">
              <div className="font-barlow mx-auto lg:ml-2 lg:p-4 uppercase text-xl lg:text-3xl
               text-spaceGray tracking-widest">So you want to travel to</div>
            </div> <div className="flex">
              <h1 className="mx-auto mt-3 lg:ml-0 lg:p-4 font-bellefair uppercase text-white 
            text-8xl md:text-9xl tracking-widest"> Space</h1>
            </div>

            <div className="flex mx-auto p-0 justify-around lg:justify-start">
            <div className="text-spaceGray text-center 
            lg:text-left p-4 pr-10 pb-8 md:p-3 lg:p-4 lg:ml-4 items-center
        text-xl font-barlow mt-10 w-screen md:w-7/12  lg:w-3/5">Let's face it; if you want to go to
              space, you might as well genuinely go to outer
              space and not hover kind of on the edge of it. Well sit
              back, and relax because we'll give you a truly out of this
              world experience!</div>
              </div>
          </div>
          <div className='p-4 pt-16 lg:pt-12'>
            <div className=" w-[225px] h-[225px] t-[495px] rounded-full bg-white mx-auto my-auto  flex">
              <div className=" my-auto font-bellefair text-6xl  mx-auto">
                Explore
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
