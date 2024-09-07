import FeaturedImage from '../assets/featured.jpg';

const Featured = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src={FeaturedImage} alt="Featured" className="rounded-3xl shadow-lg" />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Breaking Into Product Design</h2>
            <p className="text-gray-600 text-lg mb-4">
              Advice from Untitled Founder, Frankie. Learn how to get into product design and grow in the industry.
            </p>
            <a href="#" className="text-blue-600 hover:underline">Read more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
