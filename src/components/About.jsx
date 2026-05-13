import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="section-subtitle">A brief introduction to who I am and what I do</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {personalInfo.aboutMe.map((paragraph, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Education & Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Education card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
                <GraduationCap className="text-primary-600 dark:text-primary-400" size={22} />
                Education
              </h3>
              {personalInfo.education.map((edu, i) => (
                <div key={i} className="space-y-1">
                  <p className="font-medium text-gray-800 dark:text-gray-200">{edu.degree}</p>
                  <p className="text-gray-500 dark:text-gray-400">{edu.school}</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>

            {/* Location / quick facts */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
                <MapPin className="text-primary-600 dark:text-primary-400" size={22} />
                Quick Facts
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>🌍 Based in [Your Location]</li>
                <li>💼 Open to freelance &amp; full-time opportunities</li>
                <li>🎯 Focused on creating accessible, performant web apps</li>
                <li>📚 Always learning and exploring new technologies</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
