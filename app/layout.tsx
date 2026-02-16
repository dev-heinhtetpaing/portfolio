import type { Metadata } from 'next'
import { ReduxProvider } from '@/providers/ReduxProvider'
import { Navigation } from '@/pages/navigation'
import '@/index.css'

export const metadata: Metadata = {
    title: "hein's personal website",
    description: 'Portfolio website',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <Navigation />
                    {children}
                </ReduxProvider>
            </body>
        </html>
    )
}

