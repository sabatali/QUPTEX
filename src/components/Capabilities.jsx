import useReveal from '../hooks/useReveal'

const items = [
  ['📞', 'AI Voice Receptionist', 'Answers every call, qualifies the job and books it, day or night.'],
  ['💬', 'Website & WhatsApp Chat', 'Instant replies to enquiries so visitors become conversations.'],
  ['🔁', 'Automated Follow-up', 'Texts and emails that chase every lead until they book or say no.'],
  ['🗓️', 'Appointment Booking', 'Slots filled straight into your calendar with no back and forth.'],
  ['🔗', 'CRM & Tool Integrations', 'Everything synced to the systems your team already lives in.'],
  ['⚙️', 'Workflow Automation', 'Custom n8n and Make builds that remove repetitive admin.'],
  ['📊', 'Dashboards & Reporting', 'One live view of calls, bookings and response times.'],
  ['🔍', 'Market Intelligence', 'Competitor and local-market data collected and reported for you.'],
]

export default function Capabilities() {
  const ref = useReveal({ stagger: true })
  return (
    <section className="py-24 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-accent text-[13px] font-bold uppercase tracking-widest mb-3.5">What We Do</div>
        <h2 className="brand-gradient-text text-[34px] font-extrabold tracking-tight max-w-2xl mb-4">
          Every part of your response process, handled.
        </h2>
        <p className="text-muted max-w-xl mb-12">
          One team designs, builds and runs the systems, so enquiries never wait on a busy office.
        </p>
        <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(([icon, title, desc]) => (
            <div key={title} className="stagger-item silver-panel rounded-2xl p-6 hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-4">{icon}</div>
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
