import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled((window.scrollY || window.pageYOffset) > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b border-panel-border transition-[height,background] duration-300 ${
        scrolled ? 'bg-bg/95 shadow-lg' : 'bg-bg/85'
      }`}
    >
      <div
        className={`max-w-5xl mx-auto px-6 flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? 'h-[58px]' : 'h-[72px]'
        }`}
      >
        <Logo />
        <div className="hidden md:flex gap-8 text-sm text-muted">
          <a href="#services" className="hover:text-text transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-text transition-colors">How It Works</a>
          <a href="#proof" className="hover:text-text transition-colors">Results</a>
          <a href="#faq" className="hover:text-text transition-colors">FAQ</a>
        </div>
        <a
          href="https://calendly.com/quptex/strategy-call"
          className="text-sm font-semibold px-5 py-2.5 rounded-full bg-text text-bg hover:bg-accent transition-colors"
        >
          Book a strategy call
        </a>
      </div>
    </nav>
  )
}
