import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div classname='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-7'>
      <span className='text-blue-700'>Sign</span>{' '}
      <span className='text-blue-500'>up</span>
    </h1>
    
    <form className='flex flex-col gap-6 max-w-md mx-auto'> {/*max-w-md limits the width to a "medium" size (~28rem).
mx-auto centers the container horizontally within its parent,auto set margin from left and right */}
      <input type="text" placeholder='username' classname='border p-3 round-lg' id='username'/>
      <input type="email" placeholder='email' classname='border p-3 rounded-lg' id='email'/>
      <input type="password" placeholder='password' classname='border p-3 rounded-lg' id='password'/>
      <button className='bg-sky-200 shadow-md text-blue-700 font-semibold p-3 rounded-lg hover:opacity-90'>Sign up</button>
    </form>
    <p className='text-center mt-4'>
      Already have an account?{' '}
      <Link to='/sign-in' className='text-blue-600 hover:underline'>
        Sign in
      </Link> </p>
    </div>
      
    
  )
}
