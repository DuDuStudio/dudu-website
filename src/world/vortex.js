/* One WebGL2 context, procedural ribbon geometry, no external assets.
   Each product changes the same GPU field. DOM owns all text and logos. */
const VERTEX = `#version 300 es
precision highp float;
in vec3 aParam;
uniform float uTime;
uniform float uMode;
uniform vec2 uPointer;
uniform float uAspect;
out vec3 vWorld;
out vec3 vNormal;
out float vBand;
out vec2 vUv;
mat3 rx(float a){float c=cos(a),s=sin(a);return mat3(1,0,0,0,c,s,0,-s,c);}
mat3 ry(float a){float c=cos(a),s=sin(a);return mat3(c,0,-s,0,1,0,s,0,c);}
vec3 surface(float t,float side,float band){
 float modeA=1.-min(abs(uMode),1.);
 float modeB=1.-min(abs(uMode-1.),1.);
 float modeC=1.-min(abs(uMode-2.),1.);
 float angle=t*6.283185*(.86+modeA*.25)+band*.86+uTime*.07;
 float radius=.78+pow(t,.82)*4.85;
 radius+=sin(t*11.+band+uTime*.13)*.12;
 float width=pow(max(sin(t*3.14159),0.),.7)*.48*(1.+modeB*.38);
 float curl=side*width;
 vec3 p=vec3(cos(angle)*(radius+curl),sin(angle)*(radius+curl),0.);
 p.z=sin(angle*1.2+band*.67+uTime*.15)*(.7-modeB*.48)+sin(side*1.4+t*8.+band)*.20;
 p.z+=modeC*sin(t*9.+band*.5)*.55;
 p.x*=1.+modeB*.12;
 p=rx(.47+modeB*.35+uPointer.y*.12)*ry(-.12+modeC*.24+uPointer.x*.14)*p;
 p.xy+=uPointer*vec2(.2,.12)*smoothstep(.7,2.,radius);
 if(uAspect<1.4)p*=.86;
 return p;
}
void main(){
 float t=aParam.x,side=aParam.y,band=aParam.z;
 vec3 p=surface(t,side,band);
 vNormal=normalize(cross(surface(t+.0005,side,band)-p,surface(t,side+.0005,band)-p));
 vWorld=p;vBand=band;vUv=vec2(t,side);
 float z=p.z-13.;float f=2.5;
 vec2 center=uAspect<1.4?vec2(.02,.05):vec2(.34,.10);
 gl_Position=vec4(p.x*f/uAspect+center.x*(-z),p.y*f+center.y*(-z),(-1.002*z-0.2002),-z);
}`;
const FRAGMENT = `#version 300 es
precision highp float;
in vec3 vWorld;
in vec3 vNormal;
in float vBand;
in vec2 vUv;
uniform float uTime;
uniform float uMode;
out vec4 outColor;
void main(){
 vec3 n=normalize(vNormal);
 if(!gl_FrontFacing)n=-n;
 vec3 light=normalize(vec3(-.5,1.,2.));
 float diffuse=max(dot(n,light),0.);
 float fold=.5+.5*sin(vUv.x*19.+vBand*.7-uTime*.2);
 vec3 navy=vec3(.063,.169,.282);
 vec3 silver=vec3(.65,.71,.76);
 vec3 paper=vec3(.91,.94,.96);
 vec3 amber=vec3(.80,.545,.176);
 vec3 teal=vec3(.047,.459,.502);
 float index=mod(floor(vBand+.1),6.);
 vec3 base=index<1.?navy:(index<5.?mix(silver,paper,index*.14):mix(amber,teal,clamp(uMode*.5,0.,1.)));
 float sideShade=.77+.23*(1.-abs(vUv.y));
 float edge=pow(abs(vUv.y),24.);
 vec3 color=base*(.52+diffuse*.47)*sideShade;
 float spec=pow(max(dot(reflect(-light,n),normalize(vec3(0.,0.,13.)-vWorld)),0.),30.);
 color+=spec*.18;
 color=mix(color,paper,edge*.28);
 color+=fold*.016;
 float fog=smoothstep(-3.,3.,-vWorld.z)*.13;
 color=mix(color,vec3(.925,.941,.95),fog);
 outColor=vec4(color,1.);
}`;

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    throw new Error('The brand scene shader could not compile.');
  }
  return shader;
}

