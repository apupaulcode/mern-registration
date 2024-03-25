import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

const App = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err));
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Regester</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input 
             type="text"
             placeholder='Enter Name'
             autoComplete='off'
             name='email'
             className='form-control rounded-0'
             onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input 
             type="text"
             placeholder='Enter Email'
             autoComplete='off'
             name='name'
             className='form-control rounded-0'
             onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input 
             type="password"
             placeholder='Password'
             autoComplete='off'
             name='password'
             className='form-control rounded-0'
             onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button
           type='submit'
           className='btn btn-success w-100 rounded-0'
           >Regester</button>
        </form>
      </div>
    </div>
  )
}

export default App
