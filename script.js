<<<<<<< HEAD
// ===== EDITA ESTO: frases =====
const FRASES_GANA = [
  "Ganaste. Ese cerebro tuyo es de lo que más me gusta.",
  "Victoria para ti. Hoy hasta Cupido te aplaude.",
  "Ganaste. Elige tu premio: un abrazo, una película o una cita.",
  "Tres en raya y otra victoria. Contigo hasta perder sería divertido."
];
const FRASES_PIERDE = [
  "Perdiste esta vez, pero ganaste algo mejor: una revancha conmigo.",
  "Esta me la llevo yo. Se paga con un beso o con la revancha, tú eliges.",
  "Perdiste, pero sigues siendo mi jugador favorito.",
  "Se te escapó por poquito. La revancha ya está lista."
];
const FRASES_EMPATE = [
  "Empate. Somos tan parecidos que ni jugando nos ganamos.",
  "Nadie gana y nadie pierde. Nos queremos igual.",
  "Empate: mismo nivel, mismo equipo."
];

// Frases de los globos de los personajes
const FRASES = {
  turno:  ["¡Me toca!", "A ver…", "Hmm, pienso…", "Mi turno", "Aquí va", "Vamos allá"],
  gana:   ["¡Gané!", "¡Toma!", "¡Soy el mejor!", "¡Sí!", "Jeje, gané"],
  pierde: ["Uf…", "Me ganaste…", "Revancha, ¿sí?", "Eso dolió", "Buena…"],
  empate: ["¡Empate!", "Nadie gana", "Casi…", "Qué parejos"]
};
// Frases que se eligen con el botón "Decir algo"
const RAPIDAS = ["¡Hola!", "¿Otra partida?", "¡Genial!", "¡Buena jugada!", "¡Uy!", "Jajaja", "Ya casi…", "¡Eres crack!", "Gracias", "¡Te quiero!", "Buenas noches", "¡Revancha!"];
// ==============================

// Personajes en pixel art (O contorno, X color principal, el resto son detalles)
// t = fila donde se apoya el sombrero, o = ojos [fila, x ojo izq, x ojo der, ancho, alto]
// b = letra del fondo bajo los ojos (por defecto X), ej = letras que se mueven como ojos (por defecto E)
const PIEZAS = [
  { n: "Gatito", t: 2, o: [4, 2, 8, 1, 1], c: { O: "#5a3a2a", X: "#ffb86b", E: "#2b1b17", P: "#ff8fa8" }, m: [
    ".O.......O.", "OXO.....OXO", "OXXOOOOOXXO", "OXXXXXXXXXO", "OXEXXXXXEXO",
    "OXXXXPXXXXO", "OXPXXXXXPXO", ".OXXXXXXXO.", "..OOOOOOO.." ] },
  { n: "Perrito", t: 0, o: [3, 3, 7, 1, 1], c: { O: "#6b4423", X: "#f6dfb4", B: "#a0622d", E: "#2b1b17", W: "#ffffff", N: "#2b1b17", P: "#ff8fa8" }, m: [
    "..OOOOOOO..", ".OXXXXXXXO.", "OBXXXXXXXBO", "OBXEXXXEXBO", "OBXXXXXXXBO",
    "OBXXWNWXXBO", ".OXXWPWXXO.", "..OOOOOOO.." ] },
  { n: "Conejito", t: 3, o: [5, 2, 8, 1, 1], c: { O: "#6b5a7a", X: "#ffffff", P: "#ffb3c7", E: "#2b1b17" }, m: [
    ".OO.....OO.", "OXPO...OPXO", "OXPO...OPXO", ".OXOOOOOXO.", "OXXXXXXXXXO",
    "OXEXXXXXEXO", "OXXXXPXXXXO", ".OXXXXXXXO.", "..OOOOOOO.." ] },
  { n: "Osito", t: 0, o: [3, 2, 8, 1, 1], c: { O: "#4a2d1d", X: "#b9774a", M: "#e8c39a", N: "#2b1b17", E: "#2b1b17" }, m: [
    ".OOO...OOO.", "OXXXOOOXXXO", "OXXXXXXXXXO", "OXEXXXXXEXO", "OXXXMMMXXXO",
    "OXXXMNMXXXO", ".OXXXXXXXO.", "..OOOOOOO.." ] },
  { n: "Pollito", t: 0, o: [4, 3, 7, 1, 1], c: { O: "#a8691b", X: "#ffd84a", B: "#ff8a3c", P: "#ff9fb0", E: "#2b1b17" }, m: [
    "....OOO....", "...OXXXO...", "..OXXXXXO..", ".OXXXXXXXO.", "OXXEXXXEXXO",
    "OXXXBBBXXXO", "OXPXXBXXPXO", ".OXXXXXXXO.", "..OOOOOOO.." ] },
  { n: "Ranita", t: 0, b: "W", o: [2, 2, 8, 1, 1], c: { O: "#2d6a3a", X: "#6fd66b", W: "#ffffff", E: "#2b1b17", M: "#2f7a3a", P: "#ff9fb0" }, m: [
    ".OOO...OOO.", "OWWWO.OWWWO", "OWEWOOOWEWO", "OXXXXXXXXXO", "OXXXXXXXXXO",
    "OXPXXXXXPXO", ".OXMMMMMXO.", "..OOOOOOO.." ] },
  { n: "Corazón", t: 0, o: [3, 2, 6, 1, 1], c: { O: "#8a2250", X: "#ff5c8a", H: "#ffd1de", E: "#2b1b17" }, m: [
    ".OOO.OOO.", "OXXXOXXXO", "OXHXXXXXO", "OXEXXXEXO", ".OXXXXXO.", "..OXXXO..", "...OXO...", "....O...." ] },
  { n: "Estrella", t: 3, o: [4, 2, 6, 1, 1], c: { O: "#a8691b", X: "#ffd24a", H: "#fff3b0", E: "#2b1b17" }, m: [
    "....O....", "...OXO...", "...OXO...", "OOOOXOOOO", "OXEXXXEXO",
    ".OXXHXXO.", "..OXXXO..", "..OXOXO..", "..OO.OO.." ] },

  // ----- Rostros -----
  { n: "Chica", t: 0, b: "S", o: [5, 3, 7, 1, 1], c: { O: "#4a2d1d", H: "#7a4a2a", S: "#ffd9b8", E: "#2b1b17", P: "#ff9fb0", M: "#d9527e" }, m: [
    "..OOOOOOO..", ".OHHHHHHHO.", "OHHHHHHHHHO", "OHHSSSSSHHO", "OHSSSSSSSHO", "OHSESSSESHO",
    "OHSSSSSSSHO", "OHPSSMSSPHO", "OHSSSSSSSHO", ".OHSSSSSHO.", "..OOOOOOO.." ] },
  { n: "Chico", t: 0, b: "S", o: [5, 3, 7, 1, 1], c: { O: "#3a2418", H: "#2b1b17", S: "#f1c39a", E: "#2b1b17", P: "#f09a8a", M: "#c0504d" }, m: [
    "..OOOOOOO..", ".OHHHHHHHO.", "OHHHHHHHHHO", "OHHHHHHHHHO", "OSSSSSSSSSO", "OSSESSSESSO",
    "OSSSSSSSSSO", "OPSSMMMSSPO", ".OSSSSSSSO.", "..OOOOOOO.." ] },
  { n: "Robot", t: 2, o: [5, 2, 7, 2, 2], c: { O: "#3a4a5a", X: "#b8c4d0", E: "#5fe0ff", A: "#ff5c5c" }, m: [
    ".....A.....", ".....O.....", "..OOOOOOO..", ".OXXXXXXXO.", "OXXXXXXXXXO", "OXEEXXXEEXO",
    "OXEEXXXEEXO", "OXXXXXXXXXO", "OXOXOXOXOXO", ".OXXXXXXXO.", "..OOOOOOO.." ] },
  { n: "Fantasma", t: 0, o: [4, 3, 7, 1, 2], c: { O: "#6a7ab0", X: "#ffffff", E: "#2b1b17", P: "#ffb3c7", M: "#2b1b17" }, m: [
    "...OOOOO...", "..OXXXXXO..", ".OXXXXXXXO.", "OXXXXXXXXXO", "OXXEXXXEXXO", "OXXEXXXEXXO",
    "OXPXXMXXPXO", "OXXXXXXXXXO", "OXXXXXXXXXO", "OXXOXXXOXXO", ".OO.OOO.OO." ] },
  { n: "Alien", t: 0, ej: "EW", o: [3, 2, 6, 3, 3], c: { O: "#2d6a3a", X: "#8be07a", E: "#1b1b2b", W: "#ffffff", M: "#2d6a3a" }, m: [
    "..OOOOOOO..", ".OXXXXXXXO.", "OXXXXXXXXXO", "OXEEEXEEEXO", "OXEWEXEWEXO", "OXEEEXEEEXO",
    "OXXXXXXXXXO", ".OXXXMXXXO.", "..OXXXXXO..", "...OOOOO..." ] },
  { n: "Lunita", t: 0, o: [4, 2, 7, 2, 1], c: { O: "#7a6a2a", X: "#fff0a0", E: "#2b1b17", P: "#ffb3a0", M: "#d9527e" }, m: [
    "..OOOOOOO..", ".OXXXXXXXO.", "OXXXXXXXXXO", "OXXXXXXXXXO", "OXEEXXXEEXO", "OXXXXXXXXXO",
    "OXPXXMXXPXO", "OXXXXXXXXXO", ".OXXXXXXXO.", "..OOOOOOO.." ] }
];

