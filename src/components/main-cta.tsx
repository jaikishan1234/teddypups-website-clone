import Link from "next/link";

export default function MainCta() {
  return (
    <section className="bg-gradient-to-r from-[var(--teddy-secondary)] to-[var(--teddy-primary)] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
        {/* Heading */}
        <h2 className="font-[var(--font-fraunces)] text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Add a New Member to Your Family?
        </h2>

        {/* Subtext */}
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          Contact us today to start your journey to finding the perfect puppy
          companion
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/puppies"
            className="bg-white text-[var(--teddy-secondary)] hover:bg-[var(--teddy-cream)] font-semibold rounded-full px-8 py-3 transition-all"
          >
            Browse Puppies
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white hover:bg-white/20 font-semibold rounded-full px-8 py-3 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
