const steps = [
  { icon: '📞', title: 'Missed call', meta: '2:14 AM · Emergency line', tone: 'text-slate-300' },
  { icon: '⚡', title: 'AI answers in seconds', meta: 'Greets caller, starts intake', tone: 'text-accent' },
  { icon: '📝', title: 'Details captured', meta: 'Burst pipe · address · insured', tone: 'text-slate-300' },
  { icon: '✅', title: 'Job booked, tech alerted', meta: 'CRM updated · owner texted', tone: 'text-emerald-400' },
]

export default function HeroVisual() {
  return (
    <div className="silver-panel rounded-2xl p-6 w-full max-w-sm mx-auto md:mx-0 shadow-2xl relative">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-semibold tracking-widest uppercase text-muted">After-hours flow</span>
        <span className="flex items-center gap-1.5 text-xs text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live
        </span>
      </div>
      <div className="space-y-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="fade-up-once flex items-center gap-3 rounded-xl bg-bg/60 border border-white/5 px-4 py-3"
            style={{ animationDelay: `${0.9 + i * 0.55}s` }}
          >
            <span className="text-xl">{s.icon}</span>
            <div>
              <div className={`text-sm font-semibold ${s.tone}`}>{s.title}</div>
              <div className="text-xs text-muted">{s.meta}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-slate-500 mt-4">Illustrative example of an automated enquiry.</p>
    </div>
  )
}
