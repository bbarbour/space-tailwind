
import './App.css';

function App() {
  return (

    <div className="bg-mobile-img  md:bg-tablet-img xl:bg-desktop-img min-h-screen  bg-no-repeat bg-cover flex">
      <div className="mx-auto my-auto block p-4 m-8 ">
     <div id="nav" className="bg-spaceGray/20  h-14 flex justify-end items-center p-2 m-2 backdrop-blur-lg absolute top-2 min-w-full">
        <h3 className="font-barlow  mx-auto my-auto text-white text-lg uppercase">
          Hello
        </h3>
        <h3 className="font-barlow  mx-auto my-auto text-white text-lg uppercase">
          <span className='text-lg text-spaceGray font-barlow-condensed  font-extrabold'>00</span> Tours
        </h3>
        <h3 className="font-barlow  mx-auto my-auto text-white text-lg uppercase">
          <span className='text-lg text-spaceGray font-barlow-condensed  font-extrabold'>01</span> Crew
        </h3>
        <h3 className="font-barlow  mx-auto my-auto text-white text-lg uppercase">
          <span className='text-lg text-spaceGray font-barlow-condensed  font-extrabold'>02</span> Technology
        </h3>
      </div>
     
      <div className="font-barlow p-4 ml-4 uppercase text-3xl text-spaceGray tracking-widest">So you want to travel to</div>
       
        <h1 className="mx-auto my-auto  left-5 ml-5 font-bellefair uppercase text-white 
    text-9xl 
    tracking-widest">
          Space
        </h1>

        <div className="text-spaceGray mx-auto my-auto left-5 ml-4 p-4 pt-0 mt-0
         text-xl font-barlow mt-10 w-3/5">Let’s face it; if you want to go to 
        space, you might as well genuinely go to outer 
        space and not hover kind of on the edge of it. Well sit 
        back, and relax because we’ll give you a truly out of this 
        world experience!</div>
      </div>
    </div>

  );
}

export default App;