// ===== Vestuario =====
const PEINADOS = [{ n: "Nada" }, { n: "Corto" }, { n: "Largo" }, { n: "Rizado" }, { n: "Coletas" }];
const COLORES = [
  { n: "Castaño", c: "#6b3f23", d: "#4a2a15" },
  { n: "Negro", c: "#2b1b17", d: "#14090a" },
  { n: "Rubio", c: "#f2c94c", d: "#d19f1e" },
  { n: "Pelirrojo", c: "#d9531e", d: "#a63a10" },
  { n: "Rosa", c: "#ff7eb6", d: "#e0508f" },
  { n: "Azul", c: "#4a8fe0", d: "#2f6fbf" },
  { n: "Morado", c: "#8e5be0", d: "#6a3fb5" }
];
// sombreros y diademas: m = dibujo (la última fila se apoya en la cabeza), g = dibujo generado según el ancho
const SOMBREROS = [
  { n: "Nada" },
  { n: "Gorra", c: { R: "#e5484d", D: "#9d2a2e" }, m: [".RRRRR.", "RRRRRRR", "DDDDDDD"] },
  { n: "Gorro", c: { B: "#3f86d6", L: "#a6cfff", P: "#ffffff" }, m: ["...P...", ".BBBBB.", "BBBBBBB", "LLLLLLL"] },
  { n: "Copa", c: { T: "#2b2b3b", R: "#e5484d" }, m: [".TTTTT.", ".TTTTT.", ".RRRRR.", "TTTTTTT"] },
  { n: "Corona", c: { G: "#ffd24a", D: "#c9971f", R: "#e5484d" }, m: ["G..G..G", "GGGRGGG", "DDDDDDD"] },
  { n: "Paja", c: { Y: "#f2d98a", D: "#c9a24a", R: "#e5484d" }, m: ["...YYY...", "..YYYYY..", "..YRRRY..", "YYYYYYYYY", "DDDDDDDDD"] },
  { n: "Boina", c: { R: "#8e5be0", D: "#6a3fb5" }, m: ["..DDD..", ".RRRRR.", "RRRRRRR", ".DDDDD."] },
  { n: "Diadema", g: (w, t, cx) => {
      const r = [];
      for (let x = 1; x <= w - 2; x++) r.push([x, t, "#ff6fa0"]);
      r.push([cx, t, "#fff3b0"], [cx, t - 1, "#ffd24a"]);
      return r; } },
  { n: "Orejas", g: (w, t, cx) => {
      const r = [];
      for (let x = 1; x <= w - 2; x++) r.push([x, t, "#2b2b3b"]);
      r.push([cx - 3, t - 2, "#2b2b3b"], [cx - 3, t - 1, "#2b2b3b"], [cx - 2, t - 1, "#ff8fa8"]);
      r.push([cx + 3, t - 2, "#2b2b3b"], [cx + 3, t - 1, "#2b2b3b"], [cx + 2, t - 1, "#ff8fa8"]);
      return r; } },
  { n: "Flor", g: (w, t, cx) => [
      [cx + 1, t, "#ff6fa0"], [cx + 3, t, "#ff6fa0"], [cx + 2, t - 1, "#ff6fa0"], [cx + 2, t + 1, "#ff6fa0"], [cx + 2, t, "#ffd24a"]] },
  { n: "Moño", c: { P: "#ff6fa0", D: "#d9527e" }, m: [".PP.PP.", "PPPDPPP", ".PP.PP."] }
];
const CARA = [
  { n: "Nada", id: "" },
  { n: "Lentes", id: "lentes" },
  { n: "Sol", id: "sol" },
  { n: "Corazones", id: "corazon" },
  { n: "Bigote", id: "bigote" }
];
const LISTAS = { e: PEINADOS, k: COLORES, s: SOMBREROS, c: CARA };

const PAD = 4;   // filas extra arriba para que quepan los sombreros

function peloCeldas(e, w, t, H, col, R) {
  if (!e) return "";
  let s = "";
  const a = col.c, d = col.d;
  const fila = (y, x1, x2, f) => { for (let x = x1; x <= x2; x++) s += R(x, y, f); };
  const lados = (y1, y2, f) => { for (let y = y1; y <= Math.min(y2, H - 2); y++) { s += R(1, y, f); s += R(w - 2, y, f); } };
  if (e === 3) {   // rizado
    for (let x = 2; x <= w - 3; x += 2) s += R(x, t - 2, a);
    fila(t - 1, 1, w - 2, a); fila(t, 1, w - 2, d); lados(t + 1, t + 2, a);
    return s;
  }
  fila(t - 1, 2, w - 3, a); fila(t, 1, w - 2, a);
  for (let x = 1; x <= w - 2; x += 2) s += R(x, t + 1, d);   // flequillo
  if (e === 2) lados(t + 1, t + 5, a);   // largo
  if (e === 4) {   // coletas
    for (let y = t + 1; y <= Math.min(t + 3, H - 2); y++) { s += R(0, y, a); s += R(w - 1, y, a); }
    if (t + 4 <= H - 2) { s += R(0, t + 4, d); s += R(w - 1, t + 4, d); }
  }
  return s;
}

function ropa(P, vs, R) {
  const w = P.m[0].length, cx = (w - 1) / 2, t = P.t, H = P.m.length;
  const [y0, xa, xb, ow, oh] = P.o;
  let lentes = "", pelo = "";

  const cara = CARA[vs.c] ? CARA[vs.c].id : "";
  if (cara === "lentes" || cara === "corazon") {
    const f = cara === "lentes" ? "#2b2b3b" : "#ff5c8a";
    [xa, xb].forEach((ex) => {
      const x1 = ex - 1, x2 = ex + ow;
      for (let x = x1; x <= x2; x++) {
        const esquina = x === x1 || x === x2;
        if (cara === "lentes" || esquina) lentes += R(x, y0 - 1, f);
        if (cara === "lentes" || !esquina) lentes += R(x, y0 + oh, f);
      }
      for (let y = y0; y < y0 + oh; y++) { lentes += R(x1, y, f); lentes += R(x2, y, f); }
    });
    for (let x = xa + ow + 1; x <= xb - 2; x++) lentes += R(x, y0, f);
  }
  if (cara === "sol") {
    const f = "#1b1b2b";
    for (let x = xa - 1; x <= xb + ow; x++) lentes += R(x, y0 - 1, f);
    [xa, xb].forEach((ex) => {
      for (let y = y0; y <= y0 + oh; y++) for (let x = ex - 1; x <= ex + ow; x++) lentes += R(x, y, f, 0.72);
    });
    for (let x = xa + ow + 1; x <= xb - 2; x++) lentes += R(x, y0, f);
  }
  if (cara === "bigote") {
    const ds = w >= 11 ? [-2, -1, 1, 2] : [-1, 1];
    ds.forEach((d) => { lentes += R(cx + d, y0 + oh + 1, "#4a2d1d"); });
  }

  pelo += peloCeldas(vs.e, w, t, H, COLORES[vs.k] || COLORES[0], R);

  const s = SOMBREROS[vs.s];
  if (s && s.m) {
    const a = s.m.length - 1, off = Math.floor(s.m[0].length / 2);
    s.m.forEach((fila, i) => [...fila].forEach((ch, j) => {
      if (s.c[ch]) pelo += R(cx - off + j, t - a + i, s.c[ch]);
    }));
  } else if (s && s.g) {
    s.g(w, t, cx).forEach(([x, y, f]) => { pelo += R(x, y, f); });
  }
  return lentes + '<g class="pelo">' + pelo + "</g>";
}

// vs = ropa del personaje. Sin vs se dibuja simple (para el tablero).
function pixelSvg(k, vs) {
  const P = PIEZAS[k], m = P.m, c = P.c;
  const base = c[P.b || "X"], ej = P.ej || "E", pad = vs ? PAD : 0;
  const R = (x, y, f, op) => '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="' + f + '"' + (op ? ' fill-opacity="' + op + '"' : "") + "/>";
  let cuerpo = "", ojos = "";
  m.forEach((fila, y) => [...fila].forEach((ch, x) => {
    if (!c[ch]) return;
    if (ej.indexOf(ch) >= 0) { cuerpo += R(x, y, base); ojos += R(x, y, c[ch]); }   // ojos aparte para animarlos
    else cuerpo += R(x, y, c[ch]);
  }));
  const extra = vs ? ropa(P, vs, R) : "";
  return '<svg viewBox="0 ' + (-pad) + " " + m[0].length + " " + (m.length + pad) + '" shape-rendering="crispEdges">'
    + cuerpo + '<g class="mira"><g class="parp">' + ojos + "</g></g>" + extra + "</svg>";
}
const icono = (k) => '<span class="ic">' + pixelSvg(k) + "</span>";

const LINEAS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const $ = (id) => document.getElementById(id);
const azar = (l) => l[Math.floor(Math.random() * l.length)];

// ===== Sonidos (se generan en el navegador, sin archivos) =====
let audio = null, mudo = false;
try { mudo = localStorage.getItem("gn_mudo") === "1"; } catch (e) {}

function ctxAudio() {
  if (mudo) return null;
  try {
    if (!audio) audio = new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === "suspended") audio.resume();
    return audio;
  } catch (e) { return null; }
}
function tono(f, dur, tipo, vol, retraso) {
  const a = ctxAudio();
  if (!a) return;
  const t0 = a.currentTime + (retraso || 0);
  const o = a.createOscillator(), g = a.createGain();
  o.type = tipo || "square";
  o.frequency.setValueAtTime(f, t0);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol || 0.08, t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g); g.connect(a.destination);
  o.start(t0); o.stop(t0 + dur + 0.02);
}
const SON = {
  pon: (n) => tono(n % 2 ? 520 : 392, 0.09, "square", 0.07),
  gana: () => [523, 659, 784, 1047].forEach((f, i) => tono(f, 0.16, "square", 0.08, i * 0.12)),
  pierde: () => [392, 330, 262].forEach((f, i) => tono(f, 0.22, "triangle", 0.1, i * 0.16)),
  empate: () => [440, 440].forEach((f, i) => tono(f, 0.14, "triangle", 0.09, i * 0.18)),
  pop: () => { tono(660, 0.06, "sine", 0.1); tono(990, 0.08, "sine", 0.08, 0.06); },
  clic: () => tono(300, 0.05, "square", 0.05)
};

