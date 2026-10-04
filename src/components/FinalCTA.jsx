import useReveal from '../hooks/useReveal'

export default function FinalCTA() {
  const ref = useReveal()
  return (
    <section className="py-24">
      <div
        ref={ref}
        className="reveal silver-panel max-w-5xl mx-6 md:mx-auto rounded-3xl px-12 py-16 text-center"
      >
        <h2 className="brand-gradient-text text-[30px] font-extrabold mb-3.5 max-w-lg mx-auto">
          Stop losing jobs to whoever answers first.
        </h2>
        <p className="text-muted mb-7">
          Book a free, no-pressure strategy call — we'll show you exactly where enquiries are
          slipping through today.
        </p>
        <a
          href="https://calendly.com/quptex/strategy-call"
          className="inline-flex items-center gap-2 px-6.5 py-3.5 rounded-full font-semibold text-[14.5px] text-bg bg-gradient-to-br from-accent to-accent-dark shadow-[0_8px_24px_rgba(56,189,248,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)] transition-all"
        >
          Book a Free Strategy Call →
        </a>
      </div>
    </section>
  )
}
