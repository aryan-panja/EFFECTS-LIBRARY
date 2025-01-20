import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Advertise = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-4">
            <header className="mb-8">
                <h1 className="text-4xl font-bold">Aryan Panja</h1>
            </header>
            <main className="text-center">
                <ul className="flex flex-col md:flex-row gap-6 items-center justify-center text-lg">
                    <li>
                        <a
                            href="https://github.com/aryan-panja"
                            className="flex items-center hover:text-gray-300 transition-colors"
                        >
                            <FaGithub className="mr-2" size={30} />
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/aryan-panja/"
                            className="flex items-center hover:text-gray-300 transition-colors"
                        >
                            {/* <FaLinkedin className="mr-2" /> */}
                            <FaLinkedin className='mr-2' size={30} />
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:panja.aryan.27@gmail.com"
                            className="flex items-center hover:text-gray-300 transition-colors"
                        >
                            <Mail className="mr-2" size={30} />
                            Email
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://x.com/aryan_panja27"
                            className="flex items-center hover:text-gray-300 transition-colors"
                        >
                            <FaXTwitter className='mr-2' size={30} />
                            Twitter
                        </a>
                    </li>
                </ul>
            </main>
            <footer className="mt-8 text-sm text-gray-400 roboto-regular">
                © {new Date().getFullYear()} Your Name. All rights reserved.
            </footer>
        </div>
    )
}
