// Replace null values with your real links and portrait. No private keys belong here.
export const profile = {
    name: 'Sibanarayan Choudhury', initials: 'SC', title: 'Backend-Focused Software Engineer',
    status: 'Building reliable systems', role: 'Assistant System Engineer', company: 'Capsitech',
    portrait: null as string | null, email: null as string | null, github: null as string | null,
    linkedin: null as string | null, resume: null as string | null,
    // A public form-service endpoint that validates submissions on its server.
    contactEndpoint: null as string | null,
    bio: "I'm a backend-focused software engineer working with distributed systems, microservices, cloud infrastructure, and AI-powered developer tools. I enjoy turning complex engineering challenges into reliable, efficient, and maintainable software.",
};
export const experience = [{ company: profile.company, role: profile.role, dates: 'Present', location: null as string | null, responsibilities: [] as string[], technologies: [] as string[] }];
export type Project = {
    slug: string; name: string; subtitle: string; description: string; categories: string[]; stack: string[];
    problem: string; approach: string; features: string[]; tradeoffs: string[]; results: { value: string; label: string }[];
    github: string | null; demo: string | null; kind: 'architecture' | 'images' | 'terminal';
};
export const projects: Project[] = [
    {
        slug: 'hii-coder', name: 'Hii-Coder', subtitle: 'Real-time coding platform', kind: 'architecture',
        description: 'A microservices-based platform for solving DSA problems, with isolated, efficient code execution.',
        categories: ['Backend', 'Distributed Systems', 'Cloud Infrastructure'], stack: ['Java', 'Spring Boot', 'Docker', 'Kafka', 'AWS', 'Terraform'],
        problem: 'Running untrusted code alongside core API workloads creates isolation and performance challenges. Starting a fresh container for every submission adds noticeable latency.',
        approach: 'Separate execution workloads from the core API, coordinate services asynchronously with Kafka, and maintain a reusable pool of Docker containers. Provision infrastructure with Terraform and automate deployment through GitHub Actions.',
        features: ['Isolated code execution workloads', 'Reusable Docker container pool', 'Distroless Java runtime images', 'Kafka-based inter-service communication', 'AWS infrastructure provisioned with Terraform', 'Automated deployments with GitHub Actions'],
        tradeoffs: ['Container reuse reduces startup time, but requires careful lifecycle management and workload isolation.', 'Asynchronous messaging decouples services while introducing additional coordination and operational complexity.', 'Minimal runtime images reduce footprint but make interactive debugging less convenient.'],
        results: [{ value: '< 500 ms', label: 'Execution startup · from ~3 s' }, { value: '~70%', label: 'Reported image-size reduction' }], github: null, demo: null,
    },
    {
        slug: 'search-image', name: 'SearchImage', subtitle: 'Image discovery & social platform', kind: 'images',
        description: 'An image discovery experience backed by full-text search, asynchronous AI tagging, and social interactions.',
        categories: ['Full Stack', 'Backend', 'Distributed Systems'], stack: ['PostgreSQL', 'Kafka', 'Cloudinary', 'REST APIs'],
        problem: 'Image discovery needs more than file storage: meaningful search, relevant results, and background enrichment must work alongside interactive social features.',
        approach: 'Store image assets in Cloudinary, use PostgreSQL full-text search and ranking functions for discovery, and process AI-assisted image tagging asynchronously through Kafka.',
        features: ['Image uploads and cloud storage', 'PostgreSQL full-text search and relevance ranking', 'Asynchronous AI-assisted tagging', 'Kafka background processing', 'Likes, comments, saved images, and following', 'Authentication and backend API design'],
        tradeoffs: ['Database-native search keeps search logic close to application data; relevance depends on thoughtful indexing and ranking.', 'Background tagging keeps uploads independent of enrichment, but tags may not be available immediately.'], results: [], github: null, demo: null,
    },
    {
        slug: 'ai-coding-agent', name: 'AI Coding Agent CLI', subtitle: 'An iterative, tool-using coding agent', kind: 'terminal',
        description: 'A provider-agnostic command-line agent built around streaming model output and iterative tool execution.',
        categories: ['AI Tooling', 'Backend'], stack: ['LLM APIs', 'Tool Calling', 'Async Streaming', 'Agent Orchestration'],
        problem: 'An effective coding agent must coordinate model output, tools, and results without assuming a single provider or letting an execution loop run indefinitely.',
        approach: 'Use a provider-agnostic LLM abstraction with an iterative execution loop. Process text and tool calls incrementally, return tool results to the model, and bound execution with configurable turn limits.',
        features: ['Model → tool → result execution loop', 'Anthropic and OpenAI-compatible providers', 'Asynchronous model-output streaming', 'Incremental text and tool-call processing', 'Configurable turn limits', 'Fault-tolerant tool execution'],
        tradeoffs: ['A shared provider abstraction improves portability while needing to accommodate differences in streaming protocols.', 'Turn limits bound execution; fault-tolerant tools preserve useful results when individual calls fail.'], results: [], github: null, demo: null,
    },
];
export const filters = ['All projects', 'Backend', 'Distributed Systems', 'Cloud Infrastructure', 'Full Stack', 'AI Tooling'];
export const skills = [
    { name: 'Languages', items: ['Java', 'C#', 'TypeScript', 'JavaScript', 'SQL'] },
    { name: 'Backend engineering', items: ['Spring Boot', 'ASP.NET Core', 'Node.js', 'REST APIs', 'Microservices'] },
    { name: 'Messaging & systems', items: ['Apache Kafka', 'RabbitMQ'] },
    { name: 'Databases & caching', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
    { name: 'Infrastructure & DevOps', items: ['Docker', 'AWS', 'Terraform', 'GitHub Actions'] },
    { name: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS'] },
    { name: 'AI development', items: ['LLM APIs', 'Streaming responses', 'Tool calling', 'Agent orchestration'] },
];
export const notes: { title: string; summary: string; topic: string; date: string; url: string }[] = [];
export const noteIdeas = ['Container pooling & execution latency', 'Distroless Java workloads', 'Kafka-based asynchronous workflows', 'Inside an LLM tool-calling loop', 'Full-text search with PostgreSQL'];