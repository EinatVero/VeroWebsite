"use client";

import { useState } from "react";
import Link from "next/link";

interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
}

export function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <span className="text-2xl leading-none">&times;</span>
        ) : (
          <span className="text-xl leading-none">&#9776;</span>
        )}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-gray-100 bg-white px-6 py-4 shadow-lg">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-teal"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-teal px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-light"
            >
              Try on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
