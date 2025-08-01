import { useEffect, useState } from "react";
import useTheme from "../context/ThemeContext";

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
}

export const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(0, 6)))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="w-full text-[rgb(var(--text))] transition-colors duration-300 ease-in-out pt-5">
            <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-[rgb(var(--bg))] border rounded-lg shadow p-4 flex flex-col items-center"
                    >
                        <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
                        <h3 className="text-lg font-semibold mb-2 text-center">{product.title}</h3>
                        <p className="text-blue-700 dark:text-blue-400 font-bold">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};