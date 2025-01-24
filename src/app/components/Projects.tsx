"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Crypto App",
    description: "A cryptocurrency application",
    link: "https://phenomenal-tiramisu-982f05.netlify.app",
  },
  {
    title: "AutoTweeter Hackathon Demo",
    description: "LLM integration and web scraper for Twitter",
    link: "https://lablab.ai/event/ai-agents-hackathon-2/twitter-bot-9000/twitter-bot-9000",
  },
  {
    title: "Lavoro VAaaS Landing Page",
    description: "Landing page for Lavoro project",
    link: "https://www.lavoro-project.com/",
  },
  {
    title: "Sidekick Solutions Software",
    description: "Software solutions platform",
    link: "https://www.sidekicksolutions.org/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 w-full">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-24 bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    View Project
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
