import { motion } from 'framer-motion';
import { GitBranch, Briefcase, Globe, Mail, ArrowDown, FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 dark:bg-primary-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-800/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl ring-4 ring-white dark:ring-gray-800">
            {personalInfo.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
            {personalInfo.title}
          </h2>

          {/* Bio */}
          <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#contact" className="btn-primary">
              <Mail size={18} />
              Get in Touch
            </a>
            <a href="#projects" className="btn-outline">
              <ExternalLink size={18} />
              View Projects
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            {[
              { icon: GitBranch, href: personalInfo.social.github, label: 'GitHub' },
              { icon: Briefcase, href: personalInfo.social.linkedin, label: 'LinkedIn' },
              { icon: Globe, href: personalInfo.social.twitter, label: 'Twitter' },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
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
          <ArrowDown className="animate-bounce text-gray-400" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
