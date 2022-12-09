import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <h1 className='bg-orange-500 font-bold flex justify-center p-3 ml-auto mr-auto mt-2 mb-2 rounded-lg w-[200px]'>Hacker News Clone</h1>
      <div className="bg-blue-100 m-2 p-4 rounded-lg text-center">
        <NavLink className="bg-blue-800 p-2 m-2 text-white font-semibold rounded-lg" to="/top" activeclassname="active"> Top Stories </NavLink>
        <NavLink className="bg-blue-800 p-2 m-2 text-white font-semibold rounded-lg" to="/new" activeclassname="active"> Latest Stories </NavLink>
        <NavLink className="bg-blue-800 p-2 m-2 text-white font-semibold rounded-lg" to="/best" activeclassname="active"> Best Stories </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Header;