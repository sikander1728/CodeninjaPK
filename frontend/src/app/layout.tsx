import Header from './components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CodeNinja PK',
  description: 'Software Development Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-primary'>
        <Header />
        {children}
      </body>
    </html>
  )
}