let prevN = 0, prevRes = null;
function sonidos() {
  const n = S.t.filter((x) => x !== null).length;
  if (n > prevN) SON.pon(n);
  if (S.res && !prevRes) {
    const gano = modo === "local" || (modo === "pc" ? S.res === "g0" : S.res === "g" + rol);
    const t = S.res === "e" ? "empate" : gano ? "gana" : "pierde";
    setTimeout(SON[t], 220);
  }
  prevN = n; prevRes = S.res;
}

function pintarSonido() { $("sonido").textContent = mudo ? "🔇" : "🔊"; }
$("sonido").onclick = () => {
  mudo = !mudo;
  try { localStorage.setItem("gn_mudo", mudo ? "1" : "0"); } catch (e) {}
  pintarSonido();
  if (!mudo) SON.clic();
};
pintarSonido();

// sonido de clic en los botones (menos casillas, frases y el botón de sonido)
document.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b && !b.classList.contains("casilla") && b.id !== "sonido" && !b.closest(".menu, .rapidas")) SON.clic();
});

// ===== Estado =====
let modo = "pc";        // "pc", "local" o "online"
let S;                  // { t, turno, inicio, pts, pj:[personaje1, personaje2], vs:[ropa1, ropa2], res }
let peer = null, conn = null, rol = 0, quien = 0;
let modalCerrado = false, claveResultado = "", fraseActual = "";

const ropaBase = () => ({ e: 0, k: 0, s: 0, c: 0 });
const nuevo = (inicio, pts, pj, vs) => ({
  t: Array(9).fill(null), turno: inicio, inicio: inicio, pts: pts || [0,0,0],
  pj: pj ? pj.slice() : [0,1],
  vs: vs ? vs.map((v) => Object.assign(ropaBase(), v)) : [ropaBase(), ropaBase()],
  res: null
});
const vest = (p) => Object.assign(ropaBase(), (S.vs && S.vs[p]) || {});

function nombre(p) {
  if (modo === "pc") return p === 0 ? "Tú" : "Compu";
  return PIEZAS[S.pj[p]].n;
}
const puedeElegir = (p) => modo === "local" || (modo === "pc" && p === 0) || (modo === "online" && p === rol);
const puedeHablar = (p) => modo === "local" || (modo === "pc" && p === 0) || (modo === "online" && p === rol);

// Casillas
const casillas = [];
for (let i = 0; i < 9; i++) {
  const b = document.createElement("button");
  b.className = "casilla";
  b.setAttribute("aria-label", "Casilla " + (i + 1));
  b.onclick = () => jugar(i);
  $("tablero").appendChild(b);
  casillas.push(b);
}

// Reglas
function lineaGanadora(t) {
  return LINEAS.find(([a, b, c]) => t[a] !== null && t[a] === t[b] && t[a] === t[c]) || null;
}
function aplicarJugada(s, i) {
  const n = { t: s.t.slice(), turno: s.turno, inicio: s.inicio, pts: s.pts.slice(), pj: s.pj.slice(), vs: s.vs, res: null };
  n.t[i] = s.turno;
  if (lineaGanadora(n.t)) { n.res = "g" + s.turno; n.pts[s.turno === 0 ? 0 : 2]++; }
  else if (n.t.every((x) => x !== null)) { n.res = "e"; n.pts[1]++; }
  else n.turno = 1 - s.turno;
  return n;
}

// Ventana de resultado
function mostrarResultado() {
  const clave = S.res + S.pts.join();
  if (clave !== claveResultado) { claveResultado = clave; modalCerrado = false; fraseActual = ""; }

  let titulo, frase, ic = "";
  if (S.res === "e") {
    titulo = "Empate"; frase = fraseActual || azar(FRASES_EMPATE);
    ic = pixelSvg(S.pj[0], vest(0)) + pixelSvg(S.pj[1], vest(1));   // en empate salen los dos
  } else {
    const g = S.res === "g0" ? 0 : 1;
    ic = pixelSvg(S.pj[g], vest(g));
    const yoGano = modo === "pc" ? g === 0 : modo === "online" ? g === rol : true;
    if (modo === "local") { titulo = "¡Ganó " + nombre(g) + "!"; frase = fraseActual || azar(FRASES_GANA); }
    else if (yoGano) { titulo = "¡Ganaste!"; frase = fraseActual || azar(FRASES_GANA); }
    else { titulo = "Perdiste"; frase = fraseActual || azar(FRASES_PIERDE); }
  }
  fraseActual = frase;
  $("mTitulo").textContent = titulo;
  $("mTexto").textContent = frase;
  $("mIcono").innerHTML = ic;
  $("modal").style.display = modalCerrado ? "none" : "flex";
}

// Pantalla
function dibujar() {
  // En "A distancia" solo se ve el código hasta que los dos se conectan
  const lobby = modo === "online" && !(conn && conn.open);
  lateral(lobby);
  if ($("selector").style.display === "flex") pintarSelector();
  $("lobby").style.display = lobby ? "block" : "none";
  $("juego").style.display = lobby ? "none" : "block";
  if (lobby) { $("modal").style.display = "none"; return; }

  const linea = lineaGanadora(S.t);
  casillas.forEach((c, i) => {
    const j = S.t[i];
    const valor = j === null ? "" : j + "-" + S.pj[j];
    const prev = c.dataset.valor || "";
    if (prev !== valor) {   // solo se redibuja la casilla que cambió
      c.dataset.valor = valor;
      c.innerHTML = j === null ? "" : icono(S.pj[j]);
      c.classList.toggle("nuevo", prev === "" && valor !== "");
    }
    c.classList.toggle("gana", !!linea && linea.includes(i));
  });

  $("m0").innerHTML = pixelSvg(S.pj[0], vest(0));
  $("m1").innerHTML = pixelSvg(S.pj[1], vest(1));
  $("n0").textContent = nombre(0); $("n1").textContent = nombre(1);
  $("p1").textContent = S.pts[0]; $("pe").textContent = S.pts[1]; $("p2").textContent = S.pts[2];
  [0, 1].forEach((p) => {
    $("j" + p).disabled = !puedeElegir(p);
    $("h" + p).textContent = puedeElegir(p) ? "toca para cambiar" : "";
  });

  let estado;
  if (S.res === "e") estado = "<span>Empate</span>";
  else if (S.res) { const g = S.res === "g0" ? 0 : 1; estado = icono(S.pj[g]) + "<span>¡Ganó " + nombre(g) + "!</span>"; }
  else if (modo === "online") estado = S.turno === rol
    ? icono(S.pj[rol]) + "<span>Te toca</span>"
    : icono(S.pj[S.turno]) + "<span>Esperando a " + nombre(S.turno) + "…</span>";
  else estado = icono(S.pj[S.turno]) + "<span>Turno de " + nombre(S.turno) + "</span>";
  $("estado").innerHTML = estado;
  $("reiniciar").style.display = S.res ? "block" : "none";

  sonidos();

  if (S.res) mostrarResultado();
  else { claveResultado = ""; modalCerrado = false; $("modal").style.display = "none"; }
}

// ===== Selector: personaje y vestuario (el panel lo arma este script) =====
function armarSelector() {
  $("selector").innerHTML =
    '<div class="carta">' +
    '<div class="carta-top">Personaliza tu personaje</div>' +
    '<div id="previa"></div>' +
    '<div class="seccion">Peinado</div><div class="chips" id="chipsE"></div>' +
    '<div class="seccion">Color de pelo</div><div class="chips" id="chipsK"></div>' +
    '<div class="seccion">Sombreros y diademas</div><div class="chips" id="chipsS"></div>' +
    '<div class="seccion">Lentes</div><div class="chips" id="chipsC"></div>' +
    '<div class="seccion">Personaje</div><div class="rejilla" id="rejilla"></div>' +
    '<button class="boton chico" id="sCerrar">Listo</button>' +
    "</div>";
  $("sCerrar").onclick = () => { $("selector").style.display = "none"; };
}

function abrirSelector(p) {
  if (!puedeElegir(p)) return;
  quien = p;
  pintarSelector();
  $("selector").style.display = "flex";
}
function pintarSelector() {
  const p = quien, v = vest(p);
  $("previa").innerHTML = pixelSvg(S.pj[p], v);
  const r = $("rejilla"); r.innerHTML = "";
  PIEZAS.forEach((pz, k) => {
    const b = document.createElement("button");
    b.className = "pers" + (S.pj[p] === k ? " sel" : "");
    b.disabled = S.pj[1 - p] === k;   // no se puede repetir el personaje del otro
    b.innerHTML = icono(k) + "<span>" + pz.n + "</span>";
    b.onclick = () => elegir(k);
    r.appendChild(b);
  });
  chips("chipsE", PEINADOS, v.e, "e");
  chips("chipsK", COLORES, v.k, "k");
  chips("chipsS", SOMBREROS, v.s, "s");
  chips("chipsC", CARA, v.c, "c");
}
function chips(id, lista, sel, parte) {
  const c = $(id); c.innerHTML = "";
  lista.forEach((it, i) => {
    const b = document.createElement("button");
    b.className = "chip" + (sel === i ? " sel" : "");
    b.innerHTML = (parte === "k" ? '<i class="mue" style="background:' + it.c + '"></i>' : "") + it.n;
    b.onclick = () => ponerVest(parte, i);
    c.appendChild(b);
  });
}
function elegir(k) {
  if (modo === "online" && rol === 1) { if (conn && conn.open) conn.send({ tipo: "pj", i: k }); return; }
  S.pj[quien] = k;
  dibujar(); enviar();
}
function ponerVest(parte, i) {
  if (modo === "online" && rol === 1) { if (conn && conn.open) conn.send({ tipo: "vs", parte: parte, i: i }); return; }
  if (!S.vs) S.vs = [ropaBase(), ropaBase()];
  S.vs[quien] = Object.assign(ropaBase(), S.vs[quien]);
  S.vs[quien][parte] = i;
  dibujar(); enviar();
}

