import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { MobileMenu } from "./components/MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vero - AI-Powered Content Verification",
  description:
    "Vero-Lab helps you assess whether digital content is authentic, AI-generated, or manipulated. Send content via WhatsApp and receive structured verification results.",
  keywords: [
    "fact check",
    "deepfake detection",
    "misinformation",
    "AI verification",
    "content authenticity",
  ],
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/legal", label: "Legal" },
  { href: "/glossary", label: "Glossary" },
  { href: "/library", label: "Library" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-deep-green">
        {/* Navigation */}
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Vero" width={36} height={40} className="flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-deep-green">
                  Vero
                </span>
                <span className="hidden text-xs text-gray-600 sm:inline">
                  The Truth Is Out There
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-green"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/14155238886"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-light"
              >
                Try on WhatsApp
              </a>
            </div>

            {/* Mobile Menu */}
            <MobileMenu navLinks={navLinks} />
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-100 bg-deep-green text-white">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Brand */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Image src="/logo.svg" alt="Vero" width={28} height={32} />
                  <h3 className="text-xl font-bold">Vero</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Vero-Lab is a content verification tool developed and operated by Meditance Investments Ltd.
                </p>
              </div>

              {/* Links */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Product
                  </h4>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <Link href="/" className="text-sm text-gray-300 transition-colors hover:text-green-light">Home</Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-sm text-gray-300 transition-colors hover:text-green-light">About</Link>
                    </li>
                    <li>
                      <Link href="/glossary" className="text-sm text-gray-300 transition-colors hover:text-green-light">Glossary</Link>
                    </li>
                    <li>
                      <Link href="/library" className="text-sm text-gray-300 transition-colors hover:text-green-light">Library</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Legal
                  </h4>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <Link href="/legal#terms" className="text-sm text-gray-300 transition-colors hover:text-green-light">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link href="/legal#privacy" className="text-sm text-gray-300 transition-colors hover:text-green-light">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-sm text-gray-300 transition-colors hover:text-green-light">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                  Contact
                </h4>
                <ul className="mt-3 space-y-2">
                  <li className="text-sm text-gray-300">
                    <a href="mailto:info@vero-lab.com" className="transition-colors hover:text-green-light">info@vero-lab.com</a>
                  </li>
                  <li className="text-sm text-gray-300">
                    <a href="mailto:support@vero-lab.com" className="transition-colors hover:text-green-light">support@vero-lab.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
              <p className="text-xs text-gray-300">&copy; {new Date().getFullYear()} Meditance Investments Ltd. All rights reserved.</p>
              <p className="mt-1 text-xs text-gray-500">BVI Registration: 1856997</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
