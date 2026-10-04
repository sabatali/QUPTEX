import { useEffect, useRef } from 'react'

// Attaches an IntersectionObserver to the returned ref; adds "in-view"
// to the element (and optionally its .stagger-item children) once it
// scrolls into view, then stops observing.
export default function useReveal({ stagger = false } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            if (stagger) {
              const items = entry.target.querySelectorAll('.stagger-item')
              items.forEach((item, i) => {
                setTimeout(() => item.classList.add('in-view'), i * 110)
              })
            }
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [stagger])

  return ref
}
