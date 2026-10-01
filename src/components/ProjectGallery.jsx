import { useState } from 'react';
import { Film, Check, ExternalLink } from 'lucide-react';

export default function ProjectGallery({ project }) {
  const [selected, setSelected] = useState(0);
  const [failedImages, setFailedImages] = useState([]);
  const screenshots = project.screenshots.filter(image => !failedImages.includes(image.src));
  const image = screenshots[Math.min(selected, screenshots.length - 1)];

  if (!image) {
    return (
      <div className="flex h-full min-h-80 flex-col justify-between rounded-3xl bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 p-8 text-white sm:p-10">
        <div className="flex items-center gap-2 text-sm font-medium text-indigo-200"><Film size={20} aria-hidden="true" /> Movies, remembered.</div>
        <div className="py-8">
          <p className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</p>
          <p className="mt-4 max-w-sm leading-relaxed text-indigo-200">From finding your next film to keeping track of what you’ve watched.</p>
        </div>
        <div className="space-y-3">
          {project.highlights.map(highlight => <p key={highlight} className="flex items-center gap-3 text-sm"><Check size={16} className="text-indigo-300" aria-hidden="true" />{highlight}</p>)}
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-lg py-2 text-sm font-medium text-indigo-200 underline underline-offset-4">Open application <ExternalLink size={14} aria-hidden="true" /></a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-0">
      <figure>
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-900">
          <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" className="aspect-[16/10] w-full object-contain" onError={() => setFailedImages(previous => [...previous, image.src])} />
        </div>
        <figcaption className="mt-3 text-sm text-gray-600 dark:text-gray-400" aria-live="polite">{image.caption || image.label}</figcaption>
      </figure>
      <div className="mt-4 flex flex-wrap gap-3" role="group" aria-label={`${project.title} screenshots`}>
        {screenshots.map((shot, index) => (
          <button key={shot.src} type="button" aria-pressed={image.src === shot.src} onClick={() => setSelected(index)} className={`w-24 rounded-xl border-2 p-1 text-xs sm:w-28 ${image.src === shot.src ? 'border-primary-500 text-primary-700 dark:text-primary-300' : 'border-transparent text-gray-600 dark:text-gray-400'}`}>
            <img src={shot.src} alt="" loading="lazy" className="mb-2 aspect-video w-full rounded-lg object-cover" onError={() => setFailedImages(previous => [...previous, shot.src])} />
            {shot.label}
          </button>
        ))}
      </div>
    </div>
  );
}
