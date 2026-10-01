import resumeUrl from './resume/Resume (2).pdf';

const repository = 'https://github.com/JohnnyVill/WatchBuddy';
const source = (path) => `${repository}/blob/761278ff1ba144b95377e248354f29a2eef6bd80/${path}`;

export const personalInfo = {
  name: 'Jonathan Villanueva',
  title: 'Full-Stack Software Engineer',
  bio: 'I build full-stack web applications with React, Next.js, TypeScript, and PostgreSQL, connecting thoughtful interfaces with the systems behind them.',
  email: 'jonathanvillanueva171@gmail.com',
  resumeUrl,
  social: { github: 'https://github.com/JohnnyVill', linkedin: 'https://linkedin.com/in/j-villanueva/' },
  aboutMe: [
    'I’m a software developer based in Stockton, California, with a B.S. in Computer Science from the University of the Pacific. I enjoy building applications from the interface through to the API and database.',
    'My work on WatchBuddy brings together movie discovery, user authentication, and persistent watch history. I’m interested in the details that make an application useful: responsive interactions, reliable data, and clear handling of loading and error states.',
    'I’m looking for opportunities to grow as a full-stack engineer, contribute to a team, and turn practical problems into software people enjoy using.',
  ],
  education: [{ degree: 'B.S. Computer Science', school: 'University of the Pacific', year: '2023 – 2025' }],
  skills: {
    frontend: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    tools: ['Git', 'GitHub', 'Vite'],
  },
  projects: [{
    id: 'watchbuddy',
    title: 'WatchBuddy',
    eyebrow: 'Featured full-stack project',
    description: 'Discover movies, explore where to watch them, and keep a personal watch history that follows your account.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Upstash Redis', 'TMDB API'],
    liveUrl: 'https://watchbuddymov.vercel.app/',
    githubUrl: repository,
    demo: { username: 'demo', password: '1234' },
    // Real captures only: { src, alt, label, caption, width, height }.
    // Live application access was blocked; do not substitute fabricated screenshots.
    screenshots: [],
    highlights: ['Movie discovery', 'Account authentication', 'Persistent watch history'],
    caseStudy: [
      { id: 'overview', label: 'Overview', intro: 'A movie discovery experience with a full-stack foundation.', items: [
        { title: 'Discover what to watch', body: 'Browse popular, top-rated, now-playing, and upcoming movies. Open a movie to explore its details, trailers, and watch providers.', sourceUrl: source('app/lib/tmdb.ts') },
        { title: 'Keep a personal history', body: 'Signed-in users can mark a movie as watched and return to their saved history. PostgreSQL stores the relationship between the user and the TMDB movie ID.', sourceUrl: source('app/lib/db.ts') },
      ] },
      { id: 'frontend', label: 'Frontend', intro: 'React interactions that connect browsing and account data.', items: [
        { title: 'Progressive movie browsing', body: 'Movie rows maintain separate pagination and loading state for each category. Approaching the end of a row requests the next page, with skeleton cards while it loads.', sourceUrl: source('app/components/movieRows.tsx') },
        { title: 'Optimistic watched state', body: 'The watched button updates immediately, then persists the change through an API request. If saving fails, it restores the previous state and displays an error.', sourceUrl: source('app/components/watchButton.tsx') },
      ] },
      { id: 'backend', label: 'Backend', intro: 'Account access, persistent data, and external services behind the interface.', items: [
        { title: 'Authentication and sessions', body: 'Passwords are hashed with bcrypt. Session payloads are signed with jose and stored in secure, HTTP-only cookies; the server verifies the token when reading a session.', sourceUrl: source('app/lib/session.ts') },
        { title: 'Parameterized database access', body: 'A PostgreSQL connection pool serves parameterized queries. Watch-history writes use an upsert keyed by user and movie, updating the completion state without duplicating the relationship.', sourceUrl: source('app/lib/db.ts') },
        { title: 'Rate limiting at the API boundary', body: 'The request proxy applies Redis-backed sliding-window limits, with separate limits for authentication and general API requests. Rejected requests receive a 429 response and retry information.', sourceUrl: source('proxy.ts') },
      ] },
      { id: 'decisions', label: 'Engineering Decisions', intro: 'Implementation choices and the tradeoffs they introduce.', items: [
        { title: 'Fast feedback with rollback', body: 'Optimistic watched-state updates make the interaction immediate. The tradeoff is maintaining rollback and error handling when the server cannot persist a change.', sourceUrl: source('app/components/watchButton.tsx') },
        { title: 'Keep movie metadata server-side', body: 'The TMDB helper runs only on the server, keeping the API token outside browser code. It uses uncached requests for fresh data, trading reuse for more external API calls.', sourceUrl: source('app/lib/tmdb.ts') },
        { title: 'Availability when the limiter is slow', body: 'Rate limiters use a one-second timeout and an ephemeral cache. The fail-open timeout favors availability if Redis is unreachable, at the cost of relaxing rate enforcement during that failure.', sourceUrl: source('app/lib/rateLimit.ts') },
      ] },
    ],
    architecture: {
      nodes: [
        { id: 'ui', label: 'React interface', subtitle: 'Browse & interact', column: 0, row: 1, body: 'Next.js renders the application; React client components manage movie rows, pagination, and watched-state interactions.', sourceUrl: source('app/components/homeUI.tsx') },
        { id: 'server', label: 'Next.js server', subtitle: 'Routes & sessions', column: 1, row: 1, body: 'Server-side helpers fetch movie data. API routes handle login, watch history, and watched-state writes; signed cookies identify the user.', sourceUrl: source('app/api/movies/watched/route.ts') },
        { id: 'database', label: 'PostgreSQL', subtitle: 'Accounts & history', column: 2, row: 0, body: 'A pg connection pool reads accounts and watch history. Parameterized queries persist watched-state changes using a user/movie upsert.', sourceUrl: source('app/lib/db.ts') },
        { id: 'redis', label: 'Upstash Redis', subtitle: 'API rate limiting', column: 2, row: 1, body: 'The request proxy checks Redis-backed sliding-window limiters before continuing API requests, using a stricter limit for authentication.', sourceUrl: source('app/lib/rateLimit.ts') },
        { id: 'tmdb', label: 'TMDB API', subtitle: 'Movie metadata', column: 2, row: 2, body: 'Server-only helpers request movie lists, details, trailers, and US watch providers using an environment-supplied bearer token.', sourceUrl: source('app/lib/tmdb.ts') },
      ],
      connections: [
        { from: 'ui', to: 'server', label: 'Page data & API requests' },
        { from: 'server', to: 'database', label: 'Account & history queries' },
        { from: 'server', to: 'redis', label: 'Rate-limit checks' },
        { from: 'server', to: 'tmdb', label: 'Movie metadata requests' },
      ],
    },
    skillEvidence: {
      React: { tab: 'frontend', body: 'Client components manage category pagination, loading skeletons, and optimistic watched-state updates.' },
      'Next.js': { tab: 'backend', body: 'App Router pages, API routes, and server-only helpers connect the interface to authentication, PostgreSQL, and TMDB.' },
      TypeScript: { tab: 'frontend', body: 'Typed component props, category keys, and session payloads describe the data moving through the application.' },
      'Tailwind CSS': { tab: 'frontend', body: 'Responsive utility classes style the movie rows, cards, and account interfaces.' },
      PostgreSQL: { tab: 'backend', body: 'Parameterized queries and an upsert persist watch history per user and movie.' },
      'REST APIs': { tab: 'backend', body: 'JSON endpoints retrieve movie categories and watched history and accept watched-state changes.' },
    },
  }],
};
