import { createFileRoute } from '@tanstack/react-router';
import { AboutSection, ContactSection, ExperienceSection, FeaturedProjects, HeroSection, NotesSection, SkillsSection } from '@/components/portfolio/Sections';
import { portfolioHead } from '@/lib/portfolio-head';
export const Route = createFileRoute('/')({head:()=>portfolioHead('Backend-Focused Software Engineer','Explore Sibanarayan Choudhury’s backend systems, distributed applications, cloud infrastructure, and AI-powered developer tools.'),component:Index});
function Index(){return <><HeroSection/><FeaturedProjects/><AboutSection/><ExperienceSection/><SkillsSection/><NotesSection/><ContactSection/></>;}
