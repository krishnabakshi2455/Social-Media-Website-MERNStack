import { Avatar } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import { useSelector } from 'react-redux';
import './Navbar.css';
import { RootState } from '../../ReduxFolder/store'; // Assuming RootState is defined in the Redux store
import { NavLink } from 'react-router-dom';
import Notification from '../Notification/Notification';


const Navbar: React.FC = () => {
    const SingUpUsername = useSelector((state: RootState) => state.AuthenticationSignup.username)


    return (
        <>
            <div className='navbar-main-div'>


                <div className='navbar-container' >

                    <div className='icon-container '>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'nav-activecss' : 'flex items-center gap-4'}>
                            <HomeIcon />
                            <span className='nav-text'>Home</span>
                        </NavLink>

                        <NavLink
                            to="/posts"
                            className={({ isActive }) => isActive ? 'nav-activecss' : 'flex items-center gap-4'}>
                            <ChatIcon />
                            <span className='nav-text'>Chats</span>
                        </NavLink>

                        <NavLink
                            to="/notification"
                            className={({ isActive }) => isActive ? 'nav-activecss' : 'flex items-center gap-4'}>
                            <Notification />
                            <span className='nav-text'>Notification</span>
                        </NavLink>

                        <NavLink
                            to="/create"
                            className={({ isActive }) => isActive ? 'nav-activecss' : 'flex items-center gap-4 '}>
                            <AddCircleOutlineIcon />
                            <span className='nav-text'>Create</span>
                        </NavLink>

                        <NavLink
                            to="/profile"
                            className={({ isActive }) => isActive ? 'nav-activecss' : 'flex items-center gap-4'}>
                            <Avatar className="w-2 special-icon-1">
                                {SingUpUsername ? SingUpUsername[0] : 'U'}
                            </Avatar>
                            <span className='nav-text'>{SingUpUsername}</span>
                        </NavLink>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Navbar;
