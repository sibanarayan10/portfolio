import {createFileRoute} from '@tanstack/react-router';
import {AboutSection,SkillsSection} from '@/components/portfolio/Sections';
import {portfolioHead} from '@/lib/portfolio-head';
export const Route=createFileRoute('/about')({head:()=>portfolioHead('About & Technical Skills','Meet Sibanarayan Choudhury: a backend-focused engineer exploring reliability, distributed systems, and AI-assisted development.'),component:About});
function About(){return <><AboutSection/><SkillsSection/></>;}
