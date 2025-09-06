import React, { useEffect, useState } from "react";
import sky from "../assets/coding-bg.jpg"; // background sky
import mountainsBack from "../assets/img.png"; // mountains image

const ParallaxSection: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const skills = [
        { title: "Frontend Development", desc: "React, TypeScript, Tailwind" },
        { title: "UI/UX Design", desc: "Clean, responsive, user-focused" },
        { title: "Problem Solving", desc: "Debugging, scalable solutions" },
        { title: "Collaboration", desc: "Git, teamwork, agile mindset" },
    ];

    return (
        <section className="relative min-h-[90vh] md:min-h-[100vh] overflow-hidden">
            {/* Sky background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: `url(${sky})`,
                    transform: `translateY(${scrollY * 0.05}px)`,
                    zIndex: -2,
                }}
            />

            {/* Mountains */}
            <div
                className="absolute inset-x-0 bottom-0 bg-no-repeat bg-bottom bg-cover h-[70vh] md:h-[110vh]"
                style={{
                    backgroundImage: `url(${mountainsBack})`,
                    transform: `translateY(${scrollY * 0.15}px)`,
                    zIndex: -1,
                }}
            />

            {/* Content */}
            <div className="relative container mx-auto text-center px-4 md:px-6 lg:px-8 text-white z-10 flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-xl">
                    What I Do ??
                </h2>

                {/* Short intro */}
                <p className="text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto mb-8 text-gray-200 drop-shadow-md">
                    I create <span className="font-semibold text-cyan-400">interactive</span> and{" "}
                    <span className="font-semibold text-purple-400">responsive</span> web apps, focusing on performance, clean design, and great UX.
                </p>

                {/* Skill Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 w-full">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="p-4 sm:p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105"
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-cyan-300">{skill.title}</h3>
                            <p className="text-sm sm:text-base text-gray-200">{skill.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <a
                        href="#projects"
                        className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
                    >
                        🚀 View My Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white hover:text-gray-900 transition"
                    >
                        📩 Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ParallaxSection;
