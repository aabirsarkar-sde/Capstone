"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { href: '/#home', label: 'Home' },
    { href: '/allCourses', label: 'Courses' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#contact', label: 'Contact' },
    { href: '/#faq', label: 'FAQs' },
  ];

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/f8853b74e6274770bff954565147aa8f.png" alt="" width={140} height={30} />
            <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
              Yoga Fit
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <SignInButton>
                <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton appearance={{ elements: { avatarBox: "w-8 h-8" } }} />
            </SignedIn>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <SignedIn>
              <UserButton appearance={{ elements: { avatarBox: "w-8 h-8" } }} />
            </SignedIn>
            <button
              onClick={handleMenu}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {showMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md transition-colors duration-200"
                  onClick={() => setShowMenu(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="border-t border-gray-700 pt-3 mt-3">
                <SignedOut>
                  <div className="space-y-2">
                    <SignInButton>
                      <button className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton>
                      <button className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-medium transition-all duration-200">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </div>
                </SignedOut>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
