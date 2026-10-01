import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Server, Wrench, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const skillCategories = [
  { key: 'frontend', label: 'Frontend', icon: Code2, color: 'from-primary-400 to-primary-600' },
  { key: 'backend', label: 'Backend', icon: Server, color: 'from-emerald-400 to-emerald-600' },
  { key: 'tools', label: 'Tools', icon: Wrench, color: 'from-purple-400 to-purple-600' },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const reduceMotion = useReducedMotion();
  const evidenceFor = skill => {
    const project = personalInfo.projects.find(item => item.skillEvidence[skill]);
    return project ? { project, ...project.skillEvidence[skill] } : null;
  };
  const selectedEvidence = selectedSkill ? evidenceFor(selectedSkill) : null;
  const tagClasses = 'px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300';
  return (
    <section id="skills" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <h2 className="section-title">
            Skills &amp;{' '}
            <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Select an underlined skill to see how I used it in a project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map(({ key, label, icon: Icon, color }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: i * 0.12,
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${color} text-white`}
                  animate={reduceMotion ? {} : { scale: [1, 1.04, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.8,
                  }}
                >
                  <Icon size={20} />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {label}
                </h3>
              </div>

              {/* Tag cloud — no progress bars */}
              <div className="flex flex-wrap gap-2.5">
                {personalInfo.skills[key].map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.06 }}
                    className="inline-flex"
                  >
                    {evidenceFor(skill) ? (
                      <button type="button" onClick={() => setSelectedSkill(skill)} aria-pressed={selectedSkill === skill} aria-controls="skill-evidence" className={`${tagClasses} underline decoration-primary-400 underline-offset-4 transition-colors hover:border-primary-500 ${selectedSkill === skill ? '!border-primary-500 !text-primary-700 dark:!text-primary-300' : ''}`}>
                        {skill}
                      </button>
                    ) : <span className={tagClasses}>{skill}</span>}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div id="skill-evidence" className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800" role="region" aria-label="Project evidence for selected skill" aria-live="polite" aria-atomic="true">
          {selectedEvidence ? (
            <>
              <h3 className="text-lg font-semibold">{selectedSkill} in {selectedEvidence.project.title}</h3>
              <p className="my-3 max-w-3xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">{selectedEvidence.body}</p>
              <a href={`#${selectedEvidence.project.id}-tab-${selectedEvidence.tab}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary-700 dark:text-primary-300">Explore the {selectedEvidence.tab} implementation <ArrowUpRight size={16} aria-hidden="true" /></a>
            </>
          ) : <p className="text-sm text-gray-600 dark:text-gray-400">Choose a linked skill above to explore the implementation behind it.</p>}
        </div>
      </div>
    </section>
  );
}
