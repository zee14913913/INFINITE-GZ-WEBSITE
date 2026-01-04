import Link from 'next/link'
import { ReactNode } from 'react'
import LaserDivider from './LaserDivider'

interface Button {
  text: string
  href: string
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
}

interface PageHeroProps {
  tag: string
  title: ReactNode
  description?: ReactNode
  buttons?: Button[]
  videoSrc?: string
  className?: string
  contentClassName?: string
  titleClassName?: string
  align?: 'center' | 'left'
}

export default function PageHero({
  tag,
  title,
  description,
  buttons,
  videoSrc,
  className = 'relative pb-px min-h-screen',
  contentClassName = 'mx-auto w-full px-4 lg:px-6 xl:max-w-7xl flex min-h-screen flex-col justify-center',
  titleClassName = 'text-primary mx-auto max-w-4xl text-balance text-5xl leading-tight tracking-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight',
  align = 'center',
}: PageHeroProps) {
  const alignClasses = align === 'center' ? 'text-center' : 'text-left'
  const flexAlignClasses = align === 'center' ? 'items-center justify-center' : 'items-start justify-start'

  return (
    <section className={className}>
      {/* Video Background - z-0 */}
      {videoSrc && (
        <>
          <div className="absolute inset-0 z-0 overflow-hidden bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover opacity-50"
            >
              <source src={videoSrc} type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
          </div>
          {/* Gradient Overlay - z-10 */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-transparent to-black/50"></div>
        </>
      )}

      {/* Content - z-20 */}
      <div className={`relative z-20 ${contentClassName}`}>
        <div className={`relative z-20 flex w-full ${flexAlignClasses} ${alignClasses}`}>
          <div className={align === 'center' ? 'space-y-8' : 'space-y-8 w-full'}>
            <div className="mono-tag text-secondary text-sm">
              [ {tag} ]
            </div>

            {typeof title === 'string' ? (
              <h1 className={titleClassName}>
                {title}
              </h1>
            ) : (
              <div className={titleClassName}>
                {title}
              </div>
            )}

            {description && (
              <p className="text-secondary mx-auto max-w-3xl text-lg md:text-xl leading-relaxed">
                {description}
              </p>
            )}

            {buttons && buttons.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
                {buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.href}
                    className={`relative isolate inline-flex shrink-0 items-center justify-center border font-mono text-base/6 uppercase tracking-widest gap-x-3 px-6 py-3 sm:text-sm rounded-full ${
                      button.variant === 'secondary'
                        ? 'border-[--btn-border] bg-[--btn-bg] text-[--btn-text] hover:bg-[--btn-hover] [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-hover:theme(colors.secondary/20%)] [--btn-text:theme(colors.primary)]'
                        : 'border-[--btn-border] bg-[--btn-bg] text-[--btn-text] hover:border-[--btn-hover] hover:bg-[--btn-hover] [--btn-bg:theme(colors.primary)] [--btn-border:theme(colors.primary)] [--btn-hover:theme(colors.primary/80%)] [--btn-text:theme(colors.background)]'
                    }`}
                  >
                    {button.icon && button.icon}
                    <span>{button.text}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <LaserDivider className="z-30" />
    </section>
  )
}