// Jugar
function jugar(i) {
  if (S.res || S.t[i] !== null) return;
  if (modo === "pc" && S.turno !== 0) return;
  if (modo === "online" && (!conn || S.turno !== rol)) return;
  S = aplicarJugada(S, i);
  dibujar(); enviar();
  if (modo === "pc" && !S.res && S.turno === 1) setTimeout(jugadaCompu, 450);
}

function buscarHueco(jugador) {
  for (const l of LINEAS) {
    const mias = l.filter((k) => S.t[k] === jugador).length;
    const vacio = l.find((k) => S.t[k] === null);
    if (mias === 2 && vacio !== undefined) return vacio;
  }
  return -1;
}
function jugadaCompu() {
  if (S.res || modo !== "pc") return;
  const libres = S.t.map((v, i) => (v === null ? i : -1)).filter((i) => i >= 0);
  // La compu a veces "se equivoca" a propósito para que puedas ganar
  let h = Math.random() < 0.6 ? buscarHueco(1) : -1;
  if (h === -1 && Math.random() < 0.6) h = buscarHueco(0);
  if (h === -1) h = libres[Math.floor(Math.random() * libres.length)];
  S = aplicarJugada(S, h);
  dibujar();
}

function otraVez() {
  if (modo === "online" && !(conn && conn.open)) return;
  S = nuevo(1 - S.inicio, S.pts, S.pj, S.vs);
  dibujar(); enviar();
  if (modo === "pc" && S.turno === 1) setTimeout(jugadaCompu, 450);
}

// A distancia (PeerJS)
function red(t) { $("red").textContent = t; }
function enviar() { if (modo === "online" && conn && conn.open) conn.send({ tipo: "estado", S: S }); }

function prepararConexion() {
  conn.on("open", () => {
    red("");
    if (rol === 0) { S = nuevo(0, null, S.pj, S.vs); enviar(); }
    dibujar();
  });
  conn.on("data", (d) => {
    if (d.tipo === "estado") { S = d.S; dibujar(); }
    else if (d.tipo === "pj" && rol === 0 && Number.isInteger(d.i) && d.i >= 0 && d.i < PIEZAS.length && d.i !== S.pj[0]) {
      S.pj[1] = d.i; enviar(); dibujar();
    }
    else if (d.tipo === "vs" && rol === 0 && LISTAS[d.parte] && Number.isInteger(d.i) && d.i >= 0 && d.i < LISTAS[d.parte].length) {
      if (!S.vs) S.vs = [ropaBase(), ropaBase()];
      S.vs[1] = Object.assign(ropaBase(), S.vs[1]);
      S.vs[1][d.parte] = d.i; enviar(); dibujar();
    }
    else if (d.tipo === "charla" && typeof d.t === "string") {
      // lo que dice el otro sale siempre en la ventana del otro jugador
      hablar(1 - rol, d.t.slice(0, 40), false);
    }
  });
  conn.on("close", () => { conn = null; red("Se desconectó tu pareja."); dibujar(); });
}

function crearSala() {
  cerrarRed();
  const codigo = Math.random().toString(36).slice(2, 6).toUpperCase();
  rol = 0;
  peer = new Peer("gatonocturno-" + codigo);
  peer.on("open", () => red("Tu código es " + codigo + ". Mándaselo a tu pareja y espera…"));
  peer.on("connection", (c) => { conn = c; prepararConexion(); });
  peer.on("error", (e) => red("Error: " + e.type + ". Intenta crear otra sala."));
}

function unirse() {
  const codigo = $("codigo").value.trim().toUpperCase();
  if (!codigo) { red("Escribe el código primero."); return; }
  cerrarRed();
  rol = 1;
  peer = new Peer();
  peer.on("open", () => { conn = peer.connect("gatonocturno-" + codigo); prepararConexion(); red("Conectando…"); });
  peer.on("error", (e) => red("No pude conectar (" + e.type + "). Revisa el código."));
}

function cerrarRed() {
  if (conn) conn.close();
  if (peer) peer.destroy();
  conn = null; peer = null;
}

// Modos y botones
function cambiarModo(m) {
  cerrarRed();
  modo = m;
  $("bPc").classList.toggle("activo", m === "pc");
  $("bLocal").classList.toggle("activo", m === "local");
  $("bOnline").classList.toggle("activo", m === "online");
  red("");
  S = nuevo(0, null, S ? S.pj : null, S ? S.vs : null);
  dibujar();
}

$("bPc").onclick = () => cambiarModo("pc");
$("bLocal").onclick = () => cambiarModo("local");
$("bOnline").onclick = () => cambiarModo("online");
$("bCrear").onclick = crearSala;
$("bUnirse").onclick = unirse;
$("reiniciar").onclick = otraVez;
$("mOtra").onclick = otraVez;
$("mCerrar").onclick = () => { modalCerrado = true; $("modal").style.display = "none"; };
$("j0").onclick = () => abrirSelector(0);
$("j1").onclick = () => abrirSelector(1);

// ===== Personajes de los lados y charla =====
const frasePj = [{}, {}];       // frase elegida por jugador (no cambia en cada redibujo)
const dicho = [null, null];     // lo que dijo cada uno con "Decir algo"
let ultimoLobby = false;

function fraseDe(tipo, p, clave) {
  if (frasePj[p].k !== clave) frasePj[p] = { k: clave, t: azar(FRASES[tipo]) };
  return frasePj[p].t;
}

function lateral(lobby) {
  ultimoLobby = lobby;
  [0, 1].forEach((p) => {
    const k = S.pj[p], v = vest(p);
    const sp = $("s" + p);
    const clave = [k, v.e, v.k, v.s, v.c].join("|");
    if (sp.dataset.k !== clave) {   // solo se redibuja si cambió el personaje o su ropa
      sp.dataset.k = clave;
      sp.innerHTML = pixelSvg(k, v).replace("<svg ", '<svg preserveAspectRatio="xMidYMax meet" ');
    }
    $("vt" + p).textContent = PIEZAS[k].n.toLowerCase() + ".exe";
    $("c" + p).style.display = (!lobby && puedeHablar(p)) ? "flex" : "none";

    let est = "", txt = "";
    if (!lobby) {
      const base = S.t.filter((x) => x !== null).length + "|" + (S.res || "-") + "|" + S.turno;
      if (S.res === "e") txt = fraseDe("empate", p, base);
      else if (S.res) {
        if (S.res === "g" + p) { est = "gana"; txt = fraseDe("gana", p, base); }
        else { est = "pierde"; txt = fraseDe("pierde", p, base); }
      } else if (S.turno === p) { est = "turno"; txt = fraseDe("turno", p, base); }
    }
    const habla = !!(dicho[p] && dicho[p].hasta > Date.now());
    if (habla) txt = dicho[p].t;   // lo que dijo manda

    $("v" + p).className = "ventana " + (p === 0 ? "izq" : "der") + " " + est + (habla ? " habla" : "");
    $("b" + p).textContent = txt;
    $("b" + p).style.visibility = txt ? "visible" : "hidden";
  });
}

function hablar(p, t, enviarlo) {
  SON.pop();
  dicho[p] = { t: t, hasta: Date.now() + 3000 };
  lateral(ultimoLobby);
  setTimeout(() => lateral(ultimoLobby), 3100);
  if (enviarlo && modo === "online" && conn && conn.open) conn.send({ tipo: "charla", t: t });
}

// en "Mismo cel" habla quien tiene el turno; en práctica, tú; a distancia, tu personaje
function quienHabla() {
  return modo === "local" ? S.turno : modo === "online" ? rol : 0;
}

// fila de respuestas rápidas (solo se ve en celular)
RAPIDAS.forEach((t) => {
  const b = document.createElement("button");
  b.textContent = t;
  b.onclick = () => hablar(quienHabla(), t, true);
  $("rapidas").appendChild(b);
});

// tocar la ventana de un personaje abre el vestuario (si puedes cambiarlo)
[0, 1].forEach((p) => { $("v" + p).onclick = () => abrirSelector(p); });

// ===== Menú de frases y botón Vestir en cada ventana =====
function cerrarMenus() { [0, 1].forEach((p) => $("cm" + p).classList.remove("abierto")); }

[0, 1].forEach((p) => {
  // si el index.html no trae el botón Vestir, se crea aquí
  if (!$("vb" + p)) {
    const vb = document.createElement("button");
    vb.className = "chatbtn"; vb.id = "vb" + p; vb.textContent = "Vestir ✨";
    $("c" + p).insertBefore(vb, $("cb" + p));
  }
  const menu = $("cm" + p);
  RAPIDAS.forEach((t) => {
    const b = document.createElement("button");
    b.textContent = t;
    b.onclick = (e) => { e.stopPropagation(); hablar(p, t, true); cerrarMenus(); };
    menu.appendChild(b);
  });
  $("c" + p).onclick = (e) => e.stopPropagation();
  $("vb" + p).onclick = (e) => { e.stopPropagation(); cerrarMenus(); abrirSelector(p); };
  $("cb" + p).onclick = (e) => {
    e.stopPropagation();
    const abierto = menu.classList.contains("abierto");
    cerrarMenus();
    if (!abierto) menu.classList.add("abierto");
  };
});
document.addEventListener("click", cerrarMenus);

