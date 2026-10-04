import useReveal from '../hooks/useReveal'

const steps = [
  { num: '01', title: 'Free Strategy Call', desc: 'We look at how your business currently handles enquiries and find where jobs are slipping through.' },
  { num: '02', title: 'We Build the System', desc: 'A system built around your business, not a generic template — connected to the tools you already use.' },
  { num: '03', title: 'Launch & Refine', desc: "We launch it, watch how real enquiries come in, and tune it until it's actually working the way you need." },
  { num: '04', title: 'You Respond First', desc: 'Every enquiry gets answered instantly, day or night — and you stop losing jobs to whoever called back faster.' },
]

export default function HowItWorks() {
  const ref = useReveal({ stagger: true })
  return (
    <section id="how-it-works" className="py-24 bg-bg-alt">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-accent text-[13px] font-bold uppercase tracking-widest mb-3.5">How It Works</div>
        <h2 className="brand-gradient-text text-[34px] font-extrabold tracking-tight max-w-xl mb-12">
          From first call to a running system, without the guesswork.
        </h2>
        <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.num} className="stagger-item group hover:-translate-y-1 transition-transform">
              <div className="font-extrabold text-4xl mb-2.5 text-transparent [-webkit-text-stroke:1.5px_#334155] group-hover:[-webkit-text-stroke-color:#38bdf8] transition-colors">
                {s.num}
              </div>
              <h3 className="text-base font-bold mb-2">{s.title}</h3>
              <p className="text-[13.5px] text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
