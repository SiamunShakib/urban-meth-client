import { useEffect, useState } from "react";
import { Link } from "react-router";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Total Product: {products.length}</h1>
      
      <div className="grid grid-cols-4 m-4">
        {products.map((product) => (
            <Link to={`/products/${product._id}`} key={product._id} className="border rounded-2xl overflow-hidden shadow m-4">
                <img src={product.images[0]} alt={product.name} className="w-full h-60 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500">{product.category}</p>

                    <div>
                        <button className="border py-1 px-4 rounded-sm mr-2">Buy Now</button>
                        <button className="border py-1 px-4 rounded-sm mr-2">Add to cart</button>
                    </div>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
