import {createFileRoute} from '@tanstack/react-router';
import {NotesSection} from '@/components/portfolio/Sections';
import {portfolioHead} from '@/lib/portfolio-head';
export const Route=createFileRoute('/notes')({head:()=>portfolioHead('Engineering Notes','Sibanarayan Choudhury’s upcoming notes on container pooling, Kafka workflows, LLM tool loops, and PostgreSQL search.'),component:Notes});
function Notes(){return <div className="standalone-page"><NotesSection/></div>;}
