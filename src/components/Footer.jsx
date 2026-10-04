import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-panel-border py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-[13.5px] text-slate-500">
        <Logo small />
        <div>AI-powered business systems for restoration companies.</div>
        <div>hello@quptex.com</div>
      </div>
    </footer>
  )
}
