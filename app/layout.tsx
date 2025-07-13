import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f6f9ff] text-gray-800">
        <Header />
        <main className="min-h-screen max-w-7xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
