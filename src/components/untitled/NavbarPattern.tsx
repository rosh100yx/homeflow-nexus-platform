import React from 'react';
import { Home, Menu } from 'lucide-react';

const NavbarPattern = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Home className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-xl font-semibold text-gray-800">Brand</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Services</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPattern;