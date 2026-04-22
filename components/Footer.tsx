export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <div className="text-lg font-light tracking-widest2">
          <span className="neon-text font-medium">BAR</span> ズキュン
        </div>
        <p className="text-[10px] tracking-widest2 text-ink/40">
          © {new Date().getFullYear()} BAR ZUKYUN. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
