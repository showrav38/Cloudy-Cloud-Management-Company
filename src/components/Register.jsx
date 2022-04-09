import React from 'react';
import trees from '../assets/trees.jpg';
const Register = () => {
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
                <input className="border p-2 w-full mb-4" type="email" placeholder="Email" />
                <input className="border p-2 w-full col-start-2" type="password" placeholder="Password" />
              </div>
            </form>
            <button className="px-8 mt-7 py-3 mt-5">Sign Up</button>
            <a className="text-center cursor-pointer mt-5">Forgot Username or Password?</a>
            <button className="w-full py-2 my-4 bg-green-600 hover:bg-green-500">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
