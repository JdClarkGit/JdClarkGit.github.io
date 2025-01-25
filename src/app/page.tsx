"use client";

import { motion } from "framer-motion";
import Header from "./components/Header";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Chat from "./components/Chat";
import {
  AcademicCapIcon,
  LanguageIcon,
  CommandLineIcon,
  BuildingLibraryIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />

      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 pt-24"
      >
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 mb-16">
          <motion.div
            className="flex-1 bg-gray-800/50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <AcademicCapIcon className="w-8 h-8 text-blue-400" />
              About Me
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Enthusiast of personal projects. Avid chess player, biohacker,
              Muay Thai kickboxer, and creator of innovative tech solutions.
              Life-long learner, professional developer.
            </p>
            <div className="border-t border-gray-700 pt-4 mt-4 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BuildingLibraryIcon className="w-6 h-6 text-yellow-500" />
                  <span className="font-semibold">
                    B.S. Finance | University at Buffalo
                  </span>
                </div>
                <p className="text-sm mb-4">May 2020</p>
                <p className="text-sm mb-4 pl-8">
                  Learned extensively about financial analysis and market
                  structures. Engaged in equity research and algorithmic
                  trading.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ComputerDesktopIcon className="w-6 h-6 text-blue-400" />
                  <span className="font-semibold">
                    M.S. IT Management | Western Governors University
                  </span>
                </div>
                <p className="text-sm mb-4">Sept. 2024</p>
                <p className="text-sm pl-8">
                  Focused on IT management principles, with coursework in
                  advanced programming, project management, and cloud computing.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 bg-gray-800/50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <LanguageIcon className="w-8 h-8 text-green-400" />
                Phonetic Languages
              </h2>
              <ul className="space-y-3">
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-sm">English</span>
                    <span className="text-xs">Native</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-sm">Spanish</span>
                    <span className="text-xs">B2 (Professionally Fluent)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-sm">Italian</span>
                    <span className="text-xs">B1 (Conversational)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-sm">Portuguese</span>
                    <span className="text-xs">B1 (Conversational)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <CommandLineIcon className="w-8 h-8 text-purple-400" />
                Programming Languages
              </h2>
              <ul className="space-y-3">
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-sm">JavaScript</span>
                    <span className="text-xs">5+ years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-sm">Python</span>
                    <span className="text-xs">5+ years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-sm">TypeScript</span>
                    <span className="text-xs">4+ years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-sm">Rust</span>
                    <span className="text-xs">1.5+ years</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.h1
          className="text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Joseph D. Clark
        </motion.h1>
        <motion.p
          className="text-2xl text-gray-300 mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web Developer & Software Engineer
        </motion.p>

        <Chat />

        <div className="mt-20">
          <Projects />
        </div>
      </section>

      <footer id="contact" className="bg-gray-800/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <SocialLinks />
        </div>
      </footer>
    </main>
  );
}
