import React from 'react';
import { useNavigate } from 'react-router-dom';
import trees from '../assets/trees.jpg';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full h-screen flex">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px] mt-24">
          <div className="w-full h-[550px] hidden md:block">
            <img className="w-full h-full" src={trees} alt="/" />
          </div>
          <div className="p-4 flex flex-col">
            <form>
              <h2 className="text-4xl font-bold text-center mb-8">Cloudy.</h2>
              <div>
                <input className="border p-2 mr-2 w-full mb-4" type="text" placeholder="Username" />
                <input className="border p-2 w-full mb-4" type="password" placeholder="Password" />
              </div>
              <button className="w-full py-2 my-4 bg-green-600 hover:bg-green-500">Sign In</button>
              <a className="text-center cursor-pointer">Forgot Username or Password?</a>
            </form>
            <button onClick={() => navigate('/register')} className="px-8 mt-7 py-3">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
