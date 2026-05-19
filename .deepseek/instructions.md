# Portfolio Website Project - AI Coding Instructions

## Project Overview
Build a modern, responsive portfolio website using React and Tailwind CSS. This is a personal portfolio to showcase skills, projects, and professional experience.

## Technology Stack
- **Framework**: React 18+ with Vite (not Create React App)
- **Styling**: Tailwind CSS 3+
- **Language**: JavaScript (or TypeScript if specified)
- **Icons**: React Icons or Lucide React
- **Animations**: Framer Motion (preferred) or Tailwind animations

## Project Structure Required
portfolio/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Hero.jsx
│ │ ├── About.jsx
│ │ ├── Projects.jsx
│ │ ├── Skills.jsx
│ │ ├── Contact.jsx
│ │ └── Footer.jsx
│ ├── data/
│ │ └── personalInfo.js (name, bio, social links, etc.)
│ ├── styles/
│ │ └── index.css
│ ├── App.jsx
│ └── main.jsx
├── public/
│ └── (images, resume.pdf, etc.)
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md

text

## Required Features

### 1. Navigation Bar
- Fixed/sticky position at top
- Smooth scroll to sections (Hero, About, Projects, Skills, Contact)
- Mobile-responsive hamburger menu
- Active section highlighting

### 2. Hero Section
- Name and professional title/role
- Brief introduction (2-3 sentences)
- Call-to-action buttons (Contact, View Projects, Download Resume)
- Profile image/avatar placeholder
- Social media links (GitHub, LinkedIn, Twitter, etc.)

### 3. About Section
- Professional bio (placeholder text with [Your Name] tags)
- Education/experience highlights
- Personal interests or philosophy
- Profile image (optional)

### 4. Projects Section
- Grid layout (3+ project cards)
- Each card contains:
  - Project title
  - Description (1-2 sentences)
  - Technologies used (tags/badges)
  - Links: Live demo, GitHub repository
  - Project image placeholder
- Responsive design (3 columns on desktop, 2 on tablet, 1 on mobile)
- Optional: Filter by category

### 5. Skills Section
- Technical skills categorized (Frontend, Backend, Tools, etc.)
- Visual representation (progress bars, skill tags, or icons)
- Include: React, Tailwind, JavaScript, Git, responsive design
- Add placeholder for custom skills array

### 6. Contact Section
- Contact form with fields: Name, Email, Message
- Form validation (required fields, email format)
- Submit button with loading state
- Display success/error messages
- Alternative contact methods (email directly, social links)
- No backend required (use Formspree, EmailJS, or console log)

### 7. Footer
- Copyright notice with current year
- Social media links
- Back to top button

## Styling Requirements (Tailwind CSS)

### Color Scheme (Modern Dark/Light)
- Primary color: Indigo, Purple, or Teal (#4f46e5, #8b5cf6, or #14b8a6)
- Dark mode support (prefers-color-scheme or toggle switch)
- Smooth transitions and hover effects
- Consistent spacing and typography

### Design Principles
- Clean, minimalist design
- Ample white space
- Responsive breakpoints:
  - Mobile: < 768px (1 column)
  - Tablet: 768px - 1024px (2 columns)
  - Desktop: > 1024px (3 columns)
- Use Tailwind's utility classes primarily
- Custom CSS only when absolutely necessary

### Animations
- Fade-in on scroll for sections
- Hover effects on project cards
- Smooth page transitions
- Loading spinner for form submission

## Code Quality Standards

### Component Structure
- Functional components with hooks only (no classes)
- Each component in its own file
- Export as default or named consistently
- Proptypes or TypeScript for type checking
- Destructure props

### Styling Approach
- Use Tailwind classes directly in JSX
- Create reusable components for repeated patterns
- Use `className` with template literals for conditional styling

### File Organization
- Keep components small and focused
- Extract reusable utility functions to separate files
- Store constants and mock data in `/data` folder

### Performance
- Lazy load images
- Use React.memo for expensive components
- Optimize bundle size (code splitting if needed)
- No unnecessary re-renders

## Content Placeholders (Customize Later)

Use these placeholders that I can easily replace:

```javascript
// src/data/personalInfo.js
export const personalInfo = {
  name: "Jonathan Villanueva",
  title: "Frontend Developer / Software Engineer",
  bio: "Passionate developer creating beautiful web experiences...",
  email: "jonathanvillanueva171@gmail.com",
  social: {
    github: "https://github.com/JohnnyVill",
    linkedin: "https://www.linkedin.com/in/j-villanueva/",
  },
  skills: [
    "React", "JavaScript", "Tailwind CSS", "Git", 
    "Responsive Design", "REST APIs"
  ],
  projects: [
    {
      title: "Project 1",
      description: "Description of your first project",
      tech: ["React", "Tailwind"],
      liveUrl: "https://watchbuddymov.vercel.app/",
      githubUrl: "https://github.com/JohnnyVill/WatchBuddy"
    }
    // Add more projects
  ]
}
```