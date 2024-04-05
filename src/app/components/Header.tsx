'use client';
import Link from 'next/link';
import './Header.css';

const navLinks: {name: string, href: string}[] = [{name: 'Home', href: '/'}, {name: 'Profile', href: '/profile'}];

export default function Header() {
  return (
    <header>
      <nav className='flex text-white bg-slate-900 items-start p-4 space-x-4'>
        {navLinks.map(link =>
          <Link className='hover:underline' href={link.href} key={link.href}>{link.name}</Link>
        )}
      </nav>
    </header>
  )
}