import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface ProjectProps {
    title: string;
    description: string;
    liveLink: string;
    githubLink: string;
    image?: string;
}

const projects: ProjectProps[] = [
    {
        title: "Portfolio Website",
        description: "My personal portfolio built with HTML, CSS, and animations.",
        liveLink: "#",
        githubLink: "https://github.com/Nethmi-Kaveesha/NewPortfolio.git",
        image: "src/assets/Screenshot 2025-09-18 114036.png",
    },
    {
        title: "Foundly – Community Lost & Found App",
        description:
            "A community-driven lost and found app to report and track lost items. Built with full-stack technologies for seamless interaction.",
        liveLink: "#",
        githubLink: "https://github.com/Nethmi-Kaveesha/Foundly-A-Community-Lost-Found-App.git",
        image: "src/assets/WhatsApp Image 2025-09-18 at 12.13.15_b89c68c9.jpg",
    },
    {
        title: "UTax Frontend",
        description: "Frontend of UTAX platform for managing tax-related workflows. Built with React and deployed on Vercel.",
        liveLink: "https://utax-frontend.vercel.app/login",
        githubLink: "#",
        image: "src/assets/screenshot-2025-06-22-030820.png",
    },

    {
        title: "E-Commerce Web App",
        description:
            "A full-featured e-commerce web application using JavaEE, JSP, and JDBC connection pooling.",
        liveLink: "#",
        githubLink: "https://github.com/Nethmi-Kaveesha/E-Commerce.git",
        image: "src/assets/s6.png",
    },
    {
        title: "TravelCo Holidays",
        description:
            "An all-in-one travel booking platform built with Spring Boot, HTML/CSS/JS, and MySQL.",
        liveLink: "#",
        githubLink: "https://github.com/Nethmi-Kaveesha/travelco-holidays.git",
        image: "src/assets/Screenshot 2025-04-16 032020 (1).png",
    },
    {
        title: "JavaScript Calculator",
        description:
            "A simple calculator built using HTML, CSS, and JavaScript. Supports basic arithmetic operations.",
        liveLink: "#",
        githubLink: "https://github.com/Nethmi-Kaveesha/js-Calculator.git",
        image: "src/assets/Screenshot 2025-09-18 003715.png",
    },
    {
        title: "To-Do App",
        description:
            "A simple To-Do application built with HTML, CSS, and JavaScript with local storage persistence.",
        liveLink: "#",
        githubLink: "https://github.com/Nethmi-Kaveesha/To-Do-App.git",
        image: "src/assets//Screenshot 2025-09-18 000435.png",
    },
    {
        title: "Culinary Arts Academy",
        description:
            "A Java-based application to manage a culinary arts academy, built with Java, Hibernate, JavaFX, and MySQL.",
        liveLink: "#",
        githubLink: "https://github.com/Nethmi-Kaveesha/culinaryarts-academy.git",
        image: "public/images/1.png",
    },
    {
        title: "Book Club Library App – Backend",
        description:
            "Backend server for Book Club Library App using Node.js, TypeScript, Express, and MySQL.",
        liveLink: "#",
        githubLink: "https://github.com/Nethmi-Kaveesha/book-club-library-app-backend.git",
        image: "src/assets/Screenshot 2025-09-18 015550.png",
    },
    {
        title: "Book Club Library App – Frontend",
        description:
            "Frontend client for the Book Club Library Management system built with React, TypeScript, and Tailwind CSS.",
        liveLink: "#",
        githubLink: "https://github.com/Nethmi-Kaveesha/https-githubook-club-library-app-frontend.git",
        image: "src/assets/Screenshot 2025-09-18 013848.png",
    },
    {
        title: "Color Palette Generator",
        description:
            "Generate color palettes from color codes, random colors, or uploaded images with copy-to-clipboard functionality.",
        liveLink: "#",
        githubLink: "https://github.com/Nethmi-Kaveesha/Color-Palette-Generator.git",
        image: "src/assets/Screenshot 2025-09-18 105807.png",
    },
    {
        title: "Fanta Project",
        description:
            "A visually engaging website featuring Fanta's product lineup with detailed product info and images.",
        liveLink: "#",
        githubLink: "https://github.com/Nethmi-Kaveesha/Fanta-Project.git",
        image: "src/assets/Screenshot 2025-09-18 110948.png",
    },
    {
        title: "Shinbi Anime TV",
        description:
            "A Japanese anime streaming platform inspired by Shinobi themes. Browse, watch, and track your favorite anime shows with a sleek, anime-inspired UI.",
        liveLink: "#", // Optional live demo
        githubLink: "https://www.figma.com/design/NV5t0tPFl3XwOAIdtZ5rL6/%E5%BF%8D%E3%81%B3---Shinobi-TV?node-id=0-1&p=f&t=hITtHLJzdxrl6s0M-0", // Figma link
        image: "src/assets/Screenshot 2025-07-21 225534.png", // Screenshot or mockup
    },
];

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
        null
    );

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                    🚀 My Projects
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedProject(project)}
                            className="relative cursor-pointer rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:shadow-lg transition"
                        >
                            {/* Inner card */}
                            <div className="bg-gray-800 rounded-xl p-5 flex flex-col h-full">
                                <h3 className="text-lg md:text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
                        <div className="bg-gray-800 rounded-xl max-w-lg w-full p-6 relative">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <FaTimes />
                            </button>
                            <h3 className="text-2xl font-bold mb-4">
                                {selectedProject.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                            {selectedProject.image && (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-60 object-cover rounded-lg mb-4"
                                />
                            )}
                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm"
                                >
                                    <FaGithub /> GitHub
                                </a>
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition text-sm"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
