import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';
import { Bounce } from 'react-reveal';

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">The right price for your research.</h3>
          <p className="text-2xl">
            One of the best cloud management company of todays world.We offer so many package with
            reasonable price and no quality compromise.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <Bounce left>
            <div className="bg-white h-fit text-slate-900 mx-auto m-4 p-8 rounded-xl shadow-2xl relative w-3/4">
              <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
                Standard
              </span>
              <div>
                <p className="text-5xl font-bold py-4 flex">
                  $49<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span>
                </p>
              </div>
              <p className="text-2xl py-4 text-slate-500">
                One of the best Cloud Management Company.
              </p>
              <div className="text-2xl">
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  No compromise with quality.
                </p>
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Excellent Support System.
                </p>
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  No compromise with quality.
                </p>
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Excellent Support System.
                </p>
                <p className="flex py-3">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  No compromise with quality.
                </p>
                <button className="w-full py-2 mt-6">Get Started</button>
              </div>
            </div>
          </Bounce>
          <Bounce right>
            <div className="bg-white text-slate-900 h-fit mx-auto m-4 p-8 rounded-xl shadow-2xl relative w-3/4">
              <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
                Standard
              </span>
              <div>
                <p className="text-5xl font-bold py-4 flex">
                  $49<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span>
                </p>
              </div>
              <p className="text-2xl py-4 text-slate-500">
                One of the best Cloud Management Company.
              </p>
              <div className="text-2xl">
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  No compromise with quality.
                </p>
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Excellent Support System.
                </p>
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  No compromise with quality.
                </p>
                <p className="flex py-2">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  Excellent Support System.
                </p>
                <p className="flex py-3">
                  <CheckIcon className="w-8 mr-5 text-green-600" />
                  No compromise with quality.
                </p>
                <button className="w-full py-2 mt-6">Get Started</button>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
