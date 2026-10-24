export interface CompanyOutreach {
    id: string;
    company: string;
    domain: string;
    category: 'Fintech / Payments' | 'Enterprise SaaS' | 'Cloud & Systems' | 'Logistics' | 'Risk & Compliance' | 'Consulting & IT' | 'E-Commerce & Consumer Tech' | 'Travel & Mobility';
    targetRole: string;
    headlineMatch: string;
    matchScore: string;
    keySkills: string[];
    talkingPoints: string[];
    subject: string;
    generateBody: (recipient: string) => string;
    followUpSubject: string;
    generateFollowUp: (recipient: string) => string;
    sde1Subject?: string;
    generateSde1Inquiry?: (recipient: string) => string;
}

export function generateSde1InquiryTemplate(companyName: string, recipient: string): string {
    const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
    const company = companyName.trim() || 'your company';
    return `${salutation}

I hope this email finds you well.

I am writing to inquire if there are any current or upcoming openings for an SDE-1 (Backend / Software Development Engineer) role at ${company}.

I currently work as an Associate Software Engineer at Capsitech, specializing in distributed systems, Java / Spring Boot microservices, and high-throughput architectures.

Key Engineering Achievements & Impact:
• High-Throughput Pipelines: Engineered a multi-threaded data ingestion pipeline using RabbitMQ, reducing end-to-end processing time by 90%.
• API Performance & Caching: Implemented distributed caching and query redesigns that reduced database read volume by 60% and improved API latency by 40%.
• Production Reliability: Delivered an enterprise Audit Management Module within 4 months, automated bulk compliance queues for ~4,000 monthly clients, and resolved 50+ P0 production defects to maintain high platform availability.

I would love to explore opportunities to contribute to ${company}'s engineering team. My resume, portfolio, and code repositories are linked below for your review:

• Resume: https://drive.google.com/file/d/1DDxBizxBkScS__Z3prkJ2st3DoO__YSX/view?usp=drive_link
• Portfolio: https://portfolio-ochre-omega-74.vercel.app/
• GitHub: https://github.com/sibanarayan10
• LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/

If there is an active opening or upcoming hiring drive for SDE-1, could you please let me know the application process or connect me with the relevant hiring manager?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
}

export const outreachCompanies: CompanyOutreach[] = [
    // 1. Juspay
    {
        id: 'juspay',
        company: 'Juspay',
        domain: 'Payment Orchestration, UPI Infrastructure & Hyperswitch',
        category: 'Fintech / Payments',
        targetRole: 'Backend / Systems Engineer',
        headlineMatch: 'High-throughput messaging (RabbitMQ 90% latency reduction) & low-latency API caching (60% DB load cut)',
        matchScore: '98% Match',
        keySkills: ['Java', 'Spring Boot', 'Distributed Systems', 'RabbitMQ', 'Apache Kafka', 'Low Latency APIs', 'High Concurrency'],
        talkingPoints: [
            'Hyperswitch is built in Rust; highlight strong CS fundamentals (concurrency, memory management, zero-unhandled states).',
            'Your 90% ingestion pipeline optimization directly maps to transaction webhook ingestion and reconciliation streams.',
            'API caching (40% latency cut, 60% DB read reduction) maps to dynamic payment routing tree evaluations.',
        ],
        subject: 'Application: Backend Engineer – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Juspay’s engineering work on high-scale infrastructure—especially how products like Hyperswitch and HyperUPI deliver five-nines reliability under massive transaction concurrency.

I currently work as an Associate Software Engineer at Capsitech, specializing in distributed systems and high-throughput architectures for SaaS financial platforms. Given Juspay's commitment to high-concurrency, low-latency payment infrastructure, my hands-on background in pipeline ingestion acceleration (90% processing reduction) and read-heavy API caching makes my experience directly relevant to your team's engineering standards:

Key Technical Highlights:
• High-Throughput Pipelines: Engineered a multi-threaded data ingestion pipeline using RabbitMQ, reducing end-to-end processing time by 90%.
• API & Database Optimization: Designed and implemented distributed caching strategies that reduced database read volume by 60% and improved API response latency by 40%.
• Distributed Systems Architecture: Architected resilient, event-driven microservices utilizing Apache Kafka, Docker sandboxing, and AWS infrastructure.

I have attached my resume for your consideration. Additional details regarding my engineering work and background are available below:
• GitHub: https://github.com/sibanarayan10
• LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/

I would welcome the opportunity to discuss how my technical expertise can contribute to Juspay’s engineering initiatives. Would you be available for a brief introductory conversation this week?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Backend Engineer – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note from last week regarding backend engineering opportunities at Juspay. I’d love to connect for a brief 5–10 minute conversation to discuss how my experience in high-throughput pipelines and distributed systems can support your team.

Thank you again for your time,
Sibanarayan Choudhury`;
        },
    },

    // 2. DocuSign
    {
        id: 'docusign',
        company: 'DocuSign',
        domain: 'Agreement Cloud, Document Lifecycle Management & Workflow Automation',
        category: 'Enterprise SaaS',
        targetRole: 'Backend / Software Engineer',
        headlineMatch: 'Direct experience integrating WOPI & WebDAV protocols for direct MS Office document editing (30% time reduction)',
        matchScore: '99% Match',
        keySkills: ['Java', 'Spring Boot', 'WOPI Protocol', 'WebDAV', 'Document Workflows', 'REST APIs', 'State Machines'],
        talkingPoints: [
            'You integrated WOPI & WebDAV protocols for direct document editing at Capsitech—this is DocuSign’s exact core domain.',
            'Workflow state machines from E-Permit demonstrate role-based authorization, transition guards, and audit trails.',
            'API caching and database optimization ensure high-speed retrieval of document metadata and signature statuses.',
        ],
        subject: 'Application: Backend Engineer – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following DocuSign’s engineering work on the Agreement Cloud and secure document workflow automation at global scale.

I currently work as an Associate Software Engineer at Capsitech, specializing in document workflows and distributed backend systems for enterprise platforms. Given DocuSign’s focus on seamless document lifecycle management, my production experience integrating WOPI and WebDAV protocols for direct Office editing makes my background directly relevant to your team's engineering requirements:

Key Technical Highlights:
• Document Protocol Integration: Integrated WOPI and WebDAV protocols, enabling direct in-browser Microsoft Office editing and real-time document saving while cutting handling time by 30%.
• High-Throughput Pipelines: Architected an ingestion pipeline with RabbitMQ and multi-threading, reducing processing time by 90%.
• API & Workflow Scalability: Optimized read-heavy APIs and workflows with caching, cutting database load by 60% and improving response times by 40%.

I have attached my resume for your consideration. Additional details regarding my engineering work and background are available below:
• GitHub: https://github.com/sibanarayan10
• LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/

I would welcome the opportunity to discuss how my technical expertise can contribute to DocuSign’s engineering initiatives. Would you be available for a brief introductory conversation this week?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Backend Engineer – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding backend engineering opportunities at DocuSign. Given my direct production experience integrating WOPI/WebDAV document protocols and workflow automation, I’d welcome a brief 5–10 minute chat to discuss potential team fits.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 3. Chargebee
    {
        id: 'chargebee',
        company: 'Chargebee',
        domain: 'Subscription Billing, Recurring Revenue & Financial SaaS Infrastructure',
        category: 'Fintech / Payments',
        targetRole: 'Backend Engineer (Billing & Core Platforms)',
        headlineMatch: 'Production experience building SaaS financial platforms, bulk client queues, and Audit Management modules',
        matchScore: '96% Match',
        keySkills: ['Java', 'Spring Boot', 'Financial SaaS', 'Queue Processing', 'Azure Queue', 'RabbitMQ', 'PostgreSQL'],
        talkingPoints: [
            'Built core modules for a SaaS financial platform providing bookkeeping, accounting, taxation, and CRM solutions.',
            'Engineered Azure Queue bulk processing for ~4,000 monthly clients with robust error-handling and compliance verification.',
            'Designed Audit Management module delivered end-to-end within 4 months, proving ownership of complex financial business logic.',
        ],
        subject: 'Application: Backend Engineer – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Chargebee’s engineering scale in managing high-volume recurring billing, accounting syncs, and multi-tenant financial infrastructure.

I currently work as an Associate Software Engineer at Capsitech building core backend modules for a SaaS financial platform (bookkeeping, accounting, and compliance). Given Chargebee’s scale in managing recurring billing and financial pipelines, my experience building audit modules, batch client queues, and high-throughput pipelines makes my background directly relevant to your team's engineering standards:

Key Technical Highlights:
• Batch Financial Processing: Engineered Azure Queue-based bulk compliance processing handling ~4,000 clients monthly with automated failover and verification.
• End-to-End Module Ownership: Led the end-to-end development and delivery of an enterprise Audit Management Module within 4 months.
• High-Throughput Ingestion: Re-architected data ingestion using RabbitMQ and multi-threading, slashing processing latency by 90%.

I have attached my resume for your consideration. Additional details regarding my engineering work and background are available below:
• GitHub: https://github.com/sibanarayan10
• LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/

I would welcome the opportunity to discuss how my technical expertise can contribute to Chargebee’s engineering initiatives. Would you be available for a brief introductory conversation this week?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Backend Engineer – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my email regarding backend engineering roles at Chargebee. With my background in SaaS financial systems, queue-based batch processing, and high-concurrency APIs, I’d love to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 4. Citi
    {
        id: 'citi',
        company: 'Citi (Citigroup)',
        domain: 'Global Banking, Institutional Financial Tech & Compliance Systems',
        category: 'Risk & Compliance',
        targetRole: 'Software Engineer (Institutional Clients Group / Backend)',
        headlineMatch: 'Audit module delivery, financial compliance batch pipelines, and 50+ P0 critical bug resolutions',
        matchScore: '95% Match',
        keySkills: ['Java', 'Spring Boot', 'Financial Compliance', 'Auditability', 'P0 Bug Resolution', 'Database Optimization', 'Azure Queue'],
        talkingPoints: [
            'Zero tolerance for data corruption: Delivered end-to-end Audit Management Module for SaaS financial platform.',
            'Resolved 50+ high-priority (P0) production bugs, ensuring platform stability and preventing business-critical failures.',
            'Batch processing for compliance: Automated EPS submissions for ~4,000 clients monthly via Azure Queues.',
        ],
        subject: 'Application: Backend / Software Engineer – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I am writing to express my interest in software engineering roles within Citi’s institutional and financial technology teams.

As an Associate Software Engineer at Capsitech, I build mission-critical modules for financial SaaS platforms where auditability, data integrity, and strict SLAs are paramount. Given Citi's focus on institutional financial technology, transaction accuracy, and regulatory compliance, my hands-on experience delivering audit systems and resolving 50+ critical P0 defects makes my background directly relevant to your team's engineering standards:

Key Technical Highlights:
• Financial Compliance & Audit: Delivered a core enterprise Audit Management Module within 4 months and automated compliance batch pipelines for ~4,000 monthly clients via Azure Queues.
• Data Ingestion & Reliability: Re-engineered backend data ingestion pipelines with RabbitMQ and concurrent threading, achieving a 90% reduction in processing time.
• Database & API Optimization: Redesigned database schemas and implemented caching layers, cutting DB reads by 60% and boosting dynamic query performance by 30%.

I have attached my resume for your consideration. Additional details regarding my engineering work and background are available below:
• GitHub: https://github.com/sibanarayan10
• LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/

I would welcome the opportunity to discuss how my technical expertise can contribute to Citi’s engineering initiatives. Would you be available for a brief introductory conversation this week?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Backend / Software Engineer – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for backend engineering roles at Citi. Given my hands-on experience in financial audit systems, reliable batch compliance pipelines, and database optimization, I’d welcome an opportunity to connect for a brief 5–10 minute discussion.

Thank you for your time,
Sibanarayan Choudhury`;
        },
    },

    // 5. FedEx
    {
        id: 'fedex',
        company: 'FedEx',
        domain: 'Global Logistics, Real-Time Package Tracking & Event Streaming',
        category: 'Logistics',
        targetRole: 'Backend / Distributed Systems Engineer',
        headlineMatch: 'High-throughput event streaming with Kafka & RabbitMQ multi-threaded ingestion pipelines (90% faster)',
        matchScore: '94% Match',
        keySkills: ['Java', 'Spring Boot', 'Apache Kafka', 'Event-Driven Systems', 'RabbitMQ', 'Terraform', 'AWS', 'Docker'],
        talkingPoints: [
            'Logistics at FedEx is all about real-time event streaming: your Kafka experience in HiiCoders matches parcel status feeds.',
            '90% reduction in data ingestion processing times using RabbitMQ and multi-threaded worker pools proves queue mastery.',
            'Cloud infrastructure automated using Terraform on AWS guarantees reproducible, reliable deployment.',
        ],
        subject: 'Application: Backend / Distributed Systems Engineer – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following FedEx’s digital transformation and investments in real-time logistics, intelligent event routing, and cloud-native tracking platforms.

I’m a Backend Engineer at Capsitech specializing in event-driven systems and high-volume data pipelines. Given FedEx’s focus on real-time logistics and intelligent event routing, my hands-on background in high-throughput RabbitMQ ingestion (90% latency reduction) and Apache Kafka event streaming makes my experience directly relevant to your team's distributed infrastructure:

Key Technical Highlights:
• High-Throughput Streaming & Ingestion: Built ingestion pipelines with RabbitMQ and multi-threading that cut processing latency by 90%, alongside Apache Kafka event streaming architectures.
• API & Query Optimization: Implemented caching and query redesigns that slashed database reads by 60% and improved response times by 40%.
• Cloud & Containerization: Provisioned scalable cloud infrastructure using Terraform on AWS and containerized workloads using Docker.

I have attached my resume for your consideration. Additional details regarding my engineering work and background are available below:
• GitHub: https://github.com/sibanarayan10
• LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/

I would welcome the opportunity to discuss how my technical expertise can contribute to FedEx’s engineering initiatives. Would you be available for a brief introductory conversation this week?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Backend / Distributed Systems Engineer – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding backend and distributed systems engineering opportunities at FedEx. With my background in event-driven architectures with Kafka and high-throughput ingestion pipelines, I’d love to connect for a quick introductory chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 6. Cisco
    {
        id: 'cisco',
        company: 'Cisco',
        domain: 'Cloud Platforms, Container Sandboxing, Security & Networking',
        category: 'Cloud & Systems',
        targetRole: 'Software Engineer (Cloud & Systems)',
        headlineMatch: 'Docker container sandboxing with strict network isolation, distroless images (70% size reduction), and Terraform IaC',
        matchScore: '96% Match',
        keySkills: ['Java', 'Spring Boot', 'Docker Sandboxing', 'Distroless Containers', 'Network Isolation', 'Terraform', 'AWS'],
        talkingPoints: [
            'Engineered sandboxed Docker execution with disabled networking, strict CPU/memory limits, and read-only filesystems.',
            'Stripped unnecessary OS packages to create distroless Docker images, reducing container attack surface and size by 70%.',
            'Automated infrastructure-as-code workflows using Terraform on AWS for reproducible environments.',
        ],
        subject: 'Application: Software Engineer (Cloud / Backend) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Cisco’s engineering work on cloud platforms, network observability, and secure distributed infrastructure.

I am a Backend Engineer at Capsitech with hands-on experience in distributed systems, secure container sandboxing, and cloud orchestration. Given Cisco’s focus on cloud platforms and secure distributed infrastructure, my practical experience architecting sandboxed Docker environments (network isolation, distroless images) and automating AWS with Terraform makes my background directly relevant to your team's engineering standards:

Key Technical Highlights:
• Sandboxed Containerization: Architected isolated execution sandboxes using Docker with strict network isolation, tight CPU/memory bounds, and distroless images that reduced container size by 70%.
• High-Throughput Pipelines: Built concurrent data ingestion pipelines using RabbitMQ, cutting execution time by 90%.
• Infrastructure as Code: Automated cloud infrastructure provisioning on AWS utilizing Terraform for reproducible deployments.

I have attached my resume for your consideration. Additional details regarding my engineering work and background are available below:
• GitHub: https://github.com/sibanarayan10
• LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/

I would welcome the opportunity to discuss how my technical expertise can contribute to Cisco’s engineering initiatives. Would you be available for a brief introductory conversation this week?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Cloud / Backend) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for cloud and backend engineering roles at Cisco. With my practical experience in container sandboxing, distroless workload optimization, and Terraform IaC, I’d welcome an opportunity to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 7. Marsh
    {
        id: 'marsh',
        company: 'Marsh (Marsh McLennan)',
        domain: 'Enterprise Risk Management, Insurance Brokerage & Compliance Platforms',
        category: 'Risk & Compliance',
        targetRole: 'Software Engineer – Enterprise Platforms',
        headlineMatch: 'End-to-end Audit Management Module delivery and batch compliance processing for ~4k clients',
        matchScore: '93% Match',
        keySkills: ['Java', 'Spring Boot', 'Enterprise Risk', 'Audit Workflows', 'Database Design', 'Batch Queues', 'SaaS Backend'],
        talkingPoints: [
            'Marsh specializes in global risk, audit, and insurance compliance—aligning with your Audit Management module delivery.',
            'Experience optimizing complex relational database queries by 30% ensures high performance across large client datasets.',
            'High-throughput message queuing handles asynchronous policy data and client compliance checks reliably.',
        ],
        subject: 'Application: Software Engineer – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I am writing to express my interest in software engineering opportunities at Marsh McLennan, particularly within your enterprise risk, insurance, and financial platform engineering teams.

I currently build backend systems for SaaS financial platforms at Capsitech, focusing on data integrity, auditability, and regulatory compliance. Given Marsh McLennan's focus on enterprise risk platforms and compliance workflows, my direct experience building financial audit modules and optimizing complex relational database queries makes my background directly relevant to your team's engineering standards:

Key Technical Highlights:
• Audit & Compliance Systems: Shipped an enterprise Audit Management Module in 4 months and automated compliance batch submissions for ~4,000 monthly clients via message queues.
• High-Throughput Pipelines: Architected multi-threaded RabbitMQ ingestion pipelines, cutting processing times by 90%.
• Database Optimization: Redesigned relational schemas and query structures, reducing database reads by 60% and accelerating query execution by 30%.

I have attached my resume for your consideration. Additional details regarding my engineering work and background are available below:
• GitHub: https://github.com/sibanarayan10
• LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/

I would welcome the opportunity to discuss how my technical expertise can contribute to Marsh McLennan’s engineering initiatives. Would you be available for a brief introductory conversation this week?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding software engineering roles at Marsh McLennan. With my background building financial audit platforms and high-throughput data processing pipelines, I’d love to connect for a brief 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 8. Persistent Systems
    {
        id: 'persistent',
        company: 'Persistent Systems',
        domain: 'Digital Product Engineering, Cloud Modernization & Banking Technology',
        category: 'Consulting & IT',
        targetRole: 'Software Engineer (Cloud & Microservices)',
        headlineMatch: 'Hands-on microservices with Java/Spring Boot, Kafka, AWS, Azure, and 90% pipeline acceleration',
        matchScore: '94% Match',
        keySkills: ['Java', 'Spring Boot', 'Microservices', 'Apache Kafka', 'AWS', 'Azure', 'Terraform'],
        talkingPoints: [
            'Persistent’s clients demand modern, cloud-native microservices: you have proven experience across Java, Spring Boot, and .NET.',
            'Infrastructure provisioning with Terraform and container orchestration with Docker match enterprise modernization projects.',
            'Proven track record of cutting database reads by 60% and API response time by 40% on production services.',
        ],
        subject: 'Application: Software Engineer (Backend / Cloud) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Persistent Systems\' engineering work in digital product engineering, enterprise microservices, and multi-cloud modernization.

As an Associate Software Engineer at Capsitech, I build scalable backend architectures across Java, Spring Boot, and cloud environments. Given Persistent's focus on cloud modernization and enterprise microservices, my hands-on background in event-driven services with Kafka and API latency optimization makes my experience directly relevant to your client delivery teams:

Key Technical Highlights:
• Microservices & Event Streaming: Architected event-driven microservices using Apache Kafka, RabbitMQ, and Docker containerization.
• Cloud & Automation: Hands-on experience with AWS, Azure Queues, and Terraform to automate and scale backend services.
• Performance Engineering: Reduced ingestion processing time by 90% via multi-threading and optimized read-heavy APIs to cut database loads by 60%.

I have attached my resume for your consideration. Additional details regarding my engineering work and background are available below:
• GitHub: https://github.com/sibanarayan10
• LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/

I would welcome the opportunity to discuss how my technical expertise can contribute to Persistent Systems’ engineering initiatives. Would you be available for a brief introductory conversation this week?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Backend / Cloud) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for cloud and backend engineering opportunities at Persistent Systems. I’d love to connect for a quick 5–10 minute chat to discuss how my experience in microservices and cloud infrastructure could support your client initiatives.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 9. Evadviy
    {
        id: 'evadviy',
        company: 'Evadviy',
        domain: 'Scalable Software Engineering, Cloud Transformation & IT Services',
        category: 'Consulting & IT',
        targetRole: 'Backend / Full-Stack Engineer',
        headlineMatch: 'End-to-end full lifecycle delivery, high-throughput pipelines, and 50+ critical bug resolutions',
        matchScore: '93% Match',
        keySkills: ['Java', 'Spring Boot', '.NET', 'REST APIs', 'RabbitMQ', 'PostgreSQL'],
        talkingPoints: [
            'Strong versatility across Java, Spring Boot, .NET, Node.js, and React enables rapid deployment across varying client stacks.',
            'Experience solving 50+ high-priority (P0) production bugs demonstrates rapid debugging and stabilization under pressure.',
            'Delivered full modules from scratch (Audit Management) within aggressive 4-month timelines.',
        ],
        subject: 'Application: Backend / Full-Stack Engineer – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I am writing to express my interest in software engineering roles at Evadviy.

I currently work as an Associate Software Engineer at Capsitech, developing scalable backend architectures and REST services across Java, Spring Boot, .NET, and modern frontend frameworks. Given Evadviy’s focus on rapid digital transformation and robust software delivery, my track record of end-to-end module ownership, pipeline acceleration (90%), and resolving 50+ critical P0 defects makes my experience directly relevant to your engineering team:

Key Technical Highlights:
• High-Throughput Backend: Engineered a multi-threaded data ingestion pipeline using RabbitMQ, reducing processing time by 90%.
• API Performance & Caching: Cut database reads by 60% and improved API response times by 40% through caching layers and query redesigns.
• Full-Lifecycle Delivery: Contributed end-to-end to enterprise modules (including Audit Management and bulk client queues) while resolving 50+ P0 production bugs.

I have attached my resume for your consideration. Additional details regarding my engineering work and background are available below:
• GitHub: https://github.com/sibanarayan10
• LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/

I would welcome the opportunity to discuss how my technical expertise can contribute to Evadviy’s engineering initiatives. Would you be available for a brief introductory conversation this week?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Backend / Full-Stack Engineer – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for backend engineering roles at Evadviy. With my strong background across Java, Spring Boot, and scalable API architecture, I’d love to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 10. Synechron
    {
        id: 'synechron',
        company: 'Synechron',
        domain: 'Digital Financial IT Consulting, Capital Markets & Enterprise Banking',
        category: 'Consulting & IT',
        targetRole: 'Java / Spring Boot Backend Engineer',
        headlineMatch: 'Deep fintech domain experience, financial audit modules, and high-concurrency Java microservices',
        matchScore: '96% Match',
        keySkills: ['Java', 'Spring Boot', 'Microservices', 'RabbitMQ', 'Azure Queue', 'PostgreSQL', 'Financial Compliance'],
        talkingPoints: [
            'Extensive hands-on experience in financial services SaaS (accounting, taxation, and CRM solutions) directly matches Synechron’s banking clients.',
            'Engineered high-throughput multi-threaded pipelines with RabbitMQ (90% faster processing).',
            'Designed and shipped an enterprise Audit Management Module within 4 months, proving ownership of regulatory financial logic.',
        ],
        subject: 'Application: Java / Spring Boot Engineer – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I am writing to express my interest in Java / Spring Boot engineering opportunities at Synechron, particularly within your digital banking and financial software practice.

I currently work as an Associate Software Engineer at Capsitech, specializing in distributed architectures and SaaS financial platforms. Given Synechron’s focus on enterprise banking solutions and capital markets technology, my production experience in financial compliance modules, queue-based batching, and high-throughput Java pipelines makes my background directly relevant to your client delivery standards:

Key Technical Highlights:
• Financial Platform Engineering: Developed core modules for SaaS financial platforms, including an enterprise Audit Management Module and automated compliance queue batching for ~4,000 monthly clients.
• High-Throughput Java Pipelines: Re-architected data ingestion using RabbitMQ and multi-threading in Java/Spring Boot, cutting processing latency by 90%.
• Performance & Caching: Implemented caching strategies that reduced database read volume by 60% and improved API response latency by 40%.

I have attached my resume for your consideration. Additional details are available on GitHub (https://github.com/sibanarayan10) and LinkedIn (https://www.linkedin.com/in/sibanarayan-choudhury/).

Would you be open to a brief 10-minute introductory conversation this week?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Java / Spring Boot Engineer – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for Java / Spring Boot engineering roles at Synechron. With my production experience building financial SaaS architectures and high-throughput ingestion pipelines, I’d welcome an opportunity to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 11. JioHotstar
    {
        id: 'jiohotstar',
        company: 'JioHotstar',
        domain: 'Massive-Scale OTT Streaming, Real-Time Concurrency & Video Pipelines',
        category: 'E-Commerce & Consumer Tech',
        targetRole: 'Backend Engineer (High Concurrency & Distributed Systems)',
        headlineMatch: 'Handling extreme concurrency, read-heavy API caching (60% DB cut), and Kafka event streaming',
        matchScore: '97% Match',
        keySkills: ['Java', 'Spring Boot', 'Apache Kafka', 'Caching / Redis', 'WebSockets', 'Low Latency APIs', 'High Concurrency'],
        talkingPoints: [
            'JioHotstar operates at unprecedented concurrency (IPL live peak traffic): your caching optimizations (60% DB cut, 40% latency cut) match high read pressure.',
            'Kafka event streaming and WebSocket experience in HiiCoders demonstrate real-time data distribution under load.',
            '90% pipeline processing time reduction using multi-threaded worker pools proves queue and concurrency mastery.',
        ],
        subject: 'Application: Backend Engineer – High Concurrency & Systems – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following JioHotstar’s engineering accomplishments in managing record-breaking concurrent streams, low-latency playback telemetry, and real-time event feeds.

I’m a Backend Engineer at Capsitech specializing in high-throughput data processing and low-latency API architectures. Given JioHotstar’s focus on handling extreme live streaming concurrency and sub-second API delivery, my experience in reducing database reads by 60% via caching and scaling real-time Kafka event streams makes my background directly relevant to your platform engineering standards:

Key Technical Highlights:
• Read-Heavy API Optimization: Designed distributed caching layers that slashed database reads by 60% and improved response times by 40% under bursty access patterns.
• High-Throughput Processing: Built concurrent data ingestion pipelines using RabbitMQ and multi-threading, cutting execution latency by 90%.
• Real-Time Event Architecture: Engineered event-driven microservices using Apache Kafka and live real-time WebSocket state streaming.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I’d love to explore how my experience with concurrency and distributed systems can support JioHotstar’s platform. Would you be open to a brief chat this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Backend Engineer – High Concurrency & Systems',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding backend engineering opportunities at JioHotstar. With my practical experience in high-concurrency API caching, Kafka streaming, and low-latency pipeline design, I’d love to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 12. Paytm
    {
        id: 'paytm',
        company: 'Paytm',
        domain: 'Digital Payments, UPI Switch, Wallet & High-Throughput Financial APIs',
        category: 'Fintech / Payments',
        targetRole: 'Software Engineer – Payments & Core Banking',
        headlineMatch: 'High-throughput transactional pipelines, 90% ingestion speedup, and 50+ P0 production fixes',
        matchScore: '97% Match',
        keySkills: ['Java', 'Spring Boot', 'UPI & Payments', 'RabbitMQ', 'Kafka', 'Caching', 'High Concurrency'],
        talkingPoints: [
            'Paytm handles millions of real-time transactions daily: your high-throughput RabbitMQ pipeline (90% faster) matches payment event ingestion.',
            'Caching and dynamic query optimization (30% faster response) prevent database bottlenecks during transaction spikes.',
            'Production experience with 50+ P0 bug resolutions shows reliability under mission-critical payment environments.',
        ],
        subject: 'Application: Software Engineer (Payments & Backend) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Paytm’s engineering scale across UPI payments, soundbox transaction processing, and low-latency financial gateways.

As an Associate Software Engineer at Capsitech, I build distributed backend architectures and high-throughput financial pipelines. Given Paytm’s focus on low-latency UPI payments and high-frequency transaction gateways, my proven background in pipeline ingestion acceleration (90% faster) and read-heavy caching makes my background directly relevant to your team’s engineering standards:

Key Technical Highlights:
• High-Throughput Ingestion: Architected multi-threaded ingestion pipelines with RabbitMQ, reducing end-to-end processing times by 90%.
• Read-Heavy API Performance: Implemented caching layers cutting database read load by 60% and improving API latency by 40%.
• Transaction Reliability & Compliance: Delivered financial SaaS compliance modules and resolved 50+ high-priority (P0) production defects to safeguard platform uptime.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would welcome the opportunity to discuss how my backend background aligns with Paytm’s payment platform. Are you available for a brief introductory call this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Payments & Backend) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding software engineering opportunities on Paytm’s payments and backend teams. I’d love to connect for a quick 5–10 minute conversation to discuss how my high-throughput pipeline experience can contribute to your team.

Thank you,
Sibanarayan Choudhury`;
        },
    },

    // 13. Emerson
    {
        id: 'emerson',
        company: 'Emerson',
        domain: 'Industrial Automation, IoT Data Ingestion & Mission-Critical Software',
        category: 'Cloud & Systems',
        targetRole: 'Software Engineer – Java / Industrial IoT & Cloud',
        headlineMatch: 'Industrial-grade data ingestion pipelines (90% latency reduction) and containerized sandboxes',
        matchScore: '94% Match',
        keySkills: ['Java', 'Spring Boot', 'Data Pipelines', 'RabbitMQ', 'Docker Sandboxing', 'PostgreSQL', 'Multi-threading'],
        talkingPoints: [
            'Emerson requires extreme reliability for sensor/industrial telemetry: your 90% pipeline acceleration using multi-threading aligns directly.',
            'Docker sandboxing with strict network isolation and resource limits demonstrates industrial safety principles.',
            'Experience writing clean, maintainable Java/Spring Boot services with robust exception handling and zero-downtime tolerance.',
        ],
        subject: 'Application: Software Engineer (Java / Backend) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I am writing to express my interest in software engineering opportunities at Emerson, particularly within your industrial automation and cloud-connected telemetry software teams.

I currently work as an Associate Software Engineer at Capsitech, specializing in high-throughput data pipelines and robust backend architectures. Given Emerson’s focus on industrial telemetry and mission-critical cloud software, my hands-on experience accelerating data pipelines by 90% and designing secure, isolated container environments makes my background directly relevant to your engineering requirements:

Key Technical Highlights:
• High-Throughput Data Ingestion: Architected a multi-threaded data ingestion pipeline using RabbitMQ, reducing end-to-end processing time by 90%.
• Reliable Containerization: Engineered secure Docker execution environments with strict resource constraints, network isolation, and distroless images (70% footprint reduction).
• Database & Service Optimization: Redesigned relational schemas and query structures, boosting dynamic data query speeds by 30%.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

Would you be open to a brief introductory conversation this week?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Java / Backend) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for Java and backend engineering roles at Emerson. With my background in high-throughput multi-threaded pipelines and containerized architectures, I’d welcome an opportunity to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 14. American Express
    {
        id: 'amex',
        company: 'American Express (Amex)',
        domain: 'Global Credit Networks, High-Reliability Card Auth & Risk Engines',
        category: 'Fintech / Payments',
        targetRole: 'Engineer – Java / Spring Boot (Card & Fraud Systems)',
        headlineMatch: 'High-reliability financial platforms, audit compliance modules, and 50+ critical P0 resolutions',
        matchScore: '96% Match',
        keySkills: ['Java', 'Spring Boot', 'Microservices', 'Apache Kafka', 'Caching', 'Financial Integrity', 'P0 Bug Fixing'],
        talkingPoints: [
            'Amex requires five-nines availability and transactional integrity: your financial SaaS background matches their audit and compliance expectations.',
            'High-speed API caching (40% latency reduction, 60% DB read reduction) maps directly to real-time card authorization checks.',
            'Event-driven microservices with Kafka isolate critical core paths from high-latency batch workloads.',
        ],
        subject: 'Application: Java / Spring Boot Engineer – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following American Express’s engineering leadership in building world-class financial processing networks, real-time risk evaluation systems, and cloud-native Java microservices.

I currently work as an Associate Software Engineer at Capsitech, developing backend architectures for SaaS financial platforms where reliability and transaction integrity are critical. Given American Express’s uncompromising standards for transaction integrity and five-nines availability, my experience in financial audit compliance, distributed caching, and critical P0 resolution makes my background directly relevant to your team's engineering requirements:

Key Technical Highlights:
• Financial Compliance & Audit: Delivered an enterprise Audit Management Module within 4 months and automated compliance batch queues for ~4,000 monthly clients.
• Low-Latency API Optimization: Implemented distributed caching that slashed database reads by 60% and improved API latency by 40%.
• System Resilience: Collaborated across engineering teams to triage and resolve 50+ high-priority (P0) production defects, maintaining zero-tolerance standards for platform downtime.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would welcome the opportunity to discuss how my backend background aligns with American Express. Are you open to a brief introductory conversation this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Java / Spring Boot Engineer – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding Java / Spring Boot engineering opportunities at American Express. With my background in financial SaaS platforms and low-latency API optimization, I’d love to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 15. CommerceIQ
    {
        id: 'commerceiq',
        company: 'CommerceIQ',
        domain: 'Algorithmic E-Commerce Decisioning, Retail Automation & Data Pipelines',
        category: 'Enterprise SaaS',
        targetRole: 'Software Engineer – Backend & Data Ingestion',
        headlineMatch: 'High-throughput data ingestion pipelines (90% faster) and distributed microservices with Kafka',
        matchScore: '95% Match',
        keySkills: ['Java', 'Spring Boot', 'Data Ingestion', 'RabbitMQ', 'Apache Kafka', 'PostgreSQL', 'Multi-threading'],
        talkingPoints: [
            'CommerceIQ continuously ingests massive streams of e-commerce catalog and ad data: your 90% pipeline acceleration using multi-threading directly fits.',
            'QueryDSL and database query redesign (30% faster dynamic queries) ensure lightning-fast analytics across deep retail catalogs.',
            'Event-driven architectures using Kafka handle bursty data ingestion without overwhelming core analytics engines.',
        ],
        subject: 'Application: Backend Engineer (Data Pipelines) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following CommerceIQ’s innovations in retail ecommerce management, algorithmic sales decisioning, and large-scale data ingestion engines.

I am an Associate Software Engineer at Capsitech specializing in high-throughput data processing and scalable backend architectures. Given CommerceIQ’s focus on large-scale e-commerce data ingestion and algorithmic automation, my experience accelerating ingestion pipelines by 90% and optimizing dynamic queries makes my background directly relevant to your platform engineering standards:

Key Technical Highlights:
• High-Throughput Ingestion: Built concurrent data ingestion pipelines using RabbitMQ and multi-threading, slashing processing time by 90%.
• Dynamic Database Query Optimization: Redesigned relational schemas and dynamic queries using QueryDSL, resulting in 30% faster response times for complex analytical datasets.
• Distributed Microservices: Decoupled heavy evaluation workloads from core API paths using Apache Kafka and isolated container environments.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would love to explore how my experience with data pipelines can support CommerceIQ’s platform. Would you be available for a brief conversation this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Backend Engineer (Data Pipelines) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for backend and data pipeline engineering roles at CommerceIQ. With my proven experience accelerating high-throughput ingestion by 90% and optimizing dynamic queries, I’d love to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 16. Infor
    {
        id: 'infor',
        company: 'Infor',
        domain: 'Cloud Enterprise ERP, Industry Cloud Platforms & Supply Chain',
        category: 'Enterprise SaaS',
        targetRole: 'Software Engineer – Cloud ERP & Java Backend',
        headlineMatch: 'End-to-end enterprise module delivery (Audit Management), bulk client queues, and database optimization',
        matchScore: '94% Match',
        keySkills: ['Java', 'Spring Boot', 'Enterprise ERP', 'Azure Queue', 'PostgreSQL', 'WOPI / WebDAV', 'REST APIs'],
        talkingPoints: [
            'Infor builds industry-specific Cloud ERPs: your experience delivering SaaS financial modules (bookkeeping, accounting, audit) provides immediate domain context.',
            'WOPI and WebDAV integrations demonstrate direct experience connecting enterprise document ecosystems into cloud software.',
            'Batch queuing with Azure Queues for ~4,000 monthly clients proves ability to handle enterprise-grade transaction volumes.',
        ],
        subject: 'Application: Software Engineer (Java / Cloud ERP) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I am writing to express my interest in software engineering roles within Infor’s CloudSuite and enterprise application engineering teams.

I currently work as an Associate Software Engineer at Capsitech, building enterprise SaaS modules for financial and business operations. Given Infor’s leadership in industry cloud ERPs, my direct experience delivering enterprise audit modules, integrating WOPI/WebDAV document protocols, and automating bulk client queues makes my background directly relevant to your cloud solutions:

Key Technical Highlights:
• Enterprise Module Delivery: Led the end-to-end development of an enterprise Audit Management Module within 4 months, directly improving business workflows.
• Document Ecosystem Integration: Integrated WOPI and WebDAV protocols, enabling direct in-app Microsoft Office document editing and cutting document handling time by 30%.
• High-Volume Batch Processing: Implemented Azure Queue batch pipelines processing ~4,000 monthly clients with robust automated verification.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would welcome the opportunity to discuss how my enterprise background can contribute to Infor’s cloud solutions. Would you be available for a brief introductory call this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Java / Cloud ERP) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding software engineering opportunities at Infor. With my background in enterprise SaaS modules, document integrations, and batch queue architectures, I’d love to connect for a brief 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 17. HPE
    {
        id: 'hpe',
        company: 'HPE (Hewlett Packard Enterprise)',
        domain: 'Hybrid Cloud, HPE GreenLake, Edge-to-Cloud Infrastructure & Storage',
        category: 'Cloud & Systems',
        targetRole: 'Software Engineer – Cloud Services & Systems',
        headlineMatch: 'Container sandboxing, distroless Docker images (70% size cut), Terraform IaC, and distributed systems',
        matchScore: '95% Match',
        keySkills: ['Java', 'Spring Boot', 'Docker', 'Distroless Containers', 'Terraform', 'AWS', 'Distributed Systems'],
        talkingPoints: [
            'HPE GreenLake focuses on cloud-native containerized platforms: your distroless Docker optimization (70% footprint reduction) aligns with storage efficiency.',
            'Infrastructure automation using Terraform on AWS demonstrates infrastructure-as-code proficiency.',
            'Decoupling execution services with Kafka shows deep understanding of distributed system fault tolerance.',
        ],
        subject: 'Application: Software Engineer (Cloud Services) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Hewlett Packard Enterprise’s engineering advancements in edge-to-cloud platforms, HPE GreenLake cloud services, and hybrid storage infrastructure.

I am a Backend Engineer at Capsitech with hands-on experience in distributed systems, containerization, and cloud automation. Given HPE’s focus on scalable cloud services and efficient infrastructure, my hands-on background in container optimization (70% distroless footprint reduction), Terraform IaC, and Kafka microservices makes my experience directly relevant to your cloud platform roadmap:

Key Technical Highlights:
• Efficient Containerization: Implemented distroless Docker images that stripped unnecessary OS packages, slashing container size by 70% and improving storage efficiency.
• Infrastructure as Code: Automated reproducible cloud infrastructure provisioning utilizing Terraform on AWS.
• Resilient Microservices: Architected event-driven microservices with Apache Kafka, isolating heavy workloads from user-facing request latency.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would welcome the opportunity to discuss how my background in cloud systems aligns with HPE’s engineering roadmap. Are you available for a brief conversation this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Cloud Services) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for cloud software engineering roles at HPE. With my experience in container optimization, Terraform IaC, and distributed microservices, I’d welcome an opportunity to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 18. WEX
    {
        id: 'wex',
        company: 'WEX',
        domain: 'Corporate Payments, Fleet Mobility & Financial Technology Solutions',
        category: 'Fintech / Payments',
        targetRole: 'Software Engineer – Payments & Financial Platforms',
        headlineMatch: 'Financial SaaS platform modules, batch queues for ~4k clients, and 60% database read reduction',
        matchScore: '94% Match',
        keySkills: ['Java', 'Spring Boot', 'Fintech', 'Batch Settlement', 'RabbitMQ', 'Azure Queue', 'PostgreSQL'],
        talkingPoints: [
            'WEX manages high-frequency B2B payment transactions: your financial platform experience matches fleet payment accounting and reconciliation.',
            'Batch processing with Azure Queues (~4,000 clients monthly) demonstrates scalable settlement processing.',
            'API caching and database optimization ensure high-speed card authorization and balance lookups.',
        ],
        subject: 'Application: Software Engineer (Payments Platform) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following WEX’s global leadership in simplifying corporate payments, commercial fleet transaction infrastructure, and embedded fintech.

I currently work as an Associate Software Engineer at Capsitech, specializing in backend architectures for SaaS financial platforms. Given WEX’s scale in corporate payment processing and fleet financial technology, my direct experience in automated batch queue pipelines (~4,000 monthly clients) and API caching makes my background directly relevant to your platform engineering standards:

Key Technical Highlights:
• Financial Compliance & Settlement: Engineered Azure Queue batch pipelines processing compliance records for ~4,000 monthly clients with automated verification.
• High-Throughput Processing: Reduced data ingestion processing time by 90% via multi-threaded RabbitMQ architectures.
• Low-Latency APIs: Designed caching layers that cut database read loads by 60% and improved response times by 40%.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would welcome the opportunity to discuss how my financial platform background can support WEX’s payment platforms. Would you be open to a brief introductory call this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Payments Platform) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding software engineering opportunities on WEX’s payments platform team. I’d love to connect for a quick 5–10 minute chat to discuss how my background in financial SaaS and batch processing can benefit your team.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 19. Atomicwork
    {
        id: 'atomicwork',
        company: 'Atomicwork',
        domain: 'AI-First Modern Workplace Service Desk & IT Workflow Automation',
        category: 'Enterprise SaaS',
        targetRole: 'Backend / Software Engineer (AI & Workflows)',
        headlineMatch: 'Hands-on AI agent loops, LLM orchestration, and enterprise workflow state machine architectures',
        matchScore: '98% Match',
        keySkills: ['Java', 'TypeScript', 'Spring Boot', 'Agentic Workflows', 'LLM Orchestration', 'State Machines', 'REST APIs'],
        talkingPoints: [
            'Atomicwork builds AI-powered employee service management: your AgentForge project (agent loop, retry logic, tool calling) is an exact cultural and technical match.',
            'Workflow state machine architecture from E-Permit demonstrates role-based approvals and ticket lifecycle management.',
            'AI-assisted platform (Pixhunt) using Gemini Vision and SSE streaming shows hands-on production LLM integration.',
        ],
        subject: 'Application: Backend Engineer (AI & Workflows) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Atomicwork’s mission to modernize enterprise employee service management and ITSM using conversational AI and intelligent workflow orchestration.

I am an Associate Software Engineer at Capsitech working on scalable backend architectures and AI-powered developer tools. Given Atomicwork’s focus on AI-first workplace automation, my direct experience architecting agentic execution loops (turn limits, retries, tool calling) and multi-stage workflow state machines makes my background directly relevant to your engineering requirements:

Key Technical Highlights:
• Agentic Execution Loops (AgentForge): Architected a fault-tolerant agentic execution loop with automated retries, turn limits, and secure tool-calling capabilities using Anthropic & OpenAI SDKs.
• AI Streaming Architectures (Pixhunt): Engineered an AI-assisted media platform using Gemini Vision and SSE streaming, cutting analysis latency to ~400ms.
• Enterprise Workflow Automation: Built complex multi-stage approval lifecycle state machines with role-based access control and audit tracking.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would love to explore how my experience with backend architectures and agentic AI systems can contribute to Atomicwork. Are you open to a brief chat this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Backend Engineer (AI & Workflows) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding engineering roles at Atomicwork. With my practical experience building agentic execution loops and workflow state machines, I’d love to connect for a brief 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 20. Flipkart
    {
        id: 'flipkart',
        company: 'Flipkart',
        domain: 'E-Commerce Marketplace, High-Scale Order Fulfillment & Big Billion Days Architecture',
        category: 'E-Commerce & Consumer Tech',
        targetRole: 'Software Development Engineer (Backend / SDE-I / SDE-II)',
        headlineMatch: 'Handling extreme read pressure (60% DB cut), Kafka event streaming, and 90% pipeline acceleration',
        matchScore: '97% Match',
        keySkills: ['Java', 'Spring Boot', 'Apache Kafka', 'Caching / Redis', 'PostgreSQL', 'High Concurrency', 'Microservices'],
        talkingPoints: [
            'Flipkart is renowned for Java/Spring microservices handling Big Billion Days traffic: your caching optimizations (60% DB read reduction) match catalog read bursts.',
            'Decoupling heavy execution via Apache Kafka event streaming directly parallels Flipkart’s order queuing and inventory allocation.',
            '90% pipeline ingestion speedup using multi-threaded worker pools proves deep understanding of thread pools and concurrent data structures.',
        ],
        subject: 'Application: SDE (Backend / Java) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Flipkart’s engineering milestones in scaling India’s largest e-commerce platform and managing massive flash-sale concurrency during Big Billion Days.

As an Associate Software Engineer at Capsitech, I build high-throughput distributed systems in Java and Spring Boot. Given Flipkart’s scale in handling extreme flash-sale read traffic and asynchronous order events, my hands-on experience reducing database reads by 60% via caching and decoupling workloads with Kafka makes my background directly relevant to your team's engineering standards:

Key Technical Highlights:
• High-Throughput Processing: Architected a multi-threaded data ingestion pipeline using RabbitMQ, reducing end-to-end processing time by 90%.
• Read-Heavy Optimization: Implemented distributed caching that slashed database read loads by 60% and improved API latency by 40% under burst traffic.
• Event-Driven Microservices: Engineered scalable services utilizing Apache Kafka for asynchronous event propagation and workload decoupling.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would welcome the opportunity to discuss how my backend background aligns with Flipkart’s engineering standards. Would you be available for a brief introductory call this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: SDE (Backend / Java) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding SDE backend opportunities at Flipkart. With my proven experience in high-concurrency API caching, Kafka streaming, and Java/Spring microservices, I’d love to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 21. Cleartrip
    {
        id: 'cleartrip',
        company: 'Cleartrip',
        domain: 'Online Travel Agency, Flight/Hotel Search Engines & Real-Time Pricing',
        category: 'Travel & Mobility',
        targetRole: 'Software Engineer – Travel Search & Booking Platforms',
        headlineMatch: 'Low-latency search API caching (60% DB read cut, 40% speedup) and high-throughput query optimization',
        matchScore: '96% Match',
        keySkills: ['Java', 'Spring Boot', 'Low Latency APIs', 'Caching', 'QueryDSL', 'PostgreSQL', 'High Concurrency'],
        talkingPoints: [
            'Cleartrip is a search-heavy, low-latency flight/hotel engine: your 60% database read cut and 40% API latency cut are an exact match.',
            'QueryDSL and database query redesign (30% faster response times) map directly to multi-filter flight search matrix queries.',
            'Event streaming with Kafka handles booking confirmation queues and asynchronous airline API handshakes.',
        ],
        subject: 'Application: Software Engineer (Backend / Search) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Cleartrip’s engineering focus on delivering lightning-fast travel search, seamless flight booking flows, and low-latency fare aggregation.

I am an Associate Software Engineer at Capsitech specializing in read-heavy API optimization and high-performance backend systems. Given Cleartrip’s focus on low-latency flight/hotel search engines and real-time fare retrieval, my proven experience slashing database reads by 60% and optimizing dynamic queries makes my background directly relevant to your platform engineering standards:

Key Technical Highlights:
• Search & Latency Optimization: Designed distributed caching strategies that reduced database read pressure by 60% and improved API response latency by 40%.
• Dynamic Query Performance: Redesigned relational schemas and dynamic queries with QueryDSL, boosting response times for complex multi-parameter data by 30%.
• Asynchronous Ingestion: Built multi-threaded data pipelines using RabbitMQ, reducing end-to-end execution latency by 90%.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would love to explore how my experience with low-latency APIs can support Cleartrip’s search and booking platforms. Would you be open to a brief chat this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Backend / Search) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding backend engineering opportunities on Cleartrip’s search and booking platform teams. I’d love to connect for a quick 5–10 minute chat to discuss potential team fits.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 22. Swiggy
    {
        id: 'swiggy',
        company: 'Swiggy',
        domain: 'Hyperlocal Food Delivery, Instamart Quick Commerce & Real-Time Logistics',
        category: 'E-Commerce & Consumer Tech',
        targetRole: 'Software Development Engineer (Backend / SDE-I / SDE-II)',
        headlineMatch: 'High-throughput real-time event streaming with Kafka, WebSockets, and 90% pipeline acceleration',
        matchScore: '97% Match',
        keySkills: ['Java', 'Spring Boot', 'Apache Kafka', 'WebSockets', 'Redis Caching', 'High Concurrency', 'Microservices'],
        talkingPoints: [
            'Swiggy handles intense dinner/lunch peak traffic: your caching optimizations (60% DB cut, 40% speedup) match menu browsing bursts.',
            'Real-time WebSocket streaming in HiiCoders matches live driver tracking and incremental order status updates.',
            'Kafka event streaming architecture matches order placement, dispatch routing, and notification events.',
        ],
        subject: 'Application: SDE Backend – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Swiggy’s engineering scale across food delivery logistics, Instamart quick commerce, and real-time order tracking infrastructure.

As an Associate Software Engineer at Capsitech, I build distributed backend microservices and high-throughput event pipelines. Given Swiggy’s focus on high-concurrency order placement and real-time event streaming, my experience in reducing database reads by 60% and architecting Kafka event pipelines makes my background directly relevant to your platform engineering standards:

Key Technical Highlights:
• High-Throughput Pipelines: Built concurrent ingestion pipelines using RabbitMQ and multi-threading, slashing processing time by 90%.
• Read-Heavy Optimization: Implemented distributed caching that reduced database reads by 60% and improved API latency by 40% under burst access.
• Real-Time Event Architecture: Engineered event-driven microservices using Apache Kafka and live real-time state streaming over WebSockets.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would love to explore how my experience with high-concurrency systems can support Swiggy. Would you be open to a brief introductory conversation this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: SDE Backend – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding SDE backend opportunities at Swiggy. With my practical experience in Kafka event streaming, low-latency API caching, and Java/Spring microservices, I’d love to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 23. CRED
    {
        id: 'cred',
        company: 'CRED',
        domain: 'High-Trust Fintech, Credit Card Bill Payments & Reward Orchestration',
        category: 'Fintech / Payments',
        targetRole: 'Backend Engineer – Payments & Financial Services',
        headlineMatch: 'High-trust financial platform development, auditability, 50+ P0 resolutions, and Kafka event streaming',
        matchScore: '96% Match',
        keySkills: ['Java', 'Spring Boot', 'Fintech', 'Apache Kafka', 'Caching', 'Financial Integrity', 'P0 Bug Resolution'],
        talkingPoints: [
            'CRED requires impeccable design and zero-defect financial processing: your Audit Management module delivery matches their financial integrity standards.',
            'Resolved 50+ high-priority (P0) production defects, proving dependability under high-stakes operations.',
            'Event-driven architectures using Kafka handle payment settlement queues and reward processing asynchronously.',
        ],
        subject: 'Application: Backend Engineer (Payments & Core) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following CRED’s engineering culture—especially your focus on high-trust financial architecture, microsecond performance, and resilient event-driven systems.

I currently work as an Associate Software Engineer at Capsitech building core modules for SaaS financial platforms. Given CRED’s commitment to high-trust payment workflows and zero-downtime reliability, my direct experience building financial audit modules and resolving 50+ critical P0 production defects makes my background directly relevant to your platform engineering standards:

Key Technical Highlights:
• Financial Reliability & Audit: Developed an enterprise Audit Management Module within 4 months and automated compliance batch queues for ~4,000 monthly clients.
• High-Throughput Processing: Architected a multi-threaded ingestion pipeline using RabbitMQ, reducing end-to-end processing times by 90%.
• System Resilience: Toggled and resolved 50+ critical P0 production bugs to maintain high availability and prevent transaction failures.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would welcome the opportunity to discuss how my backend expertise aligns with CRED’s platform team. Are you open to a brief chat this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Backend Engineer (Payments & Core) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding backend engineering opportunities at CRED. With my background in financial SaaS platforms and high-throughput pipeline design, I’d love to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 24. Razorpay
    {
        id: 'razorpay',
        company: 'Razorpay',
        domain: 'Payment Gateway Infrastructure, Neo-Banking & Webhook Ingestion',
        category: 'Fintech / Payments',
        targetRole: 'Software Development Engineer (Backend / Payments)',
        headlineMatch: 'High-throughput webhook ingestion (RabbitMQ 90% faster), caching (60% DB cut), and 50+ P0 resolutions',
        matchScore: '98% Match',
        keySkills: ['Java', 'Spring Boot', 'Payment Gateway', 'RabbitMQ', 'Apache Kafka', 'Caching', 'High Availability'],
        talkingPoints: [
            'Razorpay handles massive webhook ingestion volumes from thousands of merchants: your 90% pipeline acceleration using RabbitMQ matches directly.',
            'Caching and dynamic query redesign (30% faster response) prevent database strain during flash sales.',
            'Proven track record fixing 50+ P0 production bugs guarantees high availability for financial APIs.',
        ],
        subject: 'Application: SDE (Backend / Payments) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Razorpay’s engineering excellence in scaling India’s leading payment gateway, neo-banking APIs, and zero-downtime webhook ingestion pipelines.

I am an Associate Software Engineer at Capsitech specializing in high-throughput financial architectures. Given Razorpay’s focus on massive webhook ingestion volumes and low-latency payment processing, my direct background in pipeline acceleration (90% processing reduction) and API caching makes my experience directly relevant to your payment platform standards:

Key Technical Highlights:
• High-Throughput Ingestion: Re-architected data ingestion using RabbitMQ and multi-threading, cutting processing latency by 90%.
• Low-Latency API Optimization: Designed distributed caching that reduced database reads by 60% and improved API latency by 40%.
• Financial Systems Ownership: Delivered an enterprise Audit Management Module within 4 months and resolved 50+ critical P0 production issues.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would love to explore how my experience with financial pipelines can support Razorpay’s payment platform. Are you available for a brief introductory call this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: SDE (Backend / Payments) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for SDE backend roles at Razorpay. With my direct experience building high-throughput financial pipelines and optimizing low-latency APIs, I’d love to connect for a brief 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 25. MakeMyTrip
    {
        id: 'makemytrip',
        company: 'MakeMyTrip',
        domain: 'Travel Booking Aggregator, Flight Inventory Caching & High-Volume Search',
        category: 'Travel & Mobility',
        targetRole: 'Software Engineer – Travel Search & Booking',
        headlineMatch: 'Read-heavy API caching (60% DB cut), dynamic query optimization (30% speedup), and Java microservices',
        matchScore: '96% Match',
        keySkills: ['Java', 'Spring Boot', 'Caching / Redis', 'QueryDSL', 'High Concurrency', 'PostgreSQL', 'Microservices'],
        talkingPoints: [
            'MakeMyTrip processes huge search-to-booking ratios: your 60% database read cut and 40% API latency cut are tailored for flight/hotel search engines.',
            'QueryDSL and dynamic query optimization (30% faster response times) match multi-filter hotel and fare aggregation matrices.',
            'Asynchronous pipeline architecture ensures background inventory polling without slowing down user searches.',
        ],
        subject: 'Application: Software Engineer (Java / Backend) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following MakeMyTrip’s engineering innovations in handling immense flight and hotel search volumes, real-time fare caching, and seamless booking engines.

I currently work as an Associate Software Engineer at Capsitech, specializing in read-heavy API optimization and high-performance Java microservices. Given MakeMyTrip’s focus on high-throughput search aggregation and real-time inventory caching, my proven background cutting database reads by 60% and optimizing complex dynamic queries makes my experience directly relevant to your search platform standards:

Key Technical Highlights:
• Search & Cache Optimization: Implemented distributed caching that slashed database read loads by 60% and improved API latency by 40%.
• Dynamic Query Performance: Redesigned database schemas and queries using QueryDSL, resulting in 30% faster response times for multi-parameter dynamically fetched data.
• High-Throughput Processing: Architected multi-threaded ingestion pipelines with RabbitMQ, reducing end-to-end processing time by 90%.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would welcome the opportunity to discuss how my backend background can contribute to MakeMyTrip’s search and booking platforms. Would you be open to a brief call this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Java / Backend) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding software engineering opportunities on MakeMyTrip’s backend teams. I’d love to connect for a quick 5–10 minute chat to discuss how my background in low-latency APIs and caching can support your team.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 26. Morgan Stanley
    {
        id: 'morganstanley',
        company: 'Morgan Stanley',
        domain: 'Global Investment Banking, Algorithmic Trading Systems & Financial Computing',
        category: 'Risk & Compliance',
        targetRole: 'Technology Analyst / Software Engineer (Core Java)',
        headlineMatch: 'Deep multi-threading mastery (90% pipeline speedup), financial audit compliance, and memory-conscious Java design',
        matchScore: '95% Match',
        keySkills: ['Core Java', 'Multi-threading', 'Spring Boot', 'Data Structures', 'Financial Compliance', 'PostgreSQL'],
        talkingPoints: [
            'Morgan Stanley is one of the world’s elite Core Java shops: your multi-threaded RabbitMQ pipeline (90% faster) demonstrates thread synchronization and concurrency.',
            'Delivered enterprise Audit Management module for financial platforms with zero tolerance for state discrepancies.',
            'Strong CS fundamentals (concurrency, memory management, algorithmic data querying) map directly to capital markets technology.',
        ],
        subject: 'Application: Software Engineer (Core Java / Technology) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I am writing to express my interest in software engineering opportunities within Morgan Stanley’s technology and financial engineering divisions.

I currently work as an Associate Software Engineer at Capsitech, developing mission-critical architectures for SaaS financial platforms where data integrity, low latency, and concurrency are paramount. Given Morgan Stanley’s focus on high-performance financial computing and multi-threaded Core Java architectures, my hands-on experience scaling concurrent ingestion pipelines (90% speedup) and delivering financial audit systems makes my background directly relevant to your engineering standards:

Key Technical Highlights:
• Multi-Threaded Java Pipelines: Architected a concurrent data ingestion pipeline using RabbitMQ and multi-threading, cutting processing time by 90%.
• Financial Compliance & Audit: Delivered an enterprise Audit Management Module within 4 months and automated compliance batch queues for ~4,000 monthly clients.
• API & Database Optimization: Designed caching strategies that reduced database read volume by 60% and improved API latency by 40%.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would welcome the opportunity to discuss how my technical foundation aligns with Morgan Stanley’s engineering standards. Are you available for a brief introductory conversation this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Core Java / Technology) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for software engineering roles at Morgan Stanley. With my strong background in multi-threaded Java systems and financial audit compliance, I’d welcome an opportunity to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 27. Goldman Sachs
    {
        id: 'goldmansachs',
        company: 'Goldman Sachs',
        domain: 'Global Investment Banking, Marquee Platform & Transaction Banking Tech',
        category: 'Risk & Compliance',
        targetRole: 'Software Engineer – Global Technology & Transaction Banking',
        headlineMatch: 'Financial platform auditability, multi-threaded pipelines (90% speedup), and 50+ P0 production resolutions',
        matchScore: '95% Match',
        keySkills: ['Core Java', 'Spring Boot', 'Microservices', 'Transaction Banking', 'Data Integrity', 'High Concurrency'],
        talkingPoints: [
            'Goldman Sachs Transaction Banking requires uncompromised precision: your Audit Management module delivery demonstrates regulatory software ownership.',
            'Multi-threaded data ingestion pipeline (90% faster processing) proves capability in handling high-velocity financial records.',
            'Production stabilization resolving 50+ P0 bugs shows resilience under enterprise-critical pressure.',
        ],
        subject: 'Application: Software Engineer – Global Technology – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I am writing to express my interest in software engineering opportunities within Goldman Sachs’ Global Technology and Transaction Banking engineering teams.

As an Associate Software Engineer at Capsitech, I build distributed backend architectures and financial compliance modules where transaction accuracy and system availability are critical. Given Goldman Sachs’ standards for transaction banking reliability and financial auditability, my direct experience delivering audit modules, accelerating ingestion pipelines by 90%, and resolving 50+ critical P0 defects makes my background directly relevant to your team's engineering standards:

Key Technical Highlights:
• Financial Compliance & Audit: Led the end-to-end development of an enterprise Audit Management Module within 4 months and automated compliance batch queues for ~4,000 monthly clients.
• Multi-Threaded Java Architecture: Engineered a high-throughput data ingestion pipeline using RabbitMQ and multi-threading, reducing processing latency by 90%.
• System Resilience & Quality: Resolved 50+ high-priority (P0) production defects to safeguard financial data integrity and platform reliability.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would welcome the opportunity to discuss how my backend background aligns with Goldman Sachs’ engineering initiatives. Would you be open to an introductory conversation this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer – Global Technology – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for engineering roles at Goldman Sachs. With my practical experience building financial audit systems and multi-threaded Java pipelines, I’d love to connect for a brief 5–10 minute discussion.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 28. Walmart Global Tech
    {
        id: 'walmart',
        company: 'Walmart Global Tech',
        domain: 'Global Retail Supply Chain, Planetary-Scale Fulfillment & Store Tech',
        category: 'E-Commerce & Consumer Tech',
        targetRole: 'Software Engineer – Supply Chain & Inventory Platforms',
        headlineMatch: 'High-throughput ingestion (90% faster), Kafka event streaming, and cloud containerization',
        matchScore: '96% Match',
        keySkills: ['Java', 'Spring Boot', 'Apache Kafka', 'Distributed Systems', 'RabbitMQ', 'Docker', 'AWS'],
        talkingPoints: [
            'Walmart processes billions of item tracking events daily: your 90% pipeline acceleration using multi-threaded RabbitMQ aligns with store data ingestion.',
            'Event-driven microservices with Kafka isolate heavy workloads from user-facing request latency.',
            'Database schema and dynamic query redesign (30% faster response times) ensure lightning-fast inventory lookups.',
        ],
        subject: 'Application: Software Engineer (Backend / Java) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Walmart Global Tech’s scale in modernizing retail supply chains, planetary fulfillment networks, and real-time inventory management engines.

I currently work as an Associate Software Engineer at Capsitech building distributed backend architectures in Java and Spring Boot. Given Walmart’s scale in high-volume supply chain telemetry and planetary inventory fulfillment, my experience accelerating ingestion pipelines by 90% and decoupling workloads via Apache Kafka makes my background directly relevant to your platform engineering standards:

Key Technical Highlights:
• High-Throughput Ingestion: Built concurrent data ingestion pipelines using RabbitMQ and multi-threading, cutting execution latency by 90%.
• Read-Heavy API Optimization: Designed distributed caching layers that slashed database reads by 60% and improved response times by 40%.
• Event-Driven Microservices: Architected microservices with Apache Kafka to decouple heavy workloads from core user API request latency.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would love to explore how my experience with distributed systems can support Walmart’s platform. Would you be available for a brief conversation this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Backend / Java) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding software engineering opportunities at Walmart Global Tech. With my proven experience in high-throughput data pipelines and Kafka event streaming, I’d love to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 29. Oracle
    {
        id: 'oracle',
        company: 'Oracle',
        domain: 'Enterprise Cloud Infrastructure (OCI), Database Platforms & Cloud Applications',
        category: 'Cloud & Systems',
        targetRole: 'Software Developer – Java & Cloud Applications',
        headlineMatch: 'Deep database schema redesign (30% speedup), container sandboxing, and enterprise Java microservices',
        matchScore: '95% Match',
        keySkills: ['Java', 'Spring Boot', 'SQL / Database Design', 'PostgreSQL', 'Docker Sandboxing', 'Microservices', 'REST APIs'],
        talkingPoints: [
            'Oracle is the cornerstone of enterprise Java and database technologies: your schema redesign and query optimization (30% speedup) demonstrate database fluency.',
            'Container sandboxing with strict network isolation and distroless images (70% size cut) shows deep virtualization understanding.',
            'Hands-on experience delivering enterprise modules (Audit Management) shows software maturity.',
        ],
        subject: 'Application: Software Developer (Java / Cloud) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I am writing to express my interest in software engineering opportunities at Oracle, particularly within your enterprise cloud applications and database technology engineering teams.

I currently work as an Associate Software Engineer at Capsitech, developing scalable backend architectures across Java, Spring Boot, and cloud databases. Given Oracle’s engineering focus on enterprise cloud platforms and database performance, my hands-on background in relational schema redesign (30% query speedup), container sandboxing, and high-throughput pipelines makes my experience directly relevant to your team's engineering standards:

Key Technical Highlights:
• Database Schema & Query Optimization: Redesigned relational database schemas and complex queries, achieving a 30% speedup in dynamic data retrieval.
• High-Throughput Processing: Architected a multi-threaded data ingestion pipeline using RabbitMQ, reducing end-to-end processing time by 90%.
• Secure Containerization: Implemented sandboxed Docker environments with disabled networking, strict resource limits, and distroless images (70% size reduction).

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would welcome the opportunity to discuss how my technical foundation aligns with Oracle’s engineering standards. Are you available for a brief introductory call this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Developer (Java / Cloud) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for Java and cloud software engineering roles at Oracle. With my practical experience in database query optimization, containerization, and enterprise Java backend services, I’d love to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 30. Intuit
    {
        id: 'intuit',
        company: 'Intuit',
        domain: 'Financial Software, QuickBooks, TurboTax & AI-Driven Financial Workflows',
        category: 'Fintech / Payments',
        targetRole: 'Software Engineer (Java / Backend & Workflows)',
        headlineMatch: 'Direct experience building bookkeeping, accounting, taxation, and Audit Management SaaS software',
        matchScore: '99% Match',
        keySkills: ['Java', 'Spring Boot', 'Accounting & Tax SaaS', 'Audit Modules', 'Azure Queue', 'Caching', 'AI Workflows'],
        talkingPoints: [
            'Intuit’s core products are TurboTax and QuickBooks: you build bookkeeping, accounting, and taxation SaaS software at Capsitech—this is an exact 1:1 domain match!',
            'Shipped an Audit Management Module end-to-end in 4 months, proving ability to master regulatory financial logic.',
            'Batch queuing with Azure Queues for ~4,000 monthly clients aligns with peak tax season batch filings.',
        ],
        subject: 'Application: Software Engineer (Fintech & Backend) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Intuit’s engineering innovations in powering prosperity through AI-driven financial platforms like QuickBooks, TurboTax, and Credit Karma.

I currently work as an Associate Software Engineer at Capsitech developing core backend modules for a SaaS financial platform (bookkeeping, accounting, and taxation). Given Intuit’s mission to power accounting and tax platforms at massive scale, my direct production experience in financial audit modules, accounting workflows, and batch compliance queues makes my background directly relevant to your team's engineering requirements:

Key Technical Highlights:
• Financial SaaS Domain Expertise: Designed and delivered an enterprise Audit Management Module within 4 months, alongside automated compliance batch submissions for ~4,000 monthly clients via Azure Queues.
• High-Throughput Ingestion: Built concurrent data ingestion pipelines with RabbitMQ and multi-threading, cutting processing latency by 90%.
• Read-Heavy Optimization: Implemented distributed caching that slashed database reads by 60% and improved API latency by 40%.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

Given my direct production experience in accounting and taxation software, I’d love to explore how I can contribute to Intuit’s engineering teams. Would you be open to a brief chat this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Fintech & Backend) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my note regarding software engineering opportunities at Intuit. Given my direct production experience building accounting, taxation, and financial audit modules, I’d welcome an opportunity to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 31. SAP Labs
    {
        id: 'sap',
        company: 'SAP Labs',
        domain: 'Enterprise Cloud ERP, Business Technology Platform & Mission-Critical Data',
        category: 'Enterprise SaaS',
        targetRole: 'Developer – Enterprise Cloud Services & Java',
        headlineMatch: 'Enterprise financial modules, WOPI/WebDAV document integrations, and database query redesign (30% speedup)',
        matchScore: '95% Match',
        keySkills: ['Java', 'Spring Boot', 'Enterprise ERP', 'Database Design', 'WOPI / WebDAV', 'RabbitMQ', 'REST APIs'],
        talkingPoints: [
            'SAP Labs develops the world’s leading enterprise business platforms: your enterprise SaaS background in financial and audit modules provides direct alignment.',
            'Integration with WOPI and WebDAV for real-time document editing demonstrates ability to interface with enterprise workplace protocols.',
            'Database schema and dynamic query redesign resulting in 30% speedups ensures high-performance retrieval across large corporate datasets.',
        ],
        subject: 'Application: Developer (Java / Enterprise Cloud) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I am writing to express my interest in software development opportunities within SAP Labs’ Enterprise Cloud and Business Technology Platform engineering teams.

I currently work as an Associate Software Engineer at Capsitech, specializing in scalable backend architectures and enterprise modules for business platforms. Given SAP’s leadership in mission-critical enterprise cloud ERPs, my direct experience delivering enterprise financial audit modules, integrating WOPI/WebDAV document protocols, and accelerating data pipelines by 90% makes my background directly relevant to your cloud solutions:

Key Technical Highlights:
• Enterprise Financial Module Ownership: Delivered an enterprise Audit Management Module within 4 months, alongside automated compliance batch submissions for ~4,000 monthly clients.
• Document Ecosystem Integration: Integrated WOPI and WebDAV protocols, enabling direct in-app Microsoft Office editing and saving while cutting document handling time by 30%.
• High-Throughput Java Pipelines: Re-architected data ingestion using RabbitMQ and multi-threading, achieving a 90% reduction in processing time.

I have attached my resume for your consideration (GitHub: https://github.com/sibanarayan10 | LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/).

I would welcome the opportunity to discuss how my enterprise background can contribute to SAP’s cloud solutions. Would you be available for a brief introductory call this week?

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Developer (Java / Enterprise Cloud) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for Java and enterprise cloud developer roles at SAP Labs. With my practical experience in enterprise financial modules, document integrations, and database optimization, I’d love to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },

    // 32. Akamai
    {
        id: 'akamai',
        company: 'Akamai',
        domain: 'Edge Computing, Content Delivery Networks (CDN) & Cloud Security',
        category: 'Cloud & Systems',
        targetRole: 'Software Engineer (Edge Cloud & Distributed Systems)',
        headlineMatch: 'Low-latency distributed caching (60% DB read cut), network isolation, and container sandboxing',
        matchScore: '97% Match',
        keySkills: ['Java', 'Spring Boot', 'Distributed Systems', 'Caching', 'Docker Sandboxing', 'Network Isolation', 'Low Latency'],
        talkingPoints: [
            'Akamai powers global edge delivery and CDN traffic: your caching optimizations (60% DB read reduction, 40% latency cut) map directly to edge cache offload.',
            'Docker sandboxing with strict network isolation and distroless containers (70% size cut) mirrors secure edge compute isolation.',
            'Multi-threaded high-throughput ingestion with RabbitMQ (90% faster) demonstrates deep grasp of network socket concurrency.',
        ],
        subject: 'Application: Software Engineer (Edge Cloud & Systems) – Sibanarayan Choudhury',
        generateBody: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

I’ve been following Akamai’s leadership in planetary-scale edge delivery, cloud security, and the growth of the Akamai Connected Cloud platform.

I currently work as an Associate Software Engineer at Capsitech, specializing in distributed systems, high-concurrency data pipelines, and low-latency architectures. Given Akamai’s focus on edge compute performance, content distribution, and secure network isolation, my hands-on background in distributed caching (60% read reduction) and secure container sandboxing makes my experience directly relevant to your platform engineering standards:

Key Technical Highlights:
• Distributed Caching & Latency Optimization: Designed caching strategies that cut database read pressure by 60% and improved API latency by 40% under burst access patterns.
• Secure Container Sandboxing: Architected isolated execution environments using Docker with strict network isolation, bounded CPU/memory quotas, and distroless images (70% size reduction).
• High-Throughput Processing: Engineered a multi-threaded data ingestion pipeline using RabbitMQ, reducing end-to-end processing time by 90%.

I have attached my resume for your consideration. Additional details regarding my engineering work and background are available below:
• Portfolio: https://portfolio-ochre-omega-74.vercel.app/
• GitHub: https://github.com/sibanarayan10
• LinkedIn: https://www.linkedin.com/in/sibanarayan-choudhury/

I would welcome the opportunity to discuss how my distributed systems background aligns with Akamai’s edge engineering initiatives. Would you be available for a brief introductory conversation this week?

Thank you for your time and consideration.

Sincerely,
Sibanarayan Choudhury
+91 7848916166 | sibanarayan.code@gmail.com`;
        },
        followUpSubject: 'Re: Application: Software Engineer (Edge Cloud & Systems) – Sibanarayan Choudhury',
        generateFollowUp: (recipient: string) => {
            const salutation = recipient.trim() ? `Hi ${recipient.trim()},` : 'Dear Hiring Team,';
            return `${salutation}

Following up on my application for edge cloud and distributed systems engineering roles at Akamai. With my practical background in low-latency caching, secure container sandboxing, and high-throughput pipelines, I’d love to connect for a quick 5–10 minute chat.

Best regards,
Sibanarayan Choudhury`;
        },
    },
];
