import { useEffect, useState } from "react"

export const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then(setProducts)
    }, [])
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.slice(0, 6).map((product: any) => (
                    <div key={product.id} className="p-4 border rounded shadow">
                        <img src={product.image} alt={product.title} className="w-64 h-64 object-cover" />
                        <h2 className="font-semibold">{product.title}</h2>
                        <p>${product.price}</p>
                        <button className="text-large md:text-sm">Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}