import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { ExperienceSection } from "@/components/experience-section"
import { HeroSection } from "@/components/hero-section"
import { PersonalitySection } from "@/components/personality-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import Skills from "@/components/skill-section"

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <PersonalitySection />
            <Skills />
            <ServicesSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
        </>
    )
}

