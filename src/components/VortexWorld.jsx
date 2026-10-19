import { useEffect, useRef, useState } from 'react';

export default function VortexWorld({ mode, paused }) {
  const host = useRef(null);
  const controller = useRef(null);
  const live = useRef({ mode, paused });
  const [status, setStatus] = useState('poster');
  useEffect(() => { live.current={mode,paused};controller.current?.setMode(mode);controller.current?.setPaused(paused); }, [mode,paused]);
  useEffect(() => {
    let stopped=false;
    const timeout=window.setTimeout(async () => {
      try {
        const { createVortex } = await import('../world/vortex.js');
        if(stopped)return;
        controller.current=createVortex(host.current,{...live.current,onState:setStatus});
      } catch { if(!stopped)setStatus('fallback'); }
    }, 400);
    const element=host.current;
    function point(event) {
      const rect=element.getBoundingClientRect();
      controller.current?.point((event.clientX-rect.left)/rect.width-.5,.5-(event.clientY-rect.top)/rect.height);
    }
    function reset(){controller.current?.point(0,0);}
    element.addEventListener('pointermove',point,{passive:true});
    element.addEventListener('pointerdown',point,{passive:true});
    element.addEventListener('pointerleave',reset);
    return () => {stopped=true;clearTimeout(timeout);controller.current?.dispose();controller.current=null;element.removeEventListener('pointermove',point);element.removeEventListener('pointerdown',point);element.removeEventListener('pointerleave',reset);};
  }, []);
  return <div className="vortex-world" ref={host} data-world-status={status} aria-hidden="true"><img className="vortex-poster" src="/assets/vortex-poster.webp" alt="" width="1600" height="1000" fetchPriority="high" /></div>;
}
