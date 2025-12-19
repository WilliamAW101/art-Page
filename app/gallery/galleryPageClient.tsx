'use client';

export default function AboutPage() {
  const galleryItems = [
    { src: "/testArt.png", alt: "Artistic representation of hotdog", description: "Some Description" },
    { src: "/testArt.webp", alt: "Artistic representation of hotdog", description: "Some Description" },
    { src: "/hotdog.webp", alt: "Artistic representation of hotdog", description: "Some Description" },
    { src: "/testArt.png", alt: "Artistic representation of hotdog", description: "Some Description" },
    { src: "/testArt.webp", alt: "Artistic representation of hotdog", description: "Some Description" },
    { src: "/hotdog.webp", alt: "Artistic representation of hotdog", description: "Some Description" },
    { src: "/testArt.png", alt: "Artistic representation of hotdog", description: "Some Description" },
    { src: "/testArt.webp", alt: "Artistic representation of hotdog", description: "Some Description" },
    { src: "/hotdog.webp", alt: "Artistic representation of hotdog", description: "Some Description" },
    { src: "/testArt.png", alt: "Artistic representation of hotdog", description: "Some Description" },
    { src: "/testArt.webp", alt: "Artistic representation of hotdog", description: "Some Description" },
    { src: "/hotdog.webp", alt: "Artistic representation of hotdog", description: "Some Description" },
  ];

  return (
    <main>
        <div className='topMain'>
            <h1 className="headingFont text-5xl mb-6 animate-fade-inY p-40">
              Welcome to my Gallery Page
            </h1>
        </div>
        <div className="gap-6 grid grid-cols-4">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="pictureBackground animate-fade-inY p-10"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <img 
                src={item.src}
                alt={item.alt}
                className="mx-auto rounded-lg shadow-lg"
              />
              <p className="imageDescription">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className='p-[10%] bg-linear-to-b from-black to-red-500'>
        </div>
    </main>
  )
}