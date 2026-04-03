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
    "Detect fake content, deepfakes, and misinformation instantly. Send any content via WhatsApp and get a trust score powered by advanced AI analysis.",
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
                  AI-powered content verification. Helping people distinguish
                  real from fake in an age of synthetic media.
                </p>
              </div>

              {/* Links */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                  Navigation
                </h4>
                <ul className="mt-3 space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 transition-colors hover:text-green-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                  Get Started
                </h4>
                <p className="mt-3 text-sm text-gray-300">
                  Send any image, video, URL, or text to our WhatsApp bot and
                  get an instant trust score analysis.
                </p>
                <a
                  href="https://wa.me/14155238886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-full bg-green px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-light"
                >
                  Message Us on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
              <p className="text-white">Vero-Lab is a project owned and operated by Meditance Investments Ltd.</p>
              <div className="mt-3 text-xs text-gray-200 space-y-0.5">
                <p className="font-semibold text-white">Company Info</p>
                <p>Meditance Investments Ltd.</p>
                <p>BVI Registration Number: 1856997</p>
                <p>Palm Grove House, P.O. Box 438, Road Town, Tortola, British Virgin Islands</p>
                <p className="mt-2"><strong>Corporate Email:</strong> <a href="mailto:info@meditancemedia.com" className="hover:text-white transition-colors">info@meditancemedia.com</a></p>
                <p><strong>Product Support:</strong> <a href="mailto:info@vero-lab.com" className="hover:text-white transition-colors">info@vero-lab.com</a></p>
              </div>
              <p className="mt-4 text-xs text-gray-300">&copy; {new Date().getFullYear()} Vero. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
