import { useState } from 'react';
import { ArrowUpRight, Code2, Database, Server, ShieldCheck, Film } from 'lucide-react';

const icons = { ui: Code2, server: Server, database: Database, redis: ShieldCheck, tmdb: Film };

export default function ProjectArchitecture({ project }) {
  const { nodes, connections } = project.architecture;
  const [selected, setSelected] = useState('server');
  const selectedNode = nodes.find(node => node.id === selected);
  const markerId = `${project.id}-connection-arrow`;

  return (
    <section className="mt-12 border-t border-gray-200 pt-10 dark:border-gray-700" aria-labelledby={`${project.id}-architecture`}>
      <h4 id={`${project.id}-architecture`} tabIndex={-1} className="text-2xl font-semibold tracking-tight">How it fits together</h4>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Select a component to explore its role and source code.</p>
      <div className="relative my-7">
        <svg viewBox="0 0 900 300" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 hidden h-full w-full text-primary-300 dark:text-primary-700 md:block" aria-hidden="true">
          <defs><marker id={markerId} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8" fill="currentColor" /></marker></defs>
          {connections.map(edge => {
            const from = nodes.find(node => node.id === edge.from);
            const to = nodes.find(node => node.id === edge.to);
            const x1 = from.column * 300 + 255;
            const y1 = from.row * 100 + 50;
            const x2 = to.column * 300 + 45;
            const y2 = to.row * 100 + 50;
            return <path key={`${edge.from}-${edge.to}`} d={`M${x1},${y1} C${x1 + 65},${y1} ${x2 - 65},${y2} ${x2},${y2}`} fill="none" stroke="currentColor" strokeWidth="2" markerEnd={`url(#${markerId})`} />;
          })}
        </svg>
        <div className="relative grid gap-3 md:h-[300px] md:grid-cols-3 md:grid-rows-3 md:gap-0" role="group" aria-label={`${project.title} architecture components`}>
          {nodes.map(node => {
            const Icon = icons[node.id] || Server;
            return (
              <div key={node.id} className="flex items-center md:justify-center" style={{ '--node-column': node.column + 1, '--node-row': node.row + 1 }} data-architecture-node>
                <button type="button" aria-pressed={selected === node.id} aria-controls={`${project.id}-component-details`} onClick={() => setSelected(node.id)} className={`flex min-h-20 w-full items-center gap-3 rounded-2xl border p-4 text-left transition-colors md:w-[70%] ${selected === node.id ? 'border-primary-500 bg-primary-50 text-primary-800 dark:bg-primary-950 dark:text-primary-200' : 'border-gray-200 bg-white text-gray-700 hover:border-primary-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200'}`}>
                  <Icon size={20} className="shrink-0" aria-hidden="true" />
                  <span><span className="block text-sm font-semibold">{node.label}</span><span className="mt-1 block text-xs opacity-80">{node.subtitle}</span></span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid gap-6 rounded-2xl bg-gray-50 p-6 dark:bg-gray-900 md:grid-cols-[1.5fr_1fr]">
        <div id={`${project.id}-component-details`} role="region" aria-label="Selected component details" aria-live="polite" aria-atomic="true">
          <h5 className="font-semibold">{selectedNode.label}</h5>
          <p className="mb-4 mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{selectedNode.body}</p>
          <a href={selectedNode.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-primary-700 dark:text-primary-300">View component source <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Connected to</h5>
          <ul className="mt-3 space-y-3">
            {connections.filter(edge => edge.from === selected || edge.to === selected).map(edge => {
              const other = nodes.find(node => node.id === (edge.from === selected ? edge.to : edge.from));
              return <li key={`${edge.from}-${edge.to}`} className="text-sm"><button type="button" onClick={() => setSelected(other.id)} className="font-medium text-primary-700 underline underline-offset-4 dark:text-primary-300">{other.label}</button><span className="mt-1 block text-xs text-gray-600 dark:text-gray-400">{edge.label}</span></li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
