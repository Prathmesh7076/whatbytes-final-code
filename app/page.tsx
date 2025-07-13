'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SearchComponent() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      {q && <p>Search: {q}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchComponent />
    </Suspense>
  );
}
