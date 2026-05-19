import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const skillCategories = [
  { key: 'frontend', label: 'Frontend', icon: Code2, color: 'from-primary-400 to-primary-600' },
  { key: 'backend', label: 'Backend', icon: Server, color: 'from-emerald-400 to-emerald-600' },
  { key: 'tools', label: 'Tools', icon: Wrench, color: 'from-purple-400 to-purple-600' },
];

export default function Skills() {
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
            Technologies and tools I use to bring ideas to life
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
                  animate={{ scale: [1, 1.04, 1] }}
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
                    className="px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
