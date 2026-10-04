import useReveal from '../hooks/useReveal'

const tools = ['ServiceTitan', 'Jobber', 'Housecall Pro', 'HubSpot', 'GoHighLevel', 'Salesforce', 'Google Calendar', 'Twilio']

export default function Integrations() {
  const ref = useReveal({ stagger: true })
  return (
    <section className="py-16 border-y border-panel-border">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-muted mb-6">Connects with the tools you already use</p>
        <div ref={ref} className="reveal flex flex-wrap justify-center gap-3">
          {tools.map((t) => (
            <span
              key={t}
              className="stagger-item silver-panel rounded-full px-5 py-2 text-sm text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
