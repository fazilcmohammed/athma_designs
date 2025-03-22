import { useParams } from "react-router-dom";
import { productsByCountry } from "../assets/constant"; // Assuming you have the constant with the products

const CountryProducts = () => {
    const { countryName } = useParams(); // Extract the country name from the URL

    // Filter products by the selected country
    const filteredProducts = productsByCountry.filter(
        (product) => product.country === countryName
    );

    return (
        <section>
            <div className="px-6 md:px-20 py-6">
                {/* Heading */}
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Products from {countryName}
                </h1>

                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.length === 0 ? (
                        <p className="text-center text-gray-500">No products found for this country.</p>
                    ) : (
                        filteredProducts.map((product, index) => (
                            <div
                                key={index}
                                className="shadow-md bg-white transform transition duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-xl"
                            >
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-28 md:h-60 object-cover"
                                />
                                <h3 className="text-md font-semibold text-gray-700 px-3 py-2">
                                    {product.name}
                                </h3>
                                
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default CountryProducts;
