import useReveal from '../hooks/useReveal'

const services = [
  {
    icon: '⚡',
    title: 'AI Growth System',
    desc: 'Respond to every enquiry the moment it comes in, and turn more of them into booked jobs.',
    items: ['24/7 AI receptionist', 'Instant appointment booking', 'Automated follow-up', 'CRM integration'],
  },
  {
    icon: '⚙️',
    title: 'AI Operations System',
    desc: "Cut the repetitive admin work that eats your team's time between jobs.",
    items: ['Internal workflow automation', 'Job status notifications', 'Reporting, without spreadsheets', 'Connects your existing tools'],
  },
  {
    icon: '📊',
    title: 'AI Intelligence System',
    desc: "Know what's happening in your market before your competitors tell you.",
    items: ['Competitor monitoring', 'Local market insights', 'Automated reporting', 'One dashboard, always current'],
  },
]

export default function Services() {
  const ref = useReveal({ stagger: true })
  return (
    <section id="services" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-accent text-[13px] font-bold uppercase tracking-widest mb-3.5">What We Build</div>
        <h2 className="brand-gradient-text text-[34px] font-extrabold tracking-tight max-w-xl mb-4">
          Three systems. One goal: you respond first, every time.
        </h2>
        <p className="text-muted text-base max-w-xl mb-12">
          We don't sell software — we build complete systems around the way your business
          actually runs, so nothing falls through when things get busy.
        </p>
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-3 gap-5.5">
          {services.map((s) => (
            <div
              key={s.title}
              className="stagger-item silver-panel rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-2xl transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-xl mb-5">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold mb-2.5">{s.title}</h3>
              <p className="text-muted text-sm mb-4">{s.desc}</p>
              <ul className="text-[13.5px] text-slate-300 space-y-1.5">
                {s.items.map((it) => (
                  <li key={it} className="pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-accent">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
