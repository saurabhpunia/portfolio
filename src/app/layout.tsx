import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Saurabh Punia',
    default:
      'Saurabh Punia',
  },
  description:
    'I\'m a Goal-driven and reliable programmer with 4+ years of experience in developing, maintaining, and modernizing web applications. Proficient in client/server technologies, with strong problem-solving skills and a collaborative approach to issue resolution. Adept at analyzing complex problems, designing effective solutions, and working closely with teams to ensure project success. Passionate about learning and implementing new technologies to enhance development efficiency and performance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
