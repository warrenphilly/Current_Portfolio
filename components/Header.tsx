

'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Warren Phillips
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}