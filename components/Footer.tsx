export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 bg-cream">
      <div className="divider-shimmer absolute inset-x-0 top-0" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-14 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <span className="display-latin italic text-[10px] tracking-widest text-champagne">
            shinjuku gyoen
          </span>
          <div className="display mt-1 text-lg tracking-widest2">
            <span className="neon-text font-medium">BAR</span> ズキュン
          </div>
        </div>
        <p className="display-latin italic text-[10px] tracking-widest text-ink/40">
          © {new Date().getFullYear()} bar zukyun · all rights reserved
        </p>
      </div>
    </footer>
  );
}
