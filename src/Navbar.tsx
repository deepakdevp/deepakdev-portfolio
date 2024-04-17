import React from 'react';
import { Link } from 'react-router-dom';
const menuItems = [
  {
    href: 'home',
    label: 'Home',
  },
  {
    href: 'about',
    label: 'About',
  },
  {
    href: '#',
    label: 'Projects',
  },
  {
    href: '#',
    label: 'Contact',
  },
];
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar = () => {
  return (
    <div className="flex items-center justify-between  border-gray-200 dark:bg-gray-900 w-full px-12">
      <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse font-bold text-xl">
        Deepak.dev
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {menuItems.map((item, index) => {
            return (
              <li>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="block py-2 px-3 font-semibold text-base text-black bg-black-700 rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
