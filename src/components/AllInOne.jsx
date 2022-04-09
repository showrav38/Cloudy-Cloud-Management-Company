import React, { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const AllInOne = () => {
  const [allDetails, setAllDetails] = useState([]);

  useEffect(() => {
    fetch('./allinOne.JSON')
      .then(res => res.json())
      .then(data => setAllDetails(data));
  }, []);
  return (
    <div id='plat' name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          One of the best cloud management company of todays world.We offer so many package with
          reasonable price and no quality compromise.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {allDetails.map(details => (
            <div className="flex">
              <div>
                <CheckIcon className="w-7 mr-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{details.name}</h3>
                <p className="text-lg pt-2 pb-4">{details.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
