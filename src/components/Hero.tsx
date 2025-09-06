import React from "react";
import { FaFacebookF, FaLinkedinIn, FaMediumM, FaGithub, FaInstagram } from "react-icons/fa";
import HeroImage from "../assets/hero-image.jpg";

const Hero: React.FC = () => (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Floating background shapes */}
        <span className="absolute top-0 left-1/4 w-36 h-36 sm:w-40 sm:h-40 bg-cyan-400 dark:bg-cyan-700 rounded-full opacity-30 blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <span className="absolute top-1/3 right-1/5 w-44 h-44 sm:w-56 sm:h-56 bg-pink-400 dark:bg-pink-700 rounded-full opacity-20 blur-3xl animate-[float_8s_ease-in-out_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center md:justify-start md:ml-12 lg:ml-20">
                    <img
                        src={HeroImage}
                        alt="Kaveesha Fernando"
                        className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700 transform hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Right: Text */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 animate-fade-in">
                        Hi, I’m <span className="whitespace-nowrap">Kaveesha Fernando</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 animate-fade-in delay-200">
                        I build <span className="font-semibold text-cyan-600 dark:text-cyan-400">interactive</span>,{" "}
                        <span className="font-semibold text-purple-500 dark:text-purple-400">responsive</span> web apps with React, TypeScript, and Tailwind CSS.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start mb-6">
                        <a
                            href="#projects"
                            className="inline-block rounded-lg bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold shadow-lg transition transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
                        >
                            View My Work
                        </a>

                        <a
                            href="/Nethmi_Kaveesha_Fernando.pdf"
                            download
                            className="inline-block rounded-lg border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 px-6 sm:px-8 py-3 sm:py-4 font-semibold shadow hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-gray-900 transition transform hover:-translate-y-1 hover:scale-105"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 mt-6 justify-center md:justify-start">
                        {/* Facebook */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-[2px] rounded-md bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-400 transition"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-md text-blue-600">
                                <FaFacebookF />
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-[2px] rounded-md bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-400 transition"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-md text-blue-700">
                                <FaLinkedinIn />
                            </div>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-[2px] rounded-md bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-400 transition"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-md text-gray-900">
                                <FaGithub />
                            </div>
                        </a>

                        {/* Medium */}
                        <a
                            href="https://medium.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-[2px] rounded-md bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-400 transition"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-md text-purple-600">
                                <FaMediumM />
                            </div>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-[2px] rounded-md bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-400 transition"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-md text-pink-500">
                                <FaInstagram />
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        {/* Animation Keyframes */}
        <style>{`
            @keyframes float {
                0%, 100% { transform: translateY(0) translateX(0); }
                50% { transform: translateY(-20px) translateX(15px); }
            }
        `}</style>
    </section>
);

export default Hero;
