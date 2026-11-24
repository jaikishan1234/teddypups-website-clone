import Image from "next/image";

const PUPPIES = [
  {
    name: "Bella",
    breed: "Golden Retriever",
    src: "/images/puppies/golden-retriever/27b888_082e47dfd8144423a96dc70d966fa5b2-mv2.jpg",
    rotation: -3,
  },
  {
    name: "Max",
    breed: "Golden Retriever",
    src: "/images/puppies/golden-retriever/27b888_160a7ee974d74fc7ae452afc6e5fccea-mv2.jpg",
    rotation: 2,
  },
  {
    name: "Oliver",
    breed: "Golden Retriever",
    src: "/images/puppies/golden-retriever/27b888_522e394293a845bcae93adec46bf499c-mv2.jpg",
    rotation: -1,
  },
  {
    name: "Daisy",
    breed: "Labrador",
    src: "/images/puppies/labrador/b942a5_03ab53e8167c454eaf75e37491e51b03-mv2.jpg",
    rotation: 4,
  },
  {
    name: "Finn",
    breed: "Labrador",
    src: "/images/puppies/labrador/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg",
    rotation: -2,
  },
  {
    name: "Ruby",
    breed: "Labrador",
    src: "/images/puppies/labrador/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg",
    rotation: 1,
  },
  {
    name: "Lola",
    breed: "Poodle",
    src: "/images/puppies/poodle/edb2f5_02b95a69a2c24c7e81b60e6d8c01baf7-mv2.jpeg",
    rotation: -4,
  },
  {
    name: "Shadow",
    breed: "Poodle",
    src: "/images/puppies/poodle/edb2f5_37f5218f73e842b88ee3ae0c911bcafa-mv2.jpeg",
    rotation: 3,
  },
  {
    name: "Whitley",
    breed: "Poodle",
    src: "/images/puppies/poodle/edb2f5_6627857aca7e495ea37d9f62d814d323-mv2.jpeg",
    rotation: -1,
  },
] as const;

function PuppyCard({ puppy }: { puppy: (typeof PUPPIES)[number] }) {
  return (
    <div
      className="p-3 bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
      style={{ transform: `rotate(${puppy.rotation}deg)` }}
    >
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={puppy.src}
          alt={`${puppy.name} the ${puppy.breed}`}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-center mt-2 font-[var(--font-shantell)] text-[var(--teddy-secondary)] text-sm">
        {puppy.name}
      </p>
    </div>
  );
}

export default function PuppyGallery() {
  return (
    <section className="bg-[var(--teddy-cream)] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <p className="text-[var(--teddy-text)]/60 font-[var(--font-shantell)] text-lg mb-2">
            Our happy family
          </p>
          <h2 className="text-[var(--teddy-secondary)] font-[var(--font-fraunces)] text-3xl md:text-4xl font-bold mb-12">
            Puppy Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {PUPPIES.map((puppy) => (
            <PuppyCard key={puppy.name} puppy={puppy} />
          ))}
        </div>
      </div>
    </section>
  );
}