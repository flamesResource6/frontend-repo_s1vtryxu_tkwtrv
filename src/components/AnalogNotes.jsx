export default function AnalogNotes() {
  return (
    <section id="notes" className="px-8 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-28">
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 lg:col-span-6">
          <div className="border border-black/10 p-6 relative">
            <div className="absolute -top-3 -left-3 bg-black text-white text-[10px] px-2 py-1 tracking-[0.12em] uppercase">Cassette</div>
            <p className="text-[12px] leading-[1.7] text-black/80">
              Notes from the field: materials, systems, quiet gestures. Scanned textures and dusty frames inform the tone—restrained yet tactile.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="aspect-square bg-[url('https://images.unsplash.com/photo-1497888329096-51c27beff665?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-110 brightness-95" />
              ))}
            </div>
            <div className="absolute -bottom-3 -right-3 bg-pink-600 text-white text-[10px] px-2 py-1 tracking-[0.12em] uppercase">marker</div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-4 md:col-start-9 lg:col-start-9">
          <div className="border border-black/10 p-6">
            <p className="text-[11px] leading-[1.8] text-black/70">
              Studio reading list: K. Muller-Brockmann, A. Girard, B. M�ller, S. Heller. Methods: asymmetric grids, typographic systems, neutral palettes, analog annotations.
            </p>
            <div className="mt-6 space-y-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-10 bg-black/5" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
