import Header from "@/components/header";
import Hero from "@/components/hero";
import PuppyGallery from "@/components/puppy-gallery";
import AvailablePuppies from "@/components/available-puppies";
import GoneHome from "@/components/gone-home";
import MainCta from "@/components/main-cta";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--teddy-cream)]">
      <Header />
      <Hero />
      <PuppyGallery />
      <AvailablePuppies />
      <GoneHome />
      <MainCta />
      <Footer />
      <FloatingContact />
    </main>
  );
}
