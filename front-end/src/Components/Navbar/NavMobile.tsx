import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOut } from '../../ReduxFolder/Redux-Authentication-LogIn/Authentication-LogIn-Store';
import { Avatar } from '@mui/material';
// import Notification from '../Notification/Notification';
import { RootState } from '../../ReduxFolder/store'; // Ensure the correct path to your store types

const NavbarMobile: React.FC = () => {
    const currentUsername = useSelector((state: RootState) => state.Form.username);
    // const currentPassword = useSelector((state: RootState) => state.Form.password);
    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log("logout");
        dispatch(LogOut());
    };

    return (
        <div className="navmobile-first-div">
            <div className="icon-container-navmobile flex justify-between items-center">
                <Link to="/Posts" className="text-white cursor-pointer">
                    <HomeIcon />
                </Link>
                <Link to='' className="text-white cursor-pointer">
                    <ChatIcon />
                </Link>
                <Link to="/Create" className="text-white">
                    <AddCircleOutlineIcon />
                </Link>
                <Avatar>{currentUsername ? currentUsername[0] : "U"}</Avatar>
                <Link to='' className="text-white cursor-pointer" onClick={handleLogout}>
                    <LogoutIcon />
                </Link>
            </div>
        </div>
    );
};

export default NavbarMobile;
