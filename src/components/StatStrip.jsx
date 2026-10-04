import useReveal from '../hooks/useReveal'

const stats = [
  { num: '78%', label: 'of customers hire the first contractor who responds' },
  { num: '60 sec', label: 'is often all it takes to decide who gets an emergency job' },
  { num: '24/7', label: 'your systems keep responding, even when your team can’t' },
]

export default function StatStrip() {
  const ref = useReveal({ stagger: true })
  return (
    <div className="border-y border-panel-border py-10">
      <div ref={ref} className="reveal max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.num} className="stagger-item">
            <div className="font-extrabold text-[34px] text-accent">{s.num}</div>
            <div className="text-sm text-muted mt-1.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
