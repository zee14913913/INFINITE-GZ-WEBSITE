export default function LaserDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 ${className}`}>
      <div className="laser-divider"></div>
    </div>
  )
}

