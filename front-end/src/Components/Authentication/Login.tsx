import React,{useState} from 'react'
import './Login.css'
import { useForm, SubmitHandler } from "react-hook-form"
import {  useDispatch } from 'react-redux';
import { LogIn } from '../../ReduxFolder/Redux-Authentication-LogIn/Authentication-LogIn-Store';
// import { RootState } from '../../ReduxFolder/store';



// Define the form input types
interface LoginFormInputs {
  email: string;
  password: string | number;
}

const Login: React.FC = () => {
  // Initialize useForm with types
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting }
  } = useForm<LoginFormInputs>();

  const dispatch = useDispatch();

  // Delay function for async form submission
  const delay = (d: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };



  // const LoggedInEmail = useSelector((state: RootState) => state.AuthenticationLogin.email)
  // const LoogedInPassword = useSelector((state: RootState) => state.AuthenticationLogin.password)
  
  // console.log(`this is loggedinemail ${LoggedInEmail} this is LoggedInpassword ${LoogedInPassword} this data comes from login`);

  const [loading, setloading] = useState(false)
  const LoadingToggle = ()=>{
    setloading(true)
  }

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    await delay(2);
    // console.log(data);
    dispatch(LogIn({ email: data.email, password: data.password })); // this is where the data is send to redux just need to switch it with backend
    setloading(false)
  };

  return (
    <>
      <div className='login'>
        {/* <img src={InstaLogo} width={200} className='sidenav__logo' alt="notfound" /> */}

        <form onSubmit={handleSubmit(onSubmit)} className='loginForm'>
          

          <div className='h-16'>
            <input
              placeholder='email'
              {...register("email", {
                required: { value: true, message: "This Field Is Required" },
                minLength: { value: 3, message: "Minimum Length is 3" }
              })}
              type="email"
              className='LoginInput'
            />
            {errors.email && <p className='text-red-600 text-sm font-medium'>{errors.email.message}</p>}
          </div>

          

          <div className='h-16'>
            <input
              placeholder='Password'
              {...register("password", {
                required: { value: true, message: "This Field Is Required" },
                minLength: { value: 6, message: "Minimum Length is 6" }
              })}
              type="password"
              className='LoginInput'
            />
            
            {errors.password && <p className='text-red-600 text-sm font-medium'>{errors.password.message}</p>}
          </div>

          <button onClick={LoadingToggle} disabled={isSubmitting} className='submitbtnl' type='submit'>
            Log In
          </button>
          {/* {isSubmitting && <div className='text-green-700'>Loading...</div>} */}
          {loading? <p className='text-yellow-500'>Loading...</p>:""}
        </form>
      </div>
    </>
  );
};

export default Login;