armarSelector();
=======
// ===== EDITA ESTO: frases =====
const FRASES_GANA = [
  "Ganaste. Ese cerebro tuyo es de lo que más me gusta.",
  "Victoria para ti. Hoy hasta Cupido te aplaude.",
  "Ganaste. Elige tu premio: un abrazo, una película o una cita.",
  "Tres en raya y otra victoria. Contigo hasta perder sería divertido."
];
const FRASES_PIERDE = [
  "Perdiste esta vez, pero ganaste algo mejor: una revancha conmigo.",
  "Esta me la llevo yo. Se paga con un beso o con la revancha, tú eliges.",
  "Perdiste, pero sigues siendo mi jugador favorito.",
  "Se te escapó por poquito. La revancha ya está lista."
];
const FRASES_EMPATE = [
  "Empate. Somos tan parecidos que ni jugando nos ganamos.",
  "Nadie gana y nadie pierde. Nos queremos igual.",
  "Empate: mismo nivel, mismo equipo."
];

// Frases de los globos de los personajes
const FRASES = {
  turno:  ["¡Me toca!", "A ver…", "Hmm, pienso…", "Mi turno", "Aquí va", "Vamos allá"],
  gana:   ["¡Gané!", "¡Toma!", "¡Soy el mejor!", "¡Sí!", "Jeje, gané"],
  pierde: ["Uf…", "Me ganaste…", "Revancha, ¿sí?", "Eso dolió", "Buena…"],
  empate: ["¡Empate!", "Nadie gana", "Casi…", "Qué parejos"]
};
// Frases que se eligen con el botón "Decir algo"
const RAPIDAS = ["¡Hola!", "¿Otra partida?", "¡Genial!", "¡Buena jugada!", "¡Uy!", "Jajaja", "Ya casi…", "¡Eres crack!", "Gracias", "¡Te quiero!", "Buenas noches", "¡Revancha!"];
// ==============================

// Personajes en pixel art (O contorno, X color principal, el resto son detalles)
// t = fila donde se apoya el sombrero, o = ojos [fila, x ojo izq, x ojo der, ancho, alto]
// b = letra del fondo bajo los ojos (por defecto X), ej = letras que se mueven como ojos (por defecto E)
const PIEZAS = [
  { n: "Gatito", t: 2, o: [4, 2, 8, 1, 1], c: { O: "#5a3a2a", X: "#ffb86b", E: "#2b1b17", P: "#ff8fa8" }, m: [
    ".O.......O.", "OXO.....OXO", "OXXOOOOOXXO", "OXXXXXXXXXO", "OXEXXXXXEXO",
    "OXXXXPXXXXO", "OXPXXXXXPXO", ".OXXXXXXXO.", "..OOOOOOO.." ] },
  { n: "Perrito", t: 0, o: [3, 3, 7, 1, 1], c: { O: "#6b4423", X: "#f6dfb4", B: "#a0622d", E: "#2b1b17", W: "#ffffff", N: "#2b1b17", P: "#ff8fa8" }, m: [
    "..OOOOOOO..", ".OXXXXXXXO.", "OBXXXXXXXBO", "OBXEXXXEXBO", "OBXXXXXXXBO",
    "OBXXWNWXXBO", ".OXXWPWXXO.", "..OOOOOOO.." ] },
  { n: "Conejito", t: 3, o: [5, 2, 8, 1, 1], c: { O: "#6b5a7a", X: "#ffffff", P: "#ffb3c7", E: "#2b1b17" }, m: [
    ".OO.....OO.", "OXPO...OPXO", "OXPO...OPXO", ".OXOOOOOXO.", "OXXXXXXXXXO",
    "OXEXXXXXEXO", "OXXXXPXXXXO", ".OXXXXXXXO.", "..OOOOOOO.." ] },
  { n: "Osito", t: 0, o: [3, 2, 8, 1, 1], c: { O: "#4a2d1d", X: "#b9774a", M: "#e8c39a", N: "#2b1b17", E: "#2b1b17" }, m: [
    ".OOO...OOO.", "OXXXOOOXXXO", "OXXXXXXXXXO", "OXEXXXXXEXO", "OXXXMMMXXXO",
    "OXXXMNMXXXO", ".OXXXXXXXO.", "..OOOOOOO.." ] },
  { n: "Pollito", t: 0, o: [4, 3, 7, 1, 1], c: { O: "#a8691b", X: "#ffd84a", B: "#ff8a3c", P: "#ff9fb0", E: "#2b1b17" }, m: [
    "....OOO....", "...OXXXO...", "..OXXXXXO..", ".OXXXXXXXO.", "OXXEXXXEXXO",
    "OXXXBBBXXXO", "OXPXXBXXPXO", ".OXXXXXXXO.", "..OOOOOOO.." ] },
  { n: "Ranita", t: 0, b: "W", o: [2, 2, 8, 1, 1], c: { O: "#2d6a3a", X: "#6fd66b", W: "#ffffff", E: "#2b1b17", M: "#2f7a3a", P: "#ff9fb0" }, m: [
    ".OOO...OOO.", "OWWWO.OWWWO", "OWEWOOOWEWO", "OXXXXXXXXXO", "OXXXXXXXXXO",
    "OXPXXXXXPXO", ".OXMMMMMXO.", "..OOOOOOO.." ] },
  { n: "Corazón", t: 0, o: [3, 2, 6, 1, 1], c: { O: "#8a2250", X: "#ff5c8a", H: "#ffd1de", E: "#2b1b17" }, m: [
    ".OOO.OOO.", "OXXXOXXXO", "OXHXXXXXO", "OXEXXXEXO", ".OXXXXXO.", "..OXXXO..", "...OXO...", "....O...." ] },
  { n: "Estrella", t: 3, o: [4, 2, 6, 1, 1], c: { O: "#a8691b", X: "#ffd24a", H: "#fff3b0", E: "#2b1b17" }, m: [
    "....O....", "...OXO...", "...OXO...", "OOOOXOOOO", "OXEXXXEXO",
    ".OXXHXXO.", "..OXXXO..", "..OXOXO..", "..OO.OO.." ] },

  // ----- Rostros -----
  { n: "Chica", t: 0, b: "S", o: [5, 3, 7, 1, 1], c: { O: "#4a2d1d", H: "#7a4a2a", S: "#ffd9b8", E: "#2b1b17", P: "#ff9fb0", M: "#d9527e" }, m: [
    "..OOOOOOO..", ".OHHHHHHHO.", "OHHHHHHHHHO", "OHHSSSSSHHO", "OHSSSSSSSHO", "OHSESSSESHO",
    "OHSSSSSSSHO", "OHPSSMSSPHO", "OHSSSSSSSHO", ".OHSSSSSHO.", "..OOOOOOO.." ] },
  { n: "Chico", t: 0, b: "S", o: [5, 3, 7, 1, 1], c: { O: "#3a2418", H: "#2b1b17", S: "#f1c39a", E: "#2b1b17", P: "#f09a8a", M: "#c0504d" }, m: [
    "..OOOOOOO..", ".OHHHHHHHO.", "OHHHHHHHHHO", "OHHHHHHHHHO", "OSSSSSSSSSO", "OSSESSSESSO",
    "OSSSSSSSSSO", "OPSSMMMSSPO", ".OSSSSSSSO.", "..OOOOOOO.." ] },
  { n: "Robot", t: 2, o: [5, 2, 7, 2, 2], c: { O: "#3a4a5a", X: "#b8c4d0", E: "#5fe0ff", A: "#ff5c5c" }, m: [
    ".....A.....", ".....O.....", "..OOOOOOO..", ".OXXXXXXXO.", "OXXXXXXXXXO", "OXEEXXXEEXO",
    "OXEEXXXEEXO", "OXXXXXXXXXO", "OXOXOXOXOXO", ".OXXXXXXXO.", "..OOOOOOO.." ] },
  { n: "Fantasma", t: 0, o: [4, 3, 7, 1, 2], c: { O: "#6a7ab0", X: "#ffffff", E: "#2b1b17", P: "#ffb3c7", M: "#2b1b17" }, m: [
    "...OOOOO...", "..OXXXXXO..", ".OXXXXXXXO.", "OXXXXXXXXXO", "OXXEXXXEXXO", "OXXEXXXEXXO",
    "OXPXXMXXPXO", "OXXXXXXXXXO", "OXXXXXXXXXO", "OXXOXXXOXXO", ".OO.OOO.OO." ] },
  { n: "Alien", t: 0, ej: "EW", o: [3, 2, 6, 3, 3], c: { O: "#2d6a3a", X: "#8be07a", E: "#1b1b2b", W: "#ffffff", M: "#2d6a3a" }, m: [
    "..OOOOOOO..", ".OXXXXXXXO.", "OXXXXXXXXXO", "OXEEEXEEEXO", "OXEWEXEWEXO", "OXEEEXEEEXO",
    "OXXXXXXXXXO", ".OXXXMXXXO.", "..OXXXXXO..", "...OOOOO..." ] },
  { n: "Lunita", t: 0, o: [4, 2, 7, 2, 1], c: { O: "#7a6a2a", X: "#fff0a0", E: "#2b1b17", P: "#ffb3a0", M: "#d9527e" }, m: [
    "..OOOOOOO..", ".OXXXXXXXO.", "OXXXXXXXXXO", "OXXXXXXXXXO", "OXEEXXXEEXO", "OXXXXXXXXXO",
    "OXPXXMXXPXO", "OXXXXXXXXXO", ".OXXXXXXXO.", "..OOOOOOO.." ] }
];

