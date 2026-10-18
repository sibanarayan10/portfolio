// Replace null values with your real links and portrait. No private keys belong here.
export const profile = {
    name: 'Sibanarayan Choudhury', initials: 'SC', title: 'Backend-Focused Software Engineer',
    status: 'Building reliable systems', role: 'Associate Software Engineer', company: 'Capsitech',
    portrait: null as string | null, email: "sibanarayan.code@gmail.com" as string | null, github: "https://github.com/sibanarayan10" as string | null,
    linkedin: "https://www.linkedin.com/in/sibanarayan-choudhury/" as string | null, resume: 'https://drive.google.com/file/d/1DDxBizxBkScS__Z3prkJ2st3DoO__YSX/view?usp=drive_link' as string | null,
    // A public form-service endpoint that validates submissions on its server.
    contactEndpoint: "https://formspree.io/f/mrpedglb" as string | null,
    bio: "I'm a backend-focused software engineer working with distributed systems, microservices, cloud infrastructure, and AI-powered developer tools. I enjoy turning complex engineering challenges into reliable, efficient, and maintainable software.",
};
export const experience = [{ company: profile.company, role: profile.role, dates: 'Present', location: null as string | null, responsibilities: [] as string[], technologies: [] as string[] }];
export type Project = {
    slug: string; name: string; subtitle: string; description: string; categories: string[]; stack: string[];
    problem: string; approach: string; features: string[]; tradeoffs: string[]; results: { value: string; label: string }[];
    github: string | null; demo: string | null; kind: 'architecture' | 'images' | 'terminal' | 'workflow';
};
export const projects: Project[] = [
    {
        slug: 'hii-coder', name: 'Hii-Coder', subtitle: 'Microservices-based competitive programming & code execution platform', kind: 'architecture',
        description: 'A distributed competitive coding platform engineered with dedicated microservices, event-driven orchestration via Kafka, secure sandboxed Docker code execution, and real-time WebSocket feedback.',
        categories: ['Distributed Systems', 'Backend', 'Cloud Infrastructure', 'Full Stack'], stack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Docker', 'Apache Kafka', 'WebSockets', 'AWS', 'Terraform'],
        problem: 'Running untrusted user code alongside core web APIs creates severe security risks, resource contention, and execution bottlenecks. During live coding contests and traffic bursts, querying central databases for problem definitions, hidden test cases, and user verification creates heavy read pressure. Furthermore, executing multi-case test suites without real-time feedback leaves users waiting blindly for verdicts while cold container startups degrade evaluation throughput.',
        approach: 'Architected a distributed microservices ecosystem decoupling core domain services from a high-performance judge and execution engine using Apache Kafka and shared domain contracts. To eliminate cross-service database contention during burst traffic, the execution service maintains synchronized local read snapshots populated by domain event streams. Untrusted code runs inside isolated Docker sandboxes configured with strict resource quotas, disabled networking, read-only filesystems, and bounded timeouts. Real-time WebSockets handle both live user presence tracking across coding problems and streaming incremental test-case progress directly to a multi-panel React IDE.',
        features: [
            'Microservices architecture decoupling core user and problem management from high-throughput code execution workloads',
            'Asynchronous event-driven inter-service messaging with Apache Kafka for submission queuing and result propagation',
            'Synchronized local read-only database snapshots in the judge service to withstand high-concurrency traffic bursts without central database contention',
            'Secure, isolated Docker execution sandbox with disabled networking, strict CPU and memory bounds, read-only root filesystems, and execution timeouts',
            'Instant, non-blocking submission ingestion providing immediate acknowledgment while background workers process execution queues',
            'Real-time test-case streaming over WebSockets providing live incremental pass/fail progress updates as code runs',
            'Live presence tracking over WebSockets displaying real-time active user avatars on coding problems',
            'Shared domain and security library standardizing JWT authentication, unified data contracts, and cross-service event schemas',
            'Modern multi-panel web IDE with syntax-highlighted code editing, custom test case runners, timer widgets, and user streak analytics',
            'Automated CI/CD deployments and cloud infrastructure provisioned with Terraform on AWS'
        ],
        tradeoffs: [
            'Maintaining event-synchronized local database snapshots eliminates cross-service read bottlenecks during traffic spikes, but requires eventual consistency handling across domain event streams.',
            'Decoupling code compilation and evaluation into dedicated sandboxed workers introduces message queue overhead, but guarantees that untrusted scripts cannot degrade core API availability or compromise the host environment.',
            'Streaming incremental test-case results over WebSockets provides immediate visual feedback, requiring persistent connection state management and lifecycle cleanup across concurrent submissions.',
            'Enforcing strict sandbox constraints (no network access, tight memory/CPU quotas, and limited temporary storage) ensures host security and fairness, requiring precise language test harnesses to capture standard I/O.'
        ],
        results: [{ value: '< 500 ms', label: 'Execution startup · from ~3 s' }, { value: '~70%', label: 'Reported image-size reduction' }, { value: '100%', label: 'Network & sandbox isolation' }], github: null, demo: "https://hiicoders.xyz/",
    },
    {
        slug: 'e-permit', name: 'E-Permit', subtitle: 'Enterprise electronic permit-to-work platform', kind: 'workflow',
        description: 'An enterprise-grade Electronic Permit-to-Work platform designed to digitize and manage workplace safety workflows across multi-role approvals, active execution, and closure verification.',
        categories: ['Full Stack', 'Enterprise Application', 'Workflow Automation'], stack: ['React', 'TypeScript', 'Fluent UI', 'Vite', 'React Router', 'Axios', 'REST APIs', 'React Context'],
        problem: 'Traditional permit-to-work processes rely on fragmented paperwork, manual handoffs, and siloed approvals, making it difficult to verify safety compliance, inspect real-time permit status, or audit historical closures. E-Permit centralizes and digitizes the entire permit lifecycle with role-based access control and transparent workflow progression.',
        approach: 'Engineered as a modular enterprise React application organized into feature-driven modules, centralized API services, and typed workflow constants. Built with Fluent UI for enterprise-grade design consistency, protected routes with role-based authorization (Initiator, Issuer, Executor, Admin), and React Context for application-level state. Implemented multi-stage lifecycle transitions, structured hazard and PPE checklists, and responsive drawer and modal workflows rather than treating safety permits as basic CRUD records.',
        features: ['Create and manage electronic permits across categories including Electrical, Mechanical, Hot Work, Confined Space, Height Work, Excavation, and General', 'Multi-stage workflow lifecycle: Initiation, Review, Execution, Active Work, Closure, and Verification', 'Role-based authorization with distinct permissions for Client, Admin, Sub Admin, Initiator, Executor, and Issuer', 'Safety and hazard management with real-time PPE compliance tracking and workplace hazard verification', 'Feature-based modular React architecture with centralized REST API service layer and typed state', 'Search, status filtering, and workflow drawer & modal interfaces for operational clarity', 'Responsive enterprise UI built with Fluent UI, lazy-loaded routes, and centralized status definitions', 'Supporting enterprise modules including dashboards, user management, and safety workflows'],
        tradeoffs: ['A strict multi-stage workflow state machine prevents safety policy violations and premature execution, requiring rigorous state validation at every role handoff.', 'Client-side role-based routing and context provide responsive UI gating, while requiring strict backend authorization on every API endpoint to enforce compliance.', 'Centralized safety taxonomies and feature-based modularization increase initial architecture boilerplate but make adding new permit categories and compliance rules predictable.'],
        results: [], github: 'https://github.com/sibanarayan10/E-Permit.Api', demo: "https://e-permit-app-frontend.vercel.app/",
    },
    {
        slug: 'search-image', name: 'SearchImage', subtitle: 'Image discovery & social platform', kind: 'images',
        description: 'An image discovery experience backed by full-text search, asynchronous AI tagging, and social interactions.',
        categories: ['Full Stack', 'Backend'], stack: ['PostgreSQL', 'Cloudinary', 'REST APIs'],
        problem: 'Image discovery needs more than file storage: meaningful search, relevant results, and background enrichment must work alongside interactive social features.',
        approach: 'Store image assets in Cloudinary, use PostgreSQL full-text search and ranking functions for discovery, and process AI-assisted image tagging asynchronously through Kafka.',
        features: ['Image uploads and cloud storage', 'PostgreSQL full-text search and relevance ranking', 'Asynchronous AI-assisted tagging', 'Kafka background processing', 'Likes, comments, saved images, and following', 'Authentication and backend API design'],
        tradeoffs: ['Database-native search keeps search logic close to application data; relevance depends on thoughtful indexing and ranking.', 'Background tagging keeps uploads independent of enrichment, but tags may not be available immediately.'], results: [], github: "https://github.com/sibanarayan10/search-image", demo: "https://pixhunt.xyz/",
    },
    {
        slug: 'ai-coding-agent', name: 'AI Coding Agent CLI', subtitle: 'An iterative, tool-using coding agent', kind: 'terminal',
        description: 'A provider-agnostic command-line agent built around streaming model output and iterative tool execution.',
        categories: ['AI Tooling', 'Backend'], stack: ['LLM APIs', 'Tool Calling', 'Async Streaming', 'Agent Orchestration'],
        problem: 'An effective coding agent must coordinate model output, tools, and results without assuming a single provider or letting an execution loop run indefinitely.',
        approach: 'Use a provider-agnostic LLM abstraction with an iterative execution loop. Process text and tool calls incrementally, return tool results to the model, and bound execution with configurable turn limits.',
        features: ['Model → tool → result execution loop', 'Anthropic and OpenAI-compatible providers', 'Asynchronous model-output streaming', 'Incremental text and tool-call processing', 'Configurable turn limits', 'Fault-tolerant tool execution'],
        tradeoffs: ['A shared provider abstraction improves portability while needing to accommodate differences in streaming protocols.', 'Turn limits bound execution; fault-tolerant tools preserve useful results when individual calls fail.'], results: [], github: "https://github.com/sibanarayan10/AgentForge", demo: null,
    },
];
export const filters = ['All projects', 'Backend', 'Distributed Systems', 'Cloud Infrastructure', 'Full Stack', 'Enterprise Application', 'AI Tooling'];
export const skills = [
    { name: 'Languages', items: ['Java', 'C#', 'TypeScript', 'JavaScript', 'SQL'] },
    { name: 'Backend engineering', items: ['Spring Boot', 'ASP.NET Core', 'Node.js', 'REST APIs', 'Microservices'] },
    { name: 'Messaging & systems', items: ['Apache Kafka', 'RabbitMQ', 'WebSockets / STOMP'] },
    { name: 'Databases & caching', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
    { name: 'Infrastructure & DevOps', items: ['Docker', 'AWS', 'Terraform', 'GitHub Actions'] },
    { name: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS'] },
    { name: 'AI development', items: ['LLM APIs', 'Streaming responses', 'Tool calling', 'Agent orchestration'] },
];
export const notes: { title: string; summary: string; topic: string; date: string; url: string }[] = [];
export const noteIdeas = ['Docker sandboxing & execution isolation', 'Distroless Java workloads', 'Kafka-based asynchronous workflows', 'Real-time WebSocket streaming in code judges', 'Full-text search with PostgreSQL'];