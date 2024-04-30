import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoSearch } from "react-icons/go";
const Header = () => {
    return (
        <nav className='my-12 flex justify-between items-center'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className='text-smText text-lg font-semibold space-x-10'>
                    <NavLink>Home</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Services</NavLink>
                    <NavLink>Blog</NavLink>
                    <NavLink>Contact</NavLink>
                </ul>
            </div>
            <div className='flex items-center gap-x-3'>
                <div className='text-3xl flex gap-x-3'>
                <MdOutlineShoppingBag/>
                <GoSearch/>
                </div>
                <div>
                    <button className='text-orange py-4 px-7 border border-orange rounded-md text-lg font-semibold hover:bg-orange hover:text-white transition duration-300'>Appointment</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;