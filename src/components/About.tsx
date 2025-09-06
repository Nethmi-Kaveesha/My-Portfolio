import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaMediumM, FaInstagram } from "react-icons/fa";
import ProfileImage from "../assets/hero-image.jpg";

const About: React.FC = () => {
    return (
        <section
            className="relative overflow-hidden
      bg-gradient-to-br
      from-[#0f172a] via-[#1e293b] to-[#0f172a]
      py-2"
        >
            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 animate-gradient-x">
                    About Me
                </h2>

                <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                    {/* Left: Profile Info */}
                    <div className="flex-[2] bg-white/30 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-white/20 dark:border-gray-700/30 transition-transform transform hover:-translate-y-2 hover:scale-105 duration-500">
                        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500">
                            Kaveesha Fernando
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-none tracking-wide">
                            A self-motivated and passionate software engineering graduate from the{" "}
                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Institute of Java & Software Engineering (IJSE)
              </span>
                            , a completed{" "}
                            <span className="font-semibold text-purple-600 dark:text-purple-400">CMJD program</span>{" "}
                            participant, and currently pursuing{" "}
                            <span className="font-semibold text-pink-600 dark:text-pink-400">HDSE</span>. Eager to gain
                            industry experience and contribute to innovative projects, I leverage my technical
                            knowledge, problem-solving abilities, and creativity to deliver effective solutions and
                            support organizational growth.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6 justify-center md:justify-start">
                            {[
                                { href: "https://facebook.com", icon: <FaFacebookF />, color: "text-blue-600" },
                                { href: "https://linkedin.com", icon: <FaLinkedinIn />, color: "text-blue-700" },
                                { href: "https://github.com", icon: <FaGithub />, color: "text-gray-900 dark:text-gray-200" },
                                { href: "https://medium.com", icon: <FaMediumM />, color: "text-purple-600 dark:text-purple-400" },
                                { href: "https://instagram.com", icon: <FaInstagram />, color: "text-pink-500" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-[2px] rounded-md bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-400 transition"
                                >
                                    <div className={`w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-md ${social.color}`}>
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image with glowing border */}
                    <div className="flex-1 flex justify-center md:justify-end relative">
                        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 animate-rotate-slow">
                            <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-3">
                                <img
                                    src={ProfileImage}
                                    alt="Kaveesha Fernando"
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-3xl pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Shape */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default About;
