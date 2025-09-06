import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white text-center py-5">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
);

export default Footer;
