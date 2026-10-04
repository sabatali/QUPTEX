import { useEffect, useState } from 'react'
import HeroVisual from './HeroVisual'
import useTypewriter from '../hooks/useTypewriter'

const LINE_1 = 'Never Lose Another Job to a '
const LINE_2 = 'Slow Response.'
const FULL_HEADLINE = LINE_1 + LINE_2

export default function Hero() {
  const [parallax, setParallax] = useState(0)
  const { typed, done } = useTypewriter(FULL_HEADLINE, { speed: 34, startDelay: 350 })

  useEffect(() => {
    function onScroll() {
      setParallax((window.scrollY || window.pageYOffset) * 0.25)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const typedLine1 = typed.slice(0, LINE_1.length)
  const typedLine2 = typed.slice(LINE_1.length)

  return (
    <header className="relative overflow-hidden pt-28 pb-24">
      <div
        className="pointer-events-none absolute -top-52 -right-52 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)',
          transform: `translateY(${parallax}px)`,
          transition: 'transform 0.05s linear',
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative grid md:grid-cols-[1.35fr_1fr] gap-12 items-center">
      <div>
        <div
          className="fade-up-once inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-[13px] font-semibold px-4 py-1.5 rounded-full mb-6"
          style={{ animationDelay: '0.05s' }}
        >
          ● Built for Restoration Companies
        </div>

        <h1 className="font-extrabold leading-[1.12] tracking-tight max-w-3xl mb-5 text-4xl md:text-[46px] min-h-[2.3em] md:min-h-[2.6em]">
          <span className="brand-gradient-text">{typedLine1}</span>
          <span className="text-accent">{typedLine2}</span>
          <span
            className="inline-block w-[3px] md:w-[4px] h-[0.9em] align-middle ml-1 bg-accent animate-pulse"
            aria-hidden="true"
          />
        </h1>

        <p className={`reveal max-w-xl mb-9 text-lg text-muted ${done ? 'in-view' : ''}`}>
          QUPTEX builds AI-powered systems that answer every emergency call, text, and website
          enquiry instantly, book the job automatically, and turn your website into a 24/7
          dispatcher — so you never lose work to whoever picked up the phone first.
        </p>
        <div className={`reveal flex flex-wrap gap-3.5 mb-5 ${done ? 'in-view' : ''}`} style={{ transitionDelay: done ? '0.15s' : '0s' }}>
          <a
            href="https://calendly.com/quptex/strategy-call"
            className="inline-flex items-center gap-2 px-6.5 py-3.5 rounded-full font-semibold text-[14.5px] text-bg bg-gradient-to-br from-accent to-accent-dark shadow-[0_8px_24px_rgba(56,189,248,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)] transition-all"
          >
            Book a Free Strategy Call →
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6.5 py-3.5 rounded-full font-semibold text-[14.5px] border border-panel-border hover:border-accent hover:text-accent transition-colors"
          >
            See What We Build
          </a>
        </div>
        <p className={`reveal text-[13.5px] text-slate-500 ${done ? 'in-view' : ''}`} style={{ transitionDelay: done ? '0.3s' : '0s' }}>
          No obligation. 20-minute call. We'll tell you honestly if it's a fit.
        </p>
      </div>
      <HeroVisual />
      </div>
    </header>
  )
}
