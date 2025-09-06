import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
    const socials = [
        {
            name: "LinkedIn",
            link: "https://linkedin.com/in/yourprofile",
            icon: <FaLinkedinIn />,
            color: "from-blue-500 to-blue-400",
        },
        {
            name: "GitHub",
            link: "https://github.com/yourprofile",
            icon: <FaGithub />,
            color: "from-gray-700 to-gray-600",
        },
        {
            name: "Twitter",
            link: "https://twitter.com/yourprofile",
            icon: <FaTwitter />,
            color: "from-sky-400 to-sky-300",
        },
    ];

    return (
        <section
            id="contact"
            className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20"
        >
            <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 animate-gradient-x">
                    Get In Touch
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                    I’m currently open to{" "}
                    <span className="text-blue-400 font-semibold">
            internships, freelance projects, and collaborations
          </span>
                    . Whether you have a question, an idea, or just want to say hi — my
                    inbox is always open.
                </p>

                {/* Email Button */}
                <a
                    href="mailto:youremail@example.com"
                    className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 font-semibold shadow-xl transition transform hover:-translate-y-1 hover:scale-105"
                >
                    <FaEnvelope className="text-lg" />
                    Email Me
                </a>

                {/* Socials */}
                <div className="mt-12 flex justify-center gap-6 flex-wrap">
                    {socials.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-[2px] rounded-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 transition transform hover:scale-110"
                        >
                            <div className="flex items-center gap-3 bg-[#1e293b]/80 backdrop-blur-xl rounded-xl px-5 py-3 text-gray-200 group-hover:text-white">
                <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r ${social.color} text-white`}
                >
                  {social.icon}
                </span>
                                <span className="font-medium">{social.name}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Glowing background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default Contact;
