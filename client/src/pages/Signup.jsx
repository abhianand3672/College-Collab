import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";

export default function Signin() {
  const [formData, SetFormData] = useState({})
  const navigate = useNavigate();

  const handleChange = (e) => { 
       
    SetFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (res.ok) {
      navigate('/sign-in');
    }
    console.log(data); 
   
  }
  console.log(formData); {/* This will log the form data to the console whenever it changes */}

  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-7'>
      <span className='text-blue-700'>Sign</span>{' '}
      <span className='text-blue-500'>up</span>
    </h1>
    
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 max-w-md mx-auto'> {/*max-w-md limits the width to a "medium" size (~28rem).
mx-auto centers the container horizontally within its parent,auto set margin from left and right */}
      <input type="text" placeholder='username' className='border p-3 round-lg' id='username' onChange={handleChange}/>
      <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
      <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
      <button className='bg-sky-200 shadow-md text-blue-700 font-semibold p-3 rounded-lg hover:opacity-90'>Sign up
      </button>
    </form>
    <p className='text-center font-semibold mt-4'>
      Already have an account?{' '}
      <Link to='/sign-in' className='text-blue-600 font-bold hover:underline'>
        Sign in
      </Link> </p>
    </div>
      
    
  )
}

