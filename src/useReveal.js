import { useEffect } from 'react';

/** Content is visible at rest; motion only settles a newly entered section. */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations=new Set();
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        if(!media.matches&&entry.boundingClientRect.top>100){
          const animation=entry.target.animate([{transform:'translateY(20px)'},{transform:'none'}],{duration:600,easing:'cubic-bezier(.16,1,.3,1)'});
          animations.add(animation);animation.onfinish=()=>animations.delete(animation);
        }
        observer.unobserve(entry.target);
      });
    },{threshold:.1});
    document.querySelectorAll('.rv').forEach(element=>observer.observe(element));
    function stop(){if(media.matches)animations.forEach(animation=>animation.cancel());}
    media.addEventListener('change',stop);
    return()=>{observer.disconnect();media.removeEventListener('change',stop);animations.forEach(animation=>animation.cancel());};
  },[]);
}
