import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
    return (
        <div>

            <nav className="flex justify-between items-center h-[100px]  ">

                <div className="left flex  justify-center items-center gap-20">

                    <div>
                        <Link className="flex items-center justify-center gap-3 text-xl font-semibold">
                            <img className="w-[40px] h-[40px]" src={logo} alt="" />
                            <span>HomeState</span>
                        </Link>
                    </div>

                    <div>
                        <ul className="flex items-center text-xl font-medium gap-6">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/home'}>About</NavLink></li>
                            <li><NavLink to={'/'}>Contact</NavLink></li>
                            <li><NavLink to={'/'}>Agents</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="right">
                    <div>
                        <ul className="flex justify-center items-center font-medium gap-5">
                            <li className=" btn btn-md capitalize"><Link to={'/'}>Sign In</Link></li>
                            <li className=" btn btn-md bg-yellow-300 capitalize"><Link to={'/'}>Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;