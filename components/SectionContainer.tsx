import { ReactNode } from 'react'
import LaserDivider from './LaserDivider'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  showDivider?: boolean
  dividerClassName?: string
}

export default function SectionContainer({
  children,
  className = 'py-16 sm:py-32 relative',
  containerClassName = 'mx-auto w-full px-4 lg:px-6 xl:max-w-7xl',
  showDivider = true,
  dividerClassName = '',
}: SectionContainerProps) {
  return (
    <section className={className}>
      <div className={containerClassName}>
        {children}
      </div>
      {showDivider && <LaserDivider className={dividerClassName} />}
    </section>
  )
}

