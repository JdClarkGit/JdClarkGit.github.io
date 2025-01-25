"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-sm">
      <nav className="container mx-auto px-3 py-2">
        <div className="flex justify-between items-center">
          <Link
            href="#home"
            className="text-xl font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer"
          >
            JdClarkGit
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
