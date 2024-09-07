// import stock from '../assets/stock.jpg';
import stock1 from '../assets/stock1.jpg';
import stock2 from '../assets/stock2.jpg';
import stock3 from '../assets/stock3.jpg';

const MainSection = () => {
    const posts = [
        { title: "Migrating to Linear 101", author: "Jonathan Wills", date: "19 Jan 2022", image: "../assets/stock.jpg" },
        { title: "Building your API Stack", author: "Lana Steiner", date: "18 Jan 2022", image: { stock1 } },
        { title: "Building your API Stack", author: "Lana Steiner", date: "18 Jan 2022", image: { stock2 } },
        { title: "Building your API Stack", author: "Lana Steiner", date: "18 Jan 2022", image: { stock3 } },
        { title: "Building your API Stack", author: "Lana Steiner", date: "18 Jan 2022", image: { stock3 } },
        { title: "Building your API Stack", author: "Lana Steiner", date: "18 Jan 2022", image: { stock3 } },
        { title: "Building your API Stack", author: "Lana Steiner", date: "18 Jan 2022", image: { stock3 } },
        { title: "Building your API Stack", author: "Lana Steiner", date: "18 Jan 2022", image: { stock3 } },
        // Add more blog posts similarly
    ];

    return (
        <section className="bg-white py-16">
            <div className="container  px-6">
                <h2 className="text-xl font-serif font-semibold text-gray-800 mb-8 lg:mx-36 mx-3 md:mx-20">Recent Blog Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-36 mx-3 md:mx-20">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg">
                            <img src={stock3} alt={post.title} className="w-full h-[200px] object-cover rounded-xl" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.author} &middot; {post.date}</p>
                                <a href="#" className="text-blue-600 hover:underline">Read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-center m-10'>

                <button className='bg-black text-center text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-800'>Load more...</button>
            </div>
        </section>
    );
};

export default MainSection;
