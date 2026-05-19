import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Briefcase, Target, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const quickFacts = [
  { icon: MapPin, text: 'Based in Stockton, CA' },
  { icon: Briefcase, text: 'Open to freelance & full-time opportunities' },
  { icon: Target, text: 'Focused on accessible, performant web experiences' },
  { icon: BookOpen, text: 'Always learning and exploring new technologies' },
];

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px'}} 
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <h2 className="section-title">
            About{' '}
            <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            A brief introduction to who I am and what I do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Bio — takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
            className="md:col-span-3 space-y-6"
          >
            {personalInfo.aboutMe.map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Sidebar — takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
                <span className="p-2 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 text-white">
                  <GraduationCap size={18} />
                </span>
                Education
              </h3>
              {personalInfo.education.map((edu, i) => (
                <div key={i} className="space-y-1 pl-1">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {edu.degree}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">{edu.school}</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick facts — no cards, just airy list */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
                <span className="p-2 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 text-white">
                  <Target size={18} />
                </span>
                Quick Facts
              </h3>
              <ul className="space-y-4">
                {quickFacts.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                  >
                    <Icon size={18} className="text-primary-500 dark:text-primary-400 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
