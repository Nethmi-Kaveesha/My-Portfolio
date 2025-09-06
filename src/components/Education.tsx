import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
    {
        institute: "Convent of Our Lady of Victories",
        details: ["G.C.E. Ordinary Level (O/L) – 2019", "G.C.E. Advanced Level (A/L) – 2022"],
    },
    {
        institute: "Institute of Java & Software Engineering (IJSE)",
        details: [
            "Comprehensive Master Java Developer (CMJD)",
            "HDSE – Higher Diploma in Software Engineering",
        ],
    },
    {
        institute: "Association of Accounting Technicians (AAT)",
        details: ["Completed Level 1 & Level 2"],
    },
    {
        institute: "University of Colombo – Institute of Human Resource Advancement (IHRA)",
        details: ["English Language Certificate Course"],
    },
];

const Education: React.FC = () => {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20"
            id="education"
        >
            <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 animate-gradient-x">
                    Education
                </h2>

                <div className="relative border-l border-gray-700 ml-4">
                    {educationData.map((edu, index) => (
                        <div key={index} className="mb-12 ml-6 relative">
                            {/* Timeline Dot */}
                            <span className="absolute -left-9 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 shadow-md">
                <GraduationCap className="w-6 h-6 text-white" />
              </span>

                            {/* Card */}
                            <div className="bg-[#1e293b]/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-700/50 hover:scale-[1.02] transition-transform duration-300">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                                    {edu.institute}
                                </h3>
                                <ul className="space-y-2 text-gray-300 text-base leading-relaxed">
                                    {edu.details.map((detail, i) => (
                                        <li
                                            key={i}
                                            className="pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-blue-400"
                                        >
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Glow background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default Education;
