import '../styles/globals.css';
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
            <div className="headingFont flex gap-6 ml-auto pt-2">
              <Link href="/"><h2 className="font-bold hover:opacity-40 transition">Home</h2></Link>
              <Link href="/gallery"><h2 className="font-bold hover:opacity-40 transition">Gallery</h2></Link>
              <Link href="/animations"><h2 className="font-bold hover:opacity-40 transition">Animations</h2></Link>
              <Link href="/about"><h2 className="font-bold hover:opacity-40 transition">About</h2></Link>
              <Link href="/contact"><h2 className="font-bold hover:opacity-40 transition">Contact</h2></Link>
            </div>
          </header>
        
        {children}
        
        <footer className="bg-linear-to-b from-gray-900 to-black-900 text-white p-6 pt-[3.5%]">
  <div className="flex justify-between items-start mb-4">
    {/* Left side */}
    <div className="text-left">
      <h1>
        Interested in commissioning me?
      </h1>
      <Link href="/">
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors mt-2 ml-[20%]">
          Contact Me!
        </button>
      </Link>
    </div>

    {/* Right side */}
    <div className="text-right">
      <h1 className='mr-[25%]'>
        Follow me on social media!
      </h1>
      <div className="flex gap-4 justify-end mt-2">
        <Link href="https://www.instagram.com/" target="_blank"><img src="/icons8-instagram-48.png" alt="Instagram" /></Link>
        <Link href="https://www.tiktok.com/login" target="_blank"><img src="/icons8-twitter-48.png" alt="TikTok" /></Link>
        <Link href="https://discord.com/" target="_blank"><img src="/icons8-discord-logo-48.png" alt="Discord" /></Link>
        <Link href="https://linktr.ee/" target="_blank"><img src="/icons8-artstation-48.png" alt="LinkTree" /></Link>
      </div>
    </div>
  </div>

  {/* Copyright - now properly centered */}
  <div className="text-center mt-6">
    <p>&copy; 2025 William Angelo White</p>
  </div>
</footer>
      </body>
    </html>
  )
}