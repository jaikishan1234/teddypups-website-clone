import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

interface GoneHomeEntry {
  name: string;
  breed: string;
  image: string;
  family: string;
  date: string;
}

const goneHome: GoneHomeEntry[] = [
  {
    name: "Harley",
    breed: "Golden Retriever",
    image: "/images/puppies/golden-retriever/27b888_74e15c47a77b48a39e5174d2657bc417-mv2.jpg",
    family: "The Johnson Family",
    date: "March 2024",
  },
  {
    name: "Joey",
    breed: "Labrador",
    image: "/images/puppies/labrador/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg",
    family: "The Ahmed Family",
    date: "February 2024",
  },
  {
    name: "Willow",
    breed: "Poodle",
    image: "/images/puppies/poodle/edb2f5_adf88f7400c848249d60698fca0336e9-mv2.jpeg",
    family: "The Chen Family",
    date: "January 2024",
  },
];

export default function GoneHome() {
  return (
    <section className="bg-[var(--teddy-cream)] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Heading area */}
        <div className="text-center mb-12">
          <p className="text-[var(--teddy-text)]/60 font-[var(--font-shantell)] text-lg mb-2">
            Heartwarming stories
          </p>
          <h2 className="text-[var(--teddy-secondary)] font-[var(--font-fraunces)] text-3xl md:text-4xl font-bold mb-3">
            Gone Home
          </h2>
          <p className="text-[var(--teddy-text)]/70 text-center max-w-2xl mx-auto">
            Our puppies have found their forever families and we couldn&apos;t be
            happier!
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goneHome.map((puppy) => (
            <div
              key={puppy.name}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-[var(--teddy-border)]/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Image container */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={puppy.image}
                  alt={`${puppy.name} the ${puppy.breed} puppy with their new family`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Heart icon overlay */}
                <div className="absolute top-3 right-3 bg-[var(--teddy-accent)] text-white rounded-full p-2">
                  <Heart className="h-4 w-4" />
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[var(--teddy-secondary)] font-[var(--font-fraunces)] text-xl font-bold">
                    {puppy.name}
                  </h3>
                  <span className="bg-[var(--teddy-accent)]/10 text-[var(--teddy-accent)] text-xs font-semibold px-3 py-1 rounded-full">
                    Gone Home
                  </span>
                </div>
                <p className="text-[var(--teddy-text)]/60 text-sm mb-1">
                  {puppy.breed}
                </p>
                <p className="text-[var(--teddy-text)]/70 text-sm mb-2">
                  Found a home with {puppy.family}
                </p>
                <p className="text-[var(--teddy-text)]/50 text-xs">
                  {puppy.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/gone-home"
            className="inline-flex items-center gap-2 text-[var(--teddy-secondary)] font-semibold hover:underline"
          >
            View All Happy Families
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
