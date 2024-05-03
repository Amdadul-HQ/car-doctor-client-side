import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { useContext } from 'react';
import { AuthContext } from '../../Context/ContextComponent';
import Swal from 'sweetalert2';
const Header = () => {
    const{user,logout} = useContext(AuthContext)
    const handleLogOut = () => {
        logout()
        .then(()=> {
            Swal.fire({
                icon: "success",
                title: "Good Job",
                text: "User Log Out Successful!",
            })  
        })
        .catch(() => {
            Swal.fire({
                icon: "error",
                title: "Opps",
                text: "User Log Out Failed!",
            })  
        })
    }
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
                    {
                        user ? <button onClick={handleLogOut}>Log Out</button> : <NavLink to='/login'>Log In</NavLink>
                    }
                    <NavLink to='/signup'>Sign Up</NavLink>
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