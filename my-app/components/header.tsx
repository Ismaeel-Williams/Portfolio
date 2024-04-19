// components/Header.tsx

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/">
            <a className="text-white font-semibold text-xl">Your Portfolio</a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-sm">
            <Link href="/">
              <a className="text-white hover:text-gray-300 mr-4">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-white hover:text-gray-300 mr-4">About</a>
            </Link>
            <Link href="/portfolio">
              <a className="text-white hover:text-gray-300 mr-4">Portfolio</a>
            </Link>
            <Link href="/contact">
              <a className="text-white hover:text-gray-300">Contact</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
