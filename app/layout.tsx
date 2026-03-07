import type { Metadata } from 'next'
import { ReduxProvider } from '@/providers/ReduxProvider'
import { Navigation } from '@/components/navigation'
import '@/index.css'

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hein Htet Paing',
    url: 'https://www.heinhtetpaing.com',
    image: 'https://www.heinhtetpaing.com/Hein Htet Paing.webp',
    jobTitle: 'Full Stack Developer',
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'University of Computer Studies',
    },
    sameAs: [
        'https://github.com/dev-heinhtetpaing',
        'https://linkedin.com/in/hein-htet-paing',
    ], 
    "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
    knowsAbout: ['React', 'Next.js', 'JavaScript', 'Web Development'],
};

export const metadata: Metadata = {
    title: "Hein Htet Paing | Full Stack Developer | React & Next.js",
    metadataBase: new URL('https://www.heinhtetpaing.com'),
    alternates: {
        canonical: "https://www.heinhtetpaing.com/",
    },

    description:
        "Full-stack developer specializing in TypeScript, React, and Node.js. Building scalable web applications with modern technologies. Based in Dubai, UAE.",
    keywords: [
        "Hein Htet Paing",
        "Full Stack Developer",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Web Developer",
        "Dubai",
        "Portfolio",
    ],
    authors: [{ name: "Hein Htet Paing", url: "https://www.heinhtetpaing.com/" }],
    openGraph: {
        type: "website",
        title: "Hein Htet Paing | Full Stack Developer | React & Next.js",
        description:
            "Full-stack developer specializing in TypeScript, React, and Node.js. Building scalable web applications.",
        url: "https://www.heinhtetpaing.com",
        siteName: "Hein Htet Paing",
        images: [
            {
                url: "https://www.heinhtetpaing.com/Hein Htet Paing.webp",
                width: 1200,
                height: 630,
                alt: "Hein Htet Paing",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hein Htet Paing | Full Stack Developer | React & Next.js",
        description:
            "Full-stack developer specializing in TypeScript, React, and Node.js.",
    },
    robots: {
        index: true,
        follow: true,
    },
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
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                </ReduxProvider>
            </body>
        </html>
    )
}

