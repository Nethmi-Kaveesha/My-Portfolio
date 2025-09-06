import React from "react";

interface ProjectProps {
    title: string;
    description: string;
    liveLink: string;
    githubLink: string;
    image?: string;
}

const projects: ProjectProps[] = [
    {
        title: "Project One",
        description: "Description of project one.",
        liveLink: "#",
        githubLink: "#",
    },
    {
        title: "Project Two",
        description: "Description of project two.",
        liveLink: "#",
        githubLink: "#",
    },
    {
        title: "Project Three",
        description: "Description of project three.",
        liveLink: "#",
        githubLink: "#",
    },
];

const Projects: React.FC = () => (
    <section id="projects" className="relative bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 animate-fade-in">
                Projects
            </h2>

            {/* Projects Grid */}
            <div className="grid gap-6 md:grid-cols-3">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl bg-white dark:bg-gray-800 p-5 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 animate-fade-in"
                    >
                        {/* Optional Image */}
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-lg mb-4 w-full h-40 object-cover"
                            />
                        )}
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="flex gap-4">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                            >
                                Live Demo →
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                            >
                                GitHub →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
