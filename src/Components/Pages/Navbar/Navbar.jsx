import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
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
                        <ul className="flex items-center text-xl font-medium gap-6">
                            <li className="hover:scale-[1.1] transition-all duration-300"><NavLink to={'/'}>Home</NavLink></li>
                            <li className="hover:scale-[1.1] transition-all duration-300"><NavLink to={'/'}>About</NavLink></li>
                            <li className="hover:scale-[1.1] transition-all duration-300"><NavLink to={'/'}>Contact</NavLink></li>
                            <li className="hover:scale-[1.1] transition-all duration-300"><NavLink to={'/'}>Agents</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="right">
                    <div>
                        <ul className="flex justify-center items-center font-medium gap-5">
                            <li className=" btn btn-md capitalize "><Link to={'/'}>Sign In</Link></li>
                            <li className=" btn btn-md bg-yellow-300 capitalize"><Link to={'/'}>Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;