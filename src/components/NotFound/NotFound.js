import React from 'react';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
  return (
    <div>
      <div className=" mx-auto text-center flex justify-center">
        <img
          className="imagN text-center flex justify-center"
          style={{ marginTop: '130px' }}
          src="https://assets.materialup.com/uploads/06bd5e15-6377-4e38-bcc3-d716dba148ae/preview.jpg"
        ></img>
        <br />
      </div>
      {/* <Button variant="danger" className='text-center'><Link style={{ margin: '10px', textDecoration: 'none', color: 'white' }} to="/">Back to Home</Link></Button>{' '} */}
      {/* <button className="btn btn-primary" style={{ color: 'white' }}></button> */}
      <div className="text-center">
        <Link to="/" style={{ textAlign: 'center' }}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
            style={{ color: 'white' }}
          >
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
