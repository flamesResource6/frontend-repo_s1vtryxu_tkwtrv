import { Link } from 'react-router-dom'

export default function MinimalNav() {
  return (
    <nav className="fixed top-6 right-6 z-50">
      <ul className="flex items-center gap-6 text-[11px] tracking-[0.12em] uppercase text-black/80">
        <li>
          <Link to="/" className="hover:text-pink-600 transition-colors">Studio</Link>
        </li>
        <li>
          <a href="#work" className="hover:text-pink-600 transition-colors">Work</a>
        </li>
        <li>
          <a href="#notes" className="hover:text-pink-600 transition-colors">Notes</a>
        </li>
        <li>
          <Link to="/test" className="hover:text-pink-600 transition-colors">Test</Link>
        </li>
      </ul>
    </nav>
  )
}
