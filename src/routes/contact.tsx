import {createFileRoute} from '@tanstack/react-router';
import {ContactSection} from '@/components/portfolio/Sections';
import {portfolioHead} from '@/lib/portfolio-head';
export const Route=createFileRoute('/contact')({head:()=>portfolioHead('Contact','Connect with Sibanarayan Choudhury about backend engineering, developer tools, and interesting engineering opportunities.'),component:Contact});
function Contact(){return <div className="standalone-page"><ContactSection/></div>;}
