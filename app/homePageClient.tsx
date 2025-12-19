'use client';
import { useScrollAnimation } from '../hooks/scrollAnimation';
import Link from 'next/link'

export default function Home() {
  const title = useScrollAnimation();
  const works = useScrollAnimation();
  const skills = useScrollAnimation();
  return (
    <main>
      <div className="topMain">
        <div 
          ref={title.ref}
          className={`transition-opacity duration-1000 ${title.isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="mb-6 animate-fade-inY pt-[20%]">
            Artist and Graphic Designer
          </p>
      
          <h1 className="headingFont text-5xl mb-6 animate-fade-inY">
            Welcome to My Artpage
          </h1>
    
          <p className="text-xl mb-8 animate-fade-inY">
            Smthn smthn blah blah
          </p>

          <Link href="#featuredWorks">
            <button className="bg-black text-white px-8 py-3 rounded-lg animate-fade-inY hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </Link>
        </div>
        <div className="p-[15%]"></div>
      </div>
      
      <h2 id='featuredWorks' className={`text-white text-center text-4xl font-bold mt-16 animate-fade-inY ${works.isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
        Featured Works
      </h2>

      <div className="mt-10 bg-linear-to-b to-blue-950 from-gray p-6">
        <div
          ref={works.ref} 
          className={`gap-6 grid grid-cols-3 animate-fade-inY ${works.isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
          <div className="pictureBackground">
            <img 
              src="/testArt.png" 
              alt="Artistic representation of hotdog" 
              className="mx-auto rounded-lg shadow-lg"
            />
            <p className="imageDescription">
              Some Description
            </p>
          </div>
          <div className="pictureBackground">
            <img 
              src="/testArt.webp" 
              alt="Artistic representation of hotdog" 
              className="mx-auto rounded-lg shadow-lg"
            />
            <p className="imageDescription">
              Some Description
            </p>
          </div>
          <div className="pictureBackground">
            <img 
              src="/hotdog.webp" 
              alt="Artistic representation of hotdog" 
              className="mx-auto rounded-lg shadow-lg"
            />
            <p className="imageDescription">
              Some Description
            </p>
          </div>
        </div>
        <Link href="/gallery">
          <h2 className={`animate-fade-inY text-white text-center pt-10 text-2xl font-bold hover:opacity-70 transition cursor-pointer
            ${works.isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
            View all works
          </h2>
        </Link>
      </div>

      <div className="p-[10%] bg-linear-to-b from-blue-950 to-red-700">
        <h2 className={`text-center text-5xl headingFont text-white animate-fade-inY pb-10 ${skills.isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
          Key Skills
        </h2>
        <div
          ref={skills.ref} 
          className={`gap-6 grid grid-cols-3 animate-fade-inY ${skills.isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
          <div className="skillBox">
            <h2 className="text-2xl font-bold mb-4">Digital Painting</h2>
            <p>
              Creating vibrant and detailed digital artworks using various software tools.
            </p>
          </div>
          <div className="skillBox">
            <h2 className="text-2xl font-bold mb-4">Graphic Design</h2>
            <p>
              Designing visually appealing graphics for branding, marketing, and promotional materials.
            </p>
            </div>
          <div className="skillBox">
            <h2 className="text-2xl font-bold mb-4">3D Modeling</h2>
            <p>
              Crafting intricate 3D models for animations, games, and virtual environments.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}