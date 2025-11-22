export default function EditorialHero() {
  return (
    <header className="px-8 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-24 pb-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-y-16">
          <div className="col-span-10 md:col-span-8 lg:col-span-7">
            <h1 className="text-[42px] leading-[1.05] sm:text-[56px] md:text-[72px] lg:text-[92px] font-[600] tracking-[-0.02em] text-black">
              Post‑industrial design studio working across identity, spatial and editorial.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-3 md:col-start-9 lg:col-start-10 self-end">
            <p className="text-[12px] leading-[1.6] text-black/70">
              We develop restrained systems with an intellectual tone and a fashion‑editorial sensibility. Analog gestures, precise alignment, soft cues.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
