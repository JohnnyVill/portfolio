import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, FolderOpen } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const techColors = {
  React: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  JavaScript: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  'Tailwind CSS': 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  'Next.js': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  TypeScript: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  PostgreSQL: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  'TMDB API': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  Firebase: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  'OpenWeather API': 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  'Chart.js': 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
};

const gradients = [
  'from-primary-400 via-purple-400 to-indigo-500',
  'from-emerald-400 via-teal-400 to-cyan-500',
  'from-orange-400 via-rose-400 to-pink-500',
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <h2 className="section-title">
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of the projects I&apos;ve built recently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {personalInfo.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: i * 0.1,
              }}
            >
              <div className="group">
                {/* Card — Bento spec: rounded-[2.5rem], diffusion shadow */}
                <div className="rounded-[2.5rem] overflow-hidden bg-white dark:bg-gray-800 border border-slate-200/50 dark:border-gray-700/50 diffusion-shadow group-hover:diffusion-shadow-hover transition-shadow duration-500">
                  {/* Image area with gradient and subtle shimmer */}
                  <div className="relative h-52 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]}`}
                    />
                    {/* Perpetual shimmer — isolated micro-animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatDelay: 2 + i * 0.7,
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FolderOpen className="text-white/70" size={52} />
                    </div>
                  </div>

                  {/* Card interior — generous padding per Bento spec */}
                  <div className="p-8 pt-6">
                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                            techColors[tech] ||
                            'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                      >
                        <GitBranch size={16} />
                        Source
                      </a>
                    </div>
                  </div>
                </div>

                {/* Label outside card — Bento gallery-style */}
                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
