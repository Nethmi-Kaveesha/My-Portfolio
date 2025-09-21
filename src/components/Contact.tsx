import React, { useRef } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    // Updated socials array
    const socials = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/kaveesha-fernando-882180281/",
            icon: <FaLinkedinIn />,
            color: "from-blue-500 to-blue-400"
        },
        {
            name: "GitHub",
            link: "https://github.com/Nethmi-Kaveesha",
            icon: <FaGithub />,
            color: "from-gray-700 to-gray-600"
        },
    ];

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        emailjs
            .sendForm(
                "service_84sfgvx",     // Your EmailJS Service ID
                "template_g6kx64p",    // Your EmailJS Template ID
                form.current,
                "WzEeSwqhKEkdKPQGW"    // Your EmailJS Public Key
            )
            .then(() => {
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'Thank you for reaching out. I will get back to you soon 😊',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2563EB',
                    background: '#1e293b',
                    color: '#ffffff',
                });
                form.current?.reset();
            })
            .catch(() => {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Something went wrong. Please try again later ❌',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#EF4444',
                    background: '#1e293b',
                    color: '#ffffff',
                });
            });
    };

    return (
        <section id="contact" className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 animate-gradient-x">
                    Get In Touch
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                    I’m currently open to <span className="text-blue-400 font-semibold">internships, freelance projects, and collaborations</span>. Whether you have a question, an idea, or just want to say hi — my inbox is always open.
                </p>

                {/* Email Me Button */}
                <a
                    href="mailto:kaveefernando2003@gmail.com?subject=Hello%20from%20Your%20Website&body=Hi%20Nethmi,"
                    className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 font-semibold shadow-xl transition transform hover:-translate-y-1 hover:scale-105"
                >
                    <FaEnvelope className="text-lg" /> Email Me
                </a>

                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="mt-12 flex flex-col gap-4 bg-gray-800 p-6 rounded-xl shadow-lg text-left">
                    <input
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name="user_email"
                        type="email"
                        placeholder="Your Email"
                        required
                        className="px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-indigo-600 text-white px-6 py-3 rounded font-semibold transition transform hover:-translate-y-1 hover:scale-105"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Links */}
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
                                <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r ${social.color} text-white`}>
                                    {social.icon}
                                </span>
                                <span className="font-medium">{social.name}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Glowing Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default Contact;
