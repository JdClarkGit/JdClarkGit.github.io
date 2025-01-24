"use client";

import { FaGithub, FaEnvelope, FaCalendar } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a
        href="https://github.com/JdClarkGit"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="mailto:clarktechventures@gmail.com"
        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <FaEnvelope size={24} />
      </a>
      <a
        href="https://calendly.com/clarktechventures/30min?preview_source=et_card&month=2025-01"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <FaCalendar size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
