'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-purple-100 dark:border-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-purple-600 dark:text-purple-400"
              >
                ANAREPO
              </motion.div>
            </Link>
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/problem">Problem</NavLink>
            <NavLink href="/solution">Solution</NavLink>
            <NavLink href="/need">Need for Rapy</NavLink>
            <NavLink href="/chat">Rapy AI</NavLink>
            <NavLink href="/login" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

function NavLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href}>
      <motion.span
        whileHover={{ y: -2 }}
        className={`text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${className}`}
      >
        {children}
      </motion.span>
    </Link>
  );
}
