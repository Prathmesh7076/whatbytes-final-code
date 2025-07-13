'use client';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-3 text-sm gap-4">
        <div>
          <h4 className="font-bold mb-2">Filters</h4>
          <p>All</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">About Us</h4>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <p>🔵 Facebook</p>
          <p>🐦 Twitter</p>
          <p>📸 Instagram</p>
        </div>
      </div>
      <p className="text-center mt-4 text-xs text-gray-300">&copy; 2024 American</p>
    </footer>
  );
}
