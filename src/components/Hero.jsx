import { motion } from 'framer-motion';
import { Mail, ExternalLink, FileText, GitBranch, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import FloatingBlob from './FloatingBlob';
import CyclingText from './CyclingText';

const cyclingRoles = ['Frontend Developer', 'Software Engineer', 'UI Engineer'];

const socialLinks = [
  { icon: GitBranch, href: personalInfo.social.github, label: 'GitHub' },
  { icon: Briefcase, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      {/* Organic decorative blobs — asymmetric placement (variance:8) */}
      <FloatingBlob
        className="top-10 left-[-5%] bg-primary-300/25 dark:bg-primary-800/10"
        size="w-80 h-80"
        duration={28}
      />
      <FloatingBlob
        className="top-1/2 right-[-8%] bg-purple-300/25 dark:bg-purple-800/10"
        size="w-96 h-96"
        duration={32}
        delay={4}
      />
      <FloatingBlob
        className="bottom-10 left-[30%] bg-indigo-300/20 dark:bg-indigo-800/8"
        size="w-64 h-64"
        duration={22}
        delay={8}
      />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {/* Avatar */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl ring-4 ring-white dark:ring-gray-800">
            {personalInfo.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>

          {/* Name — spec: text-4xl md:text-6xl tracking-tighter leading-none */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-4">
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          {/* Cycling role title */}
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 font-medium h-9">
            <CyclingText texts={cyclingRoles} interval={2800} />
          </h2>

          {/* Bio */}
          <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 inline-flex items-center gap-2"
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-all duration-300 hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400 inline-flex items-center gap-2"
            >
              <ExternalLink size={18} />
              View Projects
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-all duration-300 hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400 inline-flex items-center gap-2"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
