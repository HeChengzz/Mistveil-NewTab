/* ==================== 搜索引擎配置 ==================== */
const ENGINES = [
  { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=%s' },
  { id: 'baidu', name: '百度', url: 'https://www.baidu.com/s?wd=%s' },
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=%s' }
];

/* ==================== 预设壁纸 ==================== */
const PRESET_WALLPAPERS = [
  { id: 'midnight', name: '午夜', value: 'linear-gradient(135deg, #1e293b, #0f172a)' },
  { id: 'twilight', name: '暮光', value: 'linear-gradient(135deg, #667eea, #764ba2)' },
  { id: 'sunset',   name: '落日', value: 'linear-gradient(135deg, #ff6b6b, #feca57)' },
  { id: 'ocean',    name: '海洋', value: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
  { id: 'forest',   name: '森林', value: 'linear-gradient(135deg, #11998e, #38ef7d)' },
  { id: 'sakura',   name: '樱花', value: 'linear-gradient(135deg, #ff9a9e, #fecfef)' },
  { id: 'ice',      name: '冰晶', value: 'linear-gradient(135deg, #e0eafc, #cfdef3)' },
  { id: 'deep',     name: '深海', value: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)' }
];

/* ==================== 常量 ==================== */
const STORAGE_ENGINE = 'newtab_engine';
const STORAGE_WALLPAPER = 'newtab_wallpaper';
const STORAGE_BOOKMARKS = 'newtab_bookmarks';
const STORAGE_FOLDERS = 'newtab_bookmark_folders';
const STORAGE_EXPANDED_FOLDERS = 'newtab_expanded_folders';
const STORAGE_THEME = 'newtab_theme';
const STORAGE_BRAND_COLOR = 'newtab_brand_color';
const STORAGE_OVERLAY = 'newtab_overlay';
const STORAGE_SEARCH_POS = 'newtab_search_pos';
const STORAGE_SEARCH_WIDTH = 'newtab_search_width';
const STORAGE_SEARCH_HEIGHT = 'newtab_search_height';
const STORAGE_FONT_NAME = 'newtab_font_name';
const STORAGE_BOOKMARK_SORT = 'newtab_bookmark_sort';
const STORAGE_WALLPAPER_EDGE = 'newtab_wallpaper_edge';
const STORAGE_RADIUS = 'newtab_radius';

const EDGE_ZONE = 10;
const WALLPAPER_EDGE_ZONE = 4;

const CLOSE_DELAY = 450;
const SETTINGS_CLOSE_DELAY = 900;
const WALLPAPER_CLOSE_DELAY = 700;

const WHEEL_THRESHOLD = 2;

const MAX_IMAGE_HISTORY = 12;

const DEFAULT_OVERLAY = 30;
const MIN_OVERLAY = 0;
const MAX_OVERLAY = 80;

const DEFAULT_SEARCH_POS = 0;
const MIN_SEARCH_POS = -30;
const MAX_SEARCH_POS = 30;

const DEFAULT_SEARCH_WIDTH = 600;
const MIN_SEARCH_WIDTH = 320;
const MAX_SEARCH_WIDTH = 900;

const DEFAULT_SEARCH_HEIGHT = 48;
const MIN_SEARCH_HEIGHT = 36;
const MAX_SEARCH_HEIGHT = 72;

const DEFAULT_RADIUS = 8;
const MIN_RADIUS = 0;
const MAX_RADIUS = 24;

const DEFAULT_BOOKMARK_SORT = 'time-desc';
const VALID_SORTS = ['time-desc', 'time-asc', 'alpha-asc', 'alpha-desc'];

/* 主题：用户选择值，默认亮色 */
const DEFAULT_THEME = 'light';
const VALID_THEMES = ['light', 'dark', 'system'];

/* 品牌色默认值（和 CSS 里一致） */
const DEFAULT_BRAND_COLOR = '#4d6bfe';

const DEFAULT_FONT_STACK =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif';

const FONT_FACE_NAME = 'NewTabCustomFont';

const FONT_DEFAULT_LABEL = '系统默认';

/* ==================== DOM ==================== */
const bgLayer = document.getElementById('bgLayer');
const form = document.getElementById('searchForm');
const qInput = document.getElementById('q');
const engineBtn = document.getElementById('engineBtn');
const engineName = document.getElementById('engineName');
const engineList = document.getElementById('engineList');

const settingsPanel = document.getElementById('settingsPanel');
const settingsClose = document.getElementById('settingsClose');
const uploadBtn = document.getElementById('uploadBtn');
const resetBtn = document.getElementById('resetBtn');
const fileInput = document.getElementById('fileInput');

const fontUploadBtn = document.getElementById('fontUploadBtn');
const fontResetBtn = document.getElementById('fontResetBtn');
const fontInput = document.getElementById('fontInput');
const fontCurrent = document.getElementById('fontCurrent');

const themeSwitch = document.getElementById('themeSwitch');
const themeOpts = themeSwitch.querySelectorAll('.theme-opt');
const brandColorInput = document.getElementById('brandColorInput');
const brandColorValue = document.getElementById('brandColorValue');
const overlayRange = document.getElementById('overlayRange');
const overlayValue = document.getElementById('overlayValue');

const radiusRange = document.getElementById('radiusRange');
const radiusValue = document.getElementById('radiusValue');
const resetAppearanceBtn = document.getElementById('resetAppearanceBtn');

const wallpaperEdgeSwitch = document.getElementById('wallpaperEdgeSwitch');
const wallpaperEdgeOpts = wallpaperEdgeSwitch.querySelectorAll('.theme-opt');

const searchPosRange = document.getElementById('searchPosRange');
const searchPosValue = document.getElementById('searchPosValue');
const searchWidthRange = document.getElementById('searchWidthRange');
const searchWidthValue = document.getElementById('searchWidthValue');
const searchHeightRange = document.getElementById('searchHeightRange');
const searchHeightValue = document.getElementById('searchHeightValue');

const bookmarkPanel = document.getElementById('bookmarkPanel');
const bookmarkList = document.getElementById('bookmarkList');
const folderArea = document.getElementById('folderArea');
const bookmarkForm = document.getElementById('bookmarkForm');
const addBookmarkBtn = document.getElementById('addBookmarkBtn');
const addFolderBtn = document.getElementById('addFolderBtn');
const cancelBookmarkBtn = document.getElementById('cancelBookmark');
const bmTitle = document.getElementById('bmTitle');
const bmUrl = document.getElementById('bmUrl');
const bmFolder = document.getElementById('bmFolder');

const importBookmarkBtn = document.getElementById('importBookmarkBtn');
const exportBookmarkBtn = document.getElementById('exportBookmarkBtn');
const bookmarkImportInput = document.getElementById('bookmarkImportInput');

const sortWrap = document.getElementById('sortWrap');
const sortBookmarkBtn = document.getElementById('sortBookmarkBtn');
const sortMenu = document.getElementById('sortMenu');
const sortItems = sortMenu.querySelectorAll('li');

const wallpaperPanel = document.getElementById('wallpaperPanel');
const wallpaperClose = document.getElementById('wallpaperClose');
const presetGrid = document.getElementById('presetGrid');
const uploadGrid = document.getElementById('uploadGrid');

const edgeHintLeft = document.getElementById('edgeHintLeft');
const edgeHintRight = document.getElementById('edgeHintRight');
const edgeHintBottom = document.getElementById('edgeHintBottom');

/* ==================== 全局状态 ==================== */
let currentEngine = ENGINES[0];
let currentWallpaper = null;
let currentSort = DEFAULT_BOOKMARK_SORT;
let wallpaperEdgeEnabled = true;

let expandedFolders = new Set();

let dragState = {
  active: false,
  bookmarkId: null
};

const panelState = {
  bookmark: { open: false, timer: null },
  settings: { open: false, timer: null },
  wallpaper: { open: false, timer: null }
};

/* 系统深色模式监听 */
const systemThemeMedia = window.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)')
  : null;

/* ==================== 主题：光 / 暗 / 跟随系统 ==================== */
function getEffectiveTheme(userTheme) {
  if (userTheme === 'system') {
    if (systemThemeMedia && systemThemeMedia.matches) return 'dark';
    return 'light';
  }
  return userTheme === 'dark' ? 'dark' : 'light';
}

function setTheme(theme) {
  let t = VALID_THEMES.indexOf(theme) === -1 ? DEFAULT_THEME : theme;

  localStorage.setItem(STORAGE_THEME, t);

  const effective = getEffectiveTheme(t);
  document.documentElement.dataset.theme = effective;

  themeOpts.forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.theme === t);
  });
}

