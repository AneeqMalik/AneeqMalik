// src/components/ui/Loader.tsx

export function Loader({ label = 'Loading...' }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full w-full min-h-[320px]">
      <div className="w-10 h-10 border-2 border-[#e50914] border-t-transparent rounded-full animate-spin" />
      <p className="text-[#8a8a8a] text-sm">{label}</p>
    </div>
  )
}
