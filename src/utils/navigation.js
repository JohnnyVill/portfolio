export function scrollToElement(id, focus = false) {
  const element = document.getElementById(id);
  if (!element) return;
  if (focus) element.focus({ preventScroll: true });
  element.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    block: 'start',
  });
}