if (systemThemeMedia) {
  const onChange = function () {
    const saved = localStorage.getItem(STORAGE_THEME) || DEFAULT_THEME;
    if (saved === 'system') {
      setTheme('system');
    }
  };

  if (typeof systemThemeMedia.addEventListener === 'function') {
    systemThemeMedia.addEventListener('change', onChange);
  } else if (typeof systemThemeMedia.addListener === 'function') {
    systemThemeMedia.addListener(onChange);
  }
}

/* ==================== 全局颜色 ==================== */
function normalizeHex(input) {
  const s = String(input || '').trim();
  if (/^#[0-9a-f]{6}$/i.test(s)) return s.toLowerCase();
  if (/^#[0-9a-f]{3}$/i.test(s)) {
    return ('#' + s[1] + s[1] + s[2] + s[2] + s[3] + s[3]).toLowerCase();
  }
  return '';
}

function hexToRgb(hex) {
  const h = normalizeHex(hex);
  if (!h) return null;
  return {
    r: parseInt(h.slice(1, 3), 16),
    g: parseInt(h.slice(3, 5), 16),
    b: parseInt(h.slice(5, 7), 16)
  };
}

function setBrandColor(hex) {
  let v = normalizeHex(hex) || DEFAULT_BRAND_COLOR;

  /* 设置主色（用于图标、边框、滑块等） */
  document.documentElement.style.setProperty('--brand-color', v);

  /* 拆分 RGB 分量，供面板 / 搜索框的 tint 层做 rgba 使用 */
  const rgb = hexToRgb(v);
  if (rgb) {
    document.documentElement.style.setProperty(
      '--brand-rgb',
      rgb.r + ', ' + rgb.g + ', ' + rgb.b
    );
  }

  localStorage.setItem(STORAGE_BRAND_COLOR, v);
  brandColorInput.value = v;
  brandColorValue.textContent = v.toUpperCase();
}

brandColorInput.addEventListener('input', function () {
  setBrandColor(brandColorInput.value);
});

brandColorInput.addEventListener('change', function () {
  setBrandColor(brandColorInput.value);
});

/* ==================== 其他外观设置 ==================== */
function setOverlay(value) {
  let v = Number(value);
  if (!isFinite(v)) v = DEFAULT_OVERLAY;
  v = Math.max(MIN_OVERLAY, Math.min(MAX_OVERLAY, Math.round(v)));

  document.documentElement.style.setProperty('--overlay-opacity', String(v / 100));
  localStorage.setItem(STORAGE_OVERLAY, String(v));

  overlayRange.value = String(v);
  overlayValue.textContent = v + '%';
}

function setSearchPos(value) {
  let v = Number(value);
  if (!isFinite(v)) v = DEFAULT_SEARCH_POS;
  v = Math.max(MIN_SEARCH_POS, Math.min(MAX_SEARCH_POS, Math.round(v)));

  document.documentElement.style.setProperty('--search-offset', v + 'vh');
  localStorage.setItem(STORAGE_SEARCH_POS, String(v));

  searchPosRange.value = String(v);

  if (v === 0) {
    searchPosValue.textContent = '居中';
  } else if (v < 0) {
    searchPosValue.textContent = '上移 ' + Math.abs(v) + '%';
  } else {
    searchPosValue.textContent = '下移 ' + v + '%';
  }
}

function setSearchWidth(value) {
  let v = Number(value);
  if (!isFinite(v)) v = DEFAULT_SEARCH_WIDTH;
  v = Math.max(MIN_SEARCH_WIDTH, Math.min(MAX_SEARCH_WIDTH, Math.round(v)));

  document.documentElement.style.setProperty('--search-width', v + 'px');
  localStorage.setItem(STORAGE_SEARCH_WIDTH, String(v));

  searchWidthRange.value = String(v);
  searchWidthValue.textContent = v + 'px';
}

function setSearchHeight(value) {
  let v = Number(value);
  if (!isFinite(v)) v = DEFAULT_SEARCH_HEIGHT;
  v = Math.max(MIN_SEARCH_HEIGHT, Math.min(MAX_SEARCH_HEIGHT, Math.round(v)));

  document.documentElement.style.setProperty('--search-height', v + 'px');
  localStorage.setItem(STORAGE_SEARCH_HEIGHT, String(v));

  searchHeightRange.value = String(v);
  searchHeightValue.textContent = v + 'px';
}

function setRadius(value) {
  let v = Number(value);
  if (!isFinite(v)) v = DEFAULT_RADIUS;
  v = Math.max(MIN_RADIUS, Math.min(MAX_RADIUS, Math.round(v)));

  document.documentElement.style.setProperty('--radius-base', v + 'px');
  localStorage.setItem(STORAGE_RADIUS, String(v));

  radiusRange.value = String(v);
  radiusValue.textContent = v + 'px';
}

/* ==================== 底部边缘触发开关 ==================== */
function refreshEdgeHintBottom() {
  const isWallpaperOpen = panelState && panelState.wallpaper && panelState.wallpaper.open;
  const shouldShow = wallpaperEdgeEnabled && !isWallpaperOpen;
  if (shouldShow) {
    edgeHintBottom.classList.remove('hidden');
  } else {
    edgeHintBottom.classList.add('hidden');
  }
}

function setWallpaperEdge(enabled) {
  wallpaperEdgeEnabled = !!enabled;
  localStorage.setItem(STORAGE_WALLPAPER_EDGE, wallpaperEdgeEnabled ? '1' : '0');

  wallpaperEdgeOpts.forEach(function (btn) {
    const on = btn.dataset.enabled === 'true';
    btn.classList.toggle('active', on === wallpaperEdgeEnabled);
  });

  refreshEdgeHintBottom();
}

(function initAppearance() {
  setTheme(localStorage.getItem(STORAGE_THEME) || DEFAULT_THEME);

  const savedColor = localStorage.getItem(STORAGE_BRAND_COLOR);
  setBrandColor(savedColor || DEFAULT_BRAND_COLOR);

  const savedOverlay = localStorage.getItem(STORAGE_OVERLAY);
  setOverlay(savedOverlay === null ? DEFAULT_OVERLAY : savedOverlay);

  const savedPos = localStorage.getItem(STORAGE_SEARCH_POS);
  setSearchPos(savedPos === null ? DEFAULT_SEARCH_POS : savedPos);

  const savedWidth = localStorage.getItem(STORAGE_SEARCH_WIDTH);
  setSearchWidth(savedWidth === null ? DEFAULT_SEARCH_WIDTH : savedWidth);

  const savedHeight = localStorage.getItem(STORAGE_SEARCH_HEIGHT);
  setSearchHeight(savedHeight === null ? DEFAULT_SEARCH_HEIGHT : savedHeight);

  const savedRadius = localStorage.getItem(STORAGE_RADIUS);
  setRadius(savedRadius === null ? DEFAULT_RADIUS : savedRadius);

  const savedEdge = localStorage.getItem(STORAGE_WALLPAPER_EDGE);
  setWallpaperEdge(savedEdge === null ? true : savedEdge === '1');
})();

themeOpts.forEach(function (btn) {
  btn.addEventListener('click', function () {
    setTheme(btn.dataset.theme);
  });
});

wallpaperEdgeOpts.forEach(function (btn) {
  btn.addEventListener('click', function () {
    setWallpaperEdge(btn.dataset.enabled === 'true');
  });
});

overlayRange.addEventListener('input', function () {
  setOverlay(overlayRange.value);
});

searchPosRange.addEventListener('input', function () {
  setSearchPos(searchPosRange.value);
});

searchWidthRange.addEventListener('input', function () {
  setSearchWidth(searchWidthRange.value);
});

searchHeightRange.addEventListener('input', function () {
  setSearchHeight(searchHeightRange.value);
});

radiusRange.addEventListener('input', function () {
  setRadius(radiusRange.value);
});

/* ==================== 重置外观 ==================== */
function resetAppearance() {
  setTheme(DEFAULT_THEME);
  setBrandColor(DEFAULT_BRAND_COLOR);
  setRadius(DEFAULT_RADIUS);
  setSearchWidth(DEFAULT_SEARCH_WIDTH);
  setSearchHeight(DEFAULT_SEARCH_HEIGHT);
  setSearchPos(DEFAULT_SEARCH_POS);
  setOverlay(DEFAULT_OVERLAY);
}

resetAppearanceBtn.addEventListener('click', function () {
  if (confirm('重置外观设置？\n（主题、颜色、圆角、搜索框尺寸与位置、遮罩将恢复为默认）')) {
    resetAppearance();
  }
});

/* ==================== 通用 IndexedDB 工具 ==================== */
function openDB(name, version, setup) {
  return new Promise(function (resolve, reject) {
    const req = indexedDB.open(name, version);
    req.onupgradeneeded = function () { setup(req.result); };
    req.onsuccess = function () { resolve(req.result); };
    req.onerror = function () { reject(req.error); };
  });
}

/* ==================== 字体 ==================== */
function openFontDB() {
  return openDB('newtab-font-db', 1, function (db) {
    if (!db.objectStoreNames.contains('fonts')) db.createObjectStore('fonts');
  });
}

function idbFontPut(key, value) {
  return openFontDB().then(function (db) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction('fonts', 'readwrite');
      tx.objectStore('fonts').put(value, key);
      tx.oncomplete = function () { resolve(); };
      tx.onerror = function () { reject(tx.error); };
    });
  });
}

