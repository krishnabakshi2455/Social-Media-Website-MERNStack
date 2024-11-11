import { Avatar } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import { useSelector } from 'react-redux';
import './Navbar.css';
import { RootState } from '../../ReduxFolder/store'; // Assuming RootState is defined in the Redux store
import { Link } from 'react-router-dom';
import Notification from '../Notification/Notification';


const Navbar: React.FC = () => {
    const SingUpUsername = useSelector((state: RootState) => state.AuthenticationSignup.username)


    return (
        <>
            <div className='navbar-main-div'>

                
                    <div className='navbar-container' >

                        <div className='icon-container '>
                            <Link to="/" className='nav-css  '><HomeIcon  /></Link>
                        <Link to="/Posts" className='nav-css  '><ChatIcon /></Link>
                        <Link to="/Posts" className='nav-css  '><Notification /></Link>
                        <Link to="/Create" className='nav-css '><AddCircleOutlineIcon /></Link>
                        <Link to='/profile'><Avatar className='w-2 special-icon-1'>{SingUpUsername ? SingUpUsername[0] : 'U'}</Avatar></Link>
                        </div>

                        <div className='navbar-name-container'>
                        <Link to="/" className='nav-css  '>Home</Link>

                        <Link to="/chats" className='nav-css '>Chats</Link>
                        <Link to="/notification" className='nav-css '>Notification</Link>
                        <Link to="/Create" className='nav-css '>Create</Link>
                        <Link to="/profile" className='nav-css '>{SingUpUsername}</Link>
                        </div>

                    </div>
        
            </div>
        </>
    );
};

export default Navbar;
