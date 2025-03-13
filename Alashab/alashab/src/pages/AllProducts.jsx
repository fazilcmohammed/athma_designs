import { productsByCountry } from "../assets/constant";
import { Link } from "react-router-dom";
import AboutHeroSection from "../components/AboutHeroSection";

const AllProducts = () => {
    return (
        <section>
            <AboutHeroSection page="All Products"/>
            <div className="px-6 md:px-20 py-6">
    {/* Heading */}
    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">All Products</h1>

    {/* Products Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productsByCountry.map((product, index) => (
            <div 
                key={index} 
                className="  shadow-md bg-white transform transition duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-xl"
            >
                <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-60 object-cover"
                />
                <h3 className="text-md font-semibold text-gray-700 px-3 py-2">{product.name}</h3>
                {/* <p className="text-sm text-gray-500">{product.country}</p> */}
            </div>
        ))}
    </div>

    {/* Country Filter Section */}
    <h2 className="text-2xl font-semibold text-center text-gray-700 mt-10 mb-5">Browse by Country</h2>
    <div className="flex flex-wrap justify-center gap-4 mb-10">
        {[...new Set(productsByCountry.map((product) => product.country))].map((country, index) => (
            <Link 
                key={index} 
                to={`/country/${country}`} 
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition duration-300"
            >
                {country}
            </Link>
        ))}
    </div>
</div>

        </section>
    );
};

export default AllProducts;
