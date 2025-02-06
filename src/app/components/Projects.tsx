"use client";

import { motion } from "framer-motion";
import {
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const projects = [
  {
    title: "Crypto App",
    description: "A cryptocurrency application",
    link: "https://phenomenal-tiramisu-982f05.netlify.app",
    icon: CurrencyDollarIcon,
  },
  {
    title: "AutoTweeter Hackathon Demo",
    description: "LLM integration and web scraper for Twitter",
    link: "https://lablab.ai/event/ai-agents-hackathon-2/twitter-bot-9000/twitter-bot-9000",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Lavoro Landing Page",
    description: "Landing page for Lavoro project",
    link: "https://www.lavoro-project.com/",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Sidekick Solutions Software",
    description: "Software solutions platform",
    link: "https://www.sidekicksolutions.org/",
    icon: WrenchScrewdriverIcon,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 w-full">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-700/50 rounded-lg transition-colors duration-300 ease-in-out group-hover:bg-blue-500/20">
                      <Icon className="w-6 h-6 text-blue-400 transition-colors duration-300 ease-in-out group-hover:text-blue-300" />
                    </div>
                    <h3 className="text-xl font-semibold transition-colors duration-300 ease-in-out group-hover:text-blue-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex items-center text-blue-400 text-sm font-medium transition-all duration-300 ease-in-out group-hover:text-blue-300">
                    <span className="group-hover:underline">View Project</span>
                    <svg
                      className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
