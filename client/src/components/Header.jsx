import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="font-bold text-xl">Frontend Explorer</div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'} />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 relative">
          {/* Blog with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
              // onMouseLeave={() => setIsDropdownOpen(false)}
              className="text-gray-700 font-semibold flex hover:text-gray-900 focus:outline-none"
            >
              Blogs
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
            <a href="#" className="text-gray-700 font-semibold hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 font-semibold hover:text-gray-900">Products</a>

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

            <a href="#" className="text-gray-700 font-semibold hover:text-gray-900">Pricing</a>
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
