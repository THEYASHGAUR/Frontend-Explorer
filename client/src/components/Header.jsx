import { useState } from 'react';
// import Link from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className=" mx-auto flex items-center lg:justify-between justify-between  py-4 px-6">
        <div className="font-bold text-xl">Frontend Explorer</div>



        {/* Desktop Menu */}
        <nav className="hidden lg:flex justify-around space-x-6 ">
          {/* Blog with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
              // onMouseLeave={() => setIsDropdownOpen(false)}
              className="text-gray-700 font-semibold flex hover:text-gray-900 focus:outline-none"
            >
              Blogs
              {/* blog dropdown icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="3"
                className="ml-2 mt-3 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M0 0L3 3L6 0"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Latest Posts</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Categories</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Popular</a>
              </div>
            )}
          </div>
          <a href="#" className="text-gray-700 font-semibold hover:text-gray-900">About us</a>
        </nav>


        <div className='flex items-center  '>

          {/* search icon */}
          <div onClick={toggleSearch} className=' cursor-pointer hover:bg-slate-100 rounded-lg lg:px-2  lg:-mr-[400px] inline-block   '>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="17"
              height="35"
              viewBox="0 0 17 17"
              fill="none"
              role="img"
              className="icon nav-v2-search__icon"
            >
              <path
                d="M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z"
                stroke="#6E6D7A"
                strokeWidth="2.0"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M12.814 12.8132L15.5 15.4999"
                stroke="#6E6D7A"
                strokeWidth="2.0"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Pop-up Search Bar */}
          {isSearchOpen && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-start  justify-center py-32 ">
              <div className="bg-white  p-6 rounded-lg w-full mx-5 h-42 max-w-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Search</h2>
                  <button onClick={toggleSearch} className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Type a command or search..."
                />
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          {/* hamburger icon */}
          <div className="lg:hidden  p-4">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'} />
              </svg>
            </button>
          </div>

        </div>





        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4">

          <button className="text-gray-700 font-semibold hover:text-gray-900">Log In</button>
          <button className="bg-black text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-800">Sign up</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <nav className="flex flex-col items-center space-y-4 mt-4">

            {/* Blog with Dropdown in Mobile */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 font-semibold hover:text-gray-900 focus:outline-none"
              >
                Blog
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-white shadow-lg rounded-lg py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Latest Posts</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Categories</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Popular</a>
                </div>
              )}
            </div>


            <a href="#" className="text-gray-700 font-semibold hover:text-gray-900">About us</a>
            <div className="flex space-x-4">
              <button className="text-gray-700 font-semibold hover:text-gray-900">Log In</button>
              <button className="bg-black text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-800">Sign up</button>
            </div>
          </nav>
        </div>
      )}
    </header>

  );
};

export default Header;
