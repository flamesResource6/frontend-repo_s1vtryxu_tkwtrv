const projects = [
  {
    id: '01',
    title: 'Foundry Atlas',
    role: 'Identity / Editorial',
    img: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Archive 1984',
    role: 'Art Direction',
    img: 'https://images.unsplash.com/photo-1541592553160-82008b127ccb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Studio Recordings',
    role: 'Spatial / Research',
    img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Cassette Studies',
    role: 'Editorial',
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop',
  },
]

export default function ProjectGrid() {
  return (
    <section id="work" className="px-8 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-24">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-x-6 gap-y-20">
          {projects.map((p, i) => (
            <a key={p.id} href={`/project/${p.id}`} className={`group col-span-12 ${i % 3 === 0 ? 'md:col-span-5' : i % 3 === 1 ? 'md:col-span-7' : 'md:col-span-6'}`}>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[10px] tracking-[0.18em] text-black/50">{p.id}.</span>
                <span className="text-[10px] tracking-[0.18em] text-pink-600">{p.role}</span>
              </div>
              <div className="relative aspect-[4/3] bg-black/5 overflow-hidden">
                <img src={p.img} alt="" className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 group-hover:brightness-100 transition-all" />
                <div className="absolute inset-0 ring-1 ring-black/5" />
              </div>
              <div className="mt-2">
                <h3 className="text-[20px] leading-tight tracking-[-0.01em]">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
