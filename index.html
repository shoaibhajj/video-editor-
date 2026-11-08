<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ad Timeline Editor</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<script>
tailwind.config={theme:{extend:{fontFamily:{sans:['"IBM Plex Sans Arabic"','sans-serif'],mono:['"IBM Plex Mono"','monospace']},colors:{ink:{950:'#0A0C10',900:'#0F1117',850:'#13161D',800:'#181C24',750:'#1D222C',700:'#252B36',600:'#323946',500:'#4A5262',400:'#6B7384',300:'#9AA1B0',200:'#C9CED8'},brand:'#2563EB'}}}}
</script>
<style>
  body{font-family:"IBM Plex Sans Arabic",sans-serif;background:#0A0C10;color:#E6E8EE}
  .scroll-thin::-webkit-scrollbar{width:6px;height:6px}
  .scroll-thin::-webkit-scrollbar-thumb{background:#2A303C;border-radius:6px}
  .scroll-thin::-webkit-scrollbar-track{background:transparent}
  /* ruler */
  .tick{position:absolute;bottom:0;width:1px;background:#4A5262;transform-origin:bottom center;will-change:transform}
  .tick.major{height:11px;background:#7A8292}
  .tick.minor{height:5px}
  .tlabel{position:absolute;top:5px;font:500 10px "IBM Plex Mono",monospace;color:#7A8292;transform-origin:left bottom;white-space:nowrap;will-change:transform}
  /* clips */
  .clip{position:absolute;top:0;height:76px;border-radius:8px;display:flex;overflow:visible;cursor:grab;outline:none;transition:box-shadow .15s}
  .clip .body{position:relative;flex:1;min-width:0;overflow:hidden;background:var(--c);border-top:2px solid var(--c);border-bottom:2px solid var(--c)}
  .clip .hdr{position:absolute;top:0;left:0;right:0;height:20px;display:flex;align-items:center;gap:6px;padding:0 6px;background:var(--c);font-size:11px;font-weight:600;color:#fff;white-space:nowrap;z-index:2}
  .clip .hdr .dur{font:500 10px "IBM Plex Mono",monospace;opacity:.85;margin-inline-start:auto}
  .clip .strip{position:absolute;top:20px;bottom:0;left:0;right:0;display:flex;background:#0B0D12}
  .clip .strip img{height:100%;width:auto;flex:none;object-fit:cover;border-right:1px solid rgba(0,0,0,.55)}
  .clip .times{position:absolute;bottom:3px;left:6px;right:6px;display:flex;justify-content:space-between;font:500 9.5px "IBM Plex Mono",monospace;color:#fff;z-index:2}
  .clip .times span{background:rgba(10,12,16,.72);padding:1px 5px;border-radius:4px}
  .clip .h{flex:none;width:14px;height:100%;background:var(--h);display:flex;align-items:center;justify-content:center;cursor:ew-resize;border:0;padding:0;transition:background .15s,width .15s}
  .clip .h.l{border-radius:8px 0 0 8px}
  .clip .h.r{border-radius:0 8px 8px 0}
  .clip .h i{display:block;width:4px;height:18px;border-left:1.5px solid rgba(255,255,255,.75);border-right:1.5px solid rgba(255,255,255,.75)}
  .clip .h:hover,.clip .h:focus-visible{background:var(--hs)}
  .clip.sel{box-shadow:0 0 0 2px #fff,0 0 0 5px rgba(37,99,235,.45),0 8px 24px rgba(0,0,0,.5);z-index:5}
  .clip.sel .h{background:var(--hs)}
  .clip.sel .h i{border-color:rgba(10,12,16,.75)}
  .clip:focus-visible{box-shadow:0 0 0 2px #93B8FF}
  .clip.dim{opacity:.32}
  .clip.textclip .body{background:linear-gradient(180deg,var(--c),#5B21B6)}
  .clip.textclip .txt{position:absolute;top:22px;left:8px;right:8px;bottom:6px;font-size:12px;line-height:1.35;color:#F3EEFF;overflow:hidden;direction:rtl;text-align:right}
  .clip.tiny .body{border-radius:6px}
  .t-video{--c:#2563EB;--h:#4B80EE;--hs:#A9C5FF}
  .t-image{--c:#D97706;--h:#EE9B2A;--hs:#FCD38A}
  .t-text{--c:#7C3AED;--h:#9567F2;--hs:#CDB6FF}
  .t-audio{--c:#0D9488;--h:#23AFA2;--hs:#99F0E4}
  .clip.audioclip .strip{background:#072A27;padding:7px 3px 5px}
  .clip .flag{position:absolute;top:2px;left:16px;height:16px;line-height:16px;padding:0 6px;border-radius:4px;background:var(--c);color:#fff;font-size:10.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:4;pointer-events:none;box-shadow:0 1px 5px rgba(0,0,0,.45)}
  .clip.tiny .flag{left:2px}
  .mon-layer{position:absolute;inset:0;display:none;align-items:center;justify-content:center}
  .mon-layer.on{display:flex}
  #mon-screen{container-type:inline-size}
  .mon-bigtext{font-size:clamp(15px,6.2cqw,60px);line-height:1.35}
  .mark{position:absolute;top:16px;height:44px;border-radius:3px;background:var(--c)}
  .bubble{position:absolute;top:-2px;transform:translateX(-50%);min-width:22px;height:22px;padding:0 6px;border-radius:11px;background:#F1F3F7;color:#0F1117;font:600 11px "IBM Plex Mono",monospace;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.5);z-index:3}
  .ghost{position:absolute;top:0;height:76px;border-radius:8px;pointer-events:none;z-index:8;opacity:.85;box-shadow:0 0 0 2px #fff,0 14px 30px rgba(0,0,0,.55)}
  .ghost.bad{box-shadow:0 0 0 2px #EF4444,0 0 0 6px rgba(239,68,68,.25),0 14px 30px rgba(0,0,0,.55)}
  .ghost .shade{position:absolute;inset:0;border-radius:8px}
  .ghost.bad .shade{background:repeating-linear-gradient(135deg,rgba(239,68,68,.28) 0 6px,rgba(239,68,68,.1) 6px 12px)}
  .fly{position:fixed;z-index:60;border-radius:8px;pointer-events:none;transition:all .55s cubic-bezier(.2,.8,.2,1);box-shadow:0 10px 30px rgba(0,0,0,.6)}
  input[type=range].zoom{-webkit-appearance:none;appearance:none;height:4px;border-radius:4px;background:#2A303C;outline:none}
  input[type=range].zoom::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:#fff;border:3px solid #2563EB;cursor:pointer}
  input[type=range].zoom:focus-visible{box-shadow:0 0 0 3px rgba(37,99,235,.5)}
</style>
</head>
<body class="antialiased">
<div id="app" class="w-full h-[900px] flex flex-col overflow-hidden bg-ink-950">

  <!-- HEADER -->
  <header id="header" class="h-[52px] flex-none flex items-center gap-4 px-5 border-b border-ink-700 bg-ink-900">
    <div class="flex items-center gap-3 min-w-0">
      <div class="w-8 h-8 rounded-lg bg-brand/15 text-[#7AA5FF] flex items-center justify-center"><i class="fa-solid fa-film text-sm"></i></div>
      <div class="min-w-0">
        <h1 class="text-[15px] font-semibold leading-tight truncate">محرر الجدول الإعلاني</h1>
        <p class="text-[11px] text-ink-400 leading-tight truncate">أسطول النقل الحضري · 48 مركبة</p>
      </div>
    </div>
    <button id="day-picker" class="hidden sm:flex items-center gap-2 h-8 px-3 rounded-md bg-ink-800 border border-ink-700 text-[13px] hover:border-ink-500" aria-label="اختيار اليوم: الثلاثاء 14 مايو 2025">
      <i class="fa-regular fa-calendar text-ink-300 text-xs"></i><span>الثلاثاء، 14 مايو 2025</span><i class="fa-solid fa-chevron-down text-[10px] text-ink-400"></i>
    </button>
    <div class="flex-1"></div>
    <div id="history-controls" class="flex items-center gap-1">
      <button id="btn-undo" class="w-8 h-8 rounded-md text-ink-300 hover:bg-ink-800 hover:text-white disabled:opacity-35" aria-label="تراجع (Ctrl+Z)" title="تراجع"><i class="fa-solid fa-rotate-left text-sm"></i></button>
      <button id="btn-redo" class="w-8 h-8 rounded-md text-ink-300 hover:bg-ink-800 hover:text-white disabled:opacity-35" aria-label="إعادة (Ctrl+Shift+Z)" title="إعادة"><i class="fa-solid fa-rotate-right text-sm"></i></button>
    </div>
    <div class="w-px h-6 bg-ink-700"></div>
    <span id="save-state" class="hidden md:inline text-[11px] text-ink-400"><i class="fa-solid fa-circle-check text-emerald-400 ml-1"></i>حُفظت التغييرات</span>
    <button id="btn-continue" class="h-9 px-4 rounded-md bg-brand hover:bg-[#1D4FD8] text-white text-[13px] font-semibold flex items-center gap-2" aria-label="متابعة إلى الجدولة">متابعة إلى الجدولة<i class="fa-solid fa-arrow-left text-xs"></i></button>
  </header>

  <!-- LIBRARY -->
  <section id="library" class="h-[440px] flex-none p-3 pb-2 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-[1.2fr_.95fr_.95fr_.95fr_1.65fr] gap-3" aria-label="مكتبة الوسائط والمعاينة">
    <div id="lib-videos" class="min-h-0 flex flex-col rounded-lg bg-ink-900 border border-ink-700">
      <div class="h-11 flex-none flex items-center gap-2 px-3 border-b border-ink-700">
        <span class="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
        <h2 class="text-[13px] font-semibold">الفيديوهات</h2>
        <span id="count-videos" class="text-[11px] font-mono px-1.5 rounded bg-ink-750 text-ink-300">0</span>
        <div class="flex-1"></div>
        <button class="h-7 px-2 rounded-md text-[12px] text-ink-300 hover:bg-ink-800" aria-label="رفع فيديو"><i class="fa-solid fa-arrow-up-from-bracket ml-1 text-[11px]"></i>رفع</button>
      </div>
      <div id="grid-videos" class="flex-1 min-h-0 overflow-y-auto scroll-thin p-3 grid grid-cols-2 gap-3 content-start" role="list"></div>
    </div>
    <div id="lib-images" class="min-h-0 flex flex-col rounded-lg bg-ink-900 border border-ink-700">
      <div class="h-11 flex-none flex items-center gap-2 px-3 border-b border-ink-700">
        <span class="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
        <h2 class="text-[13px] font-semibold">الصور</h2>
        <span id="count-images" class="text-[11px] font-mono px-1.5 rounded bg-ink-750 text-ink-300">0</span>
        <div class="flex-1"></div>
        <button class="h-7 px-2 rounded-md text-[12px] text-ink-300 hover:bg-ink-800" aria-label="رفع صورة"><i class="fa-solid fa-arrow-up-from-bracket ml-1 text-[11px]"></i>رفع</button>
      </div>
      <div id="grid-images" class="flex-1 min-h-0 overflow-y-auto scroll-thin p-3 grid grid-cols-2 gap-3 content-start" role="list"></div>
    </div>
    <div id="lib-texts" class="min-h-0 flex flex-col rounded-lg bg-ink-900 border border-ink-700">
      <div class="h-11 flex-none flex items-center gap-2 px-3 border-b border-ink-700">
        <span class="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
        <h2 class="text-[13px] font-semibold">النصوص</h2>
        <span id="count-texts" class="text-[11px] font-mono px-1.5 rounded bg-ink-750 text-ink-300">0</span>
        <div class="flex-1"></div>
        <button class="h-7 px-2 rounded-md text-[12px] text-ink-300 hover:bg-ink-800" aria-label="نص جديد"><i class="fa-solid fa-plus ml-1 text-[11px]"></i>نص جديد</button>
      </div>
      <div id="grid-texts" class="flex-1 min-h-0 overflow-y-auto scroll-thin p-3 grid grid-cols-2 gap-3 content-start" role="list"></div>
    </div>
    <div id="lib-audio" class="min-h-0 flex flex-col rounded-lg bg-ink-900 border border-ink-700">
      <div class="h-11 flex-none flex items-center gap-2 px-3 border-b border-ink-700">
        <span class="w-2 h-2 rounded-full bg-[#14B8A6]"></span>
        <h2 class="text-[13px] font-semibold">الصوت</h2>
        <span id="count-audio" class="text-[11px] font-mono px-1.5 rounded bg-ink-750 text-ink-300">0</span>
        <div class="flex-1"></div>
        <button class="h-7 px-2 rounded-md text-[12px] text-ink-300 hover:bg-ink-800" aria-label="رفع ملف صوتي"><i class="fa-solid fa-arrow-up-from-bracket ml-1 text-[11px]"></i>رفع</button>
      </div>
      <div id="grid-audio" class="flex-1 min-h-0 overflow-y-auto scroll-thin p-3 flex flex-col gap-2" role="list"></div>
    </div>

    <!-- PREVIEW MONITOR -->
    <div id="monitor" class="min-h-0 flex flex-col rounded-lg bg-ink-900 border border-ink-700 overflow-hidden" aria-label="شاشة المعاينة">
      <div class="h-11 flex-none flex items-center gap-2 px-3 border-b border-ink-700">
        <i class="fa-solid fa-display text-[12px] text-ink-300"></i>
        <h2 class="text-[13px] font-semibold">المعاينة</h2>
        <span id="mon-status" class="flex items-center gap-1.5 text-[11px] px-2 h-5 rounded bg-ink-750 text-ink-300"><span id="mon-dot" class="w-1.5 h-1.5 rounded-full bg-ink-400"></span><span id="mon-status-t">متوقف</span></span>
        <div class="flex-1"></div>
        <span id="mon-clock" class="font-mono text-[11px] text-ink-300" dir="ltr">12:02:14</span>
        <button id="btn-mon-expand" class="w-7 h-7 rounded-md text-ink-300 hover:bg-ink-800 hover:text-white" aria-label="توسيع المعاينة" title="توسيع المعاينة"><i class="fa-solid fa-up-right-and-down-left-from-center text-[11px]"></i></button>
      </div>
      <div id="mon-slot" class="relative flex-1 min-h-0 m-3 mb-2 rounded-md overflow-hidden bg-black">
        <div id="mon-screen" class="absolute inset-0 bg-black">
          <div id="mon-l-video" class="mon-layer"><video id="mon-video" class="w-full h-full object-contain" muted playsinline loop></video></div>
          <div id="mon-l-image" class="mon-layer"><img id="mon-img" class="max-w-full max-h-full object-contain" alt=""></div>
          <div id="mon-l-text" class="mon-layer bg-gradient-to-br from-[#2E1A5E] via-[#22164A] to-[#120D26] p-[6%]"><p id="mon-text" class="mon-bigtext font-semibold text-center text-[#F3EEFF]" dir="rtl"></p></div>
          <div id="mon-l-audio" class="mon-layer flex-col gap-3 bg-gradient-to-b from-[#06231F] to-[#030F0D]">
            <div class="w-11 h-11 rounded-full bg-[#0D9488]/20 text-[#5EEAD4] flex items-center justify-center"><i class="fa-solid fa-music"></i></div>
            <div class="relative w-[84%] h-[30%]"><div id="mon-wave" class="absolute inset-0 opacity-35"></div><div id="mon-wave-on" class="absolute inset-y-0 left-0 overflow-hidden"><div id="mon-wave2" class="h-full"></div></div></div>
            <p id="mon-audio-t" class="text-[13px] font-semibold text-[#CCFBF1] px-4 text-center truncate max-w-full"></p>
          </div>
          <div id="mon-l-gap" class="mon-layer flex-col gap-2 bg-[#07080B]">
            <div class="w-11 h-11 rounded-full border border-dashed border-ink-500 text-ink-400 flex items-center justify-center"><i class="fa-regular fa-moon"></i></div>
            <p class="text-[15px] font-semibold text-ink-200">لا يوجد إعلان</p>
            <p id="mon-gap-next" class="text-[12px] text-ink-400"></p>
          </div>
          <span id="mon-speed-badge" class="hidden absolute top-2 left-2 px-1.5 h-5 rounded bg-black/70 text-[10px] font-mono text-white items-center gap-1"></span>
          <span id="mon-skip-badge" class="hidden absolute top-2 right-2 px-1.5 h-5 rounded bg-black/70 text-[10px] text-white items-center gap-1"><i class="fa-solid fa-forward-fast text-[9px]"></i>تخطي الفراغات</span>
        </div>
      </div>
      <div class="flex-none px-3 pb-2.5">
        <div class="flex items-center gap-2 min-w-0">
          <span id="mon-type" class="flex-none text-[10.5px] px-1.5 h-5 rounded flex items-center bg-ink-750 text-ink-300">—</span>
          <p id="mon-title" class="flex-1 min-w-0 text-[12.5px] font-semibold truncate">—</p>
          <span id="mon-local" class="flex-none font-mono text-[10.5px] text-ink-400" dir="ltr"></span>
        </div>
        <div class="mt-2 h-1 rounded-full bg-ink-750 overflow-hidden" dir="ltr"><div id="mon-prog" class="h-full w-0 rounded-full bg-white/80"></div></div>
        <p class="mt-2 text-[10.5px] text-ink-400 leading-snug"><i class="fa-solid fa-circle-info ml-1 text-ink-500"></i>السرعة تؤثر على هذه المعاينة فقط، ولا تغيّر ما يُعرض على شاشات المركبات.</p>
      </div>
    </div>
  </section>

  <!-- TIMELINE -->
  <section id="timeline" class="flex-1 min-h-0 mx-3 mb-3 rounded-lg bg-ink-900 border border-ink-700 flex flex-col overflow-hidden" aria-label="الخط الزمني">
    <div id="tl-toolbar" class="relative z-30 h-12 flex-none flex items-center gap-2 px-3 border-b border-ink-700" role="toolbar" aria-label="أدوات الخط الزمني">
      <div id="transport" class="flex items-center gap-1" dir="ltr" role="group" aria-label="التشغيل">
        <button id="btn-prev" class="w-8 h-8 rounded-md text-ink-200 hover:bg-ink-800 hover:text-white" aria-label="الإعلان السابق" title="الإعلان السابق"><i class="fa-solid fa-backward-step text-[13px]"></i></button>
        <button id="btn-play" class="w-10 h-10 rounded-full bg-white text-ink-950 hover:bg-[#E3E8F2] flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900" aria-label="تشغيل (مسافة)" aria-pressed="false" title="تشغيل / إيقاف (مسافة)"><i id="play-ic" class="fa-solid fa-play text-[14px] translate-x-[1px]"></i></button>
        <button id="btn-next" class="w-8 h-8 rounded-md text-ink-200 hover:bg-ink-800 hover:text-white" aria-label="الإعلان التالي" title="الإعلان التالي"><i class="fa-solid fa-forward-step text-[13px]"></i></button>
        <div class="flex items-baseline gap-1.5 font-mono ml-2" aria-label="الوقت الحالي">
          <span id="timecode" class="text-[17px] font-semibold text-white tracking-wide">12:02:14</span>
          <span class="text-[12px] text-ink-400">/ 24:00:00</span>
        </div>
      </div>
      <div id="speed-wrap" class="relative mr-1">
        <button id="btn-speed" class="h-8 pl-2 pr-2.5 rounded-md bg-ink-800 border border-ink-700 hover:border-ink-500 text-[12px] flex items-center gap-1.5" aria-haspopup="menu" aria-expanded="false" aria-controls="speed-menu" aria-label="سرعة المعاينة: 1x"><i class="fa-solid fa-gauge-high text-[11px] text-ink-300"></i><span id="speed-val" class="font-mono font-semibold" dir="ltr">1x</span><i class="fa-solid fa-chevron-down text-[9px] text-ink-400"></i></button>
        <div id="speed-menu" class="hidden absolute top-[calc(100%+6px)] right-0 w-[232px] rounded-lg bg-ink-800 border border-ink-600 shadow-[0_18px_40px_rgba(0,0,0,.6)] p-1.5" role="menu" aria-label="سرعة المعاينة">
          <p class="px-2 pt-1 pb-1.5 text-[11px] text-ink-400">سرعة المعاينة</p>
          <div id="speed-opts" class="grid grid-cols-4 gap-1"></div>
          <p class="mt-2 mx-1 mb-1 px-2 py-1.5 rounded-md bg-ink-900 text-[10.5px] leading-snug text-ink-300"><i class="fa-solid fa-circle-info ml-1 text-[#7AA5FF]"></i>تؤثر السرعة على هذه المعاينة فقط، ولا تغيّر ما يُعرض على شاشات المركبات.</p>
        </div>
      </div>
      <button id="btn-skip" role="switch" aria-checked="false" class="group h-8 px-2 rounded-md hover:bg-ink-800 flex items-center gap-2 text-[12px] text-ink-200" aria-label="تخطي الفراغات أثناء المعاينة">
        <span class="relative w-7 h-4 rounded-full bg-ink-600 group-aria-checked:bg-brand transition" dir="ltr"><span class="absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition group-aria-checked:translate-x-3"></span></span>تخطي الفراغات
      </button>
      <div class="w-px h-6 bg-ink-700 mx-1"></div>
      <button id="btn-split" class="h-8 px-2.5 rounded-md text-[12px] text-ink-200 hover:bg-ink-800 flex items-center gap-1.5 disabled:opacity-35" aria-label="تقسيم المقطع عند المؤشر (S)"><i class="fa-solid fa-scissors text-[12px]"></i>تقسيم</button>
      <button id="btn-delete" class="h-8 px-2.5 rounded-md text-[12px] text-ink-200 hover:bg-ink-800 flex items-center gap-1.5 disabled:opacity-35" aria-label="حذف المقطع المحدد (Delete)"><i class="fa-regular fa-trash-can text-[12px]"></i>حذف</button>
      <div class="flex-1"></div>
      <span id="span-label" class="hidden xl:inline text-[11px] text-ink-400 ml-2">المدى المعروض: <b id="span-value" class="font-medium text-ink-200">ساعة</b></span>
      <div class="flex items-center gap-2 h-8 px-2 rounded-md bg-ink-850 border border-ink-700" dir="ltr">
        <button id="btn-zoom-out" class="w-6 h-6 rounded text-ink-300 hover:text-white" aria-label="تصغير"><i class="fa-solid fa-magnifying-glass-minus text-[12px]"></i></button>
        <input id="zoom-slider" type="range" min="0" max="1000" value="500" class="zoom w-32 lg:w-40" aria-label="مستوى التكبير">
        <button id="btn-zoom-in" class="w-6 h-6 rounded text-ink-300 hover:text-white" aria-label="تكبير"><i class="fa-solid fa-magnifying-glass-plus text-[12px]"></i></button>
      </div>
      <button id="btn-fit" class="h-8 px-3 rounded-md bg-ink-800 border border-ink-700 hover:border-ink-500 text-[12px] font-medium flex items-center gap-1.5" aria-label="عرض اليوم كاملاً"><i class="fa-solid fa-expand text-[11px]"></i>عرض اليوم</button>
    </div>

    <!-- LTR timeline viewport -->
    <div id="tl-wrap" class="flex-1 min-h-0 flex flex-col" dir="ltr">
      <div id="tl-viewport" class="relative flex-1 min-h-0 select-none overflow-hidden">
        <div id="ruler" class="relative h-10 border-b border-ink-700 bg-ink-850 cursor-pointer overflow-hidden" aria-label="المسطرة الزمنية من 00:00 إلى 24:00" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="86400" aria-valuenow="43334">
          <div id="ticks" class="absolute inset-0"></div>
        </div>
        <div id="track-area" class="relative pt-10 px-0">
          <div id="lane" class="relative h-[76px] bg-ink-850/70 border-y border-ink-750">
            <div id="clips" class="absolute inset-0" role="list" aria-label="المسار الإعلاني"></div>
            <div id="empty-hint" class="hidden absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="flex items-center gap-3 px-4 h-10 rounded-lg border border-dashed border-ink-500 bg-ink-900/80 text-[13px] text-ink-200" dir="rtl">
                <i class="fa-solid fa-hand-pointer text-[#7AA5FF]"></i>اضغط على أي إعلان لإضافته إلى الجدول
              </div>
            </div>
          </div>
          <div id="track-meta" class="mt-3 px-4 flex items-center gap-4 text-[11px] text-ink-400" dir="rtl">
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-[#2563EB]"></span>فيديو</span>
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-[#D97706]"></span>صورة</span>
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-[#7C3AED]"></span>نص</span>
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-sm bg-[#0D9488]"></span>صوت</span>
            <span class="flex-1"></span>
            <span><kbd class="font-mono px-1 rounded bg-ink-800 border border-ink-700">Ctrl</kbd> + عجلة الفأرة للتكبير حول المؤشر · <kbd class="font-mono px-1 rounded bg-ink-800 border border-ink-700">Shift</kbd> + عجلة للتمرير</span>
          </div>
          <div id="drop-msg" class="hidden absolute z-20 px-3 h-8 rounded-md bg-[#2A1215] border border-red-500/60 text-red-200 text-[12px] items-center gap-2 whitespace-nowrap shadow-lg" dir="rtl" role="alert"><i class="fa-solid fa-ban text-red-400"></i>لا يمكن وضع الإعلان فوق إعلان آخر</div>
          <div id="live-badge" class="hidden absolute z-20 px-2 h-6 rounded-md bg-white text-ink-950 text-[11px] font-mono font-semibold items-center gap-1.5 whitespace-nowrap shadow-lg"></div>
        </div>
        <!-- hover line + badge -->
        <div id="hover-line" class="hidden absolute top-10 bottom-0 w-px bg-white/25 pointer-events-none"></div>
        <div id="hover-badge" class="hidden absolute top-[3px] -translate-x-1/2 px-1.5 h-[18px] rounded bg-brand text-white text-[10px] font-mono font-semibold items-center pointer-events-none z-30 shadow"></div>
        <!-- playhead -->
        <div id="playhead" class="absolute top-0 bottom-0 w-0 z-20 pointer-events-none">
          <div class="absolute top-0 bottom-0 -left-px w-[2px] bg-white shadow-[0_0_6px_rgba(255,255,255,.4)]"></div>
          <button id="playhead-handle" class="pointer-events-auto absolute top-1 -left-[7px] w-[14px] h-[18px] bg-white rounded-t-[4px] cursor-ew-resize [clip-path:polygon(0_0,100%_0,100%_65%,50%_100%,0_65%)]" aria-label="مؤشر التشغيل، اسحب لتغيير الوقت"></button>
        </div>
      </div>
      <!-- minimap -->
      <div id="minimap" class="h-8 flex-none relative mx-3 mb-2 mt-1 rounded-md bg-ink-850 border border-ink-750 overflow-hidden cursor-pointer" aria-label="نظرة عامة على اليوم">
        <div id="mini-marks" class="absolute inset-0"></div>
        <div id="mini-win" class="absolute top-0 bottom-0 rounded-md border-2 border-white/80 bg-white/5"></div>
      </div>
    </div>
  </section>
</div>

<!-- HOVER PREVIEW -->
<div id="preview" class="hidden fixed z-50 w-[300px] rounded-xl bg-ink-800 border border-ink-600 shadow-[0_24px_60px_rgba(0,0,0,.65)] overflow-hidden cursor-zoom-in" role="dialog" aria-label="معاينة سريعة">
  <div id="pv-media" class="relative bg-black flex items-center justify-center">
    <video id="pv-video" class="hidden w-full h-full object-contain" muted loop playsinline></video>
    <img id="pv-img" class="hidden w-full h-full object-contain" alt="">
    <div id="pv-text" class="hidden w-full h-full p-5 flex items-center justify-center bg-gradient-to-br from-[#2E1A5E] to-[#140E2B]"><p id="pv-text-p" class="text-[17px] leading-relaxed font-semibold text-center text-[#F3EEFF]" dir="rtl"></p></div>
    <div id="pv-audio" class="hidden w-full h-full flex-col items-center justify-center gap-3 px-5 bg-gradient-to-b from-[#06231F] to-[#030F0D]">
      <div class="relative w-full h-14" dir="ltr"><div id="pv-wave" class="absolute inset-0 opacity-40"></div><div id="pv-wave-on" class="absolute inset-y-0 left-0 w-0 overflow-hidden"><div id="pv-wave2" class="h-full"></div></div></div>
      <button id="pv-audio-btn" class="w-11 h-11 rounded-full bg-[#14B8A6] hover:bg-[#2DD4BF] text-[#042F2B] flex items-center justify-center shadow-lg" aria-label="تشغيل المقطع الصوتي"><i id="pv-audio-ic" class="fa-solid fa-play translate-x-[1px]"></i></button>
      <audio id="pv-audio-el" preload="none" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
    </div>
    <span id="pv-dur" class="absolute bottom-2 left-2 px-1.5 rounded bg-black/70 text-[10px] font-mono text-white" dir="ltr"></span>
    <span class="absolute top-2 left-2 w-7 h-7 rounded-full bg-black/55 text-white flex items-center justify-center"><i class="fa-solid fa-up-right-and-down-left-from-center text-[10px]"></i></span>
  </div>
  <div class="px-3 py-2.5">
    <p id="pv-title" class="text-[13px] font-semibold truncate"></p>
    <p class="text-[11px] text-ink-400 mt-0.5 flex items-center gap-1.5"><span id="pv-meta"></span><span class="text-ink-500">·</span>انقر للعرض الكامل</p>
  </div>
</div>

<!-- FULL VIEW -->
<div id="fullview" class="hidden fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm items-center justify-center p-8" role="dialog" aria-modal="true" aria-labelledby="fv-title">
  <div class="w-full max-w-5xl rounded-xl bg-ink-900 border border-ink-700 shadow-2xl overflow-hidden">
    <div class="h-12 flex items-center gap-3 px-4 border-b border-ink-700">
      <span id="fv-type" class="text-[11px] px-2 h-6 rounded-md bg-brand/15 text-[#93B8FF] flex items-center">فيديو</span>
      <h3 id="fv-title" class="text-[14px] font-semibold truncate"></h3>
      <span id="fv-meta" class="text-[12px] text-ink-400 font-mono" dir="ltr"></span>
      <div class="flex-1"></div>
      <button id="fv-add" class="h-8 px-3 rounded-md bg-ink-800 border border-ink-700 hover:border-ink-500 text-[12px]" aria-label="إضافة إلى الجدول"><i class="fa-solid fa-plus ml-1 text-[11px]"></i>إضافة إلى الجدول</button>
      <button id="fv-close" class="w-8 h-8 rounded-md bg-ink-800 hover:bg-ink-700 text-ink-200" aria-label="إغلاق العرض الكامل (Esc)"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="bg-black flex items-center justify-center h-[540px]">
      <video id="fv-video" class="hidden max-h-full max-w-full" controls playsinline></video>
      <img id="fv-img" class="hidden max-h-full max-w-full object-contain" alt="">
      <div id="fv-text" class="hidden w-full h-full items-center justify-center p-16 bg-gradient-to-br from-[#2E1A5E] to-[#120D26]"><p id="fv-text-p" class="text-[44px] leading-snug font-semibold text-center text-[#F3EEFF]" dir="rtl"></p></div>
      <div id="fv-audio" class="hidden w-full h-full flex-col items-center justify-center gap-6 px-16 bg-gradient-to-b from-[#06231F] to-[#030F0D]">
        <div id="fv-wave" class="w-full h-40" dir="ltr"></div>
        <audio id="fv-audio-el" class="w-[520px] max-w-full" controls preload="none" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
      </div>
    </div>
  </div>
</div>

<!-- LARGE MONITOR -->
<div id="mon-full" class="hidden fixed inset-0 z-[72] bg-black/80 backdrop-blur-sm items-center justify-center p-8" role="dialog" aria-modal="true" aria-label="المعاينة الموسعة">
  <div class="w-full max-w-6xl rounded-xl bg-ink-900 border border-ink-700 shadow-2xl overflow-hidden">
    <div class="h-14 flex items-center gap-3 px-4 border-b border-ink-700">
      <button id="mf-play" class="w-10 h-10 rounded-full bg-white text-ink-950 flex items-center justify-center" aria-label="تشغيل (مسافة)"><i id="mf-play-ic" class="fa-solid fa-play translate-x-[1px]"></i></button>
      <span id="mf-time" class="font-mono text-[16px] font-semibold" dir="ltr">12:02:14</span>
      <span id="mf-speed" class="font-mono text-[11px] px-1.5 h-5 rounded bg-ink-750 text-ink-200 flex items-center" dir="ltr">1x</span>
      <span id="mf-type" class="text-[11px] px-2 h-6 rounded-md bg-ink-750 text-ink-200 flex items-center">—</span>
      <h3 id="mf-title" class="text-[14px] font-semibold truncate">—</h3>
      <div class="flex-1"></div>
      <span class="hidden md:inline text-[11px] text-ink-400">السرعة تؤثر على هذه المعاينة فقط</span>
      <button id="mf-close" class="w-9 h-9 rounded-md bg-ink-800 hover:bg-ink-700 text-ink-200" aria-label="إغلاق المعاينة الموسعة (Esc)"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div id="mf-slot" class="relative h-[600px] bg-black"></div>
  </div>
</div>

<!-- DESIGN STATES SWITCHER -->
<div id="states" class="fixed bottom-[62px] left-7 z-[80] flex items-center gap-1 p-1 rounded-lg bg-ink-800/95 border border-ink-600 shadow-xl backdrop-blur" role="tablist" aria-label="حالات التصميم">
  <span class="px-2 text-[11px] text-ink-400 whitespace-nowrap"><i class="fa-solid fa-layer-group ml-1"></i>الحالة</span>
</div>

<script>
const PH='https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png';
const G='https://storage.googleapis.com/uxpilot-auth.appspot.com/';
const IMG={v1:G+'gen_2d8fe5344f_d47d2637b54aa754.png',v2:G+'gen_7455b32e5e_0e6226a97678f207.png',v3:G+'gen_3fab049eb5_6540bbaca48e6964.png',v4:G+'gen_51c1128315_7119a345f8c37297.png',v5:G+'gen_5c7495d170_2bb157847c1cba63.png',v6:G+'gen_025dc16e53_5d90c62966b085be.png',i1:G+'gen_8fe715be36_fcfaf88a44577c2b.png',i2:G+'gen_71aec3d703_41b81692f525a4c8.png',i3:G+'gen_1888152e6c_c30fd512c23276e4.png',i4:G+'gen_8f30c1fa03_b63633efe716db43.png'};
const GV='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/';
const LIB={
  videos:[
    {id:'v1',title:'عرض الصيف – مشروبات باردة',dur:30,src:GV+'ForBiggerBlazes.mp4'},
    {id:'v2',title:'افتتاح فرع مطعم الريف',dur:45,src:GV+'ForBiggerEscapes.mp4'},
    {id:'v3',title:'تطبيق توصيل سريع',dur:20,src:GV+'ForBiggerFun.mp4'},
    {id:'v4',title:'معرض السيارات الكهربائية',dur:60,src:GV+'ForBiggerJoyrides.mp4'},
    {id:'v5',title:'حملة التوعية المرورية',dur:35,src:GV+'ForBiggerMeltdowns.mp4'},
    {id:'v6',title:'عطور الشرق – الإصدار الجديد',dur:25,src:GV+'ForBiggerBlazes.mp4'}
  ],
  images:[
    {id:'i1',title:'خصم 30٪ على الإلكترونيات',ratio:'4/3'},
    {id:'i2',title:'قهوة الصباح',ratio:'1/1'},
    {id:'i3',title:'عقارات الواجهة البحرية',ratio:'4/3'},
    {id:'i4',title:'البطاقة المصرفية الذهبية',ratio:'1/1'}
  ],
  texts:[
    {id:'t1',title:'تنبيه السلامة',text:'يرجى ربط حزام الأمان طوال الرحلة'},
    {id:'t2',title:'رسالة ترحيب',text:'أهلاً بكم على متن رحلتنا، نتمنى لكم رحلة ممتعة'},
    {id:'t3',title:'عرض اليوم',text:'اشترِ قهوتين واحصل على الثالثة مجاناً'},
    {id:'t4',title:'حالة الطقس',text:'درجة الحرارة اليوم 34° والجو مشمس'},
    {id:'t5',title:'رمز الخصم',text:'استخدم الرمز RIDE20 لخصم 20٪ على رحلتك'}
  ],
  audio:[
    {id:'a1',title:'جِنغل مطعم الريف',dur:15},
    {id:'a2',title:'إعلان إذاعي – عروض الجمعة',dur:30},
    {id:'a3',title:'تنبيه صوتي – المحطة التالية',dur:8},
    {id:'a4',title:'موسيقى هادئة للرحلات',dur:120},
    {id:'a5',title:'رسالة البلدية الصوتية',dur:20}
  ]
};
</script>
<script id="engine">
const DAY=86400, $=id=>document.getElementById(id);
const T=(h,m=0,s=0)=>h*3600+m*60+s;
const pad=n=>String(n).padStart(2,'0');
function fmt(t,mode='s'){t=Math.max(0,Math.min(DAY,Math.round(t)));const h=Math.floor(t/3600),m=Math.floor(t%3600/60),s=t%60;
  if(mode==='h')return pad(h)+':00'; if(mode==='m')return pad(h)+':'+pad(m); return pad(h)+':'+pad(m)+':'+pad(s);}
function fdur(d){d=Math.round(d);const h=Math.floor(d/3600),m=Math.floor(d%3600/60),s=d%60;return h?h+':'+pad(m)+':'+pad(s):pad(m)+':'+pad(s);}
const ALL={};LIB.videos.forEach(v=>ALL[v.id]={...v,type:'video'});LIB.images.forEach(v=>ALL[v.id]={...v,type:'image',dur:10});LIB.texts.forEach(v=>ALL[v.id]={...v,type:'text',dur:8});LIB.audio.forEach(v=>ALL[v.id]={...v,type:'audio'});
const COL={video:'#2563EB',image:'#D97706',text:'#7C3AED',audio:'#0D9488'};
const TYPE_AR={video:'فيديو',image:'صورة',text:'نص',audio:'صوت'};
function seedRand(s){let x=7;for(const ch of s)x=(x*31+ch.charCodeAt(0))>>>0;return()=>{x=(x*1664525+1013904223)>>>0;return x/4294967296;};}
function waveSVG(id,n,color,h=40){const r=seedRand(id);let b='';n=Math.max(8,Math.min(420,Math.floor(n)));
  for(let i=0;i<n;i++){const v=(.22+.78*Math.abs(Math.sin(i*.33+r()*1.6)))*(.5+.5*r());const bh=Math.max(2,v*h);b+=`<rect x="${i*3}" y="${((h-bh)/2).toFixed(1)}" width="2" height="${bh.toFixed(1)}" rx="1"/>`;}
  return `<svg viewBox="0 0 ${n*3} ${h}" preserveAspectRatio="none" width="100%" height="100%" fill="${color}" aria-hidden="true">${b}</svg>`;}
let uid=1;const C=(ref,start,dur)=>({id:'c'+(uid++),ref,start,dur});
const SEED=[C('v2',T(6,30),1200),C('v3',T(8,2),20),C('i2',T(8,6),15),C('t1',T(8,9,30),10),C('v1',T(8,13),30),C('t2',T(8,16),12),C('i1',T(8,20),20),
 C('i3',T(9,30),600),C('v4',T(12),150),C('i1',T(12,3),60),C('t3',T(12,4,20),50),C('v1',T(12,5,30),90),C('v2',T(12,10),480),C('i3',T(12,20),360),
 C('t2',T(12,28),240),C('v4',T(12,35),720),C('i4',T(12,50),420),C('v5',T(15),2400),C('v6',T(17,1),25),C('i4',T(17,5),15),C('t5',T(17,8),10),C('v3',T(17,12),20),
 C('t4',T(19,30),900),C('v6',T(21),1800),C('a4',T(7,10),900),C('a2',T(8,11),30),C('a4',T(12,57,30),240),C('a1',T(12,7,15),15),C('a5',T(18,30),600)];
const S={clips:SEED.map(c=>({...c})),sel:null,pps:1,off:0,tPps:1,tOff:0,anchor:null,play:T(12,2,14),hist:[],fut:[],hoverX:null,ghost:null,rzBadge:null};
const vp=$('tl-viewport');
const W=()=>vp.clientWidth;
const minP=()=>W()/DAY, maxP=()=>W()/20;
const clampP=p=>Math.max(minP(),Math.min(maxP(),p));
function clampOff(o,p){return Math.max(0,Math.min(DAY-W()/p,o));}
const ref=c=>ALL[c.ref];
const thumb=id=>IMG[id];

/* ---------- library ---------- */
function plusBtn(label){return `<span class="absolute top-1.5 left-1.5 w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 transition shadow-lg" aria-hidden="true"><i class="fa-solid fa-plus text-[12px]"></i></span>`;}
function renderLib(){
  $('count-videos').textContent=LIB.videos.length;$('count-images').textContent=LIB.images.length;$('count-texts').textContent=LIB.texts.length;$('count-audio').textContent=LIB.audio.length;
  $('grid-audio').innerHTML=LIB.audio.map(v=>`<button role="listitem" data-add="${v.id}" data-preview="${v.id}" class="group relative w-full text-right flex items-center gap-2.5 p-2 rounded-md bg-ink-850 ring-1 ring-ink-700 hover:ring-[#14B8A6] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand" aria-label="إضافة صوت ${v.title}، المدة ${fdur(v.dur)}، إلى الجدول">
    <span class="flex-none w-9 h-9 rounded-md bg-[#0F3D39] text-[#5EEAD4] flex items-center justify-center"><i class="fa-solid fa-music text-[12px]"></i></span>
    <span class="flex-1 min-w-0"><span class="block text-[12px] text-ink-200 truncate">${v.title}</span><span class="block h-4 mt-1" dir="ltr">${waveSVG(v.id,46,'#2DD4BF',16)}</span></span>
    <span class="flex-none px-1.5 rounded bg-black/50 text-[10px] font-mono text-ink-200 group-hover:opacity-0 transition" dir="ltr">${fdur(v.dur)}</span>
    <span class="absolute top-1/2 -translate-y-1/2 left-2 w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 transition shadow-lg" aria-hidden="true"><i class="fa-solid fa-plus text-[12px]"></i></span></button>`).join('');
  $('grid-videos').innerHTML=LIB.videos.map(v=>`<button role="listitem" data-add="${v.id}" data-preview="${v.id}" class="group text-right rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand" aria-label="إضافة فيديو ${v.title}، المدة ${fdur(v.dur)}، إلى الجدول">
    <div class="relative aspect-video rounded-md overflow-hidden bg-ink-800 ring-1 ring-ink-700 group-hover:ring-[#3B82F6] transition">
      <img src="${thumb(v.id)}" alt="" class="w-full h-full object-cover">
      <span class="absolute bottom-1 right-1 px-1.5 rounded bg-black/75 text-[10px] font-mono text-white" dir="ltr">${fdur(v.dur)}</span>
      <span class="absolute bottom-1 left-1 w-5 h-5 rounded bg-black/60 text-white flex items-center justify-center"><i class="fa-solid fa-play text-[8px]"></i></span>${plusBtn()}
    </div><p class="mt-1.5 text-[12px] text-ink-200 truncate">${v.title}</p></button>`).join('');
  $('grid-images').innerHTML=LIB.images.map(v=>`<button role="listitem" data-add="${v.id}" data-preview="${v.id}" class="group text-right rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand" aria-label="إضافة صورة ${v.title} إلى الجدول">
    <div class="relative aspect-[4/3] rounded-md overflow-hidden bg-ink-800 ring-1 ring-ink-700 group-hover:ring-[#F59E0B] transition">
      <img src="${thumb(v.id)}" alt="" class="w-full h-full object-cover">${plusBtn()}
    </div><p class="mt-1.5 text-[12px] text-ink-200 truncate">${v.title}</p></button>`).join('');
  $('grid-texts').innerHTML=LIB.texts.map(v=>`<button role="listitem" data-add="${v.id}" data-preview="${v.id}" class="group text-right rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand" aria-label="إضافة نص ${v.title} إلى الجدول">
    <div class="relative aspect-[4/3] rounded-md overflow-hidden p-2.5 bg-gradient-to-br from-[#2B1B52] to-[#1C1433] ring-1 ring-[#3B2A6B] group-hover:ring-[#8B5CF6] transition">
      <i class="fa-solid fa-quote-right text-[#A78BFA] text-[10px]"></i>
      <p class="mt-1 text-[11.5px] leading-snug text-[#EDE7FF] line-clamp-3">${v.text.split(' ').slice(0,5).join(' ')}…</p>${plusBtn()}
    </div><p class="mt-1.5 text-[12px] text-ink-200 truncate">${v.title}</p></button>`).join('');
}

/* ---------- ruler ---------- */
const STEPS=[1,2,5,10,15,30,60,120,300,600,900,1800,3600,7200,10800,21600];
function renderRuler(){
  const p=S.pps,w=W();
  const major=STEPS.find(s=>s*p>=56)||21600;
  const minor=[...STEPS].reverse().find(s=>s<major&&major%s===0&&s*p>=9)||major;
  const mode=major>=3600?'h':major>=60?'m':'s';
  const t0=Math.floor(S.off/minor)*minor, t1=S.off+w/p;
  let h='';
  for(let t=t0;t<=t1+minor;t+=minor){const x=(t-S.off)*p;if(x<-60)continue;const M=t%major===0;
    h+=`<div class="tick ${M?'major':'minor'}" data-x="${x.toFixed(1)}" style="left:${x.toFixed(1)}px"></div>`;
    if(M&&t<=DAY)h+=`<div class="tlabel" data-x="${x.toFixed(1)}" style="left:${(x+4).toFixed(1)}px">${fmt(t,mode)}</div>`;}
  $('ticks').innerHTML=h;applyDock();
}
function applyDock(){
  const hx=S.hoverX;
  document.querySelectorAll('#ticks .tick,#ticks .tlabel').forEach(el=>{
    const d=hx==null?999:Math.abs(+el.dataset.x-hx);const k=Math.exp(-(d*d)/(2*64*64));
    if(el.classList.contains('tick')){el.style.transform=`scaleY(${1+1.5*k})`;el.style.background=k>.25?`rgba(255,255,255,${.45+.5*k})`:'';}
    else{const dl=hx==null?999:Math.abs(+el.dataset.x+18-hx);el.style.transform=`scale(${1+.32*k})`;el.style.color=k>.2?`rgba(255,255,255,${.55+.45*k})`:'';el.style.opacity=dl<52?'0':'';}
  });
  const hl=$('hover-line'),hb=$('hover-badge');
  if(hx==null){hl.classList.add('hidden');hb.classList.add('hidden');hb.classList.remove('flex');return;}
  hl.classList.remove('hidden');hl.style.left=hx+'px';hb.classList.remove('hidden');hb.classList.add('flex');
  hb.style.left=Math.max(30,Math.min(W()-30,hx))+'px';hb.textContent=fmt(S.off+hx/S.pps);
}

/* ---------- track ---------- */
function clipHTML(c,x,w,extra='',avail=0){
  const r=ref(c),t=r.type,p=S.pps;
  const needFlag=p>W()/30000&&w<170&&avail>w+24;
  const flag=needFlag?`<span class="flag" dir="rtl" style="max-width:${Math.round(Math.min(230,avail-(w<40?6:22)))}px">${r.title}</span>`:'';
  const aria=`${TYPE_AR[t]}: ${r.title}، من ${fmt(c.start)} إلى ${fmt(c.start+c.dur)}`;
  if(w<40){return `<div class="clip tiny t-${t} ${S.sel===c.id?'sel':''} ${extra}" data-id="${c.id}" data-preview="${r.id}" tabindex="0" role="listitem" aria-label="${aria}" style="left:${x}px;width:${Math.max(6,w)}px"><div class="body rounded-md"></div>${flag}</div>`;}
  const showTitle=!needFlag&&w>56, showDur=w>200, showTimes=p>W()/1500&&w>190;
  const ic={video:'fa-video',image:'fa-image',text:'fa-font',audio:'fa-music'}[t];
  const hdr=(bg)=>`<div class="hdr" ${bg?'':'style="background:transparent"'}>${showTitle?`<i class="fa-solid ${ic} text-[9px] opacity-80"></i><span class="truncate" dir="rtl">${r.title}</span>`:''}${showDur?`<span class="dur" dir="ltr">${fdur(c.dur)}</span>`:''}</div>`;
  let inner='';
  if(t==='text'){inner=hdr(false)+(w>90?`<div class="txt">${r.text}</div>`:'');}
  else if(t==='audio'){inner=hdr(true)+`<div class="strip">${waveSVG(c.id,(w-28)/3,'#5EEAD4',40)}</div>`;}
  else{const fw=Math.round(52*(t==='video'?16/9:4/3));const n=Math.min(80,Math.max(1,Math.ceil(w/fw)));
    inner=hdr(true)+`<div class="strip">${Array.from({length:n},(_,i)=>`<img src="${thumb(r.id)}" alt="" draggable="false" style="${t==='video'?`filter:brightness(${.85+((i*37)%5)*.05})`:''}">`).join('')}</div>`;}
  if(showTimes)inner+=`<div class="times" dir="ltr"><span>${fmt(c.start)}</span><span>${fmt(c.start+c.dur)}</span></div>`;
  return `<div class="clip t-${t} ${t==='text'?'textclip':''} ${t==='audio'?'audioclip':''} ${S.sel===c.id?'sel':''} ${extra}" data-id="${c.id}" data-preview="${r.id}" tabindex="0" role="listitem" aria-label="${aria}" style="left:${x}px;width:${w}px">
    <button class="h l" data-h="l" aria-label="سحب لتغيير بداية ${r.title}"><i></i></button><div class="body">${inner}</div><button class="h r" data-h="r" aria-label="سحب لتغيير نهاية ${r.title}"><i></i></button>${flag}</div>`;
}
function renderTrack(){
  const p=S.pps,w=W();let h='';
  const vis=S.clips.slice().sort((a,b)=>a.start-b.start).map(c=>({c,x:(c.start-S.off)*p,w:c.dur*p})).filter(o=>o.x+o.w>-40&&o.x<w+40);
  vis.forEach((o,i)=>{o.avail=Math.min(vis[i+1]?vis[i+1].x:w,w-4)-Math.max(o.x,0);});
  const groups=[];
  vis.forEach(o=>{
    if(o.w<6){const g=groups[groups.length-1];if(g&&g.small&&o.x-g.end<10){g.items.push(o);g.end=o.x+Math.max(4,o.w);return;}groups.push({small:true,items:[o],end:o.x+Math.max(4,o.w)});}
    else groups.push({small:false,items:[o]});
  });
  groups.forEach(g=>{
    if(!g.small){const o=g.items[0];h+=clipHTML(o.c,o.x,o.w,S.ghost&&S.ghost.id===o.c.id?'dim':'',o.avail);return;}
    g.items.forEach(o=>{h+=`<div class="mark t-${ref(o.c).type}" data-id="${o.c.id}" title="${ref(o.c).title} · ${fmt(o.c.start)}" style="left:${o.x}px;width:${Math.max(4,o.w)}px"></div>`;});
    if(g.items.length>1){const cx=(g.items[0].x+g.end)/2;h+=`<button class="bubble" data-zoomto="${g.items[0].c.start}|${g.items[g.items.length-1].c.start+g.items[g.items.length-1].c.dur}" style="left:${cx}px" aria-label="${g.items.length} إعلانات متقاربة، اضغط للتكبير">${g.items.length}</button>`;}
  });
  if(S.ghost)h+=ghostHTML();
  $('clips').innerHTML=h;
  const empty=!S.clips.length;$('empty-hint').classList.toggle('hidden',!empty);
  placeBadges();
}
function ghostHTML(){
  const g=S.ghost,c=S.clips.find(k=>k.id===g.id);if(!c)return'';const x=(g.start-S.off)*S.pps,w=Math.max(40,c.dur*S.pps);
  const tmp={...c,start:g.start};return clipHTML(tmp,x,w,'').replace('class="clip','class="ghost '+(g.bad?'bad ':'')+'clip').replace('</div>\n','</div>')+'';
}
function placeBadges(){
  const lb=$('live-badge'),dm=$('drop-msg');lb.classList.add('hidden');lb.classList.remove('flex');dm.classList.add('hidden');dm.classList.remove('flex');
  const lane=40;
  if(S.ghost){const c=S.clips.find(k=>k.id===S.ghost.id);const x=(S.ghost.start-S.off)*S.pps;
    lb.innerHTML=`<i class="fa-solid fa-arrows-left-right text-[9px]"></i>${fmt(S.ghost.start)} → ${fmt(S.ghost.start+c.dur)}`;show(lb,x,lane-30);
    if(S.ghost.bad){lb.classList.add('bg-red-500','text-white');lb.classList.remove('bg-white');show(dm,x,lane+84);}else{lb.classList.remove('bg-red-500','text-white');lb.classList.add('bg-white');}}
  if(S.rzBadge){const b=S.rzBadge,c=S.clips.find(k=>k.id===b.id);if(c){const x=((b.side==='r'?c.start+c.dur:c.start)-S.off)*S.pps;const d=c.dur-b.orig;
    lb.classList.remove('bg-red-500','text-white');lb.classList.add('bg-white');
    lb.innerHTML=`<i class="fa-regular fa-clock text-[9px]"></i>المدة ${fdur(c.dur)} <span class="${d>=0?'text-emerald-600':'text-red-600'}">${d>=0?'+':'−'}${fdur(Math.abs(d))}</span>`;show(lb,x-(b.side==='r'?60:0),lane-30);}}
}
function show(el,x,y){el.classList.remove('hidden');el.classList.add('flex');el.style.left=Math.max(6,Math.min(W()-240,x))+'px';el.style.top=y+'px';}
function renderPlayhead(){const x=(S.play-S.off)*S.pps;$('playhead').style.left=x+'px';$('playhead').style.display=(x<-2||x>W()+2)?'none':'';$('timecode').textContent=fmt(S.play);$('ruler').setAttribute('aria-valuenow',Math.round(S.play));if(typeof updateMonitor==='function')updateMonitor();}
function renderMini(){
  const mw=$('minimap').clientWidth;
  $('mini-marks').innerHTML=S.clips.map(c=>{const r=ref(c);const col=COL[r.type];return `<span class="absolute top-2 bottom-2 rounded-sm" style="left:${c.start/DAY*mw}px;width:${Math.max(2,c.dur/DAY*mw)}px;background:${col}"></span>`;}).join('')+
   Array.from({length:23},(_,i)=>`<span class="absolute bottom-0 h-1.5 w-px bg-ink-600" style="left:${(i+1)/24*mw}px"></span>`).join('');
  const span=W()/S.pps;const mwin=$('mini-win');mwin.style.left=(S.off/DAY*mw)+'px';mwin.style.width=Math.max(6,span/DAY*mw)+'px';
  const sv=span>=5400?[(span/3600).toFixed(span>=36000?0:1),'ساعة']:span>=120?[Math.round(span/60),'دقيقة']:[Math.round(span),'ثانية'];
  $('span-value').innerHTML=`<bdi class="font-mono">${sv[0]}</bdi> ${sv[1]}`;
  const sl=$('zoom-slider');if(document.activeElement!==sl)sl.value=Math.round(Math.log(S.pps/minP())/Math.log(maxP()/minP())*1000);
}
function render(){renderRuler();renderTrack();renderPlayhead();renderMini();updateBtns();}
function updateBtns(){$('btn-undo').disabled=!S.hist.length;$('btn-redo').disabled=!S.fut.length;$('btn-delete').disabled=!S.sel;
  const c=S.clips.find(k=>k.id===S.sel);$('btn-split').disabled=!(c&&S.play>c.start+1&&S.play<c.start+c.dur-1);}

/* ---------- smooth zoom loop ---------- */
let raf=null;
function kick(){if(!raf)raf=requestAnimationFrame(tick);}
function tick(){raf=null;
  const lp=Math.log(S.pps),lt=Math.log(S.tPps);const np=Math.abs(lt-lp)<.002?S.tPps:Math.exp(lp+(lt-lp)*.2);
  S.pps=np;
  if(S.anchor){S.off=clampOff(S.anchor.t-S.anchor.x/np,np);}else{S.off=Math.abs(S.tOff-S.off)*np<.3?S.tOff:S.off+(S.tOff-S.off)*.2;S.off=clampOff(S.off,np);}
  render();
  if(S.pps!==S.tPps||(!S.anchor&&S.off!==S.tOff))kick();else S.anchor=null;
}
function zoomAt(x,f){const t=(S.anchor&&S.pps!==S.tPps)?S.anchor.t:S.off+x/S.pps;S.tPps=clampP(S.tPps*f);S.anchor={x,t};S.tOff=clampOff(t-x/S.tPps,S.tPps);kick();}
function viewTo(a,b,instant){const p=clampP(W()/(b-a));S.tPps=p;S.tOff=clampOff(a,p);S.anchor=null;if(instant){S.pps=p;S.off=S.tOff;render();}else kick();}
</script>
<script id="engine-b">
const live=document.createElement('div');live.className='sr-only';live.setAttribute('aria-live','polite');document.body.appendChild(live);
const say=m=>{live.textContent=m;};
function ghostHTML(){const g=S.ghost,c=S.clips.find(k=>k.id===g.id);if(!c)return'';const x=(g.start-S.off)*S.pps,w=Math.max(40,c.dur*S.pps);
  let h=clipHTML({...c,start:g.start},x,w,'').replace('class="clip','class="ghost '+(g.bad?'bad ':'')+'clip').replace(/ data-preview="[^"]*"/,'').replace(/ tabindex="0"/,' aria-hidden="true"');
  return h.replace(/<\/div>\s*$/,'<div class="shade"></div></div>');}
const find=id=>S.clips.find(k=>k.id===id);
const byAt=(r,s)=>S.clips.find(k=>k.ref===r&&k.start===s);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function snapshot(){S.hist.push(JSON.stringify(S.clips));if(S.hist.length>80)S.hist.shift();S.fut=[];}
function undo(){if(!S.hist.length)return;S.fut.push(JSON.stringify(S.clips));S.clips=JSON.parse(S.hist.pop());if(!find(S.sel))S.sel=null;render();say('تم التراجع');}
function redo(){if(!S.fut.length)return;S.hist.push(JSON.stringify(S.clips));S.clips=JSON.parse(S.fut.pop());render();say('تمت الإعادة');}
function overlaps(id,s,d){return S.clips.some(k=>k.id!==id&&s<k.start+k.dur-.001&&s+d>k.start+.001);}
function findSlot(d){const so=S.clips.slice().sort((a,b)=>a.start-b.start);
  const scan=t0=>{let t=t0;for(const k of so){if(k.start+k.dur<=t)continue;if(k.start-t>=d)return t;t=Math.max(t,k.start+k.dur);}return t+d<=DAY?t:null;};
  const r=scan(Math.max(0,S.play));return r==null?scan(0):r;}
function addFromLib(id,src){
  const r=ALL[id],start=findSlot(r.dur);if(start==null){say('لا توجد مساحة كافية في الجدول');return;}
  snapshot();const c=C(id,start,r.dur);S.clips.push(c);S.sel=c.id;S.play=start+r.dur;
  const span=W()/S.tPps;if(start<S.tOff||start+r.dur>S.tOff+span){S.tOff=clampOff(start-span*.35,S.tPps);S.anchor=null;kick();}else render();
  if(src){const a=(src.querySelector('div')||src).getBoundingClientRect(),lr=$('lane').getBoundingClientRect();
    const f=document.createElement('div');f.className='fly';const col=COL[r.type];
    f.style.cssText=`left:${a.left}px;top:${a.top}px;width:${a.width}px;height:${a.height}px;background:${col} center/cover ${IMG[id]?`url(${thumb(id)})`:''}`;
    document.body.appendChild(f);requestAnimationFrame(()=>{const x=lr.left+clamp((start-S.tOff)*S.tPps,0,W()-60);f.style.left=x+'px';f.style.top=lr.top+'px';f.style.width='60px';f.style.height='76px';f.style.opacity='.2';});
    setTimeout(()=>f.remove(),600);}
  say(`أُضيف ${r.title} عند ${fmt(start)}`);
}
function splitSel(){const c=find(S.sel);if(!c||S.play<=c.start+1||S.play>=c.start+c.dur-1)return;snapshot();const n=C(c.ref,S.play,c.start+c.dur-S.play);c.dur=S.play-c.start;S.clips.push(n);S.sel=n.id;render();say('تم تقسيم المقطع');}
function delSel(){if(!S.sel)return;snapshot();S.clips=S.clips.filter(k=>k.id!==S.sel);S.sel=null;render();say('تم حذف المقطع');}
const phX=()=>{const x=(S.play-S.off)*S.pps;return x>=0&&x<=W()?x:W()/2;};

/* ---------- pointer ---------- */
let D=null;
const vx=e=>e.clientX-vp.getBoundingClientRect().left;
vp.addEventListener('wheel',e=>{e.preventDefault();hidePreview();
  if(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY)){S.tOff=clampOff(S.tOff+(e.deltaX||e.deltaY)/S.tPps,S.tPps);S.anchor=null;kick();}
  else zoomAt(vx(e),Math.exp(-e.deltaY*(e.ctrlKey?.012:.0024)));},{passive:false});
vp.addEventListener('pointermove',e=>{S.hoverX=vx(e);applyDock();});
vp.addEventListener('pointerleave',()=>{if(!D){S.hoverX=null;applyDock();}});
vp.addEventListener('pointerdown',e=>{
  if(!D){S.ghost=null;S.rzBadge=null;}
  const x=vx(e),b=e.target.closest('.bubble');
  if(b){const[a,z]=b.dataset.zoomto.split('|').map(Number);const m=(z-a)*.5+90;viewTo(a-m,z+m);return;}
  if(e.target.closest('#ruler')||e.target.closest('#playhead-handle')){D={type:'scrub'};S.play=clamp(S.off+x/S.pps,0,DAY);render();return;}
  const el=e.target.closest('.clip:not(.ghost)')||e.target.closest('.mark');
  if(el){const c=find(el.dataset.id);S.sel=c.id;hidePreview();const h=e.target.closest('.h');
    if(h){D={type:'rz',id:c.id,side:h.dataset.h,x0:e.clientX,os:c.start,od:c.dur,snap:false};S.rzBadge={id:c.id,side:h.dataset.h,orig:c.dur};}
    else D={type:'mv',id:c.id,x0:e.clientX,os:c.start,moved:false};
    render();return;}
  if(e.target.closest('#lane')){S.sel=null;S.play=clamp(S.off+x/S.pps,0,DAY);render();}
});
document.addEventListener('pointermove',e=>{if(!D)return;const dx=e.clientX-(D.x0||0),p=S.pps;
  if(D.type==='scrub'){S.play=clamp(S.off+vx(e)/p,0,DAY);renderPlayhead();updateBtns();return;}
  const c=find(D.id);if(!c)return;
  if(D.type==='mv'){if(!D.moved&&Math.abs(dx)<3)return;D.moved=true;let ns=clamp(D.os+dx/p,0,DAY-c.dur);
    for(const k of S.clips){if(k.id===c.id)continue;if(Math.abs(ns-(k.start+k.dur))*p<8)ns=k.start+k.dur;if(Math.abs(ns+c.dur-k.start)*p<8)ns=k.start-c.dur;}
    if(Math.abs(ns-S.play)*p<8)ns=S.play;ns=Math.round(ns);
    S.ghost={id:c.id,start:ns,bad:overlaps(c.id,ns,c.dur)};renderTrack();return;}
  if(D.type==='rz'){if(!D.snap){snapshot();D.snap=true;}
    const so=S.clips.filter(k=>k.id!==c.id);
    if(D.side==='r'){const nx=so.filter(k=>k.start>=D.os+D.od-.001).reduce((m,k)=>Math.min(m,k.start),DAY);c.dur=Math.round(clamp(D.od+dx/p,1,nx-c.start));}
    else{const pv=so.filter(k=>k.start+k.dur<=D.os+.001).reduce((m,k)=>Math.max(m,k.start+k.dur),0);const end=D.os+D.od;c.start=Math.round(clamp(D.os+dx/p,pv,end-1));c.dur=end-c.start;}
    renderTrack();renderMini();}
});
document.addEventListener('pointerup',()=>{if(!D)return;
  if(D.type==='mv'&&S.ghost){const c=find(D.id);if(!S.ghost.bad){snapshot();c.start=S.ghost.start;say(`نُقل إلى ${fmt(c.start)}`);}else say('لا يمكن وضع الإعلان فوق إعلان آخر');S.ghost=null;}
  if(D.type==='rz'){S.rzBadge=null;const c=find(D.id);if(c)say(`المدة الجديدة ${fdur(c.dur)}`);}
  D=null;render();});
$('minimap').addEventListener('pointerdown',e=>{const r=$('minimap').getBoundingClientRect();const t=(e.clientX-r.left)/r.width*DAY;S.tOff=clampOff(t-W()/S.tPps/2,S.tPps);S.anchor=null;kick();});

/* ---------- controls ---------- */
document.addEventListener('click',e=>{const a=e.target.closest('[data-add]');if(a){hidePreview();addFromLib(a.dataset.add,a);}});
$('btn-undo').onclick=undo;$('btn-redo').onclick=redo;$('btn-split').onclick=splitSel;$('btn-delete').onclick=delSel;
$('btn-zoom-in').onclick=()=>zoomAt(phX(),1.8);$('btn-zoom-out').onclick=()=>zoomAt(phX(),1/1.8);
$('btn-fit').onclick=()=>viewTo(0,DAY);
$('zoom-slider').addEventListener('input',e=>{const p=minP()*Math.pow(maxP()/minP(),e.target.value/1000);zoomAt(phX(),p/S.tPps);});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeFull();hidePreview();return;}
  if(e.target.matches('input'))return;
  const k=e.key.toLowerCase();
  if((e.ctrlKey||e.metaKey)&&k==='z'){e.preventDefault();e.shiftKey?redo():undo();return;}
  if(k==='delete'||k==='backspace'){if(S.sel){e.preventDefault();delSel();}return;}
  if(k==='s'){splitSel();return;}
  if(k==='+'||k==='='){zoomAt(phX(),1.5);return;}if(k==='-'){zoomAt(phX(),1/1.5);return;}
  if(k==='arrowleft'||k==='arrowright'){e.preventDefault();const st=(e.shiftKey?10:1)*(k==='arrowright'?1:-1);const c=find(S.sel);
    if(c&&document.activeElement&&document.activeElement.closest('.clip')){const ns=clamp(c.start+st,0,DAY-c.dur);if(!overlaps(c.id,ns,c.dur)){snapshot();c.start=ns;}}
    else S.play=clamp(S.play+st,0,DAY);render();if(c){const el=document.querySelector(`.clip[data-id="${c.id}"]`);el&&el.focus();}}
  if(k==='enter'&&e.target.closest&&e.target.closest('.clip')){S.sel=e.target.closest('.clip').dataset.id;render();}
});

/* ---------- hover preview ---------- */
let pvT=null,pvH=null,pvId=null,pvKey=null;const pv=$('preview'),pvv=$('pv-video'),pvi=$('pv-img'),pva=$('pv-audio-el');
function pvLayer(n){['pv-video','pv-img','pv-text','pv-audio'].forEach(l=>{const on=l===n;$(l).classList.toggle('hidden',!on);if(l==='pv-audio')$(l).classList.toggle('flex',on);});}
function stopPvAudio(){pva.pause();$('pv-audio-ic').className='fa-solid fa-play translate-x-[1px]';$('pv-audio-btn').setAttribute('aria-label','تشغيل المقطع الصوتي');}
function showPreview(id,el,cx){
  const r=ALL[id];if(!r)return;pvId=id;const inTl=!!el.closest('#tl-viewport');
  $('pv-title').textContent=r.title;stopPvAudio();const pd=$('pv-dur');
  if(r.type==='video'){pvLayer('pv-video');$('pv-meta').textContent='فيديو · صامت';$('pv-media').style.aspectRatio='16/9';pd.textContent=fdur(r.dur);pd.classList.remove('hidden');
    if(pvv.dataset.src!==r.src){pvv.src=r.src;pvv.dataset.src=r.src;}pvv.poster=thumb(id);pvv.muted=true;pvv.play().catch(()=>{});}
  else{pvv.pause();
    if(r.type==='image'){pvLayer('pv-img');pvi.src=thumb(id);pvi.alt=r.title;$('pv-media').style.aspectRatio=r.ratio||'4/3';pd.classList.add('hidden');$('pv-meta').textContent='صورة';}
    if(r.type==='text'){pvLayer('pv-text');$('pv-text-p').textContent=r.text;$('pv-media').style.aspectRatio='16/10';pd.textContent=fdur(r.dur);pd.classList.remove('hidden');$('pv-meta').textContent='نص';}
    if(r.type==='audio'){pvLayer('pv-audio');$('pv-wave').innerHTML=waveSVG(id,90,'#5EEAD4',56);$('pv-wave2').innerHTML=waveSVG(id,90,'#CCFBF1',56);$('pv-wave-on').style.width='0';$('pv-media').style.aspectRatio='16/9';pd.textContent=fdur(r.dur);pd.classList.remove('hidden');$('pv-meta').textContent='صوت · اضغط للتشغيل';}}
  pv.style.width=(r.ratio==='1/1'?240:r.type==='text'?290:300)+'px';
  pv.classList.remove('hidden');$('pv-wave2').style.width=$('pv-wave').clientWidth+'px';
  const a=el.getBoundingClientRect(),w=pv.offsetWidth,h=pv.offsetHeight,vw=innerWidth,vh=innerHeight;
  let L,Tp;
  if(inTl){L=clamp((cx??a.left+a.width/2)-w/2,8,vw-w-8);Tp=a.top-h-12;if(Tp<8)Tp=a.bottom+12;}
  else{L=a.left-w-12;if(L<8)L=a.right+12;if(L+w>vw-8)L=clamp(a.left,8,vw-w-8);Tp=clamp(a.top-8,8,vh-h-8);}
  pv.style.left=L+'px';pv.style.top=Tp+'px';
}
pvv.addEventListener('loadedmetadata',()=>{if(pvv.videoWidth)$('pv-media').style.aspectRatio=pvv.videoWidth+'/'+pvv.videoHeight;});
function hidePreview(){clearTimeout(pvT);clearTimeout(pvH);pv.classList.add('hidden');pvv.pause();stopPvAudio();pvKey=null;}
document.addEventListener('mouseover',e=>{
  if(e.target.closest('#preview')){clearTimeout(pvH);return;}
  const el=e.target.closest('[data-preview]');if(!el||D)return;
  const key=el.dataset.preview+'|'+(el.dataset.id||'lib');clearTimeout(pvH);
  const open=!pv.classList.contains('hidden');if(key===pvKey&&open)return;if(key===pvPend)return;
  clearTimeout(pvT);const cx=e.clientX;pvPend=key;
  pvT=setTimeout(()=>{pvPend=null;if(!el.isConnected)return;pvKey=key;showPreview(el.dataset.preview,el,cx);},open?70:320);
});
let pvPend=null;
document.addEventListener('mouseout',e=>{const el=e.target.closest('[data-preview],#preview');if(!el)return;if(e.relatedTarget&&el.contains(e.relatedTarget))return;clearTimeout(pvT);pvPend=null;clearTimeout(pvH);pvH=setTimeout(hidePreview,220);});
pv.addEventListener('click',e=>{if(e.target.closest('#pv-audio-btn'))return;openFull(pvId);});
$('pv-audio-btn').addEventListener('click',e=>{e.stopPropagation();if(pva.paused){pva.currentTime=0;pva.play().catch(()=>{});$('pv-audio-ic').className='fa-solid fa-pause';$('pv-audio-btn').setAttribute('aria-label','إيقاف المقطع الصوتي');}else stopPvAudio();});
pva.addEventListener('timeupdate',()=>{const r=ALL[pvId];if(!r||r.type!=='audio')return;const k=Math.min(1,pva.currentTime/r.dur);$('pv-wave-on').style.width=(k*100)+'%';if(k>=1)stopPvAudio();});

/* ---------- full view ---------- */
const fv=$('fullview'),fvv=$('fv-video'),fvi=$('fv-img');let fvId=null;
function fvLayer(n){['fv-video','fv-img','fv-text','fv-audio'].forEach(l=>{const on=l===n;$(l).classList.toggle('hidden',!on);if(l==='fv-text'||l==='fv-audio')$(l).classList.toggle('flex',on);});}
function openFull(id){if(!id)return;const r=ALL[id];fvId=id;hidePreview();
  $('fv-title').textContent=r.title;$('fv-type').textContent=TYPE_AR[r.type];$('fv-type').style.background=COL[r.type]+'33';$('fv-type').style.color='#fff';$('fv-meta').textContent=r.type!=='image'?fdur(r.dur):'';
  fvv.pause();$('fv-audio-el').pause();
  if(r.type==='video'){fvLayer('fv-video');fvv.poster=thumb(id);if(fvv.dataset.src!==r.src){fvv.src=r.src;fvv.dataset.src=r.src;}fvv.muted=true;fvv.play().catch(()=>{});}
  if(r.type==='image'){fvLayer('fv-img');fvi.src=thumb(id);fvi.alt=r.title;}
  if(r.type==='text'){fvLayer('fv-text');$('fv-text-p').textContent=r.text;}
  if(r.type==='audio'){fvLayer('fv-audio');$('fv-wave').innerHTML=waveSVG(id,240,'#2DD4BF',160);}
  fv.classList.remove('hidden');fv.classList.add('flex');$('fv-close').focus();}
function closeFull(){fv.classList.add('hidden');fv.classList.remove('flex');fvv.pause();$('fv-audio-el').pause();}
$('fv-close').onclick=closeFull;fv.addEventListener('click',e=>{if(e.target===fv)closeFull();});
$('fv-add').onclick=()=>{closeFull();addFromLib(fvId);};

/* ---------- design states ---------- */
const STATES=[['empty','فارغ'],['day','اليوم'],['hour','ساعة'],['min','دقائق'],['drag','سحب'],['resize','تغيير المدة'],['reject','إفلات مرفوض'],['preview','معاينة'],['full','عرض كامل'],['playing','تشغيل'],['speed','قائمة السرعة'],['gap','تشغيل عبر فراغ']];
$('states').insertAdjacentHTML('beforeend',STATES.map(([k,l])=>`<button role="tab" data-state="${k}" class="h-7 px-2.5 rounded-md text-[11px] whitespace-nowrap text-ink-300 hover:bg-ink-700 aria-selected:bg-brand aria-selected:text-white">${l}</button>`).join(''));
$('states').addEventListener('click',e=>{const b=e.target.closest('[data-state]');if(b)setState(b.dataset.state);});
const MIN=[T(11,59,40),T(12,6,20)];
function setState(k){
  closeFull();hidePreview();setPlaying(false);setSpeed(1);setSkip(false);toggleSpeedMenu(false);closeMon();
  S.ghost=null;S.rzBadge=null;S.anchor=null;S.clips=SEED.map(c=>({...c}));S.sel=null;S.hist=[];S.fut=[];S.play=T(12,2,14);
  const hx=t=>(t-S.off)*S.pps;
  if(k==='empty'){S.clips=[];S.play=T(8);viewTo(0,DAY,true);S.hoverX=null;}
  if(k==='day'){viewTo(0,DAY,true);S.hoverX=hx(T(13,10,24));}
  if(k==='hour'||k==='preview'||k==='full'){viewTo(T(11,58),T(13,2),true);S.sel=k==='hour'?byAt('v2',T(12,10)).id:null;S.hoverX=k==='hour'?hx(T(12,24,36)):null;}
  if(['min','drag','resize','reject'].includes(k)){viewTo(MIN[0],MIN[1],true);S.hoverX=k==='min'?hx(T(12,3,30)):null;}
  if(k==='min')S.sel=byAt('v4',T(12)).id;
  const img=byAt('i1',T(12,3));
  if(k==='drag'){S.sel=img.id;S.ghost={id:img.id,start:T(12,2,40),bad:false};}
  if(k==='reject'){S.sel=img.id;S.ghost={id:img.id,start:T(12,3,58),bad:true};}
  if(k==='resize'){const c=byAt('v4',T(12));c.dur=168;S.sel=c.id;S.rzBadge={id:c.id,side:'r',orig:150};}
  if(k==='playing'){viewTo(MIN[0],MIN[1],true);S.play=T(12,1,2);}
  if(k==='speed'){viewTo(T(11,58),T(13,2),true);S.play=T(12,12,40);setSpeed(4);}
  if(k==='gap'){viewTo(T(12,4,50),T(12,11,30),true);S.play=T(12,7,42);}
  render();
  if(k==='playing'||k==='gap')setPlaying(true);
  if(k==='speed')toggleSpeedMenu(true,false);
  document.querySelectorAll('[data-state]').forEach(b=>b.setAttribute('aria-selected',b.dataset.state===k));
  if(k==='preview'){const c=byAt('v2',T(12,10));const el=document.querySelector(`.clip[data-id="${c.id}"]`);const r=el.getBoundingClientRect();S.hoverX=r.left-vp.getBoundingClientRect().left+r.width*.45;applyDock();showPreview('v2',el,r.left+r.width*.45);}
  if(k==='full')openFull('v4');
}
renderLib();
addEventListener('resize',()=>{S.pps=S.tPps=clampP(S.pps);S.off=S.tOff=clampOff(S.off,S.pps);render();});
</script>
<script id="engine-play">
/* ---------- playback + monitor ---------- */
const SPEEDS=[1,2,4,6,8,10,15,20];
const P={on:false,speed:1,skip:false,last:0};
const monV=$('mon-video');let monCur=null;
const clipAt=t=>S.clips.find(k=>t>=k.start&&t<k.start+k.dur);
function nextClip(t){let b=null;for(const k of S.clips)if(k.start>t+.001&&(!b||k.start<b.start))b=k;return b;}
function prevClip(t){let b=null;for(const k of S.clips)if(k.start<t-.001&&(!b||k.start>b.start))b=k;return b;}
function monLayer(n){['video','image','text','audio','gap'].forEach(k=>$('mon-l-'+k).classList.toggle('on',k===n));}
function setTypeChip(el,type){if(type){el.textContent=TYPE_AR[type];el.style.background=COL[type];el.style.color='#fff';}else{el.textContent='فراغ';el.style.background='';el.style.color='';}}
function updateMonitor(force){
  const c=clipAt(S.play),key=c?c.id+':'+c.ref:'gap';
  $('mon-clock').textContent=fmt(S.play);$('mf-time').textContent=fmt(S.play);
  if(key!==monCur||force){monCur=key;
    if(c){const r=ref(c);setTypeChip($('mon-type'),r.type);setTypeChip($('mf-type'),r.type);$('mon-title').textContent=r.title;$('mf-title').textContent=r.title;
      if(r.type==='video'){monLayer('video');if(monV.dataset.src!==r.src){monV.src=r.src;monV.dataset.src=r.src;}monV.poster=thumb(r.id);}else monV.pause();
      if(r.type==='image'){monLayer('image');$('mon-img').src=thumb(r.id);$('mon-img').alt=r.title;}
      if(r.type==='text'){monLayer('text');$('mon-text').textContent=r.text;}
      if(r.type==='audio'){monLayer('audio');$('mon-wave').innerHTML=waveSVG(r.id,120,'#2DD4BF',60);$('mon-wave2').innerHTML=waveSVG(r.id,120,'#CCFBF1',60);$('mon-audio-t').textContent=r.title;}
    }else{monLayer('gap');monV.pause();setTypeChip($('mon-type'),null);setTypeChip($('mf-type'),null);$('mon-title').textContent='لا يوجد إعلان';$('mf-title').textContent='لا يوجد إعلان';}
  }
  if(c){const r=ref(c),loc=S.play-c.start,k=loc/c.dur*100;
    $('mon-local').textContent=fdur(loc)+' / '+fdur(c.dur);$('mon-prog').style.width=k+'%';$('mon-prog').style.background=COL[r.type];
    if(r.type==='audio'){$('mon-wave2').style.width=$('mon-wave').clientWidth+'px';$('mon-wave-on').style.width=k+'%';}
    if(r.type==='video'){
      if(P.on){monV.playbackRate=Math.min(16,P.speed);if(monV.paused)monV.play().catch(()=>{});}else if(!monV.paused)monV.pause();
      const d=monV.duration;if(d&&isFinite(d)){const want=loc%d;if(Math.abs(monV.currentTime-want)>(P.on?1.5+P.speed*.2:.3)){try{monV.currentTime=want;}catch(e){}}}}
  }else{const n=nextClip(S.play);
    $('mon-gap-next').innerHTML=n?`الإعلان التالي عند <bdi class="font-mono text-ink-200">${fmt(n.start)}</bdi> · بعد <bdi class="font-mono">${fdur(n.start-S.play)}</bdi>`:'لا توجد إعلانات أخرى اليوم';
    $('mon-local').textContent='';$('mon-prog').style.width='0%';}
}
function setPlaying(on){
  P.on=on;const ic=on?'fa-solid fa-pause text-[14px]':'fa-solid fa-play text-[14px] translate-x-[1px]';
  $('play-ic').className=ic;$('mf-play-ic').className=on?'fa-solid fa-pause':'fa-solid fa-play translate-x-[1px]';
  const lbl=on?'إيقاف مؤقت (مسافة)':'تشغيل (مسافة)';$('btn-play').setAttribute('aria-label',lbl);$('btn-play').setAttribute('aria-pressed',on);$('mf-play').setAttribute('aria-label',lbl);
  $('mon-status-t').textContent=on?'قيد التشغيل':'متوقف';$('mon-dot').className='w-1.5 h-1.5 rounded-full '+(on?'bg-emerald-400 animate-pulse':'bg-ink-400');
  $('mon-status').className='flex items-center gap-1.5 text-[11px] px-2 h-5 rounded '+(on?'bg-emerald-500/15 text-emerald-300':'bg-ink-750 text-ink-300');
  if(on){P.last=performance.now();requestAnimationFrame(step);}
  updateMonitor();
}
function lastEnd(){return S.clips.reduce((m,k)=>Math.max(m,k.start+k.dur),0);}
function togglePlay(){
  if(!P.on){if(!S.clips.length){say('لا توجد إعلانات للتشغيل');return;}if(S.play>=lastEnd()-.5){const f=S.clips.reduce((m,k)=>Math.min(m,k.start),DAY);S.play=f;}}
  setPlaying(!P.on);say(P.on?'بدأ التشغيل':'إيقاف مؤقت');
}
function step(now){if(!P.on)return;
  const dt=Math.min(.25,(now-P.last)/1000);P.last=now;let t=S.play+dt*P.speed;
  if(P.skip&&!clipAt(t)){const n=nextClip(t);if(n)t=n.start;}
  const end=lastEnd();if(t>=end){S.play=end;follow();renderPlayhead();setPlaying(false);say('انتهى التشغيل');return;}
  S.play=t;follow();renderPlayhead();updateBtns();requestAnimationFrame(step);
}
function follow(){const span=W()/S.tPps,x=S.play-S.tOff;if(x>span*.94||x<0){S.tOff=clampOff(S.play-span*.06,S.tPps);S.anchor=null;kick();}}
function jumpTo(t){S.play=clamp(t,0,DAY);follow();renderPlayhead();updateBtns();}
$('btn-play').onclick=togglePlay;$('mf-play').onclick=togglePlay;
$('btn-prev').onclick=()=>{const c=clipAt(S.play);if(c&&S.play>c.start+1)jumpTo(c.start);else{const p=prevClip(S.play);if(p)jumpTo(p.start);}};
$('btn-next').onclick=()=>{const n=nextClip(S.play);if(n)jumpTo(n.start);};

/* speed */
function renderSpeedOpts(){$('speed-opts').innerHTML=SPEEDS.map(s=>`<button role="menuitemradio" aria-checked="${s===P.speed}" data-speed="${s}" class="relative h-9 rounded-md text-[12px] font-mono font-semibold flex items-center justify-center gap-1 ${s===P.speed?'bg-brand text-white ring-1 ring-[#93B8FF]':'text-ink-200 hover:bg-ink-700'}" dir="ltr">${s===P.speed?'<i class="fa-solid fa-check text-[9px]"></i>':''}${s}x</button>`).join('');}
function setSpeed(s){P.speed=s;$('speed-val').textContent=s+'x';$('btn-speed').setAttribute('aria-label','سرعة المعاينة: '+s+'x');$('mf-speed').textContent=s+'x';
  const b=$('mon-speed-badge');b.innerHTML=`<i class="fa-solid fa-gauge-high text-[9px]"></i>${s}x`;b.classList.toggle('hidden',s===1);b.classList.toggle('flex',s!==1);
  $('btn-speed').classList.toggle('text-[#93B8FF]',s!==1);renderSpeedOpts();updateMonitor();}
function toggleSpeedMenu(open,focus=true){const m=$('speed-menu');if(open==null)open=m.classList.contains('hidden');m.classList.toggle('hidden',!open);$('btn-speed').setAttribute('aria-expanded',open);
  if(open&&focus){const a=m.querySelector('[aria-checked="true"]');a&&a.focus();}}
$('btn-speed').onclick=e=>{e.stopPropagation();toggleSpeedMenu();};
$('speed-opts').addEventListener('click',e=>{const b=e.target.closest('[data-speed]');if(!b)return;setSpeed(+b.dataset.speed);toggleSpeedMenu(false);$('btn-speed').focus();say('السرعة '+b.dataset.speed+'x');});
document.addEventListener('pointerdown',e=>{if(!e.target.closest('#speed-wrap'))toggleSpeedMenu(false);});
/* skip gaps */
function setSkip(v){P.skip=v;$('btn-skip').setAttribute('aria-checked',v);const b=$('mon-skip-badge');b.classList.toggle('hidden',!v);b.classList.toggle('flex',v);}
$('btn-skip').onclick=()=>{setSkip(!P.skip);say(P.skip?'تخطي الفراغات مفعّل':'تخطي الفراغات متوقف');};
/* large monitor */
function openMon(){$('mf-slot').appendChild($('mon-screen'));const m=$('mon-full');m.classList.remove('hidden');m.classList.add('flex');updateMonitor(true);$('mf-close').focus();}
function closeMon(){const m=$('mon-full');if(m.classList.contains('hidden'))return;$('mon-slot').appendChild($('mon-screen'));m.classList.add('hidden');m.classList.remove('flex');updateMonitor(true);$('btn-mon-expand').focus();}
$('btn-mon-expand').onclick=openMon;$('mf-close').onclick=closeMon;$('mon-full').addEventListener('click',e=>{if(e.target.id==='mon-full')closeMon();});
document.addEventListener('keydown',e=>{
  if(e.code==='Space'&&!e.target.matches('input,textarea,[role=menuitemradio]')){e.preventDefault();e.stopPropagation();togglePlay();}
  if(e.key==='Escape'){toggleSpeedMenu(false);closeMon();}
},true);
renderSpeedOpts();
requestAnimationFrame(()=>setState('hour'));
</script>
</body>
</html>