function idbFontGet(key) {
  return openFontDB().then(function (db) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction('fonts', 'readonly');
      const req = tx.objectStore('fonts').get(key);
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  });
}

function idbFontDelete(key) {
  return openFontDB().then(function (db) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction('fonts', 'readwrite');
      tx.objectStore('fonts').delete(key);
      tx.oncomplete = function () { resolve(); };
      tx.onerror = function () { reject(tx.error); };
    });
  });
}

function applyFont(buffer) {
  return new FontFace(FONT_FACE_NAME, buffer)
    .load()
    .then(function (loaded) {
      document.fonts.forEach(function (f) {
        if (f.family === FONT_FACE_NAME) document.fonts.delete(f);
      });
      document.fonts.add(loaded);
      document.documentElement.style.setProperty(
        '--font-family',
        '"' + FONT_FACE_NAME + '", ' + DEFAULT_FONT_STACK
      );
      return true;
    });
}

function resetFont() {
  document.fonts.forEach(function (f) {
    if (f.family === FONT_FACE_NAME) document.fonts.delete(f);
  });
  document.documentElement.style.setProperty('--font-family', DEFAULT_FONT_STACK);
}

function updateFontCurrent(name) {
  const label = name || FONT_DEFAULT_LABEL;
  fontCurrent.textContent = label;
  fontCurrent.title = label;
}

(function restoreFont() {
  idbFontGet('custom')
    .then(function (data) {
      if (!data || !data.buffer) {
        updateFontCurrent('');
        return;
      }
      return applyFont(data.buffer).then(function () {
        updateFontCurrent(data.name);
      });
    })
    .catch(function (err) {
      console.error('恢复字体失败', err);
      updateFontCurrent('');
    });
})();

fontUploadBtn.addEventListener('click', function () { fontInput.click(); });

fontInput.addEventListener('change', function () {
  const file = fontInput.files && fontInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (ev) {
    const buffer = ev.target.result;
    const name = file.name;

    applyFont(buffer)
      .then(function () { return idbFontPut('custom', { buffer: buffer, name: name }); })
      .then(function () {
        localStorage.setItem(STORAGE_FONT_NAME, name);
        updateFontCurrent(name);
      })
      .catch(function (err) {
        console.error('字体加载失败', err);
        alert('字体加载失败，请确认文件格式正确。');
      })
      .finally(function () { fontInput.value = ''; });
  };
  reader.readAsArrayBuffer(file);
});

fontResetBtn.addEventListener('click', function () {
  resetFont();
  localStorage.removeItem(STORAGE_FONT_NAME);
  updateFontCurrent('');
  idbFontDelete('custom').catch(function (err) { console.error('删除字体失败', err); });
});

/* ==================== 壁纸：IndexedDB 图片库 ==================== */
const imageCache = new Map();

function openWallpaperDB() {
  return openDB('newtab-wallpaper-db', 1, function (db) {
    if (!db.objectStoreNames.contains('images')) {
      db.createObjectStore('images', { keyPath: 'id', autoIncrement: true });
    }
  });
}

function idbImageAdd(dataUrl, name) {
  return openWallpaperDB().then(function (db) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction('images', 'readwrite');
      const req = tx.objectStore('images').add({
        dataUrl: dataUrl,
        name: name,
        createdAt: Date.now()
      });
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  });
}

function idbImageGetAll() {
  return openWallpaperDB().then(function (db) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction('images', 'readonly');
      const req = tx.objectStore('images').getAll();
      req.onsuccess = function () { resolve(req.result || []); };
      req.onerror = function () { reject(req.error); };
    });
  });
}

function idbImageDelete(id) {
  return openWallpaperDB().then(function (db) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction('images', 'readwrite');
      tx.objectStore('images').delete(id);
      tx.oncomplete = function () { resolve(); };
      tx.onerror = function () { reject(tx.error); };
    });
  });
}

