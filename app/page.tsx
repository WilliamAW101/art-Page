'use client';

export default function Home() {
  return (
    <main className="p-10 text-center bg-linear-to-b from-red-700 animate-fade-inZ">
        <h5 className="font-bold mb-6 animate-fade-inY">
          Artist and Graphic Designer
        </h5>
    
        <h1 className="text-5xl font-bold mb-6 animate-fade-inY">
          Welcome to My Artpage
        </h1>
        
        <p className="text-xl mb-8 animate-fade-inY">
          Smthn smthn blah blah
        </p>
        
        <button 
          onClick={() => alert('Button clicked!')}
          className="bg-black text-white px-8 py-3 rounded-lg animate-fade-inY"
        >
          Get Started
        </button>
    </main>
  )
}