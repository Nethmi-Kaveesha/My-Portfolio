import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white pt-20">
            {/* Top Wave */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-full h-20 md:h-28"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39 56.44C181.77 75.14 0 120 0 120V0h1200v27.35s-218.23 66.63-348.61 69.09c-130.39 2.46-230-39.31-349.39-40.86-119.39-1.55-181.78 26.86-280.61 40.86z"
                        className="fill-[#1e293b]"
                    ></path>
                </svg>
            </div>

            {/* Footer Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400">
                    Let’s Connect
                </h2>
                <p className="text-gray-400 mb-6">
                    Building creative, efficient, and innovative solutions with code.
                </p>
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} <span className="font-semibold">Your Name</span>. All rights reserved.
                </p>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg
                    className="relative block w-full h-20 md:h-28"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39 56.44C181.77 75.14 0 120 0 120V0h1200v27.35s-218.23 66.63-348.61 69.09c-130.39 2.46-230-39.31-349.39-40.86-119.39-1.55-181.78 26.86-280.61 40.86z"
                        className="fill-[#0f172a]"
                    ></path>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;
