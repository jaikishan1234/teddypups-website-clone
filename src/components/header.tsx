"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Puppies", href: "/puppies" },
  { label: "Happy Families", href: "/happy-families" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Gone Home", href: "/gone-home" },
  { label: "Contact", href: "/contact" },
]

const whatsappUrl = "https://wa.me/971501234567"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--teddy-border)] shadow-sm">
      <div className="px-4 md:px-8 flex items-center justify-between h-[var(--teddy-header-height)]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/branding/logo.png"
            alt="TeddyPups"
            width={140}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--teddy-text)] hover:text-[var(--teddy-primary)] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop WhatsApp CTA */}
        <div className="hidden lg:block">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--teddy-available)] hover:bg-[#6ab55c] text-white font-semibold rounded-full px-5 py-2.5 transition-all flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="lg:hidden p-2 text-[var(--teddy-text)] hover:text-[var(--teddy-primary)] transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex flex-col gap-2 pt-4">
              <div className="mb-4">
                <Image
                  src="/images/branding/logo.png"
                  alt="TeddyPups"
                  width={120}
                  height={52}
                  className="object-contain"
                />
              </div>

              {navLinks.map((link) => (
                <SheetClose key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--teddy-text)] hover:text-[var(--teddy-primary)] font-medium transition-colors py-2 px-3 rounded-lg hover:bg-[var(--teddy-primary-light)] block"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}

              <div className="mt-4 pt-4 border-t border-[var(--teddy-border)]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--teddy-available)] hover:bg-[#6ab55c] text-white font-semibold rounded-full px-5 py-2.5 transition-all flex items-center gap-2 justify-center w-full"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