/* ==================== 壁纸：状态与应用 ==================== */
function loadSavedWallpaper() {
  try {
    const raw = localStorage.getItem(STORAGE_WALLPAPER);
    if (!raw) return null;
    const obj = JSON.parse(raw);
    if (obj && (obj.kind === 'preset' || obj.kind === 'image')) return obj;
    return null;
  } catch (e) { return null; }
}

function saveWallpaperState(w) {
  try {
    if (w) localStorage.setItem(STORAGE_WALLPAPER, JSON.stringify(w));
    else localStorage.removeItem(STORAGE_WALLPAPER);
  } catch (e) { console.error('保存壁纸状态失败', e); }
}

function wallpaperStyleValue(w) {
  if (!w) return '';
  if (w.kind === 'preset') {
    const p = PRESET_WALLPAPERS.find(function (x) { return x.id === w.id; });
    return p ? p.value : '';
  }
  if (w.kind === 'image') {
    const img = imageCache.get(w.id);
    return img ? 'url(' + img.dataUrl + ')' : '';
  }
  return '';
}

function applyWallpaper(w, persist) {
  if (persist === undefined) persist = true;

  currentWallpaper = w;
  const styleValue = wallpaperStyleValue(w);

  if (styleValue) {
    bgLayer.style.backgroundImage = styleValue;
    document.documentElement.classList.add('has-wallpaper');
  } else {
    bgLayer.style.backgroundImage = '';
    document.documentElement.classList.remove('has-wallpaper');
  }

  if (persist) saveWallpaperState(styleValue ? w : null);

  updateActiveWallpaper();
}

function isCurrentWallpaper(w) {
  if (!currentWallpaper || !w) return false;
  return currentWallpaper.kind === w.kind && currentWallpaper.id === w.id;
}

function updateActiveWallpaper() {
  const items = document.querySelectorAll('.wallpaper-item');
  items.forEach(function (el) {
    const kind = el.dataset.kind;
    const id = el.dataset.id;
    const active = isCurrentWallpaper({
      kind: kind,
      id: kind === 'image' ? Number(id) : id
    });
    el.classList.toggle('active', active);
  });
}

/* ==================== 壁纸：渲染面板 ==================== */
function renderWallpaperGrids() {
  presetGrid.innerHTML = '';
  PRESET_WALLPAPERS.forEach(function (p) {
    const item = document.createElement('div');
    item.className = 'wallpaper-item';
    item.dataset.kind = 'preset';
    item.dataset.id = p.id;
    item.style.backgroundImage = p.value;
    item.title = p.name;

    const check = document.createElement('span');
    check.className = 'check';
    check.textContent = '✓';
    item.appendChild(check);

    if (isCurrentWallpaper({ kind: 'preset', id: p.id })) item.classList.add('active');

    item.addEventListener('click', function () {
      applyWallpaper({ kind: 'preset', id: p.id });
    });

    presetGrid.appendChild(item);
  });

  uploadGrid.innerHTML = '';
  const images = Array.from(imageCache.values())
    .sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); });

  if (!images.length) {
    const empty = document.createElement('div');
    empty.className = 'wallpaper-empty';
    empty.textContent = '还没有上传过图片，去右侧设置里上传吧';
    uploadGrid.appendChild(empty);
    return;
  }

  images.forEach(function (img) {
    const item = document.createElement('div');
    item.className = 'wallpaper-item';
    item.dataset.kind = 'image';
    item.dataset.id = String(img.id);
    item.style.backgroundImage = 'url(' + img.dataUrl + ')';
    item.title = img.name || '';

    const check = document.createElement('span');
    check.className = 'check';
    check.textContent = '✓';
    item.appendChild(check);

    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'item-del';
    del.title = '删除';
    del.setAttribute('aria-label', '删除这张壁纸');
    del.textContent = '×';
    del.addEventListener('click', function (e) {
      e.stopPropagation();
      idbImageDelete(img.id)
        .then(function () {
          imageCache.delete(img.id);
          if (currentWallpaper && currentWallpaper.kind === 'image' && currentWallpaper.id === img.id) {
            applyWallpaper(null);
          }
          renderWallpaperGrids();
        })
        .catch(function (err) { console.error('删除壁纸失败', err); });
    });
    item.appendChild(del);

    if (isCurrentWallpaper({ kind: 'image', id: img.id })) item.classList.add('active');

    item.addEventListener('click', function () {
      applyWallpaper({ kind: 'image', id: img.id });
    });

    uploadGrid.appendChild(item);
  });
}

function cleanupOldImages() {
  return idbImageGetAll().then(function (list) {
    list.sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); });
    const excess = list.slice(MAX_IMAGE_HISTORY);
    return Promise.all(excess.map(function (img) {
      imageCache.delete(img.id);
      return idbImageDelete(img.id);
    }));
  });
}

(function initWallpaper() {
  idbImageGetAll()
    .then(function (list) {
      list.forEach(function (img) { imageCache.set(img.id, img); });

      const saved = loadSavedWallpaper();
      if (saved) {
        if (saved.kind === 'image' && !imageCache.has(saved.id)) {
          applyWallpaper(null, true);
        } else {
          applyWallpaper(saved, false);
        }
      }
      renderWallpaperGrids();
    })
    .catch(function (err) {
      console.error('初始化壁纸失败', err);
      renderWallpaperGrids();
    });
})();

/* ==================== 壁纸：上传 ==================== */
uploadBtn.addEventListener('click', function () { fileInput.click(); });

fileInput.addEventListener('change', function () {
  const file = fileInput.files && fileInput.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    alert('请选择图片文件');
    fileInput.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = function (ev) {
    const dataUrl = ev.target.result;

    idbImageAdd(dataUrl, file.name)
      .then(function (newId) {
        imageCache.set(newId, { id: newId, dataUrl: dataUrl, name: file.name, createdAt: Date.now() });
        applyWallpaper({ kind: 'image', id: newId });
        return cleanupOldImages();
      })
      .then(function () { renderWallpaperGrids(); })
      .catch(function (err) {
        console.error('保存壁纸失败', err);
        alert('保存壁纸失败，图片可能太大。');
      })
      .finally(function () { fileInput.value = ''; });
  };
  reader.readAsDataURL(file);
});

resetBtn.addEventListener('click', function () {
  applyWallpaper(null);
});

/* ==================== 搜索引擎 ==================== */
function getEngine(id) {
  return ENGINES.find(function (e) { return e.id === id; }) || ENGINES[0];
}

function applyEngine(engine) {
  currentEngine = engine;
  engineName.textContent = engine.name;

  const items = engineList.querySelectorAll('li');
  for (let i = 0; i < items.length; i++) {
    items[i].classList.toggle('active', items[i].dataset.id === engine.id);
  }
  localStorage.setItem(STORAGE_ENGINE, engine.id);
}

function renderEngineList() {
  engineList.innerHTML = '';
  ENGINES.forEach(function (engine) {
    const li = document.createElement('li');
    li.dataset.id = engine.id;
    li.textContent = engine.name;

    li.addEventListener('click', function () {
      applyEngine(engine);
      engineList.classList.remove('open');
      engineBtn.setAttribute('aria-expanded', 'false');
      qInput.focus();
    });
    engineList.appendChild(li);
  });
}

