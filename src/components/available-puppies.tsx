import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Puppy {
  name: string;
  breed: string;
  age: string;
  gender: string;
  image: string;
  status: string;
}

const puppies: Puppy[] = [
  {
    name: "Ares",
    breed: "Golden Retriever",
    age: "8 weeks",
    gender: "Male",
    image:
      "/images/puppies/golden-retriever/27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg",
    status: "Available",
  },
  {
    name: "Bella",
    breed: "Golden Retriever",
    age: "10 weeks",
    gender: "Female",
    image:
      "/images/puppies/golden-retriever/27b888_3375199e717a4f6ca02e902672664e79-mv2.jpg",
    status: "Available",
  },
  {
    name: "Cody",
    breed: "Labrador",
    age: "9 weeks",
    gender: "Male",
    image:
      "/images/puppies/labrador/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp",
    status: "Available",
  },
  {
    name: "Lola",
    breed: "Poodle",
    age: "7 weeks",
    gender: "Female",
    image:
      "/images/puppies/poodle/edb2f5_582a3767e5eb408f9684a7e623229dc4-mv2.jpeg",
    status: "Available",
  },
];

function PuppyCard({ puppy }: { puppy: Puppy }) {
  const encodedName = encodeURIComponent(puppy.name);
  const whatsappUrl = `https://wa.me/971501234567?text=Hi! I'm interested in ${encodedName}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[var(--teddy-border)]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="relative">
        <Image
          src={puppy.image}
          alt={puppy.name}
          width={400}
          height={300}
          className="w-full aspect-[4/3] object-cover"
        />
        <span className="absolute top-3 right-3 bg-[var(--teddy-available)] text-white text-xs font-semibold px-3 py-1 rounded-full">
          {puppy.status}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-[var(--font-fraunces)] text-xl font-bold text-[var(--teddy-secondary)]">
          {puppy.name}
        </h3>
        <p className="text-[var(--teddy-text)]/70 text-sm">{puppy.breed}</p>
        <div className="flex items-center gap-3 mt-2 text-xs text-[var(--teddy-text)]/60">
          <span>{puppy.age}</span>
          <span>{puppy.gender}</span>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full bg-[var(--teddy-primary)] hover:bg-[var(--teddy-primary-hover)] text-white font-semibold rounded-lg py-2 text-center transition-colors"
        >
          Inquire Now
        </a>
      </div>
    </div>
  );
}

export default function AvailablePuppies() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <p className="text-[var(--teddy-text)]/60 font-[var(--font-shantell)] text-lg mb-2 text-center">
          Ready to meet you
        </p>
        <h2 className="text-[var(--teddy-secondary)] font-[var(--font-fraunces)] text-3xl md:text-4xl font-bold mb-3 text-center">
          Available Puppies
        </h2>
        <p className="text-[var(--teddy-text)]/70 text-center max-w-2xl mx-auto mb-12">
          Browse our adorable puppies who are ready to find their forever home
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {puppies.map((puppy) => (
            <PuppyCard key={puppy.name} puppy={puppy} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 text-[var(--teddy-primary)] hover:text-[var(--teddy-primary-hover)] font-semibold transition-colors"
          >
            View All Puppies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}