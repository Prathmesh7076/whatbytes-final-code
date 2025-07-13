'use client';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 flex items-center justify-between px-8">
      <div className="font-bold text-xl">Logo</div>
      <input
        type="text"
        placeholder="Search for products..."
        className="w-1/2 p-2 rounded text-black"
      />
      <Link href="/cart">
        <button className="flex items-center gap-2 bg-blue-800 px-4 py-2 rounded">
          <ShoppingCart size={20} />
          Cart
        </button>
      </Link>
    </header>
  );
}
