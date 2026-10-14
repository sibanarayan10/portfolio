import { createFileRoute, notFound } from '@tanstack/react-router';
import { projects } from '@/data/portfolio';
import { portfolioHead } from '@/lib/portfolio-head';
import { CaseStudy } from '@/components/portfolio/Sections';
export const Route = createFileRoute('/projects/$slug')({ loader: ({ params }) => { const project = projects.find(p => p.slug === params.slug); if (!project) throw notFound(); return project; }, head: ({ loaderData }) => portfolioHead(loaderData ? `${loaderData.name} — Case Study` : 'Project Unavailable', loaderData?.description ?? 'This engineering project could not be found.'), component: ProjectDetail });
function ProjectDetail() {
    const project = Route.useLoaderData();
    return <CaseStudy project={ project }/>
}
