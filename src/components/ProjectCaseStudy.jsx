import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { scrollToElement } from '../utils/navigation';

export default function ProjectCaseStudy({ project }) {
  const [activeTab, setActiveTab] = useState(project.caseStudy[0].id);
  const tabRefs = useRef([]);

  useEffect(() => {
    let frame;
    const followHash = () => {
      const section = project.caseStudy.find(tab => window.location.hash === `#${project.id}-tab-${tab.id}`);
      if (!section) return;
      setActiveTab(section.id);
      frame = window.requestAnimationFrame(() => scrollToElement(`${project.id}-tab-${section.id}`, true));
    };
    followHash();
    window.addEventListener('hashchange', followHash);
    return () => { window.removeEventListener('hashchange', followHash); window.cancelAnimationFrame(frame); };
  }, [project]);

  const selectTab = (id) => {
    setActiveTab(id);
    window.history.replaceState(null, '', `#${project.id}-tab-${id}`);
  };

  const handleKeyDown = (event, index) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % project.caseStudy.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + project.caseStudy.length) % project.caseStudy.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = project.caseStudy.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    selectTab(project.caseStudy[next].id);
    tabRefs.current[next].focus();
  };

  return (
    <section aria-labelledby={`${project.id}-case-study`} className="mt-12 border-t border-gray-200 pt-10 dark:border-gray-700">
      <h4 id={`${project.id}-case-study`} className="text-2xl font-semibold tracking-tight">Inside the build</h4>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Explore the experience, the backend, and the choices connecting them.</p>
      <div role="tablist" aria-label={`${project.title} case study`} className="my-6 flex flex-wrap gap-2">
        {project.caseStudy.map((tab, index) => (
          <button key={tab.id} id={`${project.id}-tab-${tab.id}`} type="button" role="tab" aria-selected={activeTab === tab.id} aria-controls={`${project.id}-panel-${tab.id}`} tabIndex={activeTab === tab.id ? 0 : -1} ref={element => { tabRefs.current[index] = element; }} onClick={() => selectTab(tab.id)} onKeyDown={event => handleKeyDown(event, index)} className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700'}`}>
            {tab.label}
          </button>
        ))}
      </div>
      {project.caseStudy.map(tab => (
        <div key={tab.id} role="tabpanel" id={`${project.id}-panel-${tab.id}`} aria-labelledby={`${project.id}-tab-${tab.id}`} hidden={activeTab !== tab.id} tabIndex={0} className="rounded-xl">
          <p className="mb-5 text-sm text-gray-600 dark:text-gray-400">{tab.intro}</p>
          <div className="grid gap-5 md:grid-cols-2">
            {tab.items.map(item => (
              <div key={item.title} className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900/60">
                <h5 className="text-lg font-semibold">{item.title}</h5>
                <p className="mb-5 mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.body}</p>
                <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary-700 dark:text-primary-300" aria-label={`View implementation: ${item.title}`}>View implementation <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
