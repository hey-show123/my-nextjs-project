import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientLayout from '@/components/layout/client-layout'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'hey_show | Student Freelance Engineer',
  description: 'Portfolio of hey_show, a student freelance engineer specializing in mass spectrometry and software development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <BackgroundGradientAnimation />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}