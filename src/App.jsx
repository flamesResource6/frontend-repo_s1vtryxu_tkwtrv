import MinimalNav from './components/MinimalNav'
import EditorialHero from './components/EditorialHero'
import ProjectGrid from './components/ProjectGrid'
import AnalogNotes from './components/AnalogNotes'
import GrainOverlay from './components/GrainOverlay'

function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-pink-200/60">
      <MinimalNav />
      <GrainOverlay />

      <EditorialHero />
      <ProjectGrid />
      <AnalogNotes />

      <footer className="px-8 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-16">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-end justify-between gap-6">
          <p className="text-[11px] tracking-[0.12em] uppercase text-black/50">© Studio — Established MMXVIII</p>
          <div className="flex items-center gap-6 text-[11px] tracking-[0.12em] uppercase text-black/70">
            <a href="#" className="hover:text-pink-600">Instagram</a>
            <a href="#" className="hover:text-pink-600">Behance</a>
            <a href="#" className="hover:text-pink-600">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
