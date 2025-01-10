import './App.css'

import Navbar from "./components/Navbar.tsx";
import Footer from './components/Footer.tsx';

import Hero from "./components/Hero.tsx";
import Courses from "./components/Courses.tsx";


import BackgroundBlurParticles from "@/components/BackgroundBlurParticles.tsx";

function App() {

    return (
        <>
            <div className={`absolute w-full  h-fit bg-black`}>

                <div className={` absolute w-full  z-50    text-white overflow-hidden`}>
                    <Navbar/>
                    <div className={`mb-10`}>
                        <Hero/>
                    </div>
                    <div className={` md:px-5  mt-40 h-screen`}>
                        <Courses/>
                    </div>


                    {/*work from here*/}

                    <div className={`bg-black h-full`}>
                        <Footer />
                    </div>

                </div>


                {/*background overlays blur effect*/}
                <BackgroundBlurParticles/>

            </div>


        </>
    )
}

export default App
