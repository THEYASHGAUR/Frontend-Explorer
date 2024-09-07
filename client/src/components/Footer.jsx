

const Footer = () => {
  return (
    <footer className="bg-black m-4 rounded-3xl text-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h5 className="text-lg font-semibold mb-4">Product</h5>
            <ul>
              <li className="my-4"><a href="#" className="hover:underline">Overview</a></li>
              <li className="my-4"><a href="#" className="hover:underline">Features</a></li>
              <li className="my-4"><a href="#" className="hover:underline">Solutions</a></li>
              <li className="my-4"><a href="#" className="hover:underline">Tutorials</a></li>
              <li className="my-4"><a href="#" className="hover:underline">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul>
              <li className="my-4"><a href="#" className="hover:underline">About us</a></li>
              <li className="my-4"><a href="#" className="hover:underline">Press</a></li>
              <li className="my-4"><a href="#" className="hover:underline">News</a></li>
              <li className="my-4"><a href="#" className="hover:underline">Media Kit</a></li>
              <li className="my-4"><a href="#" className="hover:underline my-4">Support</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Use Case</h5>
            <ul>
              <li className="my-4"><a href="#" className="hover:underline">About us</a></li>
              <li className="my-4"><a href="#" className="hover:underline">Press</a></li>
              <li className="my-4"><a href="#" className="hover:underline">News</a></li>
              <li className="my-4"><a href="#" className="hover:underline">Media Kit</a></li>
              <li className="my-4"><a href="#" className="hover:underline my-4">Support</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Resources</h5>
            <ul>
              <li className="my-4"><a href="#" className="hover:underline">About us</a></li>
              <li className="my-4"><a href="#" className="hover:underline">Press</a></li>
              <li className="my-4"><a href="#" className="hover:underline">News</a></li>
              <li className="my-4"><a href="#" className="hover:underline">Media Kit</a></li>
              <li className="my-4"><a href="#" className="hover:underline my-4">Support</a></li>
            </ul>
          </div>
          {/* Add more footer sections similarly */}
        </div>
        <div className="mt-8 text-center flex justify-between">
          <p className="font-bold">Frontend Explorer</p>

          <p>© 2023 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
