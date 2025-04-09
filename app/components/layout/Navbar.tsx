'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">PlumbAssist</span>
            </Link>
          </div>
          
          {/* Center navigation links */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex space-x-8">
              <Link 
                href="/" 
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/') 
                    ? 'text-blue-600 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/features" 
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/features') 
                    ? 'text-blue-600 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/pricing') 
                    ? 'text-blue-600 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Pricing
              </Link>
              <Link 
                href="/demo" 
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/demo') 
                    ? 'text-blue-600 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Demo
              </Link>
            </div>
          </div>
          
          {/* Right side - Join Us button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/join" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Join Us
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                isActive('/') 
                  ? 'border-blue-500 text-blue-700 bg-blue-50' 
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                isActive('/features') 
                  ? 'border-blue-500 text-blue-700 bg-blue-50' 
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                isActive('/pricing') 
                  ? 'border-blue-500 text-blue-700 bg-blue-50' 
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
            >
              Pricing
            </Link>
            <Link 
              href="/demo" 
              className={`block pl-3 pr-4 py-2 border-l-4 ${
                isActive('/demo') 
                  ? 'border-blue-500 text-blue-700 bg-blue-50' 
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
            >
              Demo
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Link 
                href="/join" 
                className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 