(function initEngine() {
  const savedId = localStorage.getItem(STORAGE_ENGINE);
  renderEngineList();
  applyEngine(getEngine(savedId));
})();

engineBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  const isOpen = engineList.classList.toggle('open');
  engineBtn.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('click', function () {
  engineList.classList.remove('open');
  engineBtn.setAttribute('aria-expanded', 'false');
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const query = qInput.value.trim();
  if (!query) return;
  window.location.href = currentEngine.url.replace('%s', encodeURIComponent(query));
});

/* ==================== 收藏夹数据 ==================== */
let bookmarks = loadBookmarks();
let folders = loadFolders();

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function loadBookmarks() {
  try {
    const raw = localStorage.getItem(STORAGE_BOOKMARKS);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];

    const now = Date.now();
    return arr.map(function (bm, idx) {
      return {
        id: bm.id || uid(),
        title: bm.title || '',
        url: bm.url || '',
        folder: bm.folder || '',
        createdAt: typeof bm.createdAt === 'number' ? bm.createdAt : (now - idx * 1000)
      };
    });
  } catch (e) { return []; }
}

function saveBookmarks() {
  try { localStorage.setItem(STORAGE_BOOKMARKS, JSON.stringify(bookmarks)); }
  catch (e) { console.error('保存收藏失败', e); }
}

function loadFolders() {
  try {
    const raw = localStorage.getItem(STORAGE_FOLDERS);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr.map(function (f) {
      return {
        id: f.id || uid(),
        name: f.name || '文件夹',
        createdAt: typeof f.createdAt === 'number' ? f.createdAt : Date.now()
      };
    });
  } catch (e) { return []; }
}

function saveFolders() {
  try { localStorage.setItem(STORAGE_FOLDERS, JSON.stringify(folders)); }
  catch (e) { console.error('保存文件夹失败', e); }
}

function loadExpandedFolders() {
  try {
    const raw = localStorage.getItem(STORAGE_EXPANDED_FOLDERS);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return new Set();
    return new Set(arr);
  } catch (e) { return new Set(); }
}

function saveExpandedFolders() {
  try {
    localStorage.setItem(STORAGE_EXPANDED_FOLDERS, JSON.stringify(Array.from(expandedFolders)));
  } catch (e) { /* 忽略 */ }
}

function normalizeUrl(input) {
  let url = (input || '').trim();
  if (!url) return '';
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(url)) url = 'https://' + url;
  return url;
}

function isValidUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch (e) { return false; }
}

function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch (e) { return url; }
}

/* ==================== 收藏夹排序 ==================== */
function setSort(mode) {
  if (VALID_SORTS.indexOf(mode) === -1) mode = DEFAULT_BOOKMARK_SORT;
  currentSort = mode;
  localStorage.setItem(STORAGE_BOOKMARK_SORT, mode);

  sortItems.forEach(function (li) {
    li.classList.toggle('active', li.dataset.sort === mode);
  });
}

function sortBookmarkList(list) {
  const arr = list.slice();

  switch (currentSort) {
    case 'time-asc':
      return arr.sort(function (a, b) {
        return (a.createdAt || 0) - (b.createdAt || 0);
      });
    case 'alpha-asc':
      return arr.sort(function (a, b) {
        return (a.title || '').localeCompare(b.title || '', 'zh-Hans-CN', { numeric: true });
      });
    case 'alpha-desc':
      return arr.sort(function (a, b) {
        return (b.title || '').localeCompare(a.title || '', 'zh-Hans-CN', { numeric: true });
      });
    case 'time-desc':
    default:
      return arr.sort(function (a, b) {
        return (b.createdAt || 0) - (a.createdAt || 0);
      });
  }
}

(function initSort() {
  const saved = localStorage.getItem(STORAGE_BOOKMARK_SORT);
  setSort(saved && VALID_SORTS.indexOf(saved) !== -1 ? saved : DEFAULT_BOOKMARK_SORT);
})();

sortBookmarkBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  const isOpen = sortMenu.classList.toggle('open');
  sortBookmarkBtn.setAttribute('aria-expanded', String(isOpen));
  cancelClose('bookmark');
});

sortItems.forEach(function (li) {
  li.addEventListener('click', function (e) {
    e.stopPropagation();
    setSort(li.dataset.sort);
    sortMenu.classList.remove('open');
    sortBookmarkBtn.setAttribute('aria-expanded', 'false');
    renderBookmarks();
  });
});

/* ==================== 拖拽逻辑 ==================== */
function startDrag(bookmarkId, el) {
  dragState.active = true;
  dragState.bookmarkId = bookmarkId;

  el.classList.add('dragging');
  document.documentElement.classList.add('dragging-active');
  cancelClose('bookmark');
}

function endDrag() {
  dragState.active = false;
  dragState.bookmarkId = null;

  document.documentElement.classList.remove('dragging-active');
  document.querySelectorAll('.bookmark-item.dragging').forEach(function (el) {
    el.classList.remove('dragging');
  });
  document.querySelectorAll('.folder-item.drop-target').forEach(function (el) {
    el.classList.remove('drop-target');
  });
  bookmarkList.classList.remove('unclassified-drop');
}

function moveBookmarkToFolder(bookmarkId, folderId) {
  const bm = bookmarks.find(function (b) { return b.id === bookmarkId; });
  if (!bm) return;

  if ((bm.folder || '') === (folderId || '')) return;

  bm.folder = folderId || '';
  saveBookmarks();

  if (folderId) {
    expandedFolders.add(folderId);
    saveExpandedFolders();
  }

  renderBookmarks();
}

function makeDraggable(li, bookmarkId) {
  li.draggable = true;

  li.addEventListener('dragstart', function (e) {
    if (e.target.closest('.bookmark-del')) {
      e.preventDefault();
      return;
    }

    startDrag(bookmarkId, li);

    try {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', bookmarkId);
    } catch (err) { /* 忽略 */ }
  });

  li.addEventListener('dragend', function () {
    endDrag();
  });

  const link = li.querySelector('.bookmark-link');
  if (link) {
    link.addEventListener('click', function (e) {
      if (dragState.active) {
        e.preventDefault();
      }
    });
  }
}

/* ==================== 收藏条目元素 ==================== */
function createBookmarkElement(bm, inFolder) {
  const li = document.createElement('li');
  li.className = 'bookmark-item' + (inFolder ? ' in-folder' : '');

  const a = document.createElement('a');
  a.className = 'bookmark-link';
  a.href = bm.url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.title = bm.title + '\n' + bm.url;
  a.draggable = false;

  const name = document.createElement('span');
  name.className = 'bookmark-name';
  name.textContent = bm.title;

  a.appendChild(name);

  const del = document.createElement('button');
  del.type = 'button';
  del.className = 'bookmark-del';
  del.title = '删除';
  del.setAttribute('aria-label', '删除 ' + bm.title);
  del.textContent = '×';
  del.draggable = false;
  del.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    removeBookmark(bm.id);
  });

  li.appendChild(a);
  li.appendChild(del);

  makeDraggable(li, bm.id);
  return li;
}

/* ==================== 文件夹元素 ==================== */
const SVG_NS = 'http://www.w3.org/2000/svg';

