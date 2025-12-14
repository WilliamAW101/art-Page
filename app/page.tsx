'use client';

export default function Home() {
  return (
    <main>
      <div className="p-10 text-center bg-linear-to-b from-red-700 animate-fade-inZ">
        <h5 className="mb-6 animate-fade-inY pt-[20%]">
          Artist and Graphic Designer
        </h5>
    
        <h1 className="headingFont text-5xl mb-6 animate-fade-inY">
          Welcome to My Artpage
        </h1>

        <p className="text-xl mb-8 animate-fade-inY">
          Smthn smthn blah blah
        </p>

        <button 
          onClick={() => alert('Button clicked!')}
          className="bg-black text-white px-8 py-3 rounded-lg animate-fade-inY hover:bg-gray-800 transition-colors"
        >
          Get Started
        </button>

        <div className="p-[20%]"></div>
      </div>
      
      <h2 className="text-white text-center text-4xl font-bold mt-16 animate-fade-inY">
        Featured Works
      </h2>

      <div className="mt-10 bg-linear-to-b to-blue-950 from-gray p-6">
        <div className="gap-6 grid grid-cols-2 animate-fade-inY">
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
        <h1 className="animate-fade-inY text-white text-center pt-10 text-2xl font-bold hover:opacity-70 transition cursor-pointer">
          View all works
        </h1>
      </div>

      <div className="p-[10%] bg-linear-to-b from-blue-950 to-red-700">
        <h1 className="text-center text-5xl headingFont text-white animate-fade-inY pb-10">
          Key Skills
        </h1>
        <div className="gap-6 grid grid-cols-3 animate-fade-inY">
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