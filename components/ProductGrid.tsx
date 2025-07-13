'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useCartStore } from '../store/cartStore';

const allProducts = [
  { id: 1, name: "Running Shoes", price: 99, category: "clothing", img: "/shoes.png" },
  { id: 2, name: "Wireless Headphones", price: 89, category: "electronics", img: "/headphones.png" },
  { id: 3, name: "Backpack", price: 129, category: "home", img: "/backpack.png" },
  { id: 4, name: "Smartwatch", price: 249, category: "electronics", img: "/smartwatch.png" },
  { id: 5, name: "Sunglasses", price: 149, category: "clothing", img: "/sunglasses.png" },
  { id: 6, name: "Digital Camera", price: 499, category: "electronics", img: "/camera.png" },
  { id: 7, name: "T-shirt", price: 29, category: "clothing", img: "/tshirt.png" },
  {
    id: 8,
    name: "Smartphone",
    price: 699,
    category: "electronics",
    img: "/phone.png",
    featured: true,
    description: "Lorem ipsum dolor amet, consectetur euismod.",
    rating: "★★★★★"
  }
];

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const addToCart = useCartStore(state => state.addToCart);

  const selectedCategory = searchParams.get('category') || 'all';
  const maxPrice = parseInt(searchParams.get('price') || '1000');

  const filtered = allProducts.filter(p =>
    (selectedCategory === 'all' || p.category === selectedCategory) && p.price <= maxPrice
  );

  return (
    <section className="w-3/4 p-4 grid grid-cols-3 gap-4">
      {filtered.length === 0 ? (
        <p>No products found 😢</p>
      ) : filtered.map(p => (
        <div key={p.id} className={`bg-white rounded shadow p-4 ${p.featured ? 'col-span-3 grid grid-cols-2 items-center gap-4' : ''}`}>
          <Image src={p.img} alt={p.name} width={200} height={200} className="object-cover" />
          <div>
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-blue-800 font-bold">${p.price}</p>
            {p.featured && (
              <>
                <p className="text-sm my-1">{p.description}</p>
                <p className="text-yellow-400">{p.rating}</p>
              </>
            )}
            <button
              onClick={() => addToCart({ id: p.id, name: p.name, price: p.price, img: p.img })}
              className="bg-blue-700 text-white mt-2 px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
