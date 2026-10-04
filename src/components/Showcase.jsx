import useReveal from '../hooks/useReveal'

const flow = ['Enquiry arrives', 'AI qualifies', 'CRM updated', 'Booking confirmed', 'Team notified']

export default function Showcase() {
  const a = useReveal()
  const b = useReveal({ stagger: true })
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-28">
        <div ref={a} className="reveal grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-accent text-[13px] font-bold uppercase tracking-widest mb-3.5">Instant Response</div>
            <h2 className="brand-gradient-text text-[30px] font-extrabold tracking-tight mb-4">
              The first reply wins the job.
            </h2>
            <p className="text-muted max-w-md">
              Customers in an emergency message several companies at once. Your system answers in
              seconds, asks the right questions and holds the booking before anyone else replies.
            </p>
          </div>
          <div className="silver-panel rounded-2xl p-6 space-y-3 max-w-md w-full md:ml-auto">
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-bg/70 px-4 py-3 text-sm">Hi, we have water coming through the ceiling. Can someone come tonight?</div>
            <div className="max-w-[85%] ml-auto rounded-2xl rounded-tr-sm bg-accent/15 border border-accent/30 px-4 py-3 text-sm">
              Sorry to hear that. I can get a technician to you tonight. What is the address, and is the water still running?
            </div>
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-bg/70 px-4 py-3 text-sm">12 Oak Street. Yes, still running.</div>
            <div className="max-w-[85%] ml-auto rounded-2xl rounded-tr-sm bg-accent/15 border border-accent/30 px-4 py-3 text-sm">
              Thanks. Please shut the main valve if you can. A technician has been alerted and will call you shortly.
            </div>
            <p className="text-[11px] text-slate-500 pt-1">Illustrative example conversation.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={b} className="reveal order-2 md:order-1 silver-panel rounded-2xl p-6 max-w-md w-full">
            <div className="text-xs uppercase tracking-widest text-muted mb-4">Automation behind the scenes</div>
            <div className="space-y-2">
              {flow.map((f, i) => (
                <div key={f}>
                  <div className="stagger-item flex items-center gap-3 rounded-xl bg-bg/60 border border-white/5 px-4 py-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-accent/15 border border-accent/40 text-accent text-xs flex items-center justify-center">{i + 1}</span>
                    {f}
                  </div>
                  {i < flow.length - 1 && <div className="ml-7 h-3 w-px bg-accent/30" />}
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-accent text-[13px] font-bold uppercase tracking-widest mb-3.5">Custom Workflows</div>
            <h2 className="brand-gradient-text text-[30px] font-extrabold tracking-tight mb-4">
              Built around how your business runs.
            </h2>
            <p className="text-muted max-w-md">
              No generic templates. We map your intake, scheduling and follow-up, then connect each
              step so nothing depends on someone remembering to do it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
