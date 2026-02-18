import { AboutSection } from "@/pages/about-section"
import { ContactSection } from "@/pages/contact-section"
import { ExperienceSection } from "@/pages/experience-section"
import { HeroSection } from "@/pages/hero-section"
import { PersonalitySection } from "@/pages/personality-section"
import { ProjectsSection } from "@/pages/projects-section"
import { ServicesSection } from "@/pages/services-section"
import Skills from "@/pages/skill-section"

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

