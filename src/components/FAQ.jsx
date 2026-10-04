import useReveal from '../hooks/useReveal'

const faqs = [
  {
    q: 'Can it handle emergency and after-hours calls?',
    a: 'Yes. It answers instantly at any hour, collects the essentials (address, type of damage, insurance details) and either books the job or alerts your on-call team, based on rules you set.',
  },
  {
    q: 'Will callers know they are talking to AI?',
    a: 'You decide how it introduces itself. It speaks naturally, stays on script for your business, and hands off to a real person whenever you want it to.',
  },
  {
    q: 'Does it work with our existing CRM and scheduling tools?',
    a: 'We build around the tools you already use. On the strategy call we confirm exactly what connects and how, before anything is built.',
  },
  {
    q: 'What happens if it can’t answer something?',
    a: 'It never guesses on the important stuff. Urgent keywords (like active flooding or a commercial account) transfer straight to you or trigger an instant text alert.',
  },
  {
    q: 'How much does it cost?',
    a: 'We package complete systems rather than hourly work, so pricing depends on scope. After the strategy call you get a clear quote, with no pressure to commit.',
  },
]

export default function FAQ() {
  const ref = useReveal({ stagger: true })
  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-accent text-[13px] font-bold uppercase tracking-widest mb-3.5">Questions</div>
        <h2 className="brand-gradient-text text-[34px] font-extrabold tracking-tight mb-10">
          What restoration owners ask us first.
        </h2>
        <div ref={ref} className="reveal space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="stagger-item silver-panel rounded-xl group">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-6 py-5 font-semibold">
                {f.q}
                <span className="text-accent text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-6 pb-5 text-sm text-muted leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
