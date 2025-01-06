
const Hero = () => {
    return (
        <section className="  text-white h-full flex mt-44 sm:mt-40   justify-center">
            <div className="text-center max-w-4xl px-5">
                {/* Title */}
                {/*<h1 className="text-5xl md:text-7xl font-medium text-[#E7E7E4] font-sora  ">*/}
                {/*    Craft Yourself{' '}*/}
                {/*    into a{' '}*/}
                {/*    <span className="underline  decoration-6 decoration-roseMain">Developer</span>.*/}
                {/*</h1>*/}

                {/*dummy*/}
                <h1 className="text-4xl md:text-6xl font-medium text-white font-sora   ">
                    We help you{' '}
                    to craft yourself into{' '}
                    <span className="  ">a Developer</span>.
                </h1>
                {/* Subheading */}

                {/* Buttons */}
                <div className="mt-10 flex font-inter text-[16px] flex-wrap justify-center gap-4 sm:gap-10">
                    <button
                        className="bg-roseMain  hover:brightness-110 text-white font-medium py-2 px-6 sm:px-10 rounded-lg transition hover:opacity-90">
                        Get Started
                    </button>

                    <button
                        className="bg-gradient-to-br from-white hover:to-roseMain to-roseMain hover:bg-roseMain hover:text-backgroundBlack opacity-100 text-backgroundBlack font-bold py-2 px-6 sm:px-10 rounded-lg transition  ">
                        Join Community
                    </button>



                </div>

                <p className=" flex font-sora flex-col text-[16px] md:text-xl max-w-4xl text-grayText mt-10 gap-0">
                    We go the extra mile to turn Students into {" "}
                    <span className={`text-roseMain  sm:font-normal `}>Skilled Developers.</span>
                </p>

                <div className={`py-20  md:px-24 mt-10 sm:mt-2 flex justify-between font-sora font-black sm:font-normal`}>
                    <div className={` text-[#E7E7E4]`}>
                        <h2 className={`text-lg font-semibold sm:text-3xl`}>4k+</h2>
                        <p className={`text-[10px] sm:text-[1rem]  font-normal blur-[0.2px]`}>Strong Community</p>
                    </div>
                    <div className={` text-[#E7E7E4]`}>
                        <h2 className={`text-lg font-semibold sm:text-3xl`}>25+</h2>
                        <p className={`text-[10px] sm:text-[1rem] font-normal blur-[0.2px]`}>Students Placed</p>
                    </div>

                    <div className={` text-[#E7E7E4]`}>
                        <h2 className={`text-lg font-semibold sm:text-3xl`}>4+</h2>
                        <p className={`text-[10px] sm:text-[1rem] font-normal blur-[0.2px]`}>Courses Available</p>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Hero;
