'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push('?' + params.toString());
  };

  return (
    <aside className="w-1/4 p-4">
      <div className="bg-blue-900 text-white p-4 rounded mb-4">
        <h2 className="text-lg font-bold mb-3">Filters</h2>
        <div className="mb-4">
          <p className="font-semibold">Category</p>
          {['all', 'electronics', 'clothing', 'home'].map(cat => (
            <label key={cat} className="block capitalize">
              <input
                type="radio"
                name="category"
                onChange={() => updateFilter('category', cat)}
                checked={searchParams.get('category') === cat || (!searchParams.get('category') && cat === 'all')}
              />{' '}
              {cat}
            </label>
          ))}
        </div>
        <div>
          <p className="font-semibold mb-1">Price</p>
          <input
            type="range"
            min="0"
            max="1000"
            defaultValue={searchParams.get('price') || '1000'}
            onChange={(e) => updateFilter('price', e.target.value)}
            className="w-full"
          />
          <p className="text-sm mt-1">Max: ${searchParams.get('price') || 1000}</p>
        </div>
      </div>

      <div className="bg-white text-black p-4 rounded shadow">
        <h3 className="font-bold mb-2">Cacyroy</h3>
        <div className="mb-2 space-y-1">
          {['All', 'Electronics', 'Clothing', 'Home'].map(b => (
            <label key={b} className="block">
              <input type="radio" name="brand" /> {b}
            </label>
          ))}
        </div>
        <select className="w-full border p-1 rounded">
          <option value="">5000</option>
        </select>
      </div>
    </aside>
  );
}
