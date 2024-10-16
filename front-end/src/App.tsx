import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import { useSelector } from 'react-redux'
import Authentication from './Components/Authentication/Authentication'
import { RootState } from './ReduxFolder/store'


const App: React.FC = () => {

  const SingUpUsername = useSelector((state: RootState) => state.AuthenticationSignup.username)

  const SingUppassword = useSelector((state: RootState) => state.AuthenticationSignup.password)

  const SingUemail = useSelector((state: RootState) => state.AuthenticationSignup.email)

  console.log(`this is sign up email (${SingUemail}) this is sign up password (${SingUppassword}) this is sign up username (${SingUpUsername}) this data comes from app component`);

  // const LoginEmail = useSelector((state: RootState) => state.AuthenticationLogin.email)

  // const Loginpassword = useSelector((state: RootState) => state.AuthenticationLogin.password)

  // console.log(`this is login email (${LoginEmail}) this is login password (${Loginpassword})  this data comes from app component`);

  return (
    <>
    <Home/>
      {/* {
        SingUppassword && SingUppassword && LoginEmail && Loginpassword ? <Home /> : <Authentication />
      } */}
    </>
  )
}

export default App
