import React from "react";
import { FaGraduationCap } from "react-icons/fa"; // Icon for AAT

// Define the type for achievements
type Achievement = {
    id: number;
    title: string;
    organization: string;
    description: string;
    img?: string; // Optional, because icons can be used instead
    icon?: React.ReactNode;
    date: string;
};

// List of achievements
const achievements: Achievement[] = [
    {
        id: 1,
        title: "Best Business Visionary Award",
        organization: "Innovesta Tea",
        description: "Recognized as a leader in business strategy and innovation.",
        img: "public/images/a1.jpg",
        date: "2023",
    },
    {
        id: 2,
        title: "2nd Place - Best Innovative Solution",
        organization: "Circle Edge Event",
        description: "Awarded for innovative solutions with the Netronix team.",
        img: "public/images/a2.jpg",
        date: "2024",
    },
    {
        id: 3,
        title: "Completed CMJS Diploma",
        organization: "CMJS Institute",
        description: "Successfully completed diploma in [your field].",
        img: "public/images/a3.jpg",
        date: "2025",
    },
    {
        id: 4,
        title: "Completed AAT Level 1",
        organization: "AAT Institute",
        description: "Successfully completed the foundational level in accounting.",
        icon: <FaGraduationCap className="text-6xl text-blue-400 mx-auto my-4" />,
        date: "2023",
    },
    {
        id: 5,
        title: "Completed AAT Level 2",
        organization: "AAT Institute",
        description: "Successfully completed the intermediate level in accounting.",
        icon: <FaGraduationCap className="text-6xl text-blue-400 mx-auto my-4" />,
        date: "2024",
    },
];

const AchievementsPage: React.FC = () => {
    return (
        <section className="bg-[#0f172a] min-h-screen py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400">
                    My Achievements
                </h2>
                <p className="text-gray-300 mb-10">
                    Here are some of the awards, diplomas, and certifications I have completed along my journey.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 perspective-1000">
                    {achievements.map((ach) => (
                        <div
                            key={ach.id}
                            className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden cursor-pointer transform animate-spin-slow p-4"
                        >
                            {ach.img ? (
                                <img
                                    src={ach.img}
                                    alt={ach.title}
                                    className="w-full h-49 object-cover mb-4 rounded"
                                />
                            ) : (
                                ach.icon
                            )}
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-white mb-1">{ach.title}</h3>
                                <p className="text-gray-400 text-sm mb-2">
                                    {ach.organization} - {ach.date}
                                </p>
                                <p className="text-gray-300 text-sm">{ach.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsPage;
