import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sections = ["about", "projects", "skills", "education", "contact"];

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
            <nav className="container mx-auto flex items-center justify-between p-4 md:px-8">
                {/* Logo */}
                <a
                    href="#"
                    className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 transition-all hover:scale-105"
                >
                    My Portfolio
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8">
                    {sections.map((section) => (
                        <li key={section} className="relative group">
                            <a
                                href={`#${section}`}
                                className="font-medium text-gray-800 dark:text-gray-200 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                            {/* Animated underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
                        </li>
                    ))}
                    {/* Resume Button */}
                    <li>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="ml-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white rounded-lg font-medium shadow-md transition transform hover:-translate-y-1 hover:scale-105"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none text-gray-800 dark:text-gray-200 text-3xl"
                    >
                        {isOpen ? "\u2715" /* X icon */ : "\u2630" /* Hamburger */}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-white dark:bg-gray-900 shadow-md flex flex-col gap-4 px-6 py-6 animate-fade-in">
                    {sections.map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className="block text-gray-800 dark:text-gray-200 font-medium py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                    {/* Mobile Resume Button */}
                    <li>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="block mt-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white rounded-lg font-medium shadow-md text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            )}
        </header>
    );
};

export default Navbar;
