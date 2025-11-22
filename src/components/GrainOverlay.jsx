export default function GrainOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 mix-blend-multiply opacity-[0.06]">
      <div className="w-full h-full" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM4MDY4ODh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80) ',
        backgroundSize: 'cover',
        filter: 'grayscale(100%) contrast(120%) brightness(95%)',
      }} />
    </div>
  )
}
