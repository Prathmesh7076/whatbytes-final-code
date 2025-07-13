'use client';
import { useCartStore } from '../../store/cartStore';
import Image from 'next/image';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex items-center gap-4 border p-4 rounded">
              <Image src={item.img} alt={item.name} width={80} height={80} />
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p>${item.price}</p>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 border rounded p-1 mt-1"
                />
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-lg">Total: ${total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
}
