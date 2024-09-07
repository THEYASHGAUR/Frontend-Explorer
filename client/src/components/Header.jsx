

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="font-bold text-xl">Frontend Explorer</div>
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-700 font-semibold hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 font-semibold hover:text-gray-900">Products</a>
          <a href="#" className="text-gray-700 font-semibold hover:text-gray-900">Blog</a>
          <a href="#" className="text-gray-700 font-semibold hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-700 font-semibold hover:text-gray-900">About us</a>
        </nav>
        <div className="flex space-x-4">
          <button className="text-gray-700 font-semibold hover:text-gray-900">Log In</button>
          <button className="bg-black text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-800">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
