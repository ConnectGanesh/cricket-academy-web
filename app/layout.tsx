import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elite Cricket Academy',
  description: 'Premier cricket academy showcasing teams, players, matches, and achievements',
  keywords: ['cricket', 'academy', 'training', 'tournaments', 'players'],
  viewport: 'width=device-width, initial-scale=1',
  authors: [{ name: 'Cricket Academy Team' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">🏏</span>
              <h1 className="text-2xl font-bold">Elite Cricket Academy</h1>
            </div>
            <ul className="flex gap-6 flex-wrap justify-end">
              <li><a href="/" className="hover:text-gray-200">Home</a></li>
              <li><a href="/about" className="hover:text-gray-200">About</a></li>
              <li><a href="/teams" className="hover:text-gray-200">Teams</a></li>
              <li><a href="/players" className="hover:text-gray-200">Players</a></li>
              <li><a href="/matches" className="hover:text-gray-200">Matches</a></li>
              <li><a href="/coaches" className="hover:text-gray-200">Coaches</a></li>
              <li><a href="/achievements" className="hover:text-gray-200">Achievements</a></li>
              <li><a href="/tournaments" className="hover:text-gray-200">Tournaments</a></li>
              <li><a href="/gallery" className="hover:text-gray-200">Gallery</a></li>
              <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
            </ul>
          </div>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-gray-800 text-white mt-20 py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Elite Cricket Academy</h3>
                <p className="text-gray-400">Developing tomorrow's cricket champions today.</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="text-gray-400 space-y-2">
                  <li><a href="/teams" className="hover:text-white">Teams</a></li>
                  <li><a href="/players" className="hover:text-white">Players</a></li>
                  <li><a href="/matches" className="hover:text-white">Matches</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Info</h4>
                <ul className="text-gray-400 space-y-2">
                  <li><a href="/about" className="hover:text-white">About Us</a></li>
                  <li><a href="/coaches" className="hover:text-white">Coaches</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Connect</h4>
                <p className="text-gray-400">Follow us on social media</p>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="hover:text-white">Facebook</a>
                  <a href="#" className="hover:text-white">Instagram</a>
                  <a href="#" className="hover:text-white">Twitter</a>
                </div>
              </div>
            </div>
            <hr className="border-gray-700" />
            <div className="text-center text-gray-400 mt-8">
              <p>&copy; 2026 Elite Cricket Academy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
