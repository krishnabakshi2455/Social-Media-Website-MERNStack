import { Button, Avatar } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';
import { RootState } from '../../ReduxFolder/store'; // Assuming RootState is defined in the Redux store
import { Link } from 'react-router-dom';
import MainRoutes from '../Main-Routes/MainRoutes';
const Navbar: React.FC = () => {
    const SingUpUsername = useSelector((state: RootState) => state.AuthenticationSignup.username)

    return (
        <>
        {/* <MainRoutes/> */}
            <div className='navbar-super-div flex w-screen lg:justify-around'>
                <div  className='navbar-main-div'>
                    {/* <img src={InstaLogo} width={150} className=' ml-4 mt-4' alt="notfound" /> */}

                    <div  className='navbar-container'>
                        <div  className='icon-container '>
                            <Link to="/Posts" className=' text-white cursor-pointer'><HomeIcon /></Link>
                            <Link to="/Posts" className=' text-white cursor-pointer'><SearchIcon /></Link>
                            <Link to="/Posts" className=' text-white cursor-pointer'><ExploreIcon /></Link>
                            <Link to="/Posts" className=' text-white cursor-pointer'><SlideshowIcon /></Link>
                            <Link to="/Posts" className=' text-white cursor-pointer'><ChatIcon /></Link>
                            <Link to="/Posts" className=' text-white cursor-pointer'><FavoriteBorderIcon /></Link>
                            <Link to="/Create" className=' text-white'><AddCircleOutlineIcon /></Link>
                            <Avatar className='w-2'>{SingUpUsername ? SingUpUsername[0] : 'U'}</Avatar>
                        </div>

                        <div  className='navbar-name-container flex flex-col gap-10'>
                            <Link to="/" className='text-white font-serif cursor-pointer'>Home</Link>
                            <Link to="" className='text-white font-serif cursor-pointer'>Search</Link>
                            <Link to="" className='text-white font-serif cursor-pointer'>Explore</Link>
                            <Link to="" className='text-white font-serif cursor-pointer'>Reel</Link>
                            <Link to="" className='text-white font-serif cursor-pointer'>Message</Link>
                            <Link to="" className='text-white font-serif cursor-pointer'>Notification</Link>
                            <Link to="/Create" className='text-white font-serif cursor-pointer'>Create</Link>
                            <Link to="/Posts" className=' text-white cursor-pointer ml-2 mt-2'>{SingUpUsername}</Link>
                        </div>
                    </div>
                </div>

              
            </div>
        </>
    );
};

export default Navbar;
