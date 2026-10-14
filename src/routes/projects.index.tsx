import {createFileRoute} from '@tanstack/react-router';
import {ProjectGallery} from '@/components/portfolio/Sections';
import {portfolioHead} from '@/lib/portfolio-head';
export const Route=createFileRoute('/projects/')({head:()=>portfolioHead('Engineering Projects','Explore Hii-Coder, SearchImage, and an AI Coding Agent CLI. Filter backend, distributed systems, infrastructure, full-stack and AI projects.'),component:Projects});
function Projects(){return <div className="standalone-page"><ProjectGallery/></div>;}