// ===== Vestuario =====
const PEINADOS = [{ n: "Nada" }, { n: "Corto" }, { n: "Largo" }, { n: "Rizado" }, { n: "Coletas" }];
const COLORES = [
  { n: "Castaño", c: "#6b3f23", d: "#4a2a15" },
  { n: "Negro", c: "#2b1b17", d: "#14090a" },
  { n: "Rubio", c: "#f2c94c", d: "#d19f1e" },
  { n: "Pelirrojo", c: "#d9531e", d: "#a63a10" },
  { n: "Rosa", c: "#ff7eb6", d: "#e0508f" },
  { n: "Azul", c: "#4a8fe0", d: "#2f6fbf" },
  { n: "Morado", c: "#8e5be0", d: "#6a3fb5" }
];
// sombreros y diademas: m = dibujo (la última fila se apoya en la cabeza), g = dibujo generado según el ancho
const SOMBREROS = [
  { n: "Nada" },
  { n: "Gorra", c: { R: "#e5484d", D: "#9d2a2e" }, m: [".RRRRR.", "RRRRRRR", "DDDDDDD"] },
  { n: "Gorro", c: { B: "#3f86d6", L: "#a6cfff", P: "#ffffff" }, m: ["...P...", ".BBBBB.", "BBBBBBB", "LLLLLLL"] },
  { n: "Copa", c: { T: "#2b2b3b", R: "#e5484d" }, m: [".TTTTT.", ".TTTTT.", ".RRRRR.", "TTTTTTT"] },
  { n: "Corona", c: { G: "#ffd24a", D: "#c9971f", R: "#e5484d" }, m: ["G..G..G", "GGGRGGG", "DDDDDDD"] },
  { n: "Paja", c: { Y: "#f2d98a", D: "#c9a24a", R: "#e5484d" }, m: ["...YYY...", "..YYYYY..", "..YRRRY..", "YYYYYYYYY", "DDDDDDDDD"] },
  { n: "Boina", c: { R: "#8e5be0", D: "#6a3fb5" }, m: ["..DDD..", ".RRRRR.", "RRRRRRR", ".DDDDD."] },
  { n: "Diadema", g: (w, t, cx) => {
      const r = [];
      for (let x = 1; x <= w - 2; x++) r.push([x, t, "#ff6fa0"]);
      r.push([cx, t, "#fff3b0"], [cx, t - 1, "#ffd24a"]);
      return r; } },
  { n: "Orejas", g: (w, t, cx) => {
      const r = [];
      for (let x = 1; x <= w - 2; x++) r.push([x, t, "#2b2b3b"]);
      r.push([cx - 3, t - 2, "#2b2b3b"], [cx - 3, t - 1, "#2b2b3b"], [cx - 2, t - 1, "#ff8fa8"]);
      r.push([cx + 3, t - 2, "#2b2b3b"], [cx + 3, t - 1, "#2b2b3b"], [cx + 2, t - 1, "#ff8fa8"]);
      return r; } },
  { n: "Flor", g: (w, t, cx) => [
      [cx + 1, t, "#ff6fa0"], [cx + 3, t, "#ff6fa0"], [cx + 2, t - 1, "#ff6fa0"], [cx + 2, t + 1, "#ff6fa0"], [cx + 2, t, "#ffd24a"]] },
  { n: "Moño", c: { P: "#ff6fa0", D: "#d9527e" }, m: [".PP.PP.", "PPPDPPP", ".PP.PP."] }
];
const CARA = [
  { n: "Nada", id: "" },
  { n: "Lentes", id: "lentes" },
  { n: "Sol", id: "sol" },
  { n: "Corazones", id: "corazon" },
  { n: "Bigote", id: "bigote" }
];
const LISTAS = { e: PEINADOS, k: COLORES, s: SOMBREROS, c: CARA };

const PAD = 4;   // filas extra arriba para que quepan los sombreros

function peloCeldas(e, w, t, H, col, R) {
  if (!e) return "";
  let s = "";
  const a = col.c, d = col.d;
  const fila = (y, x1, x2, f) => { for (let x = x1; x <= x2; x++) s += R(x, y, f); };
  const lados = (y1, y2, f) => { for (let y = y1; y <= Math.min(y2, H - 2); y++) { s += R(1, y, f); s += R(w - 2, y, f); } };
  if (e === 3) {   // rizado
    for (let x = 2; x <= w - 3; x += 2) s += R(x, t - 2, a);
    fila(t - 1, 1, w - 2, a); fila(t, 1, w - 2, d); lados(t + 1, t + 2, a);
    return s;
  }
  fila(t - 1, 2, w - 3, a); fila(t, 1, w - 2, a);
  for (let x = 1; x <= w - 2; x += 2) s += R(x, t + 1, d);   // flequillo
  if (e === 2) lados(t + 1, t + 5, a);   // largo
  if (e === 4) {   // coletas
    for (let y = t + 1; y <= Math.min(t + 3, H - 2); y++) { s += R(0, y, a); s += R(w - 1, y, a); }
    if (t + 4 <= H - 2) { s += R(0, t + 4, d); s += R(w - 1, t + 4, d); }
  }
  return s;
}

function ropa(P, vs, R) {
  const w = P.m[0].length, cx = (w - 1) / 2, t = P.t, H = P.m.length;
  const [y0, xa, xb, ow, oh] = P.o;
  let lentes = "", pelo = "";

  const cara = CARA[vs.c] ? CARA[vs.c].id : "";
  if (cara === "lentes" || cara === "corazon") {
    const f = cara === "lentes" ? "#2b2b3b" : "#ff5c8a";
    [xa, xb].forEach((ex) => {
      const x1 = ex - 1, x2 = ex + ow;
      for (let x = x1; x <= x2; x++) {
        const esquina = x === x1 || x === x2;
        if (cara === "lentes" || esquina) lentes += R(x, y0 - 1, f);
        if (cara === "lentes" || !esquina) lentes += R(x, y0 + oh, f);
      }
      for (let y = y0; y < y0 + oh; y++) { lentes += R(x1, y, f); lentes += R(x2, y, f); }
    });
    for (let x = xa + ow + 1; x <= xb - 2; x++) lentes += R(x, y0, f);
  }
  if (cara === "sol") {
    const f = "#1b1b2b";
    for (let x = xa - 1; x <= xb + ow; x++) lentes += R(x, y0 - 1, f);
    [xa, xb].forEach((ex) => {
      for (let y = y0; y <= y0 + oh; y++) for (let x = ex - 1; x <= ex + ow; x++) lentes += R(x, y, f, 0.72);
    });
    for (let x = xa + ow + 1; x <= xb - 2; x++) lentes += R(x, y0, f);
  }
  if (cara === "bigote") {
    const ds = w >= 11 ? [-2, -1, 1, 2] : [-1, 1];
    ds.forEach((d) => { lentes += R(cx + d, y0 + oh + 1, "#4a2d1d"); });
  }

  pelo += peloCeldas(vs.e, w, t, H, COLORES[vs.k] || COLORES[0], R);

  const s = SOMBREROS[vs.s];
  if (s && s.m) {
    const a = s.m.length - 1, off = Math.floor(s.m[0].length / 2);
    s.m.forEach((fila, i) => [...fila].forEach((ch, j) => {
      if (s.c[ch]) pelo += R(cx - off + j, t - a + i, s.c[ch]);
    }));
  } else if (s && s.g) {
    s.g(w, t, cx).forEach(([x, y, f]) => { pelo += R(x, y, f); });
  }
  return lentes + '<g class="pelo">' + pelo + "</g>";
}

// vs = ropa del personaje. Sin vs se dibuja simple (para el tablero).
function pixelSvg(k, vs) {
  const P = PIEZAS[k], m = P.m, c = P.c;
  const base = c[P.b || "X"], ej = P.ej || "E", pad = vs ? PAD : 0;
  const R = (x, y, f, op) => '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="' + f + '"' + (op ? ' fill-opacity="' + op + '"' : "") + "/>";
  let cuerpo = "", ojos = "";
  m.forEach((fila, y) => [...fila].forEach((ch, x) => {
    if (!c[ch]) return;
    if (ej.indexOf(ch) >= 0) { cuerpo += R(x, y, base); ojos += R(x, y, c[ch]); }   // ojos aparte para animarlos
    else cuerpo += R(x, y, c[ch]);
  }));
  const extra = vs ? ropa(P, vs, R) : "";
  return '<svg viewBox="0 ' + (-pad) + " " + m[0].length + " " + (m.length + pad) + '" shape-rendering="crispEdges">'
    + cuerpo + '<g class="mira"><g class="parp">' + ojos + "</g></g>" + extra + "</svg>";
}
const icono = (k) => '<span class="ic">' + pixelSvg(k) + "</span>";

const LINEAS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const $ = (id) => document.getElementById(id);
const azar = (l) => l[Math.floor(Math.random() * l.length)];

// ===== Sonidos (se generan en el navegador, sin archivos) =====
let audio = null, mudo = false;
try { mudo = localStorage.getItem("gn_mudo") === "1"; } catch (e) {}

function ctxAudio() {
  if (mudo) return null;
  try {
    if (!audio) audio = new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === "suspended") audio.resume();
    return audio;
  } catch (e) { return null; }
}
function tono(f, dur, tipo, vol, retraso) {
  const a = ctxAudio();
  if (!a) return;
  const t0 = a.currentTime + (retraso || 0);
  const o = a.createOscillator(), g = a.createGain();
  o.type = tipo || "square";
  o.frequency.setValueAtTime(f, t0);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol || 0.08, t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g); g.connect(a.destination);
  o.start(t0); o.stop(t0 + dur + 0.02);
}
const SON = {
  pon: (n) => tono(n % 2 ? 520 : 392, 0.09, "square", 0.07),
  gana: () => [523, 659, 784, 1047].forEach((f, i) => tono(f, 0.16, "square", 0.08, i * 0.12)),
  pierde: () => [392, 330, 262].forEach((f, i) => tono(f, 0.22, "triangle", 0.1, i * 0.16)),
  empate: () => [440, 440].forEach((f, i) => tono(f, 0.14, "triangle", 0.09, i * 0.18)),
  pop: () => { tono(660, 0.06, "sine", 0.1); tono(990, 0.08, "sine", 0.08, 0.06); },
  clic: () => tono(300, 0.05, "square", 0.05)
};

