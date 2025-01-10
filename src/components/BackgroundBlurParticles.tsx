
const BackgroundBlurParticles = () => {


    return (
        <div id={`blurParticles`}
             className=" relative w-full h-[2000px]   overflow-hidden z-30    bg-transparent">


            {/*mobile screen*/}
            <div>
                <div
                    className="md:-top-[40rem] sm:hidden  md:left-[60rem] relative sm:h-[500px] md:opacity-100 sm:w-[80px] sm:blur-[150px] h-[100px]    opacity-90 rounded-3xl w-[300px]  blur-[100px] top-20 brightness-125  left-5 scale-1 transform -rotate-45  bg-roseMain">

                </div>
                <div
                    className="md:-top-96 hidden md:block relative sm:h-[300px] sm:w-[300px] sm:blur-[150px] h-[100px] md:left-96   opacity-50 rounded-full w-[300px]  blur-[100px] top-20 brightness-125  left-5 scale-1 transform -rotate-45  bg-roseMain">

                </div>

                <div
                    className=" relative md:top-40 md:left-[60rem] md:blur-[200px] sm:h-[500px] sm:w-[500px]  h-[200px]  w-[200px] opacity-50 md:opacity-20 rounded-full blur-[100px] top-[550px] left-72    bg-roseMain"

                ></div>
            </div>


            {/*big screen*/}
            <div className={`blur-[150px] relative -top-28`}>
                <div
                    className=" hidden md:flex md:-top-[50rem]  relative sm:h-[500px] md:opacity-80 sm:w-[100px]  h-[100px] md:left-[30rem]   opacity-90 rounded-3xl w-[300px]   top-20 brightness-125  left-5 scale-1 transform -rotate-45  md:rotate-45 bg-roseMain">

                </div>
                <div
                    className=" hidden md:flex md:-top-[85rem]  relative sm:h-[500px] md:opacity-80 sm:w-[100px]  h-[100px] md:left-[50rem]   opacity-90 rounded-3xl w-[300px]   brightness-125  left-5 scale-1 transform -rotate-45 bg-roseMain">

                </div>
            </div>


        </div>

    )
}


export default BackgroundBlurParticles;