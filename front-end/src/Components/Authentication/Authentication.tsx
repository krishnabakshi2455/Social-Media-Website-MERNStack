import React, { useState } from 'react'
import './Authentication.css'
import { Button } from '@mui/material'
import Login from './Login'
import SignUp from './SignUp'
import LoginImg from '../../assets/login-img.jpg'
import SignupImg from '../../assets/signup-img.jpg'

const Authentication: React.FC = () => {

  const [actvie, setactvie] = useState("login")

  const handlechange = () => {
    if (actvie === "login") {
      setactvie("signup");
    } else {
      setactvie("login");
    }
  }

  return (
    <>
      <div className="authentication">
        <div className="auth__left">
          <img src={actvie === 'login' ? LoginImg : SignupImg} alt="Login" />
        </div>

        <div className="auth__right">
          {actvie === 'login' ? <Login /> : <SignUp />}

          <div className="auth__more">
            <span>
              {actvie === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <Button variant="text" onClick={handlechange}>
                    Sign Up
                  </Button>
                </>
              ) : (
                <>
                  Have an account?{' '}
                  <Button variant="text" onClick={handlechange}>
                    Log In
                  </Button>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Authentication