function makeSvg(className, viewBox) {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', viewBox || '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  if (className) svg.setAttribute('class', className);
  return svg;
}

function createFolderElement(folder) {
  const folderBookmarks = sortBookmarkList(
    bookmarks.filter(function (b) { return b.folder === folder.id; })
  );

  const isOpen = expandedFolders.has(folder.id);

  const div = document.createElement('div');
  div.className = 'folder-item' + (isOpen ? ' open' : '');
  div.dataset.folderId = folder.id;

  const header = document.createElement('div');
  header.className = 'folder-header';

  const chevron = makeSvg('folder-chevron');
  const chevronPath = document.createElementNS(SVG_NS, 'path');
  chevronPath.setAttribute('d', 'M9 6l6 6-6 6');
  chevron.appendChild(chevronPath);
  header.appendChild(chevron);

  const icon = makeSvg('folder-icon');
  const iconPath = document.createElementNS(SVG_NS, 'path');
  iconPath.setAttribute('d', 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z');
  icon.appendChild(iconPath);
  header.appendChild(icon);

  const name = document.createElement('span');
  name.className = 'folder-name';
  name.textContent = folder.name;
  header.appendChild(name);

  const count = document.createElement('span');
  count.className = 'folder-count';
  count.textContent = String(folderBookmarks.length);
  header.appendChild(count);

  const del = document.createElement('button');
  del.type = 'button';
  del.className = 'folder-del';
  del.title = '删除文件夹';
  del.setAttribute('aria-label', '删除文件夹 ' + folder.name);
  del.textContent = '×';
  del.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (confirm('删除文件夹「' + folder.name + '」？\n里面的收藏会移到未分类。')) {
      removeFolder(folder.id);
    }
  });
  header.appendChild(del);

  header.addEventListener('click', function () {
    toggleFolder(folder.id);
  });

  div.appendChild(header);

  const children = document.createElement('div');
  children.className = 'folder-children';

  if (!folderBookmarks.length) {
    const empty = document.createElement('div');
    empty.className = 'folder-empty';
    empty.textContent = '空文件夹（可拖入）';
    children.appendChild(empty);
  } else {
    const ul = document.createElement('ul');
    ul.className = 'bookmark-list';
    folderBookmarks.forEach(function (bm) {
      ul.appendChild(createBookmarkElement(bm, true));
    });
    children.appendChild(ul);
  }

  div.appendChild(children);

  div.addEventListener('dragover', function (e) {
    if (!dragState.active) return;

    const bm = bookmarks.find(function (b) { return b.id === dragState.bookmarkId; });
    if (bm && (bm.folder || '') === folder.id) return;

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    div.classList.add('drop-target');
  });

  div.addEventListener('dragleave', function (e) {
    if (div.contains(e.relatedTarget)) return;
    div.classList.remove('drop-target');
  });

  div.addEventListener('drop', function (e) {
    e.preventDefault();
    div.classList.remove('drop-target');

    if (!dragState.active || !dragState.bookmarkId) return;

    moveBookmarkToFolder(dragState.bookmarkId, folder.id);

    expandedFolders.add(folder.id);
    saveExpandedFolders();

    endDrag();
  });

  return div;
}

/* ==================== 文件夹操作 ==================== */
function toggleFolder(id) {
  if (expandedFolders.has(id)) {
    expandedFolders.delete(id);
  } else {
    expandedFolders.add(id);
  }
  saveExpandedFolders();

  const el = folderArea.querySelector('.folder-item[data-folder-id="' + CSS.escape(id) + '"]');
  if (el) {
    el.classList.toggle('open', expandedFolders.has(id));
  }
}

function addFolder(name) {
  if (!name) return;
  folders.push({
    id: uid(),
    name: name,
    createdAt: Date.now()
  });
  saveFolders();
  renderBookmarks();
  refreshFolderSelect();
}

function removeFolder(id) {
  let changed = false;
  bookmarks.forEach(function (b) {
    if (b.folder === id) {
      b.folder = '';
      changed = true;
    }
  });
  if (changed) saveBookmarks();

  folders = folders.filter(function (f) { return f.id !== id; });
  saveFolders();

  expandedFolders.delete(id);
  saveExpandedFolders();

  renderBookmarks();
  refreshFolderSelect();
}

/* ==================== 文件夹选择下拉框 ==================== */
function refreshFolderSelect() {
  const currentValue = bmFolder.value;

  bmFolder.innerHTML = '';
  const blank = document.createElement('option');
  blank.value = '';
  blank.textContent = '未分类';
  bmFolder.appendChild(blank);

  folders.forEach(function (f) {
    const opt = document.createElement('option');
    opt.value = f.id;
    opt.textContent = f.name;
    bmFolder.appendChild(opt);
  });

  bmFolder.value = currentValue;
  if (bmFolder.value !== currentValue) {
    bmFolder.value = '';
  }
}

/* ==================== 收藏夹渲染 ==================== */
function renderBookmarks() {
  folderArea.innerHTML = '';
  const sortedFolders = folders.slice().sort(function (a, b) {
    return (a.createdAt || 0) - (b.createdAt || 0);
  });

  sortedFolders.forEach(function (folder) {
    folderArea.appendChild(createFolderElement(folder));
  });

  bookmarkList.innerHTML = '';
  const unclassified = sortBookmarkList(
    bookmarks.filter(function (b) { return !b.folder; })
  );

  if (!folders.length && !bookmarks.length) {
    const li = document.createElement('li');
    li.className = 'bookmark-empty';
    li.textContent = '还没有收藏，点右上角 + 添加';
    bookmarkList.appendChild(li);
    return;
  }

  if (!unclassified.length && !folders.length) {
    const li = document.createElement('li');
    li.className = 'bookmark-empty';
    li.textContent = '还没有收藏，点右上角 + 添加';
    bookmarkList.appendChild(li);
    return;
  }

  if (!unclassified.length) {
    return;
  }

  unclassified.forEach(function (bm) {
    bookmarkList.appendChild(createBookmarkElement(bm, false));
  });
}

function addBookmark(title, url, folderId) {
  bookmarks.unshift({
    id: uid(),
    title: title,
    url: url,
    folder: folderId || '',
    createdAt: Date.now()
  });
  saveBookmarks();
  renderBookmarks();

  if (folderId) {
    expandedFolders.add(folderId);
    saveExpandedFolders();
    const el = folderArea.querySelector('.folder-item[data-folder-id="' + CSS.escape(folderId) + '"]');
    if (el) el.classList.add('open');
  }
}

function removeBookmark(id) {
  bookmarks = bookmarks.filter(function (b) { return b.id !== id; });
  saveBookmarks();
  renderBookmarks();
}

/* ==================== 未分类区域作为放置目标 ==================== */
function setupUnclassifiedDropZone() {
  function onDragOver(e) {
    if (!dragState.active) return;

    const bm = bookmarks.find(function (b) { return b.id === dragState.bookmarkId; });
    if (bm && !bm.folder) return;

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    bookmarkList.classList.add('unclassified-drop');
  }

  function onDragLeave(e) {
    if (bookmarkList.contains(e.relatedTarget)) return;
    bookmarkList.classList.remove('unclassified-drop');
  }

  function onDrop(e) {
    e.preventDefault();
    bookmarkList.classList.remove('unclassified-drop');

    if (!dragState.active || !dragState.bookmarkId) return;

    moveBookmarkToFolder(dragState.bookmarkId, '');
    endDrag();
  }

  bookmarkList.addEventListener('dragover', onDragOver);
  bookmarkList.addEventListener('dragleave', onDragLeave);
  bookmarkList.addEventListener('drop', onDrop);

  folderArea.addEventListener('dragover', function (e) {
    if (e.defaultPrevented) return;
    if (!dragState.active) return;

    const bm = bookmarks.find(function (b) { return b.id === dragState.bookmarkId; });
    if (bm && !bm.folder) return;

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    bookmarkList.classList.add('unclassified-drop');
  });
}

