import type { Metadata } from 'next'
import { ReduxProvider } from '@/providers/ReduxProvider'
import { Navigation } from '@/components/navigation'
import { SideNav } from '@/components/side-nav'
import '@/index.css'
import Script from 'next/script'

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "name": "Hein Htet Paing",
            "alternateName": "Hein Htet",
            "url": "https://www.heinhtetpaing.com",
            "logo": "https://www.heinhtetpaing.com/favicon.ico",
            "image": "https://www.heinhtetpaing.com/Hein Htet Paing.webp",
            "jobTitle": "Full Stack Developer",
            "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "University of Computer Studies"
            },
            "sameAs": [
                "https://github.com/dev-heinhtetpaing",
                "https://linkedin.com/in/hein-htet-paing"
            ],
            "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
            },
            "knowsAbout": [
                "React",
                "Next.js",
                "JavaScript",
                "Web Development"
            ]
        },
        {
            "@type": "WebSite",
            "name": "Hein Htet Paing",
            "alternateName": "Hein Htet",
            "url": "https://www.heinhtetpaing.com",
            "logo": "https://www.heinhtetpaing.com/favicon.ico"
        }
    ]
}

export const metadata: Metadata = {
    metadataBase: new URL('https://www.heinhtetpaing.com'),
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
                <link rel="icon" type="image/png" sizes="96x96" href="/icon1.png" />
                <link rel="apple-touch-icon" href="/apple-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="apple-mobile-web-app-title" content="Hein Htet" />
            </head>
            <body>
                <ReduxProvider>
                    <Navigation />
                    <SideNav />
                    {children}
                    <Script
                        id="json-ld"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                </ReduxProvider>
            </body>
        </html>
    )
}
