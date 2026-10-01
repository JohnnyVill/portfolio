# Jonathan Villanueva — Full-Stack Portfolio

A single-page React portfolio built with Vite, Tailwind CSS, Framer Motion, and Lucide icons. Includes a WatchBuddy showcase, keyboard-accessible case-study tabs, a clickable architecture diagram, and skills linked to implementation evidence.

## Development

```sh
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

Vite uses the `/portfolio/` base path for GitHub Pages. The résumé is imported as a build asset, so its URL follows that base path. ESLint excludes generated output and bundled agent tools in `.agents/`.

## Project content and screenshots

Edit project content in `src/data/personalInfo.js`. Technical statements and source links were checked against WatchBuddy commit `761278ff1ba144b95377e248354f29a2eef6bd80`. The implementation code, rather than its README, is the source of truth for authentication and rate limiting.

The live WatchBuddy application was blocked by the implementation environment's network policy. Real screenshots were therefore omitted; the showcase renders an overview instead. The original live URL and demo credentials remain from the existing portfolio and could not be checked against the running application.

To populate the gallery, place real captures in `src/assets/projects/`, import them into the project data module, and add entries to `screenshots`:

```js
import discoveryScreenshot from '../assets/projects/watchbuddy-discovery.png';

// Inside the WatchBuddy project:
screenshots: [{
  src: discoveryScreenshot,
  alt: 'WatchBuddy movie discovery page showing categorized movie rows',
  label: 'Movie discovery',
  caption: 'Browse popular, top-rated, now-playing, and upcoming movies.',
  width: 1440,
  height: 1000,
}],
```

Use each capture's actual dimensions. The gallery supports labeled thumbnails, alternative text, captions, and a fallback when an image cannot load. Skill evidence references a case-study tab ID; unsupported skills remain ordinary badges.

## Validation

Production build and lint passed. The built site was checked in headless Chrome for tab keyboard navigation, architecture controls, skill-to-project links, direct case-study links, résumé PDF access under the deployment base, mobile navigation, theme persistence, reduced-motion scrolling, and overflow at 320, 390, 768, and 1280 pixels. No contact messages were sent.
