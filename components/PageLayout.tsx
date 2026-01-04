import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'

interface PageLayoutProps {
  children: ReactNode
  mainClassName?: string
}

export default function PageLayout({
  children,
  mainClassName = 'min-h-screen bg-[rgb(10,10,10)]',
}: PageLayoutProps) {
  return (
    <>
      <ScrollProgress />
      <main className={mainClassName}>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}

