import './globals.css';
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <header className="bg-linear-to-b from-black-900 to-gray-900 text-white py-6 pr-6 flex">
            <Link href="/"><h1 className="text-4xl pl-[10%] pr-[50%] hover:opacity-80 transition">LOGO</h1></Link>
            <div className="flex gap-6 ml-auto pt-2">
              <Link href="/"><h2 className="font-bold hover:opacity-40 transition">Home</h2></Link>
              <Link href="/"><h2 className="font-bold hover:opacity-40 transition">Gallery</h2></Link>
              <Link href="/"><h2 className="font-bold hover:opacity-40 transition">Animations</h2></Link>
              <Link href="/"><h2 className="font-bold hover:opacity-40 transition">About</h2></Link>
              <Link href="/"><h2 className="font-bold hover:opacity-40 transition">Contact</h2></Link>
            </div>
          </header>
        
        {children}
        
        <footer className="bg-linear-to-b from-gray-900 to-black-900 text-white p-6 text-center pt-[3.5%]">
          <p>&copy; 2025 William Angelo White </p>
        </footer>
      </body>
    </html>
  )
}