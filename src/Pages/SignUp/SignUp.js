import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link , useNavigate } from "react-router-dom";
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../Hooks/useToken';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser , googleLogIn } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    if(token){
      navigate('/');
  }
    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { 
                      saveUser(data.name, data.email);

                    })
                    .catch(err => console.log(err));
                    
                
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message);
            });
    }

    const saveUser = (name, email) =>{
      const user ={name, email};
      fetch('https://dentists-portal-server.vercel.app/users', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
          setCreatedUserEmail(email);
      })
  }

    const handleGoogleSignIn = () => {
        googleLogIn()
        .then(result => {
            const user = result.user;
            navigate('/');
        })
        .catch(err => console.error(err))
    }

   
    return (
        <div className="h-[800px] flex justify-center items-center text-black">
        <div className='w-96 p-7 '>
          <h2 className="text-xl text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs ">
              <label className="label"><span className="label-text text-black">Name</span></label>
              <input type="text" className="input input-bordered input-accent w-full max-w-xs"
              {...register("name", {
                required: "Name is Required"
            })}
              />
              {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs ">
              <label className="label"><span className="label-text text-black">Email</span></label>
              <input type="email" className="input input-bordered input-accent w-full max-w-xs" 
              {...register("email",{ required: "Email Address is required"})
              }/>
              {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text text-black">Password</span></label>
              <input type="password" className="input input-bordered input-accent w-full max-w-xs" 
              {...register("password",
              { required: "Password Is Required",
                minLength: { value: 6, message: "Password must be 6 characters or longer" },
                pattern: {value : /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                message: "Password must have at least a uppercase, a lowercase, a number and a special characters"}
              })}/>
              {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
            </div>
            <input className='btn btn-accent w-full mt-4 text-white' value="Sign Up" type="submit"/>
            {signUpError && <p className='text-red-600'>{signUpError}</p>}
          </form>
          <p>Already Have An Account?<Link className='text-secondary' to="/login">Please Login</Link></p>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className='btn btn-outline w-full text-black'>CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    );
};

export default SignUp;