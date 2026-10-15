export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-6">
      <div className="text-center">
        {/* Leaf village label */}
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-naruto">
          🍥 konohagakure · 木ノ葉隠れの里
        </p>

        {/* Kanji - big */}
        <p className="mt-10 font-jp text-7xl text-chakra sm:text-8xl">
          忍
        </p>

        {/* Main heading */}
        <h1 className="mt-6 font-display text-6xl sm:text-8xl">
          <span className="naruto-gradient">SETUP OK</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 font-mono text-xs text-muted">
          // phase 1 complete — ready for phase 2
        </p>

        {/* Color test row */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <span className="headband">NARUTO</span>
          <span className="headband !border-chakra/50 !text-chakra">
            CHAKRA
          </span>
          <span className="headband !border-leaf/50 !text-leaf">
            LEAF
          </span>
          <span className="headband !border-rasengan/50 !text-blue-400">
            RASENGAN
          </span>
          <span className="headband !border-akatsuki/50 !text-akatsuki">
            AKATSUKI
          </span>
        </div>
      </div>
    </main>
  );
}