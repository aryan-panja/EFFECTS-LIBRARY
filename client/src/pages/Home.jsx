import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Code2, Github, Palette, Star } from "lucide-react"

export default function Home() {

    const text = "Unlock Your Creativity with Our Open-Source Effects Library".split(" ");

    useEffect(() => {
        document.title = "EFFECTS LIBRARY"

        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            {/* Hero Section */}
            <motion.section
                className="px-6 py-24 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-5xl md:text-7xl my-6 leading-tight text-white"

                >
                    {text.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: i / 10,
                            }}
                            key={i}
                        >
                            {el}{" "}
                        </motion.span>
                    ))}
                </motion.h1>
                <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-lg">
                    Discover a vast collection of stunning visual effects to elevate your projects.
                    Our open-source library provides easy-to-use components that you can seamlessly
                    integrate into your applications.
                </p>
                <motion.div
                    className="flex gap-4 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link
                        to="/components/parallax-image"
                        className="px-8 py-4 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors"
                    >
                        View Components
                    </Link>
                    <a
                        href="https://github.com/aryan-panja/effects-library"
                        className="px-8 py-4 bg-transparent border text-white border-white rounded hover:bg-white/10 transition-colors group"
                    >
                        <Github className="inline-block mr-2 -mt-1 group-hover:fill-white" />
                        Star on GitHub
                    </a>
                </motion.div>
            </motion.section>

            {/* Features */}
            <section className="px-6 py-24 text-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.div
                        className="text-center p-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Code2 className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Open Source</h3>
                        <p className="text-gray-400">Find our entire codebase on GitHub. Free and open for everyone to use and contribute.</p>
                    </motion.div>
                    <motion.div
                        className="text-center p-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Palette className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                        <p className="text-gray-400">A collection of designs and ideas from developers all around the world.</p>
                    </motion.div>
                    <motion.div
                        className="text-center p-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Star className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Get Credits</h3>
                        <p className="text-gray-400">Share your designs and get credited for your contributions to the library.</p>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="px-6 py-24 text-center">
                <h2 className="text-3xl text-white mb-6">Ready to Contribute?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                    This is a community open-source library. If you have a unique design or effect,
                    we'd love to showcase it. All contributors get proper credits for their work.
                </p>
                <div className="flex gap-4 justify-center group">
                    <a
                        href="https://github.com/aryan-panja/effects-library"
                        className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors"
                    >
                        <Star className="inline-block mr-2 -mt-1 group-hover:fill-yellow-400 group-hover:text-yellow-400" />
                        Star Repository
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-6 py-12 border-t border-gray-800">
                <div className="max-w-6xl mx-auto text-center text-gray-400">
                    <p>Made with ❤️ by the open-source community</p>
                </div>
            </footer>
        </div>
    )
}