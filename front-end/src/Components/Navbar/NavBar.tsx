import { Avatar } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';
import { useSelector } from 'react-redux';
import './Navbar.css';
import { RootState } from '../../ReduxFolder/store'; // Assuming RootState is defined in the Redux store
import { Link } from 'react-router-dom';
import Notification from '../Notification/Notification';
// import { LogOut } from '../../ReduxFolder/Redux-Authentication-LogIn/Authentication-LogIn-Store';



const Navbar: React.FC = () => {
    const SingUpUsername = useSelector((state: RootState) => state.AuthenticationSignup.username)

    // const dispatch = useDispatch()


    // const handlelogout = () => {
    //     dispatch(LogOut())
    // }
    return (
        <>
            <div className='navbar-main-div'>

                
                    <div className='navbar-container' >

                        <div className='icon-container '>
                            <Link to="/Posts" className=' text-white cursor-pointer'><HomeIcon /></Link>

                            <Link to="/Posts" className=' text-white cursor-pointer'><ChatIcon /></Link>
                            <Link to="/Posts" className=' text-white cursor-pointer'><Notification /></Link>
                            <Link to="/Create" className=' text-white'><AddCircleOutlineIcon /></Link>
                            {/* <p className=' text-white cursor-pointer' onClick={handlelogout}><LogoutIcon /></p> */}
                            <Link to='/profile'><Avatar className='w-2'>{SingUpUsername ? SingUpUsername[0] : 'U'}</Avatar></Link>
                        </div>

                        <div className='navbar-name-container'>
                            <Link to="/post" className='text-white font-serif cursor-pointer'>Home</Link>

                            <Link to="/chats" className='text-white font-serif cursor-pointer'>Chats</Link>
                            <Link to="/notification" className='text-white font-serif cursor-pointer'>Notification</Link>
                            <Link to="/Create" className='text-white font-serif cursor-pointer'>Create</Link>
                            {/* <p className='text-white font-serif cursor-pointer' onClick={handlelogout}>LogOut</p> */}
                            <Link to="/profile" className=' text-white cursor-pointer ml-2 mt-2'>{SingUpUsername}</Link>
                        </div>

                    </div>
        
            </div>
        </>
    );
};

export default Navbar;
