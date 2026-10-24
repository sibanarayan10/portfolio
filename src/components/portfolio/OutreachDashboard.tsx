import { useState, useEffect } from 'react';
import { 
    Building2, Copy, Check, ExternalLink, Mail, Search, Sparkles, 
    ArrowUpRight, Clock, Send, MessageSquareText, FileText, CheckCircle2,
    Briefcase, ShieldCheck, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { outreachCompanies, generateSde1InquiryTemplate, type CompanyOutreach } from '@/data/outreach';

type StatusType = 'Not Sent' | 'Sent / Applied' | 'Follow-up Sent' | 'Interviewing' | 'Archived';

const STATUS_OPTIONS: StatusType[] = ['Not Sent', 'Sent / Applied', 'Follow-up Sent', 'Interviewing', 'Archived'];

const STATUS_COLORS: Record<StatusType, { bg: string; text: string; border: string }> = {
    'Not Sent': { bg: 'color-mix(in oklab, var(--muted-foreground) 10%, transparent)', text: 'var(--muted-foreground)', border: 'var(--border)' },
    'Sent / Applied': { bg: 'color-mix(in oklab, var(--blue) 15%, transparent)', text: 'var(--blue)', border: 'color-mix(in oklab, var(--blue) 30%, transparent)' },
    'Follow-up Sent': { bg: 'color-mix(in oklab, var(--violet) 15%, transparent)', text: 'var(--violet)', border: 'color-mix(in oklab, var(--violet) 30%, transparent)' },
    'Interviewing': { bg: 'color-mix(in oklab, var(--primary) 18%, transparent)', text: 'var(--primary)', border: 'color-mix(in oklab, var(--primary) 40%, transparent)' },
    'Archived': { bg: 'color-mix(in oklab, var(--border) 40%, transparent)', text: 'var(--muted-foreground)', border: 'var(--border)' },
};

export function OutreachDashboard() {
    const [selectedCompanyId, setSelectedCompanyId] = useState<string>(outreachCompanies[0]?.id ?? 'juspay');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [categoryFilter, setCategoryFilter] = useState<string>('All');
    const [recipientNames, setRecipientNames] = useState<Record<string, string>>({});
    const [statuses, setStatuses] = useState<Record<string, StatusType>>({});
    const [notes, setNotes] = useState<Record<string, string>>({});
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'initial' | 'sde1' | 'followup'>('initial');
    const [showUniversalTool, setShowUniversalTool] = useState<boolean>(false);
    const [customCompany, setCustomCompany] = useState<string>('');
    const [customRecipient, setCustomRecipient] = useState<string>('');

    // Load persisted state from localStorage
    useEffect(() => {
        try {
            const savedStatuses = localStorage.getItem('sc_outreach_statuses');
            if (savedStatuses) setStatuses(JSON.parse(savedStatuses));

            const savedRecipients = localStorage.getItem('sc_outreach_recipients');
            if (savedRecipients) setRecipientNames(JSON.parse(savedRecipients));

            const savedNotes = localStorage.getItem('sc_outreach_notes');
            if (savedNotes) setNotes(JSON.parse(savedNotes));
        } catch {
            // Safe fallback if localStorage is disabled
        }
    }, []);

    const updateStatus = (companyId: string, newStatus: StatusType) => {
        const updated = { ...statuses, [companyId]: newStatus };
        setStatuses(updated);
        try {
            localStorage.setItem('sc_outreach_statuses', JSON.stringify(updated));
            toast.success(`Status updated to "${newStatus}" for ${outreachCompanies.find(c => c.id === companyId)?.company}`);
        } catch {}
    };

    const updateRecipient = (companyId: string, name: string) => {
        const updated = { ...recipientNames, [companyId]: name };
        setRecipientNames(updated);
        try {
            localStorage.setItem('sc_outreach_recipients', JSON.stringify(updated));
        } catch {}
    };

    const updateNotes = (companyId: string, noteText: string) => {
        const updated = { ...notes, [companyId]: noteText };
        setNotes(updated);
        try {
            localStorage.setItem('sc_outreach_notes', JSON.stringify(updated));
        } catch {}
    };

    const categories = ['All', ...Array.from(new Set(outreachCompanies.map(c => c.category)))];

    const filteredCompanies = outreachCompanies.filter(comp => {
        const matchesCategory = categoryFilter === 'All' || comp.category === categoryFilter;
        const matchesSearch = comp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            comp.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
            comp.keySkills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const activeCompany = outreachCompanies.find(c => c.id === selectedCompanyId) ?? outreachCompanies[0]!;
    const currentRecipient = recipientNames[activeCompany.id] || '';
    const currentStatus = statuses[activeCompany.id] || 'Not Sent';
    const currentNotes = notes[activeCompany.id] || '';

    const currentEmailBody = activeCompany.generateBody(currentRecipient);
    const currentSde1Body = activeCompany.generateSde1Inquiry 
        ? activeCompany.generateSde1Inquiry(currentRecipient) 
        : generateSde1InquiryTemplate(activeCompany.company, currentRecipient);
    const currentFollowUpBody = activeCompany.generateFollowUp(currentRecipient);

    const currentSubject = activeTab === 'initial'
        ? activeCompany.subject
        : activeTab === 'sde1'
        ? (activeCompany.sde1Subject || `Inquiry: SDE-1 (Backend / Java) Opportunities at ${activeCompany.company} – Sibanarayan Choudhury`)
        : activeCompany.followUpSubject;

    const currentBody = activeTab === 'initial'
        ? currentEmailBody
        : activeTab === 'sde1'
        ? currentSde1Body
        : currentFollowUpBody;

    const handleCopy = async (text: string, fieldKey: string, successLabel: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedField(fieldKey);
            toast.success(successLabel);
            setTimeout(() => setCopiedField(null), 2500);
        } catch {
            toast.error('Could not copy to clipboard. Please copy manually.');
        }
    };

    const handleMailTo = (subject: string, body: string) => {
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl, '_blank');
    };

    return (
        <div className="outreach-page">
            <Toaster position="bottom-right" />
            
            <div className="container">
                {/* Header */}
                <div className="outreach-header">
                    <div className="outreach-badge mono">
                        <span className="tiny-dot" /> PRIVATE WORKSPACE // OUTREACH SUITE
                    </div>
                    <h1>Tailored Cold Mail Studio</h1>
                    <p className="outreach-subtitle">
                        Architected outreach templates tailored to each company's systems, high-throughput pipelines, and engineering requirements.
                    </p>

                    {/* Quick Stats Banner */}
                    <div className="outreach-stats-strip">
                        <div className="stat-box">
                            <span className="mono">COMPANIES TARGETED</span>
                            <strong>{outreachCompanies.length}</strong>
                        </div>
                        <div className="stat-box">
                            <span className="mono">CORE PROFILE FOCUS</span>
                            <strong>Backend & Distributed Systems</strong>
                        </div>
                        <div className="stat-box">
                            <span className="mono">KEY HOOK METRIC</span>
                            <strong>90% Pipeline Ingestion Acceleration</strong>
                        </div>
                        <div className="stat-box">
                            <span className="mono">COMPANIES IN PIPELINE</span>
                            <strong>
                                {Object.values(statuses).filter(s => s === 'Sent / Applied' || s === 'Interviewing' || s === 'Follow-up Sent').length} of {outreachCompanies.length}
                            </strong>
                        </div>
                    </div>
                </div>

                {/* Search & Category Filter */}
                <div className="outreach-controls">
                    <div className="search-wrap">
                        <Search size={15} className="search-icon" />
                        <Input
                            placeholder="Search by company, tech stack, or domain (e.g. Kafka, WOPI, Payments)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        {searchQuery && (
                            <button className="clear-search" onClick={() => setSearchQuery('')}>Clear</button>
                        )}
                    </div>

                    <div className="category-pills">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setCategoryFilter(cat)}
                                className={`category-pill ${categoryFilter === cat ? 'active' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quick Universal SDE-1 Generator (For any company) */}
                <div className="universal-sde1-card">
                    <div className="universal-header">
                        <div className="universal-title-wrap">
                            <Briefcase size={15} className="sparkle-icon" />
                            <div>
                                <strong>HR SDE-1 Opening Inquiry Generator</strong>
                                <p className="universal-sub">
                                    Direct inquiry template asking HR about active SDE-1 openings, highlighting key metrics, and sharing your Resume + Portfolio.
                                </p>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowUniversalTool(!showUniversalTool)}
                            className="toggle-universal-btn mono"
                        >
                            {showUniversalTool ? 'Close Universal Tool' : 'Generate For Custom Company'}
                        </Button>
                    </div>

                    {showUniversalTool && (
                        <div className="universal-body">
                            <div className="customizer-grid">
                                <div className="field">
                                    <label htmlFor="custom-company-input" className="mono">COMPANY NAME</label>
                                    <Input
                                        id="custom-company-input"
                                        placeholder="e.g. Microsoft, Atlassian, Startup X"
                                        value={customCompany}
                                        onChange={(e) => setCustomCompany(e.target.value)}
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="custom-recruiter-input" className="mono">RECRUITER / HR NAME (OPTIONAL)</label>
                                    <Input
                                        id="custom-recruiter-input"
                                        placeholder="e.g. Neha, Priya, or leave blank for 'Dear Hiring Team'"
                                        value={customRecipient}
                                        onChange={(e) => setCustomRecipient(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="universal-preview">
                                <div className="subject-container">
                                    <div className="subject-info">
                                        <span className="mono subject-tag">SUBJECT</span>
                                        <span className="subject-text">
                                            Inquiry: SDE-1 (Backend / Java) Opportunities at {customCompany.trim() || '[Company Name]'} – Sibanarayan Choudhury
                                        </span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleCopy(
                                            `Inquiry: SDE-1 (Backend / Java) Opportunities at ${customCompany.trim() || '[Company Name]'} – Sibanarayan Choudhury`,
                                            'custom-subj',
                                            'Subject copied!'
                                        )}
                                        className="copy-btn"
                                    >
                                        {copiedField === 'custom-subj' ? <Check size={13} /> : <Copy size={13} />}
                                        <span>Copy Subject</span>
                                    </Button>
                                </div>

                                <div className="email-body-container">
                                    <pre className="email-pre">
                                        {generateSde1InquiryTemplate(customCompany, customRecipient)}
                                    </pre>
                                    <div className="body-footer-bar">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleMailTo(
                                                `Inquiry: SDE-1 (Backend / Java) Opportunities at ${customCompany.trim() || '[Company Name]'} – Sibanarayan Choudhury`,
                                                generateSde1InquiryTemplate(customCompany, customRecipient)
                                            )}
                                        >
                                            <Send size={13} /> Open in Mail App
                                        </Button>
                                        <Button
                                            size="sm"
                                            className="action-btn-primary"
                                            onClick={() => handleCopy(
                                                `Subject: Inquiry: SDE-1 (Backend / Java) Opportunities at ${customCompany.trim() || '[Company Name]'} – Sibanarayan Choudhury\n\n${generateSde1InquiryTemplate(customCompany, customRecipient)}`,
                                                'custom-full',
                                                'Full SDE-1 Template copied!'
                                            )}
                                        >
                                            {copiedField === 'custom-full' ? <Check size={13} /> : <Copy size={13} />}
                                            <span>Copy Full SDE-1 Mail</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Main Workspace Layout */}
                <div className="outreach-workspace">
                    {/* Left Column: Company Directory */}
                    <aside className="company-sidebar">
                        <div className="sidebar-header mono">
                            <span>TARGET DIRECTORY ({filteredCompanies.length})</span>
                            <Building2 size={13} />
                        </div>

                        <div className="company-list">
                            {filteredCompanies.map(comp => {
                                const isSelected = comp.id === activeCompany.id;
                                const compStatus = statuses[comp.id] || 'Not Sent';
                                const statusStyle = STATUS_COLORS[compStatus];

                                return (
                                    <button
                                        key={comp.id}
                                        onClick={() => setSelectedCompanyId(comp.id)}
                                        className={`company-card-btn ${isSelected ? 'selected' : ''}`}
                                    >
                                        <div className="company-card-top">
                                            <span className="company-title">{comp.company}</span>
                                            <span className="match-score mono">{comp.matchScore}</span>
                                        </div>
                                        <p className="company-domain">{comp.domain}</p>
                                        <div className="company-card-footer">
                                            <span 
                                                className="status-pill mono"
                                                style={{ 
                                                    backgroundColor: statusStyle.bg, 
                                                    color: statusStyle.text, 
                                                    borderColor: statusStyle.border 
                                                }}
                                            >
                                                {compStatus}
                                            </span>
                                            <ChevronRight size={13} className="chevron" />
                                        </div>
                                    </button>
                                );
                            })}
                            {filteredCompanies.length === 0 && (
                                <div className="no-results">
                                    <p>No companies match your search or filter.</p>
                                </div>
                            )}
                        </div>
                    </aside>

                    {/* Right Column: Template & Intelligence Viewer */}
                    <main className="template-view">
                        {/* Company Detail Header */}
                        <div className="view-card company-intelligence-card">
                            <div className="card-top-row">
                                <div>
                                    <div className="eyebrow mono">
                                        <span className="section-number">TARGET</span>
                                        {activeCompany.category}
                                    </div>
                                    <h2>{activeCompany.company}</h2>
                                    <p className="domain-label">{activeCompany.domain}</p>
                                </div>

                                <div className="status-selector">
                                    <label className="mono text-xs">APPLICATION STATUS</label>
                                    <div className="status-buttons">
                                        {STATUS_OPTIONS.map(statusOpt => (
                                            <button
                                                key={statusOpt}
                                                onClick={() => updateStatus(activeCompany.id, statusOpt)}
                                                className={`status-opt-btn ${currentStatus === statusOpt ? 'active' : ''}`}
                                            >
                                                {statusOpt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Synergy & Talking Points */}
                            <div className="synergy-box">
                                <div className="synergy-header">
                                    <Sparkles size={14} className="sparkle-icon" />
                                    <strong>Why Your Background Is A Direct Match:</strong>
                                </div>
                                <p className="headline-match">{activeCompany.headlineMatch}</p>

                                <div className="talking-points-list">
                                    <span className="mono text-xs talking-title">TECHNICAL TALKING POINTS & INTERVIEW HOOKS:</span>
                                    <ul>
                                        {activeCompany.talkingPoints.map((point, idx) => (
                                            <li key={idx}>
                                                <CheckCircle2 size={13} className="bullet-icon" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="skill-badges">
                                    {activeCompany.keySkills.map(skill => (
                                        <span key={skill} className="tech-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Customizer & Recipient Settings */}
                        <div className="view-card customizer-card">
                            <div className="customizer-grid">
                                <div className="field">
                                    <label htmlFor="recipient-input" className="mono">
                                        RECIPIENT NAME (OPTIONAL)
                                    </label>
                                    <Input
                                        id="recipient-input"
                                        placeholder="e.g. Priya, John, or leave blank for 'Dear Hiring Team'"
                                        value={currentRecipient}
                                        onChange={(e) => updateRecipient(activeCompany.id, e.target.value)}
                                    />
                                    <small className="helper-text">
                                        Live-updates the email greeting in real time.
                                    </small>
                                </div>

                                <div className="field">
                                    <label htmlFor="notes-input" className="mono">
                                        PERSONAL LOG / RECRUITER NOTES
                                    </label>
                                    <Input
                                        id="notes-input"
                                        placeholder="e.g. Sent via LinkedIn to Recruiter X on Oct 25"
                                        value={currentNotes}
                                        onChange={(e) => updateNotes(activeCompany.id, e.target.value)}
                                    />
                                    <small className="helper-text">
                                        Saved automatically in your browser storage.
                                    </small>
                                </div>
                            </div>
                        </div>

                        {/* Template Content Box */}
                        <div className="view-card template-card">
                            <div className="tabs-header">
                                <div className="tabs-left">
                                    <button
                                        onClick={() => setActiveTab('initial')}
                                        className={`tab-btn ${activeTab === 'initial' ? 'active' : ''}`}
                                    >
                                        <Mail size={13} /> Technical Pitch (Initial)
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('sde1')}
                                        className={`tab-btn ${activeTab === 'sde1' ? 'active' : ''}`}
                                    >
                                        <Briefcase size={13} /> SDE-1 HR Opening Inquiry
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('followup')}
                                        className={`tab-btn ${activeTab === 'followup' ? 'active' : ''}`}
                                    >
                                        <Clock size={13} /> 3-Day Follow-Up
                                    </button>
                                </div>

                                <div className="actions-right">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleMailTo(currentSubject, currentBody)}
                                        className="action-btn"
                                    >
                                        <Send size={13} /> Open in Mail App
                                    </Button>

                                    <Button
                                        size="sm"
                                        onClick={() => handleCopy(
                                            `Subject: ${currentSubject}\n\n${currentBody}`,
                                            'all',
                                            'Subject & Body copied to clipboard!'
                                        )}
                                        className="action-btn-primary"
                                    >
                                        {copiedField === 'all' ? <Check size={13} /> : <Copy size={13} />}
                                        {copiedField === 'all' ? 'Copied Everything!' : 'Copy Full Template'}
                                    </Button>
                                </div>
                            </div>

                            {/* Subject Line */}
                            <div className="subject-container">
                                <div className="subject-info">
                                    <span className="mono subject-tag">SUBJECT</span>
                                    <span className="subject-text">{currentSubject}</span>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleCopy(currentSubject, 'subject', 'Subject line copied!')}
                                    className="copy-btn"
                                >
                                    {copiedField === 'subject' ? <Check size={13} /> : <Copy size={13} />}
                                    <span>Copy Subject</span>
                                </Button>
                            </div>

                            {/* Email Body */}
                            <div className="email-body-container">
                                <pre className="email-pre">{currentBody}</pre>

                                <div className="body-footer-bar">
                                    <span className="mono word-count">
                                        ~{currentBody.split(/\s+/).length} words · ~20 sec read time
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleCopy(currentBody, 'body', 'Email body copied!')}
                                    >
                                        {copiedField === 'body' ? <Check size={13} /> : <Copy size={13} />}
                                        <span>Copy Email Body</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
