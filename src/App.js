
import './App.css';
import Navigation from './components/Navigation';
import {RouterProvider} from "react-router-dom";
import router from './routes/allroutes';

function App() {



  return (

    <div className="bg-mobile-img min-h-screen   md:bg-tablet-img xl:bg-desktop-img  bg-no-repeat bg-cover flex">
      <div className="mx-auto my-auto min-w-full block p-4 m-8 mt-0 ">
        <Navigation />
        <RouterProvider router={router}>

        </RouterProvider>
        
      </div>
    </div>

  );
}

export default App;