let prevN = 0, prevRes = null;
function sonidos() {
  const n = S.t.filter((x) => x !== null).length;
  if (n > prevN) SON.pon(n);
  if (S.res && !prevRes) {
    const gano = modo === "local" || (modo === "pc" ? S.res === "g0" : S.res === "g" + rol);
    const t = S.res === "e" ? "empate" : gano ? "gana" : "pierde";
    setTimeout(SON[t], 220);
  }
  prevN = n; prevRes = S.res;
}

function pintarSonido() { $("sonido").textContent = mudo ? "🔇" : "🔊"; }
$("sonido").onclick = () => {
  mudo = !mudo;
  try { localStorage.setItem("gn_mudo", mudo ? "1" : "0"); } catch (e) {}
  pintarSonido();
  if (!mudo) SON.clic();
};
pintarSonido();

// sonido de clic en los botones (menos casillas, frases y el botón de sonido)
document.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b && !b.classList.contains("casilla") && b.id !== "sonido" && !b.closest(".menu, .rapidas")) SON.clic();
});

// ===== Estado =====
let modo = "pc";        // "pc", "local" o "online"
let S;                  // { t, turno, inicio, pts, pj:[personaje1, personaje2], vs:[ropa1, ropa2], res }
let peer = null, conn = null, rol = 0, quien = 0;
let modalCerrado = false, claveResultado = "", fraseActual = "";

const ropaBase = () => ({ e: 0, k: 0, s: 0, c: 0 });
const nuevo = (inicio, pts, pj, vs) => ({
  t: Array(9).fill(null), turno: inicio, inicio: inicio, pts: pts || [0,0,0],
  pj: pj ? pj.slice() : [0,1],
  vs: vs ? vs.map((v) => Object.assign(ropaBase(), v)) : [ropaBase(), ropaBase()],
  res: null
});
const vest = (p) => Object.assign(ropaBase(), (S.vs && S.vs[p]) || {});

function nombre(p) {
  if (modo === "pc") return p === 0 ? "Tú" : "Compu";
  return PIEZAS[S.pj[p]].n;
}
const puedeElegir = (p) => modo === "local" || (modo === "pc" && p === 0) || (modo === "online" && p === rol);
const puedeHablar = (p) => modo === "local" || (modo === "pc" && p === 0) || (modo === "online" && p === rol);

// Casillas
const casillas = [];
for (let i = 0; i < 9; i++) {
  const b = document.createElement("button");
  b.className = "casilla";
  b.setAttribute("aria-label", "Casilla " + (i + 1));
  b.onclick = () => jugar(i);
  $("tablero").appendChild(b);
  casillas.push(b);
}

// Reglas
function lineaGanadora(t) {
  return LINEAS.find(([a, b, c]) => t[a] !== null && t[a] === t[b] && t[a] === t[c]) || null;
}
function aplicarJugada(s, i) {
  const n = { t: s.t.slice(), turno: s.turno, inicio: s.inicio, pts: s.pts.slice(), pj: s.pj.slice(), vs: s.vs, res: null };
  n.t[i] = s.turno;
  if (lineaGanadora(n.t)) { n.res = "g" + s.turno; n.pts[s.turno === 0 ? 0 : 2]++; }
  else if (n.t.every((x) => x !== null)) { n.res = "e"; n.pts[1]++; }
  else n.turno = 1 - s.turno;
  return n;
}

// Ventana de resultado
function mostrarResultado() {
  const clave = S.res + S.pts.join();
  if (clave !== claveResultado) { claveResultado = clave; modalCerrado = false; fraseActual = ""; }

  let titulo, frase, ic = "";
  if (S.res === "e") {
    titulo = "Empate"; frase = fraseActual || azar(FRASES_EMPATE);
    ic = pixelSvg(S.pj[0], vest(0)) + pixelSvg(S.pj[1], vest(1));   // en empate salen los dos
  } else {
    const g = S.res === "g0" ? 0 : 1;
    ic = pixelSvg(S.pj[g], vest(g));
    const yoGano = modo === "pc" ? g === 0 : modo === "online" ? g === rol : true;
    if (modo === "local") { titulo = "¡Ganó " + nombre(g) + "!"; frase = fraseActual || azar(FRASES_GANA); }
    else if (yoGano) { titulo = "¡Ganaste!"; frase = fraseActual || azar(FRASES_GANA); }
    else { titulo = "Perdiste"; frase = fraseActual || azar(FRASES_PIERDE); }
  }
  fraseActual = frase;
  $("mTitulo").textContent = titulo;
  $("mTexto").textContent = frase;
  $("mIcono").innerHTML = ic;
  $("modal").style.display = modalCerrado ? "none" : "flex";
}

// Pantalla
function dibujar() {
  // En "A distancia" solo se ve el código hasta que los dos se conectan
  const lobby = modo === "online" && !(conn && conn.open);
  lateral(lobby);
  if ($("selector").style.display === "flex") pintarSelector();
  $("lobby").style.display = lobby ? "block" : "none";
  $("juego").style.display = lobby ? "none" : "block";
  if (lobby) { $("modal").style.display = "none"; return; }

  const linea = lineaGanadora(S.t);
  casillas.forEach((c, i) => {
    const j = S.t[i];
    const valor = j === null ? "" : j + "-" + S.pj[j];
    const prev = c.dataset.valor || "";
    if (prev !== valor) {   // solo se redibuja la casilla que cambió
      c.dataset.valor = valor;
      c.innerHTML = j === null ? "" : icono(S.pj[j]);
      c.classList.toggle("nuevo", prev === "" && valor !== "");
    }
    c.classList.toggle("gana", !!linea && linea.includes(i));
  });

  $("m0").innerHTML = pixelSvg(S.pj[0], vest(0));
  $("m1").innerHTML = pixelSvg(S.pj[1], vest(1));
  $("n0").textContent = nombre(0); $("n1").textContent = nombre(1);
  $("p1").textContent = S.pts[0]; $("pe").textContent = S.pts[1]; $("p2").textContent = S.pts[2];
  [0, 1].forEach((p) => {
    $("j" + p).disabled = !puedeElegir(p);
    $("h" + p).textContent = puedeElegir(p) ? "toca para cambiar" : "";
  });

  let estado;
  if (S.res === "e") estado = "<span>Empate</span>";
  else if (S.res) { const g = S.res === "g0" ? 0 : 1; estado = icono(S.pj[g]) + "<span>¡Ganó " + nombre(g) + "!</span>"; }
  else if (modo === "online") estado = S.turno === rol
    ? icono(S.pj[rol]) + "<span>Te toca</span>"
    : icono(S.pj[S.turno]) + "<span>Esperando a " + nombre(S.turno) + "…</span>";
  else estado = icono(S.pj[S.turno]) + "<span>Turno de " + nombre(S.turno) + "</span>";
  $("estado").innerHTML = estado;
  $("reiniciar").style.display = S.res ? "block" : "none";

  sonidos();

  if (S.res) mostrarResultado();
  else { claveResultado = ""; modalCerrado = false; $("modal").style.display = "none"; }
}

// ===== Selector: personaje y vestuario (el panel lo arma este script) =====
function armarSelector() {
  $("selector").innerHTML =
    '<div class="carta">' +
    '<div class="carta-top">Personaliza tu personaje</div>' +
    '<div id="previa"></div>' +
    '<div class="seccion">Peinado</div><div class="chips" id="chipsE"></div>' +
    '<div class="seccion">Color de pelo</div><div class="chips" id="chipsK"></div>' +
    '<div class="seccion">Sombreros y diademas</div><div class="chips" id="chipsS"></div>' +
    '<div class="seccion">Lentes</div><div class="chips" id="chipsC"></div>' +
    '<div class="seccion">Personaje</div><div class="rejilla" id="rejilla"></div>' +
    '<button class="boton chico" id="sCerrar">Listo</button>' +
    "</div>";
  $("sCerrar").onclick = () => { $("selector").style.display = "none"; };
}

function abrirSelector(p) {
  if (!puedeElegir(p)) return;
  quien = p;
  pintarSelector();
  $("selector").style.display = "flex";
}
function pintarSelector() {
  const p = quien, v = vest(p);
  $("previa").innerHTML = pixelSvg(S.pj[p], v);
  const r = $("rejilla"); r.innerHTML = "";
  PIEZAS.forEach((pz, k) => {
    const b = document.createElement("button");
    b.className = "pers" + (S.pj[p] === k ? " sel" : "");
    b.disabled = S.pj[1 - p] === k;   // no se puede repetir el personaje del otro
    b.innerHTML = icono(k) + "<span>" + pz.n + "</span>";
    b.onclick = () => elegir(k);
    r.appendChild(b);
  });
  chips("chipsE", PEINADOS, v.e, "e");
  chips("chipsK", COLORES, v.k, "k");
  chips("chipsS", SOMBREROS, v.s, "s");
  chips("chipsC", CARA, v.c, "c");
}
function chips(id, lista, sel, parte) {
  const c = $(id); c.innerHTML = "";
  lista.forEach((it, i) => {
    const b = document.createElement("button");
    b.className = "chip" + (sel === i ? " sel" : "");
    b.innerHTML = (parte === "k" ? '<i class="mue" style="background:' + it.c + '"></i>' : "") + it.n;
    b.onclick = () => ponerVest(parte, i);
    c.appendChild(b);
  });
}
function elegir(k) {
  if (modo === "online" && rol === 1) { if (conn && conn.open) conn.send({ tipo: "pj", i: k }); return; }
  S.pj[quien] = k;
  dibujar(); enviar();
}
function ponerVest(parte, i) {
  if (modo === "online" && rol === 1) { if (conn && conn.open) conn.send({ tipo: "vs", parte: parte, i: i }); return; }
  if (!S.vs) S.vs = [ropaBase(), ropaBase()];
  S.vs[quien] = Object.assign(ropaBase(), S.vs[quien]);
  S.vs[quien][parte] = i;
  dibujar(); enviar();
}

