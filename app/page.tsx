'use client';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';

export default function HomePage() {
  return (
    <div className="flex mt-6">
      <Sidebar />
      <ProductGrid />
    </div>
  );
}
