import React from "react";

const skillData = [
    {
        category: "Languages",
        skills: [
            { name: "Java", level: 90 },
            { name: "JavaScript", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Python", level: 85 },
            { name: "SQL", level: 80 },
        ],
    },
    {
        category: "Frontend",
        skills: [
            { name: "HTML", level: 95 },
            { name: "React", level: 90 },
            { name: "Bootstrap", level: 80 },
            { name: "Tailwind CSS", level: 85 },
            { name: "JavaFX", level: 75 },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Spring Boot", level: 85 },
            { name: "Spring Security", level: 80 },
            { name: "Node.js", level: 85 },
            { name: "Express", level: 80 },
        ],
    },
    {
        category: "Databases",
        skills: [
            { name: "MySQL", level: 85 },
            { name: "MongoDB", level: 80 },
        ],
    },
    {
        category: "DevOps",
        skills: [
            { name: "Docker", level: 75 },
            { name: "AWS", level: 70 },
            { name: "Git", level: 95 },
            { name: "Maven", level: 70 },
        ],
    },
    {
        category: "Other Tech Skills",
        skills: [
            { name: "REST APIs", level: 85 },
            { name: "JWT", level: 80 },
            { name: "Socket.io", level: 75 },
            { name: "OOP", level: 90 },
        ],
    },
];

const softSkills = [
    "Leadership", "Teamwork", "Management", "Project Management", "Problem Solving",
    "Communication", "Presentation", "Open-mindedness", "Time Management",
    "Collaboration", "Adaptability & Flexibility", "Critical Thinking", "Creativity & Innovation",
];

const languages = ["English", "Sinhala", "Japanese (Basic)"];

const technicalInterests = ["Web Development", "GitHub", "UI Designing", "Notion", "Linux OS", "React JS", "Node JS", "MongoDB", "Docker"];

const achievements = [
    "Leader, SolveTech Team – Received Best Business Visionary Award in Innovesta",
    "Leader, Netronix Team – Achieved 2nd Place for Best Innovative Software Solution",
];

const Skills: React.FC = () => {
    // Soft, eye-friendly gradient borders
    const borderStyles = {
        skillCard: "linear-gradient(90deg, #c4b5fd, #a5b4fc, #93c5fd) 1",      // Light purple-blue
        softSkills: "linear-gradient(90deg, #86efac, #4ade80, #22c55e) 1",      // Soft green
        languages: "linear-gradient(90deg, #fcd34d, #fde68a, #fef3c7) 1",       // Soft yellow
        technicalInterests: "linear-gradient(90deg, #fbcfe8, #f9a8d4, #f472b6) 1", // Soft pink
        achievements: "linear-gradient(90deg, #93c5fd, #60a5fa, #3b82f6) 1",    // Soft blue
    };

    return (
        <section id="skills" className="relative bg-gray-50 dark:bg-gray-900 py-16">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
                    Skills & Achievements
                </h2>

                {/* Skill Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillData.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-4 border-transparent hover:scale-105 transform transition duration-300 relative"
                            style={{ borderImage: borderStyles.skillCard }}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                                {category.category}
                            </h3>
                            <div className="space-y-3">
                                {category.skills.map((skill, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-1 font-medium text-gray-700 dark:text-gray-200">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                                            <div
                                                className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft Skills */}
                <div className="mt-12 rounded-2xl border-4 border-transparent p-6 relative hover:scale-105 transform transition duration-300"
                     style={{ borderImage: borderStyles.softSkills }}>
                    <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">Soft Skills</h3>
                    <div className="flex flex-wrap gap-4">
                        {softSkills.map((skill, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-300 font-medium shadow-sm hover:shadow-lg hover:scale-105 transform transition duration-300"
                            >
                {skill}
              </span>
                        ))}
                    </div>
                </div>

                {/* Languages */}
                <div className="mt-12 rounded-2xl border-4 border-transparent p-6 relative hover:scale-105 transform transition duration-300"
                     style={{ borderImage: borderStyles.languages }}>
                    <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">Languages</h3>
                    <div className="flex flex-wrap gap-4">
                        {languages.map((lang, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-green-600 dark:text-green-300 font-medium shadow-sm hover:shadow-lg hover:scale-105 transform transition duration-300"
                            >
                {lang}
              </span>
                        ))}
                    </div>
                </div>

                {/* Technical Interests */}
                <div className="mt-12 rounded-2xl border-4 border-transparent p-6 relative hover:scale-105 transform transition duration-300"
                     style={{ borderImage: borderStyles.technicalInterests }}>
                    <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">Technical Interests</h3>
                    <div className="flex flex-wrap gap-4">
                        {technicalInterests.map((interest, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-300 font-medium shadow-sm hover:shadow-lg hover:scale-105 transform transition duration-300"
                            >
                {interest}
              </span>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="mt-12 mb-16 rounded-2xl border-4 border-transparent p-6 relative hover:scale-105 transform transition duration-300"
                     style={{ borderImage: borderStyles.achievements }}>
                    <h3 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">Achievements</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-200">
                        {achievements.map((achieve, idx) => (
                            <li key={idx}>{achieve}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