// Jugar
function jugar(i) {
  if (S.res || S.t[i] !== null) return;
  if (modo === "pc" && S.turno !== 0) return;
  if (modo === "online" && (!conn || S.turno !== rol)) return;
  S = aplicarJugada(S, i);
  dibujar(); enviar();
  if (modo === "pc" && !S.res && S.turno === 1) setTimeout(jugadaCompu, 450);
}

function buscarHueco(jugador) {
  for (const l of LINEAS) {
    const mias = l.filter((k) => S.t[k] === jugador).length;
    const vacio = l.find((k) => S.t[k] === null);
    if (mias === 2 && vacio !== undefined) return vacio;
  }
  return -1;
}
function jugadaCompu() {
  if (S.res || modo !== "pc") return;
  const libres = S.t.map((v, i) => (v === null ? i : -1)).filter((i) => i >= 0);
  // La compu a veces "se equivoca" a propósito para que puedas ganar
  let h = Math.random() < 0.6 ? buscarHueco(1) : -1;
  if (h === -1 && Math.random() < 0.6) h = buscarHueco(0);
  if (h === -1) h = libres[Math.floor(Math.random() * libres.length)];
  S = aplicarJugada(S, h);
  dibujar();
}

function otraVez() {
  if (modo === "online" && !(conn && conn.open)) return;
  S = nuevo(1 - S.inicio, S.pts, S.pj, S.vs);
  dibujar(); enviar();
  if (modo === "pc" && S.turno === 1) setTimeout(jugadaCompu, 450);
}

// A distancia (PeerJS)
function red(t) { $("red").textContent = t; }
function enviar() { if (modo === "online" && conn && conn.open) conn.send({ tipo: "estado", S: S }); }

function prepararConexion() {
  conn.on("open", () => {
    red("");
    if (rol === 0) { S = nuevo(0, null, S.pj, S.vs); enviar(); }
    dibujar();
  });
  conn.on("data", (d) => {
    if (d.tipo === "estado") { S = d.S; dibujar(); }
    else if (d.tipo === "pj" && rol === 0 && Number.isInteger(d.i) && d.i >= 0 && d.i < PIEZAS.length && d.i !== S.pj[0]) {
      S.pj[1] = d.i; enviar(); dibujar();
    }
    else if (d.tipo === "vs" && rol === 0 && LISTAS[d.parte] && Number.isInteger(d.i) && d.i >= 0 && d.i < LISTAS[d.parte].length) {
      if (!S.vs) S.vs = [ropaBase(), ropaBase()];
      S.vs[1] = Object.assign(ropaBase(), S.vs[1]);
      S.vs[1][d.parte] = d.i; enviar(); dibujar();
    }
    else if (d.tipo === "charla" && typeof d.t === "string") {
      // lo que dice el otro sale siempre en la ventana del otro jugador
      hablar(1 - rol, d.t.slice(0, 40), false);
    }
  });
  conn.on("close", () => { conn = null; red("Se desconectó tu pareja."); dibujar(); });
}

function crearSala() {
  cerrarRed();
  const codigo = Math.random().toString(36).slice(2, 6).toUpperCase();
  rol = 0;
  peer = new Peer("gatonocturno-" + codigo);
  peer.on("open", () => red("Tu código es " + codigo + ". Mándaselo a tu pareja y espera…"));
  peer.on("connection", (c) => { conn = c; prepararConexion(); });
  peer.on("error", (e) => red("Error: " + e.type + ". Intenta crear otra sala."));
}

function unirse() {
  const codigo = $("codigo").value.trim().toUpperCase();
  if (!codigo) { red("Escribe el código primero."); return; }
  cerrarRed();
  rol = 1;
  peer = new Peer();
  peer.on("open", () => { conn = peer.connect("gatonocturno-" + codigo); prepararConexion(); red("Conectando…"); });
  peer.on("error", (e) => red("No pude conectar (" + e.type + "). Revisa el código."));
}

function cerrarRed() {
  if (conn) conn.close();
  if (peer) peer.destroy();
  conn = null; peer = null;
}

// Modos y botones
function cambiarModo(m) {
  cerrarRed();
  modo = m;
  $("bPc").classList.toggle("activo", m === "pc");
  $("bLocal").classList.toggle("activo", m === "local");
  $("bOnline").classList.toggle("activo", m === "online");
  red("");
  S = nuevo(0, null, S ? S.pj : null, S ? S.vs : null);
  dibujar();
}

$("bPc").onclick = () => cambiarModo("pc");
$("bLocal").onclick = () => cambiarModo("local");
$("bOnline").onclick = () => cambiarModo("online");
$("bCrear").onclick = crearSala;
$("bUnirse").onclick = unirse;
$("reiniciar").onclick = otraVez;
$("mOtra").onclick = otraVez;
$("mCerrar").onclick = () => { modalCerrado = true; $("modal").style.display = "none"; };
$("j0").onclick = () => abrirSelector(0);
$("j1").onclick = () => abrirSelector(1);

// ===== Personajes de los lados y charla =====
const frasePj = [{}, {}];       // frase elegida por jugador (no cambia en cada redibujo)
const dicho = [null, null];     // lo que dijo cada uno con "Decir algo"
let ultimoLobby = false;

function fraseDe(tipo, p, clave) {
  if (frasePj[p].k !== clave) frasePj[p] = { k: clave, t: azar(FRASES[tipo]) };
  return frasePj[p].t;
}

function lateral(lobby) {
  ultimoLobby = lobby;
  [0, 1].forEach((p) => {
    const k = S.pj[p], v = vest(p);
    const sp = $("s" + p);
    const clave = [k, v.e, v.k, v.s, v.c].join("|");
    if (sp.dataset.k !== clave) {   // solo se redibuja si cambió el personaje o su ropa
      sp.dataset.k = clave;
      sp.innerHTML = pixelSvg(k, v).replace("<svg ", '<svg preserveAspectRatio="xMidYMax meet" ');
    }
    $("vt" + p).textContent = PIEZAS[k].n.toLowerCase() + ".exe";
    $("c" + p).style.display = (!lobby && puedeHablar(p)) ? "flex" : "none";

    let est = "", txt = "";
    if (!lobby) {
      const base = S.t.filter((x) => x !== null).length + "|" + (S.res || "-") + "|" + S.turno;
      if (S.res === "e") txt = fraseDe("empate", p, base);
      else if (S.res) {
        if (S.res === "g" + p) { est = "gana"; txt = fraseDe("gana", p, base); }
        else { est = "pierde"; txt = fraseDe("pierde", p, base); }
      } else if (S.turno === p) { est = "turno"; txt = fraseDe("turno", p, base); }
    }
    const habla = !!(dicho[p] && dicho[p].hasta > Date.now());
    if (habla) txt = dicho[p].t;   // lo que dijo manda

    $("v" + p).className = "ventana " + (p === 0 ? "izq" : "der") + " " + est + (habla ? " habla" : "");
    $("b" + p).textContent = txt;
    $("b" + p).style.visibility = txt ? "visible" : "hidden";
  });
}

function hablar(p, t, enviarlo) {
  SON.pop();
  dicho[p] = { t: t, hasta: Date.now() + 3000 };
  lateral(ultimoLobby);
  setTimeout(() => lateral(ultimoLobby), 3100);
  if (enviarlo && modo === "online" && conn && conn.open) conn.send({ tipo: "charla", t: t });
}

// en "Mismo cel" habla quien tiene el turno; en práctica, tú; a distancia, tu personaje
function quienHabla() {
  return modo === "local" ? S.turno : modo === "online" ? rol : 0;
}

// fila de respuestas rápidas (solo se ve en celular)
RAPIDAS.forEach((t) => {
  const b = document.createElement("button");
  b.textContent = t;
  b.onclick = () => hablar(quienHabla(), t, true);
  $("rapidas").appendChild(b);
});

// tocar la ventana de un personaje abre el vestuario (si puedes cambiarlo)
[0, 1].forEach((p) => { $("v" + p).onclick = () => abrirSelector(p); });

// ===== Menú de frases y botón Vestir en cada ventana =====
function cerrarMenus() { [0, 1].forEach((p) => $("cm" + p).classList.remove("abierto")); }

[0, 1].forEach((p) => {
  // si el index.html no trae el botón Vestir, se crea aquí
  if (!$("vb" + p)) {
    const vb = document.createElement("button");
    vb.className = "chatbtn"; vb.id = "vb" + p; vb.textContent = "Vestir ✨";
    $("c" + p).insertBefore(vb, $("cb" + p));
  }
  const menu = $("cm" + p);
  RAPIDAS.forEach((t) => {
    const b = document.createElement("button");
    b.textContent = t;
    b.onclick = (e) => { e.stopPropagation(); hablar(p, t, true); cerrarMenus(); };
    menu.appendChild(b);
  });
  $("c" + p).onclick = (e) => e.stopPropagation();
  $("vb" + p).onclick = (e) => { e.stopPropagation(); cerrarMenus(); abrirSelector(p); };
  $("cb" + p).onclick = (e) => {
    e.stopPropagation();
    const abierto = menu.classList.contains("abierto");
    cerrarMenus();
    if (!abierto) menu.classList.add("abierto");
  };
});
document.addEventListener("click", cerrarMenus);

armarSelector();
>>>>>>> 294e5dbd196aee6ee5e7fa6969dd96512e42ee1b
cambiarModo("pc");