/* ==================== 面板通用工具 ==================== */
function getPanelEl(name) {
  if (name === 'bookmark') return bookmarkPanel;
  if (name === 'settings') return settingsPanel;
  if (name === 'wallpaper') return wallpaperPanel;
  return null;
}

function getHintEl(name) {
  if (name === 'bookmark') return edgeHintLeft;
  if (name === 'settings') return edgeHintRight;
  if (name === 'wallpaper') return edgeHintBottom;
  return null;
}

function openPanel(name) {
  const el = getPanelEl(name);
  const hint = getHintEl(name);
  if (!el || panelState[name].open) return;
  panelState[name].open = true;
  el.classList.add('open');
  if (name === 'wallpaper') {
    refreshEdgeHintBottom();
  } else if (hint) {
    hint.classList.add('hidden');
  }
}

function closePanel(name) {
  const el = getPanelEl(name);
  const hint = getHintEl(name);
  if (!el || !panelState[name].open) return;
  panelState[name].open = false;
  el.classList.remove('open');

  if (name === 'wallpaper') {
    refreshEdgeHintBottom();
  } else if (hint) {
    hint.classList.remove('hidden');
  }

  if (name === 'bookmark') {
    hideBookmarkForm();
    closeSortMenu();
  }
}

function cancelClose(name) {
  if (panelState[name].timer) {
    clearTimeout(panelState[name].timer);
    panelState[name].timer = null;
  }
}

function isBookmarkFormOpen() {
  return bookmarkForm.classList.contains('open');
}

function scheduleClose(name) {
  if (panelState[name].timer) return;
  if (name === 'bookmark' && isBookmarkFormOpen()) return;

  const delay = name === 'bookmark' ? CLOSE_DELAY
    : name === 'settings' ? SETTINGS_CLOSE_DELAY
    : WALLPAPER_CLOSE_DELAY;

  panelState[name].timer = setTimeout(function () {
    panelState[name].timer = null;
    if (name === 'bookmark' && isBookmarkFormOpen()) return;
    closePanel(name);
  }, delay);
}

function closeOthers(keep) {
  ['bookmark', 'settings', 'wallpaper'].forEach(function (n) {
    if (n !== keep) {
      cancelClose(n);
      closePanel(n);
    }
  });
}

function closeAllPanelsImmediate(force) {
  ['bookmark', 'settings', 'wallpaper'].forEach(function (name) {
    if (!force && name === 'bookmark' && isBookmarkFormOpen()) return;
    cancelClose(name);
    closePanel(name);
  });
}

settingsClose.addEventListener('click', function () {
  cancelClose('settings');
  closePanel('settings');
});

wallpaperClose.addEventListener('click', function () {
  cancelClose('wallpaper');
  closePanel('wallpaper');
});

/* ==================== 排序菜单开关 ==================== */
function closeSortMenu() {
  sortMenu.classList.remove('open');
  sortBookmarkBtn.setAttribute('aria-expanded', 'false');
}

/* ==================== 鼠标移动：边缘触发 ==================== */
function isInside(el, x, y) {
  const r = el.getBoundingClientRect();
  return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
}

document.addEventListener('mousemove', function (e) {
  if (dragState.active) return;

  const x = e.clientX;
  const y = e.clientY;
  const w = window.innerWidth;
  const h = window.innerHeight;

  const distLeft = x;
  const distRight = w - x;
  const distBottom = h - y;

  const effLeft = distLeft <= EDGE_ZONE ? distLeft : Infinity;
  const effRight = distRight <= EDGE_ZONE ? distRight : Infinity;
  const effBottom = (wallpaperEdgeEnabled && distBottom <= WALLPAPER_EDGE_ZONE)
    ? distBottom
    : Infinity;

  const minDist = Math.min(effLeft, effRight, effBottom);

  if (minDist !== Infinity) {
    cancelClose('bookmark');
    cancelClose('settings');
    cancelClose('wallpaper');

    if (minDist === effLeft) {
      closeOthers('bookmark');
      openPanel('bookmark');
    } else if (minDist === effRight) {
      closeOthers('settings');
      openPanel('settings');
    } else {
      closeOthers('wallpaper');
      openPanel('wallpaper');
    }
    return;
  }

  if (panelState.bookmark.open) {
    const insidePanel = isInside(bookmarkPanel, x, y);
    const insideSort = sortMenu.classList.contains('open') && isInside(sortMenu, x, y);
    if (isBookmarkFormOpen() || insidePanel || insideSort) {
      cancelClose('bookmark');
    } else {
      scheduleClose('bookmark');
    }
  }

  if (panelState.settings.open) {
    if (isInside(settingsPanel, x, y)) cancelClose('settings');
    else scheduleClose('settings');
  }

  if (panelState.wallpaper.open) {
    if (isInside(wallpaperPanel, x, y)) cancelClose('wallpaper');
    else scheduleClose('wallpaper');
  }
});

/* ==================== 判断光标是否在左右面板内 ==================== */
function isCursorInSidePanels(e) {
  if (panelState.bookmark.open && isInside(bookmarkPanel, e.clientX, e.clientY)) return true;
  if (panelState.settings.open && isInside(settingsPanel, e.clientX, e.clientY)) return true;
  if (sortMenu.classList.contains('open') && isInside(sortMenu, e.clientX, e.clientY)) return true;
  return false;
}

/* ==================== 滚轮控制壁纸面板 ==================== */
document.addEventListener('wheel', function (e) {
  if (isCursorInSidePanels(e)) return;

  if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;

  if (e.deltaY < 0) {
    cancelClose('wallpaper');
    closeOthers('wallpaper');
    openPanel('wallpaper');
  } else {
    if (panelState.wallpaper.open) {
      cancelClose('wallpaper');
      closePanel('wallpaper');
    }
  }
}, { passive: true });

/* ==================== 点击空白处关闭壁纸面板 ==================== */
document.addEventListener('mousedown', function (e) {
  if (!panelState.wallpaper.open) return;
  if (wallpaperPanel.contains(e.target)) return;

  cancelClose('wallpaper');
  closePanel('wallpaper');
});

/* ==================== 光标离开窗口 / 失焦时收起 ==================== */
document.addEventListener('mouseleave', function () {
  if (isBookmarkFormOpen()) return;
  closeAllPanelsImmediate();
});

window.addEventListener('blur', function () {
  if (isBookmarkFormOpen()) return;
  closeAllPanelsImmediate();
});

document.addEventListener('visibilitychange', function () {
  if (document.hidden) closeAllPanelsImmediate(true);
});

/* 表单自身的事件保护 */
bookmarkForm.addEventListener('mouseenter', function () {
  cancelClose('bookmark');
});

