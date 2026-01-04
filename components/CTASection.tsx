import Link from 'next/link'
import { ReactNode } from 'react'
import LaserDivider from './LaserDivider'

interface CTASectionProps {
  title: string
  description: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  className?: string
  containerClassName?: string
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = 'py-16 sm:py-32',
  containerClassName = 'mx-auto w-full px-4 lg:px-6 xl:max-w-7xl',
}: CTASectionProps) {
  return (
    <section className={className}>
      <div className={containerClassName}>
        <div className="border border-border rounded-2xl p-8 sm:p-16 text-center space-y-8 bg-gradient-to-b from-secondary/5 to-transparent">
          <h2 className="text-3xl sm:text-5xl text-primary max-w-3xl mx-auto">
            {title}
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            {description}
          </p>
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {primaryButton && (
                <Link
                  href={primaryButton.href}
                  className="relative isolate inline-flex shrink-0 items-center justify-center border font-mono text-base/6 uppercase tracking-widest gap-x-3 px-6 py-3 sm:text-sm border-[--btn-border] bg-[--btn-bg] text-[--btn-text] hover:border-[--btn-hover] hover:bg-[--btn-hover] rounded-full [--btn-bg:theme(colors.primary)] [--btn-border:theme(colors.primary)] [--btn-hover:theme(colors.primary/80%)] [--btn-text:theme(colors.background)]"
                >
                  <span>{primaryButton.text}</span>
                </Link>
              )}
              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className="relative isolate inline-flex shrink-0 items-center justify-center border font-mono text-base/6 uppercase tracking-widest gap-x-3 px-6 py-3 sm:text-sm border-[--btn-border] bg-[--btn-bg] text-[--btn-text] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-hover:theme(colors.secondary/20%)] [--btn-text:theme(colors.primary)]"
                >
                  <span>{secondaryButton.text}</span>
                </Link>
              )}
            </div>
          )}
        </div>
        <LaserDivider />
      </div>
    </section>
  )
}

