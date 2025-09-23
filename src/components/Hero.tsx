import React from "react";
import { FaFacebookF, FaLinkedinIn, FaMediumM, FaGithub, FaInstagram } from "react-icons/fa";
import HeroImage from "../assets/hero-image.jpg";

const Hero: React.FC = () => (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Floating background shapes */}
        <span className="absolute top-0 left-1/4 w-24 h-24 sm:w-36 sm:h-36 bg-cyan-400 dark:bg-cyan-700 rounded-full opacity-30 blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <span className="absolute top-1/3 right-1/5 w-28 h-28 sm:w-44 sm:h-44 bg-pink-400 dark:bg-pink-700 rounded-full opacity-20 blur-3xl animate-[float_8s_ease-in-out_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
            <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <img
                        src={HeroImage}
                        alt="Kaveesha Fernando"
                        className="w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700 transform hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Right: Text */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 animate-fade-in">
                        Hi, I’m <span className="whitespace-nowrap">Kaveesha Fernando</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 animate-fade-in delay-200">
                        I build <span className="font-semibold text-cyan-600 dark:text-cyan-400">interactive</span>,{" "}
                        <span className="font-semibold text-purple-500 dark:text-purple-400">responsive</span> web apps with React, TypeScript, and Tailwind CSS.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 justify-center md:justify-start mb-4 sm:mb-6">
                        <a
                            href="#projects"
                            className="inline-block rounded-lg bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 text-white px-5 sm:px-8 py-2.5 sm:py-4 font-semibold shadow-lg transition transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl text-sm sm:text-base"
                        >
                            View My Work
                        </a>

                        <a
                            href="/Nethmi_Kaveesha_Fernando.pdf"
                            download
                            className="inline-block rounded-lg border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 px-5 sm:px-8 py-2.5 sm:py-4 font-semibold shadow hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-gray-900 transition transform hover:-translate-y-1 hover:scale-105 text-sm sm:text-base"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 justify-center md:justify-start">
                        {[{
                            icon: <FaFacebookF />,
                            url: "https://www.facebook.com/share/1EQoUomjtE/?mibextid=wwXIfr",
                            color: "text-blue-600"
                        }, {
                            icon: <FaLinkedinIn />,
                            url: "https://www.linkedin.com/in/kaveesha-fernando-882180281/",
                            color: "text-blue-700"
                        }, {
                            icon: <FaGithub />,
                            url: "https://github.com/Nethmi-Kaveesha",
                            color: "text-gray-900"
                        }, {
                            icon: <FaMediumM />,
                            url: "https://medium.com/@kaveefernando2003",
                            color: "text-purple-600"
                        }, {
                            icon: <FaInstagram />,
                            url: "https://www.instagram.com/nethmi584?igsh=MTE3d25nZ2cyand3aA%3D%3D&utm_source=qr",
                            color: "text-pink-500"
                        }].map(({icon, url, color}, idx) => (
                            <a
                                key={idx}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-[2px] rounded-md bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-400 transition"
                            >
                                <div className={`w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-md ${color}`}>
                                    {icon}
                                </div>
                            </a>
                        ))}
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
