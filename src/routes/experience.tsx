import {createFileRoute} from '@tanstack/react-router';
import {ExperienceSection} from '@/components/portfolio/Sections';
import {portfolioHead} from '@/lib/portfolio-head';
export const Route=createFileRoute('/experience')({head:()=>portfolioHead('Professional Experience','Sibanarayan Choudhury’s professional journey, currently Assistant System Engineer at Capsitech.'),component:Experience});
function Experience(){return <div className="standalone-page"><ExperienceSection/></div>;}
