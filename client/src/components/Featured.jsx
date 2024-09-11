import FeaturedImage from '../assets/featured.jpg';

const Featured = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className=" md:flex-row items-center">
            <img src={FeaturedImage} alt="Featured" className="rounded-3xl  shadow-lg" />
          {/* <div className="md:w-1/2">
          </div> */}
          <div className="md:w-1/2 -mt-28 z-10 bg-white md:-mt-60 md:pl-16">
            <h2 className="text-4xl font-bold text-white mb-4 lg:text-4xl sm:text-xl">Breaking Into Product Design</h2>
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
