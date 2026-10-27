import fs from 'node:fs/promises';
import { render } from '../dist-ssr/entry-server.js';
const target=new URL('../dist/index.html',import.meta.url);
const html=await fs.readFile(target,'utf8');
await fs.writeFile(target,html.replace('<div id="root"></div>',`<div id="root">${render()}</div>`));
console.log('Prerendered complete homepage with native links and poster fallback.');
