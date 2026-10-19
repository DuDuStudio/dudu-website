import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import VortexWorld from './VortexWorld';

export default function Hero() {
  const [selected,setSelected]=useState(0);
  const [paused,setPaused]=useState(false);
  const [enhanced,setEnhanced]=useState(false);
  const [reduced,setReduced]=useState(false);
  const tabs=useRef([]);
  const product=PRODUCTS[selected];
  useEffect(() => {
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const update=()=>setReduced(media.matches);
    update();setEnhanced(true);
    try{setPaused(localStorage.getItem('dudu-world-paused')==='true');}catch{ /* Storage is optional. */ }
    media.addEventListener('change',update);
    return()=>media.removeEventListener('change',update);
  },[]);
  function toggleMotion(){setPaused(value=>{try{localStorage.setItem('dudu-world-paused',String(!value));}catch{ /* Storage is optional. */ }return !value;});}
  function onKeyDown(event,index){
    const next={ArrowRight:(index+1)%3,ArrowLeft:(index+2)%3,Home:0,End:2}[event.key];
    if(next===undefined)return;event.preventDefault();setSelected(next);tabs.current[next]?.focus();
  }
  return (
    <section className="hero" data-product={product.id} data-enhanced={enhanced} aria-labelledby="hero-title">
      <div className="hero-intro">
        <h1 id="hero-title">讓 AI 參與工作，<br />從適合你的工具開始。</h1>
        <p>我們開發 AI 員工平台、專用作業系統與程式碼稽核工具。選一個你想解決的問題，看看產品怎麼用。</p>
        <a className="hero-compare" href="#product">比較三個產品 <span aria-hidden="true">↓</span></a>
      </div>
      <div className="world-navigation">
        <div className="world-tabs" role="tablist" aria-label="選擇工作需求">
          {PRODUCTS.map((item,index)=><button key={item.id} id={`world-tab-${item.id}`} type="button" role="tab" aria-selected={selected===index} aria-controls="world-panel" tabIndex={selected===index?0:-1} ref={node=>{tabs.current[index]=node;}} onClick={()=>setSelected(index)} onKeyDown={event=>onKeyDown(event,index)}>{['交辦工作','試用 AI 桌面','檢查程式碼'][index]}</button>)}
        </div>
        <div className="world-native-links">{PRODUCTS.map(item=><a key={item.id} href={item.href}>{item.name} ↗</a>)}</div>
        <div className="world-description" id="world-panel" role="tabpanel" aria-labelledby={`world-tab-${product.id}`} tabIndex={0}>
          <p className="eyebrow">{product.category}</p>
          <h2>{product.name}</h2>
          <p className="world-summary">{product.description}</p>
          <a className="world-cta" href={product.href}>{product.cta}<ArrowUpRight size={21} aria-hidden="true"/></a>
          <p className="world-note">{selected===1?'pre-GA 技術試用 · 請先查看硬體與驗證狀態。':'Apache 2.0 開源核心 · 可自行部署。'}</p>
        </div>
      </div>
      <figure className="world-display">
        <div className="world-viewport"><VortexWorld mode={selected} paused={paused||reduced} /></div>
        <figcaption><span>{product.words.join(' → ')}</span><button className="world-pause" type="button" aria-pressed={paused||reduced} onClick={toggleMotion} disabled={reduced}>{paused||reduced?<Play size={14} aria-hidden="true"/>:<Pause size={14} aria-hidden="true"/>}{reduced?'靜態模式':paused?'播放動態':'暫停動態'}</button></figcaption>
      </figure>
      <p className="sr-only" role="status" aria-live="polite">已選擇 {product.name}，{product.category}。</p>
    </section>
  );
}
