import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const Roots = () => {
    return (
        <div className='container mx-auto p'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;