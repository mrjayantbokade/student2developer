import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faXTwitter, faLinkedinIn, faYoutube} from "@fortawesome/free-brands-svg-icons";


const Footer = () =>{

    return(

        <>

            {/*<div*/}
            {/*    className={`bg-white w-[90%] md:w-[84%] h-[700px] mt-32 mx-auto rounded-3xl`}>*/}
            {/*    <div*/}
            {/*        className={`bg-gradient-to-br from-white via-white to-roseMain/40 backdrop-blur-md bg-opacity-30 border border-white/20 shadow-xl w-full h-full rounded-3xl`}>*/}
            {/*        <div className={`px-24 text-backgroundBlackOG`}>hello</div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<div*/}
            {/*    className=" w-[90%] md:w-[84%] h-[700px] mt-32  mx-auto  relative bg-gradient-to-r from-white/20 via-blue-400/10 to-white/20 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-8">*/}
            {/*    <h2 className="text-3xl font-bold text-white">Acrylic Blur</h2>*/}
            {/*    <p className="text-white/70">This version includes a gradient for added style.</p>*/}
            {/*</div>*/}


            <div
                className={`bg-white w-[90%] md:w-[84%] font-inter h-auto mt-32 mx-auto rounded-3xl`}>
                <div
                    className={`bg-gradient-to-br from-white via-white to-roseMain/40 backdrop-blur-md bg-opacity-30   shadow-xl w-full h-full rounded-3xl`}>
                    <div className={`px-8 md:px-24 py-16 `}>
                        {/* Top Section */}
                        <div className="text-center">
                            <h2 className="text-4xl md:text-4xl font-inter font-bold text-backgroundBlackOG">
                                Empower Your Career.
                            </h2>
                            <p className="text-gray-600 mt-4 font-medium max-w-2xl mx-auto">
                                Transition from a student to a skilled developer with courses, internships, and a community to grow your network
                            </p>
                            <div className="flex justify-center mt-6   space-x-10">
                                <a href="#" className="text-gray-600 hover:text-roseMain">
                                    <i className="fab fa-instagram text-4xl">
                                        <FontAwesomeIcon icon={faInstagram}/>
                                    </i>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-roseMain">
                                    <i className="fab fa-instagram text-4xl">
                                        <FontAwesomeIcon icon={faLinkedinIn}/>
                                    </i>
                                </a>

                                <a href="#" className="text-gray-600 hover:text-roseMain">
                                    <i className="fab fa-twitter text-4xl">
                                        <FontAwesomeIcon icon={faXTwitter}/>
                                    </i>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-roseMain">
                                    <i className="fab fa-youtube text-4xl">
                                        <FontAwesomeIcon icon={faYoutube}/>
                                    </i>
                                </a>
                                
                            </div>
                        </div>

                        <div className="mt-12 grid  font-inter grid-cols-2 md:grid-cols-4 gap-8 text-md text-gray-700">
                            {/* Offerings */}

                            <div>
                                <h3 className="font-bold mb-4">Free Resources</h3>
                                <ul className="space-y-2 font-medium text-sm text-gray-600">
                                    <li>Blog</li>
                                    <li>Free Courses</li>
                                    <li>Open Source Projects</li>
                                    <li>Community Forums</li>
                                    <li>Internship Guides</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold mb-4">Student2Developer</h3>
                                <ul className="space-y-2  font-medium text-sm text-gray-600">
                                    <li>About Us</li>
                                    <li>Contact</li>
                                    <li>Support</li>
                                    <li>Partners</li>
                                    <li>Terms of Service</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold  mb-4">Offerings</h3>
                                <ul className="space-y-2 font-medium text-sm text-gray-600">
                                    <li>Courses</li>
                                    <li>Internships</li>
                                    <li>Workshops</li>
                                    <li>Community Events</li>
                                    <li>Bootcamps</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold mb-4">Goals</h3>
                                <ul className="space-y-2 font-medium text-sm text-gray-600">
                                    <li>Career Growth</li>
                                    <li>Skill Development</li>
                                    <li>Networking</li>
                                    <li>Industry Knowledge</li>
                                    <li>Project Building</li>
                                </ul>
                            </div>


                        </div>

                        <div className="mt-12 border-t border-gray-500/20 pt-8 text-center text-xs text-gray-600">
                            <div className="flex flex-col  justify-between items-center">
                                <ul className="flex space-x-4">
                                    <li><a href="#" className="hover:underline">Terms</a></li>
                                    <li><a href="#" className="hover:underline">Privacy</a></li>
                                    <li><a href="#" className="hover:underline">Refund Policy</a></li>
                                    <li><a href="#" className="hover:underline">Community Guidelines</a></li>
                                </ul>
                                <div className="mt-5 md:mt-3">
                                    <p>&copy; All rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Footer;