import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Gallery Application",
    emoji: "📷",
    description:
      "Responsive image gallery application with a clean and modern interface.",
    tech: ["React", "CSS", "APIs"],
    github: "https://github.com/Ukeshwarninawe/Gallery-Application.git",
    demo: "https://gallery-application-ruddy.vercel.app/",
  },

  {
    title: "Notes Application",
    emoji: "📝",
    description:
      "Frontend notes application that allows users to add and delete notes.",
    tech: ["React", "CSS"],
    github: "https://github.com/Ukeshwarninawe/Notes-Appilcation.git",
    demo: "https://notes-appilcation.vercel.app/",
  },

  {
    title: "Personality Predictor",
    emoji: "🧠",
    description:
      "Interactive application that predicts personality traits based on user responses.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ukeshwarninawe/Personality-Predicter.git",
    demo: "https://personality-predicter.vercel.app/",
  },

  {
    title: "Tic Tac Toe Game",
    emoji: "❌⭕",
    description:
      "Play Tic Tac Toe against the computer with intelligent moves.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ukeshwarninawe/Tic-Tac-Toe-Game.git",
    demo: "https://tic-tac-toe-game-liard-five.vercel.app/",
  },

  {
    title: "Rock Paper Scissors",
    emoji: "✊✋✌️",
    description:
      "Classic Rock Paper Scissors game against the computer with score tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ukeshwarninawe/Rock-Paper-Scissors-Game.git",
    demo: "https://rock-paper-scissors-game-chi-two.vercel.app/",
  },

  {
    title: "Netflix Clone",
    emoji: "🎬",
    description:
      "Responsive Netflix landing page clone built to practice modern UI design.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Ukeshwarninawe/Netflix-Clone.git",
    demo: null,
  },

  {
    title: "Amazon Clone",
    emoji: "🛒",
    description:
      "Responsive Amazon homepage clone focusing on layout and frontend design.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Ukeshwarninawe/Amazon-Clone.git",
    demo: null,
  },
];

const Project = () => {
  return (
    <div className="min-h-screen text-white px-4 md:px-8 lg:px-16 pt-24 pb-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-700 rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-pink-700 rounded-full blur-[150px] opacity-20"></div>

      <div className="relative z-10 flex flex-col items-center">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-gray-400 mt-4 text-lg max-w-3xl">
            Projects that helped me improve my development and
            problem-solving skills.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-md
                border border-purple-500/20
                rounded-3xl
                p-8
                hover:scale-105
                hover:border-purple-400
                hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
                transition-all
                duration-300
                flex flex-col
                justify-between
              "
            >
              <div>

                {/* Emoji */}
                <div className="text-4xl text-center mb-5">
                  {project.emoji}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-purple-400 text-center mb-4">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-center leading-7 mb-6 min-h-[90px]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1
                        text-sm
                        bg-purple-900/30
                        border border-purple-500/30
                        rounded-full
                        whitespace-nowrap
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-3 flex-wrap">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-5 py-3
                    bg-purple-600
                    rounded-xl
                    hover:bg-purple-700
                    transition-all
                    duration-300
                    flex items-center
                    gap-2
                    font-medium
                    whitespace-nowrap
                  "
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5 py-3
                      border border-purple-500
                      rounded-xl
                      hover:bg-purple-600
                      transition-all
                      duration-300
                      flex items-center
                      gap-2
                      font-medium
                      whitespace-nowrap
                    "
                  >
                    <FaExternalLinkAlt size={15} />
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="
                      px-5 py-3
                      border border-gray-700
                      text-gray-500
                      rounded-xl
                      cursor-not-allowed
                      whitespace-nowrap
                    "
                  >
                    No Demo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-400 max-w-3xl leading-8">
          I enjoy building projects that strengthen my problem-solving
          skills and improve my understanding of software development.
          More exciting projects are coming soon 🚀
        </div>

      </div>
    </div>
  );
};

export default Project;