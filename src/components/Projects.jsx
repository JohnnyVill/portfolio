import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Network } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { scrollToElement } from '../utils/navigation';
import ProjectGallery from './ProjectGallery';
import ProjectCaseStudy from './ProjectCaseStudy';
import ProjectArchitecture from './ProjectArchitecture';

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-950">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <h2 className="section-title">Selected <span className="text-gradient">Work</span></h2>
          <p className="section-subtitle">Explore what I built and the engineering behind it.</p>
        </motion.div>
        <div className="space-y-12">
          {personalInfo.projects.map(project => (
            <article key={project.id} aria-labelledby={`${project.id}-title`} className="min-w-0 rounded-[2rem] border border-gray-200 bg-white p-5 diffusion-shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8 lg:p-10">
              <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
                <ProjectGallery project={project} />
                <div className="min-w-0 lg:py-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-700 dark:text-primary-300">{project.eyebrow}</p>
                  <h3 id={`${project.id}-title`} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">{project.description}</p>
                  <div className="my-6 flex flex-wrap gap-2">
                    {project.tech.map(tech => <span key={tech} className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 dark:bg-gray-900 dark:text-gray-300">{tech}</span>)}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"><ExternalLink size={16} aria-hidden="true" />Try Demo</a>
                    <button type="button" onClick={() => scrollToElement(`${project.id}-architecture`, true)} className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-primary-500 dark:border-gray-600 dark:text-gray-200"><Network size={16} aria-hidden="true" />Explore Architecture</button>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-2 py-3 text-sm font-medium text-primary-700 dark:text-primary-300"><GitBranch size={16} aria-hidden="true" />View Code</a>
                  </div>
                  {project.demo && (
                    <details className="mt-6 rounded-2xl border border-gray-200 p-4 text-sm dark:border-gray-700">
                      <summary className="cursor-pointer font-medium text-gray-700 dark:text-gray-200">Demo account credentials</summary>
                      <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-gray-600 dark:text-gray-400">
                        <dt>Username</dt><dd><code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-900">{project.demo.username}</code></dd>
                        <dt>Password</dt><dd><code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-900">{project.demo.password}</code></dd>
                      </dl>
                    </details>
                  )}
                </div>
              </div>
              <ProjectCaseStudy project={project} />
              <ProjectArchitecture project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
