import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { CgMenuRound } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>

            <nav className="flex justify-between items-center h-[100px]  ">

                <div className="left flex  justify-center items-center gap-20">

                    <div>
                        <Link to={'/'} className="flex items-center justify-center gap-3 text-xl font-semibold hover:scale-[1.05] transition-all duration-300">
                            <img className="w-[40px] h-[40px]" src={logo} alt="" />
                            <span>HomeState</span>
                        </Link>
                    </div>

                    <div>
                        <ul className="hidden md:flex items-center text-xl font-medium gap-6">
                            <li className="hover:scale-[1.1] transition-all duration-300"><NavLink to={'/'}>Home</NavLink></li>
                            <li className="hover:scale-[1.1] transition-all duration-300"><NavLink to={'/'}>About</NavLink></li>
                            <li className="hover:scale-[1.1] transition-all duration-300"><NavLink to={'/'}>Contact</NavLink></li>
                            <li className="hover:scale-[1.1] transition-all duration-300"><NavLink to={'/'}>Agents</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="right">
                    <div>
                        <ul className="hidden md:flex justify-center items-center font-medium gap-5">
                            <li className=" btn btn-md capitalize "><Link to={'/'}>Sign In</Link></li>
                            <li className=" btn btn-md bg-yellow-300 capitalize"><Link to={'/'}>Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>


            {/* Mobile menu */}
            <nav>
                {/* Mobile menu button */}
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden fixed top-10 right-10 text-3xl cursor-pointer z-50 focus:outline-none">
                    {isMenuOpen ? <IoMdCloseCircle className="text-white" /> : <CgMenuRound />}
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden fixed top-0 right-0 bottom-0 bg-black w-[200px] transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col justify-center items-center h-full text-white">
                        <ul className="flex flex-col justify-center items-center gap-10">
                            <li className="hover:scale-[1.1] transition-all duration-300 font-semibold"><NavLink to={'/'}>Home</NavLink></li>
                            <li className="hover:scale-[1.1] transition-all duration-300 font-semibold"><NavLink to={'/'}>About</NavLink></li>
                            <li className="hover:scale-[1.1] transition-all duration-300 font-semibold"><NavLink to={'/'}>Contact</NavLink></li>
                            <li className="hover:scale-[1.1] transition-all duration-300 font-semibold"><NavLink to={'/'}>Agents</NavLink></li>
                            <li className="hover:scale-[1.1] transition-all duration-300 font-semibold"><NavLink to={'/'}>Sign In</NavLink></li>
                            <li className="hover:scale-[1.1] transition-all duration-300 bg-yellow-300 px-4 py-2 rounded-md text-black font-semibold"><NavLink to={'/'}>Sign Up</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Mobile menu */}


        </div>
    );
};

export default Navbar;