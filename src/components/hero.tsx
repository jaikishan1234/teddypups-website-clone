import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/general/b942a5_9381a9a0ca3e40b4b4f31906cf7fda56-mv2.png"
          alt="Happy puppies playing outdoors"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[500px] md:min-h-[600px] items-center justify-center px-4 pb-8 pt-20">
        <div className="max-w-4xl text-center">
          {/* Handwritten decorative text */}
          <p className="mb-4 text-xl md:text-2xl text-white/90 font-[var(--font-shantell)]">
            Find your perfect puppy
          </p>

          {/* Main heading */}
          <h1 className="mb-4 font-[var(--font-fraunces)] text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Welcome to TeddyPups
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Your trusted companion in finding the perfect puppy to join your family
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <Link
              href="/puppies"
              className="bg-[var(--teddy-primary)] hover:bg-[var(--teddy-primary-hover)] text-white font-semibold rounded-full px-8 py-3 transition-all hover:shadow-lg"
            >
              View Puppies
            </Link>

            {/* Secondary CTA */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white font-semibold rounded-full px-8 py-3 transition-all hover:bg-white/20 flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
