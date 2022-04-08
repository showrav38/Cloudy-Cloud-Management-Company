import React from 'react';
import { Fade } from 'react-reveal';

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Trusted by developers across the world</h2>
          <p className="text-2xl py-6 text-gray-500">
            One of the best cloud management company of todays world.We offer so many package with reasonable price and no quality compromise.
          </p>
        </div>

        {/* <Fade bottom> */}
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <Fade left>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-5xl font-bold text-indigo-600">100%</p>
              <p className="text-gray-400 mt-2">Completion</p>
            </div>
          </Fade>
          <Fade top>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-5xl font-bold text-indigo-600">24/7</p>
              <p className="text-gray-400 mt-2">Delivery</p>
            </div>
          </Fade>
          <Fade left>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-5xl font-bold text-indigo-600">100K</p>
              <p className="text-gray-400 mt-2">Transactions</p>
            </div>
          </Fade>
        </div>
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default About;
