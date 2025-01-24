"use client";

import { motion } from "framer-motion";
import Header from "./components/Header";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 pt-16"
      >
        <div className="text-center mb-16 max-w-3xl">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Joseph D. Clark
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Web Developer & Software Engineer
          </motion.p>
          <motion.div
            className="text-md text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="mb-4">
              Enthusiast of personal projects. Avid chess player, biohacker,
              Muay Thai kickboxer, and creator of innovative tech solutions.
              Life-long learner, professional developer.
            </p>
            <div className="border-t border-gray-700 pt-4 mt-4">
              <p className="mb-2">
                <span className="font-semibold">
                  📜 B.S. Finance | University at Buffalo
                </span>{" "}
                ─▶ awarded 2020
              </p>
              <p className="text-sm mb-4">
                Learned extensively about financial analysis and market
                structures. Engaged in equity research and algorithmic trading.
              </p>
              <p className="mb-2">
                <span className="font-semibold">
                  📜 M.S. IT Management | Western Governors University
                </span>{" "}
                ─▶ graduated Sept. 2024
              </p>
              <p className="text-sm">
                Focused on IT management principles, with coursework in advanced
                programming, project management, and cloud computing.
              </p>
            </div>
          </motion.div>
        </div>
        <Projects />
      </section>

      <footer id="contact" className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <SocialLinks />
        </div>
      </footer>
    </main>
  );
}
