import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Puppies", href: "/puppies" },
  { label: "Happy Families", href: "/happy-families" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Gone Home", href: "/gone-home" },
  { label: "Contact", href: "/contact" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 20C5.12 20.46 12 20.46 12 20.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58Z" />
      <path d="m9.75 15.02 5.5-3.01-5.5-3.02v6.03Z" />
    </svg>
  );
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/teddypups" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/teddypups" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com/teddypups" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--teddy-secondary)] text-white/90 py-12 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand column */}
          <div>
            <Link href="/" aria-label="TeddyPups home">
              <Image
                src="/images/branding/logo.png"
                alt="TeddyPups logo"
                width={120}
                height={50}
                className="mb-4"
              />
            </Link>
            <p className="text-white/70 text-sm mb-2 font-[var(--font-fraunces)] italic">
              Finding forever homes for happy puppies since 2015
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              TeddyPups is passionate about connecting adorable teddy bear
              puppies with loving families. Every pup deserves a safe, warm,
              and happy home — and we&apos;re here to make that happen.
            </p>
          </div>

          {/* Quick Links column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-[var(--font-fraunces)]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[var(--teddy-primary-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-[var(--font-fraunces)]">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href="tel:+971501234567"
                  className="hover:text-[var(--teddy-primary-light)] transition-colors"
                >
                  +971 50 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:hello@teddypups.com"
                  className="hover:text-[var(--teddy-primary-light)] transition-colors"
                >
                  hello@teddypups.com
                </a>
              </li>
            </ul>

            {/* Social media icons */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/70 hover:text-[var(--teddy-primary-light)] transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/10 pt-6 mt-8">
          <p className="text-center text-white/60 text-sm">
            &copy; 2024 TeddyPups. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
