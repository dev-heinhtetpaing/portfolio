import type { Metadata } from "next"

import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { ExperienceSection } from "@/components/experience-section"
import { HeroSection } from "@/components/hero-section"
import { PersonalitySection } from "@/components/personality-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import Skills from "@/components/skill-section"

export const metadata: Metadata = {
    title: "Hein Htet Paing | Full Stack Developer | React & Next.js",
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
    alternates: {
        canonical: "https://www.heinhtetpaing.com/",
    },
    openGraph: {
        type: "website",
        title: "Hein Htet Paing | Full Stack Developer | React & Next.js",
        description:
            "Full-stack developer specializing in TypeScript, React, and Node.js. Building scalable web applications.",
        url: "https://www.heinhtetpaing.com",
        locale: "en_US",
        siteName: "Hein Htet Paing",
        images: [
            {
                url: "https://www.heinhtetpaing.com/Hein Htet Paing.png",
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
        images: [
            {
                url: "https://www.heinhtetpaing.com/Hein Htet Paing.png",
                width: 1200,
                height: 630,
                alt: "Hein Htet Paing",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function Home() {
    return (
        <>
            <HeroSection />
            <PersonalitySection />
            <AboutSection />
            <Skills />
            <ServicesSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
        </>
    )
}
