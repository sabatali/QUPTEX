export default function Logo({ small = false }) {
  const boxSize = small ? 24 : 34
  const iconSize = small ? 14 : 19
  return (
    <div className="flex items-center gap-2.5 font-extrabold" style={{ fontSize: small ? 15 : 20 }}>
      <span
        className="flex items-center justify-center rounded-[9px] border-[1.6px] border-text shrink-0"
        style={{ width: boxSize, height: boxSize }}
      >
        <svg viewBox="0 0 24 24" fill="none" style={{ width: iconSize, height: iconSize }} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3.3" stroke="#38bdf8" strokeWidth="1.8" />
          <circle cx="12" cy="4" r="1.6" fill="#f1f5f9" />
          <circle cx="4.5" cy="14.5" r="1.6" fill="#f1f5f9" />
          <circle cx="19.5" cy="14.5" r="1.6" fill="#38bdf8" />
          <line x1="12" y1="7.3" x2="12" y2="9" stroke="#f1f5f9" strokeWidth="1.4" />
          <line x1="6" y1="13.2" x2="9.3" y2="11.3" stroke="#f1f5f9" strokeWidth="1.4" />
          <line x1="18" y1="13.2" x2="14.7" y2="11.3" stroke="#38bdf8" strokeWidth="1.4" />
        </svg>
      </span>
      <span>
        <span className="text-accent">Q</span><span className="brand-gradient-text">UPTEX</span>
      </span>
    </div>
  )
}