export function createVortex(host, { mode = 0, paused = false, onState }) {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2', { alpha: false, antialias: true, powerPreference: 'low-power', preserveDrawingBuffer: false });
  if (!gl) { onState('fallback'); return null; }
  let program, buffer, vertex, fragment;
  try {
    vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
    fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    program = gl.createProgram();
    gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('The brand scene program could not link.');
    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const points = [];
    const segments = 220, bands = 7;
    for (let band = 0; band < bands; band++) {
      for (let i = 0; i < segments; i++) {
        const a = i / segments, b = (i + 1) / segments;
        points.push(a,-1,band,b,-1,band,a,1,band,a,1,band,b,-1,band,b,1,band);
      }
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
    gl.useProgram(program);
    const attribute = gl.getAttribLocation(program, 'aParam');
    gl.enableVertexAttribArray(attribute); gl.vertexAttribPointer(attribute, 3, gl.FLOAT, false, 0, 0);
    const uniforms = Object.fromEntries(['uTime','uMode','uPointer','uAspect'].map((key) => [key, gl.getUniformLocation(program, key)]));
    gl.enable(gl.DEPTH_TEST); gl.disable(gl.CULL_FACE);
    canvas.setAttribute('aria-hidden', 'true');
    canvas.className = 'vortex-canvas';
    canvas.dataset.renderer = 'webgl2';
    let targetMode = mode, currentMode = mode, time = 2.2, request = 0, previous = 0;
    let userPaused = paused, visible = true, lost = false, disposed = false, frames = 0;
    let pointer = [0,0], targetPointer = [0,0];
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = media.matches;
    const canRun = () => !disposed && !lost && visible && !document.hidden && !userPaused && !reduced;
    function draw(stamp) {
      request = 0;
      if (disposed || lost) return;
      const delta = previous ? Math.min((stamp - previous) / 1000, .04) : 0;
      previous = stamp;
      if (canRun()) time += delta;
      const settle = reduced || userPaused ? 1 : 1 - Math.exp(-delta * 4.5);
      currentMode += (targetMode-currentMode)*settle;
      pointer = pointer.map((value, index) => value + (targetPointer[index]-value)*settle);
      gl.viewport(0,0,canvas.width,canvas.height);
      gl.clearColor(.925,.941,.95,1); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniform1f(uniforms.uTime,time);
      gl.uniform1f(uniforms.uMode,currentMode);
      gl.uniform2f(uniforms.uPointer,pointer[0],pointer[1]);
      gl.uniform1f(uniforms.uAspect,canvas.clientWidth/canvas.clientHeight);
      gl.drawArrays(gl.TRIANGLES,0,points.length/3);
      frames++;
      if(frames===1)onState('ready');
      canvas.dataset.frames = String(frames);
      canvas.dataset.mode = String(targetMode);
      canvas.dataset.motion = canRun() ? 'running' : 'still';
      if (canRun()) request = requestAnimationFrame(draw);
    }
    function invalidate() {
      if (!request && !disposed && !lost) { previous = 0; request = requestAnimationFrame(draw); }
    }
    function resize() {
      const rect=host.getBoundingClientRect();
      const ratio=Math.min(window.devicePixelRatio || 1,window.matchMedia('(pointer: coarse)').matches ? 1 : 1.5);
      canvas.width=Math.max(1,Math.round(rect.width*ratio));
      canvas.height=Math.max(1,Math.round(rect.height*ratio));
      invalidate();
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const intersection = new IntersectionObserver(([entry]) => {
      visible=entry.isIntersecting;
      if (!visible && request) { cancelAnimationFrame(request); request=0; }
      if (visible) invalidate();
    }, {threshold:0});
    intersection.observe(host);
    function visibility() {
      if (document.hidden && request) {cancelAnimationFrame(request);request=0;}
      else invalidate();
    }
    function preference() { reduced=media.matches;targetPointer=[0,0]; if(request){cancelAnimationFrame(request);request=0;} invalidate(); }
    function contextLost(event) {event.preventDefault();lost=true;if(request)cancelAnimationFrame(request);request=0;canvas.hidden=true;onState('fallback');}
    canvas.addEventListener('webglcontextlost',contextLost);
    document.addEventListener('visibilitychange',visibility);
    media.addEventListener('change',preference);
    host.append(canvas); resize();
    return {
      setMode(next) {targetMode=next;invalidate();},
      setPaused(next) {userPaused=next;if(request){cancelAnimationFrame(request);request=0;}invalidate();},
      point(x,y) {if(!reduced){targetPointer=[x,y];invalidate();}},
      dispose() {
        disposed=true;if(request)cancelAnimationFrame(request);
        resizeObserver.disconnect();intersection.disconnect();media.removeEventListener('change',preference);
        document.removeEventListener('visibilitychange',visibility);canvas.removeEventListener('webglcontextlost',contextLost);
        gl.deleteBuffer(buffer);gl.deleteProgram(program);gl.deleteShader(vertex);gl.deleteShader(fragment);
        canvas.remove();gl.getExtension('WEBGL_lose_context')?.loseContext();
      },
    };
  } catch {
    if(buffer)gl.deleteBuffer(buffer);if(program)gl.deleteProgram(program);
    if(vertex)gl.deleteShader(vertex);if(fragment)gl.deleteShader(fragment);
    gl.getExtension('WEBGL_lose_context')?.loseContext();onState('fallback');return null;
  }
}
