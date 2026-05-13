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
    <section id="skills" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Skills &amp;{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="section-subtitle">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map(({ key, label, icon: Icon, color }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2.5 rounded-xl bg-gradient-to-br ${color} text-white`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {label}
                  </h3>
                </div>

                <div className="space-y-4">
                  {personalInfo.skills[key].map((skill, j) => (
                    <div key={skill}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {85 - j * 3 + Math.floor(Math.random() * 10)}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${color}`}
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${85 - j * 3 + Math.floor(Math.random() * 10)}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + j * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
