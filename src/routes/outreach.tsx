import { createFileRoute } from '@tanstack/react-router';
import { OutreachDashboard } from '@/components/portfolio/OutreachDashboard';

export const Route = createFileRoute('/outreach')({
    head: () => ({
        meta: [
            { title: 'Cold Mail Studio (Private) | Sibanarayan Choudhury' },
            { name: 'robots', content: 'noindex, nofollow' },
            { name: 'description', content: 'Private tailored cold outreach studio for backend engineering roles.' },
        ],
    }),
    component: OutreachPage,
});

function OutreachPage() {
    return <OutreachDashboard />;
}
