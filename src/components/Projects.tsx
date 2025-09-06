import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
    title: string;
    description: string;
    liveLink: string;
    githubLink: string;
    image?: string;
}

// 🔹 14 Projects (replace placeholders with real projects)
const projects: ProjectProps[] = [
    {
        title: "Portfolio Website",
        description: "My personal portfolio built with React, TailwindCSS, and animations.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "E-Commerce App",
        description: "Full-stack MERN application with authentication & Stripe payments.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "Chat Application",
        description: "Real-time chat app using Socket.IO and Node.js.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "Blog Platform",
        description: "Multi-user blogging platform with Markdown support.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "Task Manager",
        description: "React + Firebase task management system with drag-and-drop.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "Weather App",
        description: "Weather forecast app using OpenWeather API with charts.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "Recipe Finder",
        description: "Find recipes from an API, filter by ingredients & calories.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "Expense Tracker",
        description: "Track expenses with charts & analytics.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "Music Player",
        description: "Custom music player UI with playlist support.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "Movie Database",
        description: "Fetch & display movies from TMDB API with search & filters.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "Online Quiz",
        description: "Interactive quiz app with timer and score tracking.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "Fitness Tracker",
        description: "Track workouts and progress with charts.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "Travel Planner",
        description: "Plan trips, add destinations, and manage itineraries.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
    {
        title: "AI Image Generator",
        description: "Generate images using OpenAI DALL·E API.",
        liveLink: "#",
        githubLink: "#",
        image: "https://via.placeholder.com/400x250",
    },
];

const Projects: React.FC = () => (
    <section
        id="projects"
        className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20"
    >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
                🚀 My Projects
            </h2>

            {/* Projects Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {projects.map((project, idx) => (
                    <div key={idx} className="relative group h-[400px]">
                        {/* Gradient Border Wrapper */}
                        <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-border-glow">
                            {/* Card Content */}
                            <div className="w-full h-full rounded-xl bg-gray-900 text-white flex flex-col">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-40 object-cover rounded-t-xl"
                                    />
                                )}
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm flex-1">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-4 mt-4">
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm"
                                        >
                                            <FaGithub /> GitHub
                                        </a>
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition text-sm"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Border Glow Animation */}
        <style>{`
      .animate-border-glow {
        background-size: 300% 300%;
        animation: borderGlow 6s linear infinite;
      }
      @keyframes borderGlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}</style>
    </section>
);

export default Projects;
