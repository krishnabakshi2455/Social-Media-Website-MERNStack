import React from 'react'
import OtherAccount from '../OtherAccounts/OtherAccount'
import './Posts.css'
import { Avatar } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ForumIcon from '@mui/icons-material/Forum';
interface RecipeReviewCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
}
const Posts: React.FC<RecipeReviewCardProps> = () => {
  return (
    <>
      <div>
        <div className='post-otheraccount-container'>
          <OtherAccount />
        </div>

        <div className='post-main-cover'>

          <div className='post-dumy-card'>
            {/* ================= */}

            <div className="card">
              <div className="cardHeader">
                <div className="avatar"><Avatar className='special-icon-1'>K</Avatar></div>
                <div className="cardInfo">
                  <h3>
                    {/* {title} */}
                    this is title
                    </h3>
                  <p>
                    {/* {date} */}
                    this is date

                  </p>
                </div>
              </div>
              
              <div>
                this is reel 
              </div>

              <div className="cardContent">
                <p className="cardText">
                  {/* {description} */}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, nobis!
                </p>
              </div>
              <div className="cardActions">
                <div className="iconButton"><FavoriteBorderIcon /></div>
                <div className="iconButton">
                  <ForumIcon />
                </div>
              </div>
            </div>
            {/* =============== */}


          </div>

        </div>
      </div>
    </>
  )
}

export default Posts