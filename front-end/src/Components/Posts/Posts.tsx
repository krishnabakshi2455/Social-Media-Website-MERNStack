import React from 'react'
import OtherAccount from '../OtherAccounts/OtherAccount'
import './Posts.css'
import { Avatar } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import ForumIcon from '@mui/icons-material/Forum';

const Posts: React.FC = () => {
  return (
    <>
      <div>
        <div className='post-otheraccount-container'>
          <OtherAccount />
        </div>

        <div className='post-main-cover'>

          <div className='post-dumy-card'>
            <div className='post-header'>
              <Avatar className='special-icon-1'>K</Avatar>
              <h1>Krishna Bakshi</h1>
            </div>

            <div className='post-content'>
              <h2>Post content</h2>
            </div>

            <div className='post-others'>
              <div>
                <FavoriteBorderIcon />
              </div>

              <div>
                <ForumIcon />
              </div>

              <div>
                <SendIcon />
              </div>

              
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Posts