bookmarkForm.addEventListener('focusin', function () {
  cancelClose('bookmark');
});

bmTitle.addEventListener('focus', function () {
  cancelClose('bookmark');
});

bmUrl.addEventListener('focus', function () {
  cancelClose('bookmark');
});

/* 点击其他区域关闭排序菜单 */
document.addEventListener('click', function (e) {
  if (!sortWrap.contains(e.target)) {
    closeSortMenu();
  }
});

/* ==================== 收藏夹表单 ==================== */
function showBookmarkForm() {
  bookmarkForm.classList.add('open');
  bmTitle.value = '';
  bmUrl.value = '';
  bmUrl.style.borderColor = '';
  refreshFolderSelect();
  cancelClose('bookmark');
  openPanel('bookmark');
  setTimeout(function () { bmTitle.focus(); }, 30);
}

function hideBookmarkForm() {
  bookmarkForm.classList.remove('open');
}

addBookmarkBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  if (bookmarkForm.classList.contains('open')) hideBookmarkForm();
  else showBookmarkForm();
});

cancelBookmarkBtn.addEventListener('click', function () { hideBookmarkForm(); });

bookmarkForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const url = normalizeUrl(bmUrl.value);
  if (!isValidUrl(url)) {
    bmUrl.style.borderColor = 'rgba(239, 68, 68, 0.7)';
    bmUrl.focus();
    setTimeout(function () { bmUrl.style.borderColor = ''; }, 1200);
    return;
  }

  let title = bmTitle.value.trim();
  if (!title) title = hostOf(url);

  addBookmark(title, url, bmFolder.value);
  hideBookmarkForm();
});

/* ==================== 新建文件夹 ==================== */
addFolderBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  const name = prompt('新文件夹名称：', '');
  if (name === null) return;
  const trimmed = name.trim();
  if (!trimmed) return;
  addFolder(trimmed);
});

/* ==================== 收藏夹导入 / 导出 ==================== */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function exportBookmarks() {
  if (!bookmarks.length && !folders.length) {
    alert('还没有收藏可以导出');
    return;
  }

  const lines = [
    '<!DOCTYPE NETSCAPE-Bookmark-file-1>',
    '<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">',
    '<TITLE>Bookmarks</TITLE>',
    '<H1>Bookmarks</H1>',
    '<DL><p>'
  ];

  folders.forEach(function (folder) {
    const inner = sortBookmarkList(
      bookmarks.filter(function (b) { return b.folder === folder.id; })
    );
    lines.push('    <DT><H3>' + escapeHtml(folder.name) + '</H3>');
    lines.push('    <DL><p>');
    inner.forEach(function (bm) {
      lines.push(
        '        <DT><A HREF="' + escapeHtml(bm.url) + '">' + escapeHtml(bm.title) + '</A>'
      );
    });
    lines.push('    </DL><p>');
  });

  sortBookmarkList(bookmarks.filter(function (b) { return !b.folder; }))
    .forEach(function (bm) {
      lines.push(
        '    <DT><A HREF="' + escapeHtml(bm.url) + '">' + escapeHtml(bm.title) + '</A>'
      );
    });

  lines.push('</DL><p>');

  const html = lines.join('\n');
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const today = new Date().toISOString().slice(0, 10);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'bookmarks-' + today + '.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
}

function parseHtmlBookmarks(text) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  const anchors = doc.querySelectorAll('a[href]');
  const items = [];

  anchors.forEach(function (a) {
    const raw = a.getAttribute('href');
    if (!raw) return;
    if (raw.startsWith('javascript:') || raw.startsWith('place:')) return;

    const url = normalizeUrl(raw);
    if (!isValidUrl(url)) return;

    const title = (a.textContent || '').trim() || hostOf(url);
    items.push({ title: title, url: url });
  });

  return items;
}

function parseJsonBookmarks(text) {
  const data = JSON.parse(text);

  let arr = null;
  if (Array.isArray(data)) {
    arr = data;
  } else if (data && Array.isArray(data.bookmarks)) {
    arr = data.bookmarks;
  }

  if (!arr) throw new Error('JSON 结构无法识别');

  const items = [];
  arr.forEach(function (it) {
    if (!it || !it.url) return;
    const url = normalizeUrl(it.url);
    if (!isValidUrl(url)) return;
    const title = (it.title || '').trim() || hostOf(url);
    items.push({ title: title, url: url });
  });

  return items;
}

function mergeBookmarks(items) {
  const existing = new Set(bookmarks.map(function (b) { return b.url; }));
  let added = 0;
  let skipped = 0;

  const now = Date.now();

  items.forEach(function (it, i) {
    if (existing.has(it.url)) {
      skipped++;
      return;
    }
    bookmarks.push({
      id: uid(),
      title: it.title,
      url: it.url,
      folder: '',
      createdAt: now - i
    });
    existing.add(it.url);
    added++;
  });

  if (added > 0) {
    saveBookmarks();
    renderBookmarks();
  }

  return { added: added, skipped: skipped };
}

exportBookmarkBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  closeSortMenu();
  exportBookmarks();
});

importBookmarkBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  closeSortMenu();
  bookmarkImportInput.click();
});

bookmarkImportInput.addEventListener('change', function () {
  const file = bookmarkImportInput.files && bookmarkImportInput.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (ev) {
    const text = String(ev.target.result || '');
    const lower = file.name.toLowerCase();
    const trimmed = text.trim();

    let items = null;
    let parseError = null;

    try {
      if (lower.endsWith('.json') || trimmed.startsWith('[') || trimmed.startsWith('{"')) {
        items = parseJsonBookmarks(text);
      } else {
        items = parseHtmlBookmarks(text);
      }
    } catch (err) {
      parseError = err;
    }

    if ((!items || !items.length) && parseError) {
      try { items = parseHtmlBookmarks(text); } catch (e2) { /* 忽略 */ }
    }

    if (!items || !items.length) {
      alert('没有解析到可导入的收藏，请确认文件格式。');
      bookmarkImportInput.value = '';
      return;
    }

    const result = mergeBookmarks(items);
    alert(
      '导入完成\n' +
      '新增：' + result.added + ' 个\n' +
      '跳过（已存在）：' + result.skipped + ' 个'
    );

    bookmarkImportInput.value = '';
  };

  reader.onerror = function () {
    alert('读取文件失败');
    bookmarkImportInput.value = '';
  };

  reader.readAsText(file);
});

/* ==================== 快捷键 ==================== */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (dragState.active) {
      endDrag();
      return;
    }
  }

  if (e.key !== 'Escape') return;

  if (sortMenu.classList.contains('open')) {
    closeSortMenu();
    return;
  }

  if (panelState.wallpaper.open) {
    cancelClose('wallpaper');
    closePanel('wallpaper');
    return;
  }

  if (panelState.settings.open) {
    cancelClose('settings');
    closePanel('settings');
    return;
  }

  if (bookmarkForm.classList.contains('open')) {
    hideBookmarkForm();
    return;
  }

  if (panelState.bookmark.open) {
    cancelClose('bookmark');
    closePanel('bookmark');
  }
});

/* ==================== 初始化 ==================== */
expandedFolders = loadExpandedFolders();
refreshFolderSelect();
renderBookmarks();
setupUnclassifiedDropZone();
refreshEdgeHintBottom();
