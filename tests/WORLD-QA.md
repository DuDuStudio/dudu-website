# Company vortex QA · 2026-10-17

Local production preview: http://127.0.0.1:18871/ . Not deployed.

- `npm run build`: client, SSR and complete static homepage succeeded.
- `npm run lint`, `git diff --check`: passed.
- `npm run test:world`: normal, 390px mobile, no JavaScript, no WebGL, reduced motion and external CDN blocking passed. Checks include one canvas, capped DPR, product keyboard/CTA, pause, offscreen stopping and live OS motion preference.
- 1280×720 first screen: product tabs bottom 691px; exploration CTA bottom 659px. Both are visible without scrolling. Large scene remains.
- Poster: 1440×822 WebP, 42.7KB, captured from the actual renderer with DOM overlays hidden; it contains no baked text or controls.
- Runtime: raw WebGL2 procedural ribbon geometry, not a fluid PDE solver. Compressed renderer chunk is approximately 2.9KB. No third-party runtime, GPU image texture or CDN is required.
- Original logo PNGs remain separate DOM images. No recoloring, particle tracing or glass substitution.
- Signature touchpoints: hero world, nav flow curves, footer Dudu word/flow composition.

Re-run `npm run test:world` while the production preview runs. Screenshots/results default to `/tmp/dudu-vortex-qa`.

Not claimed: physical mobile GPU acceptance, field Core Web Vitals, formal accessibility certification, Awwwards jury score, or user acceptance. Context-loss and GPU-specific browser differences should remain in independent review.
