import React, { useState } from 'react'
import './Signup.css'
import './Login.css'
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { SignUp } from '../../ReduxFolder/Redux-Authentication-SignUp/Authentication-SignUp-Store';


// Define the types for the form data
interface FormData {
  email: string;
  username: string;
  password: string;
}
// Define the form input types
interface SignUpFormInputs {
  email: string;
  password: string | number;
  username: string | null
}
const Signup: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()


  const dispatch = useDispatch();

  const delay = (d: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, d * 1000)
    });
  };

  const [loading, setloading] = useState(false)
  const LoadingToggle = () => {
    setloading(true)
  }

  const [IsSubmited, setIsSubmited] = useState(false)

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    await delay(4);
    // console.log(data);
    dispatch(SignUp({ email: data.email, password: data.password, username: data.username })); // this is where the data is send to redux just need to switch it with backend
    setloading(false)
    setIsSubmited(true)
  };
  
  setTimeout(() => {
    setIsSubmited(false)
  }, 3000);

  // const SingUpEmail = useSelector((state: RootState) => state.AuthenticationLogin.email)
  // const SignUpPassword = useSelector((state: RootState) => state.AuthenticationLogin.password)
  // const SignUpUserName = useSelector((state: RootState) => state.AuthenticationLogin.userName)

  // console.log(`this is SingUpEmail ${SingUpEmail} this is SignUpPassword ${SignUpPassword} this is SignUpUserName ${SignUpUserName} this data comes from signup`);

  return (
    <>
      <div className='Signup-main-div'>
        <div className='signup'>
          {/* <img src={InstaLogo} width={200} className='sidenav__logo' alt="notfound" /> */}

          <form onSubmit={handleSubmit(onSubmit)} className='signupForm'>

            <div className='h-16'>
              <input
                placeholder='Email'
                {...register("email", {
                  required: { value: true, message: "This Field Is Required" },
                  minLength: { value: 3, message: "Minimum Length is 3" },
                })}
                type="text"
                className='SignupInput'
              />

              {errors.email && <p className='text-red-600 text-sm '>{errors.email.message}</p>}
            </div>
           

            <div className='h-16'>
              <input
                placeholder='User Name'
                {...register("username", {
                  required: { value: true, message: "This Field Is Required" },
                  minLength: { value: 3, message: "Minimum Length is 3" },
                })}
                type="text"
                className='SignupInput'
              />

              {errors.username && <p className='text-red-600 text-sm '>{errors.username.message}</p>}
           </div>
         

            <div className='h-16 '>
              <input
                placeholder='Password'
                {...register("password", {
                  required: { value: true, message: "This Field Is Required" },
                  minLength: { value: 6, message: "Minimum Length is 6" }
                })}
                type="password"
                className='SignupInput'
              />

              {errors.password && <p className='text-red-600 text-sm '>{errors.password.message}</p>}
            </div>
         

            <div className='submitbtn-div'>
              <button onClick={ LoadingToggle} className='submitbtn' type='submit'>Sign Up</button>
              {loading ? <div className='text-yellow-500'>Loading...</div> : ""}
              {IsSubmited ? <div className='text-green-700'>Submitted Succesfully</div> : ""}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup;
