/* Run against npm run preview. Chrome is used when present, or Playwright's
   installed Chromium. Assertions cover lifecycle and all fallback tiers. */
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const url = process.env.PREVIEW_URL || 'http://127.0.0.1:18871/';
const output = process.env.QA_DIR || '/tmp/dudu-vortex-qa';
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

(async () => {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ headless: true, ...(fs.existsSync(chrome) ? { executablePath: chrome } : {}) });
  const results = [];
  try {
    for (const scenario of ['normal', 'mobile', 'nojs', 'nowebgl', 'reduced', 'cdn-blocked']) {
      const context = await browser.newContext({ viewport: { width: scenario === 'mobile' ? 390 : 1440, height: 900 }, javaScriptEnabled: scenario !== 'nojs', reducedMotion: scenario === 'reduced' ? 'reduce' : 'no-preference', deviceScaleFactor: scenario === 'normal' ? 2 : 1 });
      if (scenario === 'nowebgl') await context.addInitScript(() => {
        const original = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function (type, ...args) { return type.startsWith('webgl') ? null : original.call(this, type, ...args); };
      });
      if (scenario === 'cdn-blocked') await context.route('https://**/*', route => route.abort());
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(url);
      await page.waitForTimeout(900);
      assert.equal(await page.locator('h1').count(), 1, `${scenario}: one server heading`);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${scenario}: no overflow`);
      assert.equal(await page.locator('.nav__brand img').getAttribute('src'), '/brand/company-mark.png');
      assert.deepEqual(errors, [], `${scenario}: no page errors`);
      if (scenario === 'nojs') {
        assert.equal(await page.locator('canvas').count(), 0);
        assert.equal(await page.locator('.world-native-links a:visible').count(), 3);
        assert.equal(await page.locator('#about h2').isVisible(), true);
      } else if (scenario === 'nowebgl') {
        assert.equal(await page.locator('canvas').count(), 0);
        assert.equal(await page.locator('[data-world-status]').getAttribute('data-world-status'), 'fallback');
      } else {
        await page.waitForSelector('[data-world-status="ready"]');
        assert.equal(await page.locator('canvas').count(), 1);
        const canvas = page.locator('canvas');
        assert.ok(await canvas.evaluate(c => c.width / c.clientWidth <= 1.501), 'DPR is clamped');
        if (scenario === 'reduced') {
          const frames = await canvas.getAttribute('data-frames');
          await page.waitForTimeout(350);
          assert.equal(await canvas.getAttribute('data-frames'), frames, 'reduced motion is still');
        } else {
          await page.getByRole('tab').first().focus();
          await page.keyboard.press('End');
          assert.equal(await page.getByRole('tab').last().getAttribute('aria-selected'), 'true');
          assert.equal(await page.locator('.world-cta').getAttribute('href'), 'https://vettalon.dudustudio.monster/');
          await page.waitForTimeout(120);
          assert.equal(await canvas.getAttribute('data-mode'), '2');
          await page.getByRole('button', { name: '暫停動態' }).click();
          await page.waitForTimeout(150);
          const frames = await canvas.getAttribute('data-frames');
          await page.waitForTimeout(350);
          assert.equal(await canvas.getAttribute('data-frames'), frames, 'pause stops the loop');
          await page.getByRole('tab').first().click();
          await page.waitForTimeout(150);
          assert.equal(await canvas.getAttribute('data-mode'), '0', 'paused scenes accept direct state changes');
          assert.equal(await canvas.evaluate(c => { const gl=c.getContext('webgl2'); const program=gl.getParameter(gl.CURRENT_PROGRAM); return gl.getUniform(program,gl.getUniformLocation(program,'uMode')); }), 0, 'the GPU uniform follows direct product selection');
          if (scenario === 'normal') {
            await page.getByRole('button', { name: '播放動態' }).click();
            await page.locator('footer').scrollIntoViewIfNeeded();
            await page.waitForTimeout(300);
            const offscreen = await canvas.getAttribute('data-frames');
            await page.waitForTimeout(350);
            assert.equal(await canvas.getAttribute('data-frames'), offscreen, 'offscreen stops the loop');
            await page.evaluate(() => scrollTo(0, 0));
            await page.emulateMedia({ reducedMotion: 'reduce' });
            await page.waitForTimeout(200);
            const reduced = await canvas.getAttribute('data-frames');
            await page.waitForTimeout(350);
            assert.equal(await canvas.getAttribute('data-frames'), reduced, 'live OS preference stops the loop');
          }
        }
      }
      await page.screenshot({ path: path.join(output, `${scenario}.png`) });
      results.push({ scenario, passed: true });
      await context.close();
    }
    fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify(results, null, 2));
    console.log(JSON.stringify(results, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
