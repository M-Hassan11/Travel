import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className='w-full'>
      <ul className='p-4 border-gray-500 border-b flex items-center font-serif md:text-lg text-sm justify-center gap-6'>
        {navLinks.map((link, index) => (
          <li key={index} className='hover:text-gray-800' >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
