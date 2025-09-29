import React from "react";
import Header from "../../Components/Shop/Header";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import Footer from "../../Components/Shop/footer";
import { CreateUser } from "../../Hooks/Createuser";
interface SignUpFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  location: string;
  password: string;
  repassword:string
}
const schema = yup.object({
    firstName:yup.string().required('Firstname is required'),
    lastName:yup.string().required('Lastname is required'),
    username:yup.string().min(3,'Username must be more than 3').max(12,'Username is too long').required('Username is required'),
    email:yup.string().test("is-gmail", "email must be end by @gmail.com", (value) =>
     value ? value.toLowerCase().endsWith("@gmail.com") : false).required('Email is required'),
    location:yup.string().required('City is required'),
    password:yup.string().min(8,'Password must be at least 8 characters').max(20,'Password must be at most 20 characters').matches(/[a-z]/,'Password must have a lowercase letter').matches(/[A-Z]/,'Password must have an uppercase letter').matches(/[0-9]/,'Password must have a number').matches(/[!@#$%^&*]/,'Password must have a special character').required("Password is required"),
    repassword:yup.string().oneOf([yup.ref('password')],'Passwords must match').required('Please confirm your password')
  })
const SignUp = () => {
  const createuser = CreateUser()
  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()
  const onsubmit=async(data:SignUpFormData)=>{
      const {repassword,...userdata} = data
      const usertosend={
        ...userdata,
        role:'user' as const
      }
      
      createuser.mutate(usertosend,{
        onSuccess:()=>{
          navigate('/login')
        },
        onError:(err:unknown)=>{
          alert(err)
        }
      })
   
  }
    return ( 
        <React.Fragment>
          <title>Sign Up</title>
            <Header/>
            <section className="flex flex-col items-center pt-6 sm:w-full w-[648px]">
  <div
    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an
        account
      </h1>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
          <input type="text" {...register('firstName')} name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Emelia"  />
          {errors.firstName&&<span className=" text-red-500 font-bold">{errors.firstName.message}</span>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
          <input type="text" {...register("lastName")} name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Erickson"  />
          {errors.lastName&&<span className=" text-red-500 font-bold">{errors.lastName.message}</span>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input type="text" {...register('username')} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="emelia_erickson24"  />
          {errors.username&&<span className=" text-red-500 font-bold">{errors.username.message}</span>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" {...register('email')} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="EmeliaErickson@gmail.com"  />
          {errors.email&&<span className=" text-red-500 font-bold">{errors.email.message}</span>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
          <input type="text" {...register("location")} name="location" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New York"  />
          {errors.location&&<span className=" text-red-500 font-bold">{errors.location.message}</span>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" {...register("password")} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
          {errors.password&&<span className=" text-red-500 font-bold">{errors.password.message}</span>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-Password</label>
          <input type="password" {...register("repassword")} name="repassword" id="repassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
          {errors.repassword&&<span className=" text-red-500 font-bold">{errors.repassword.message}</span>}
        </div>
        <input type="submit" value={'Create an account'} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <Link className="font-medium text-blue-600 hover:underline dark:text-blue-500" to={'/login'}>Sign in here</Link>
        </p>
      </form>
    </div>
  </div>
</section>
<Footer/>
        </React.Fragment>
     );
}
 
export default SignUp;