import useReveal from '../hooks/useReveal'

const projects = [
  { title: 'WhatsApp Business API webhook for n8n automation', quote: 'Outstanding service, was really committed to solve it even when things got hard, I really recommend to hire Him, and i will continue to work with him on more projects...', tags: ['Committed to Quality', 'Solution Oriented', 'Detail Oriented', 'Accountable for Outcomes'] },
  { title: 'Python code to extract equities prices', quote: 'this is my 4th project with Sabat, moe than perfect as usual, highly recommended!!', tags: ['Committed to Quality', 'Solution Oriented', 'Clear Communicator', 'Accountable for Outcomes'] },
  { title: 'TikTok video downloader automation & data mapping', quote: "Amazing to work with, one of the best i've ever worked with on upwork", tags: ['Collaborative'] },
  { title: 'n8n WhatsApp chatbot with meeting configuration', quote: 'thank you again for the great work', tags: ['Accountable for Outcomes', 'Detail Oriented'] },
  { title: 'n8n server fix + Claude.ai MCP connection (urgent)', quote: 'Thank again A+++++', tags: ['Committed to Quality', 'Accountable for Outcomes', 'Detail Oriented'] },
  { title: 'Proxy ID trainer', quote: 'Expert fast worker.', tags: ['Committed to Quality', 'Solution Oriented', 'Detail Oriented'] },
  { title: 'Betfair API trading bot', quote: 'i loved working with him and he is very good', tags: ['Collaborative'] },
]

export default function Testimonials() {
  const ref = useReveal({ stagger: true })
  return (
    <section id="proof" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-accent text-[13px] font-bold uppercase tracking-widest mb-3.5">Client Projects</div>
        <h2 className="brand-gradient-text text-[34px] font-extrabold tracking-tight max-w-2xl mb-3">
          Delivered projects, in our clients' words.
        </h2>
        <p className="text-muted mb-12">Reviews are shown exactly as clients wrote them.</p>
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="stagger-item silver-panel rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-2xl transition-all flex flex-col">
              <div className="text-warn text-sm mb-2">★★★★★ 5.0</div>
              <h3 className="font-bold text-[15px] mb-3">{p.title}</h3>
              <p className="text-[14px] text-slate-200 italic mb-5 flex-1">"{p.quote}"</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] bg-accent/10 text-accent border border-accent/25 px-2.5 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
