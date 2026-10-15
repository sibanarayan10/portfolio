import { useState } from 'react';
import { ArrowDown, ArrowRight, Box, Check, CheckCircle2, Code2, Database, FileText, HardHat, Layers3, Play, RotateCcw, Search, ShieldAlert, ShieldCheck, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/portfolio';
import alpine from '@/assets/alpine.jpg';

const workflowStages = [
    {
        key: 'draft',
        name: 'Initiation',
        role: 'Initiator',
        icon: FileText,
        badge: 'Scope & Isolation Defined',
        stateLabel: 'INITIATED',
        desc: 'Contractor details, work perimeter, and initial safety requirements logged.',
        hazard: 'Equipment Isolation Needed',
        ppe: ['Helmet', 'Safety Shoes'],
    },
    {
        key: 'review',
        name: 'Issuer Review',
        role: 'Issuer',
        icon: ShieldCheck,
        badge: 'HIRA & Hazard Clearance',
        stateLabel: 'ISSUER_REVIEW',
        desc: 'Permit-to-work review: Lockout/Tagout (LOTO) & gas atmospheric checks verified.',
        hazard: 'High Voltage Arc Risk',
        ppe: ['Insulated Gloves', 'Safety Glasses'],
    },
    {
        key: 'active',
        name: 'Active Work',
        role: 'Site Executor',
        icon: HardHat,
        badge: 'Execution Authorized',
        stateLabel: 'ACTIVE_WORK',
        desc: 'Field execution authorized on-site under verified safety controls.',
        hazard: 'Hot Surfaces & Sparks',
        ppe: ['Arc-Flash Shield', 'Safety Harness'],
    },
    {
        key: 'closure',
        name: 'Closure',
        role: 'Issuer & Admin',
        icon: CheckCircle2,
        badge: 'Restored & Verified',
        stateLabel: 'CLOSED_AUDITED',
        desc: 'Work verified complete, isolations removed, site inspected, permit archived.',
        hazard: 'Zero Residual Hazard',
        ppe: ['Standard PPE'],
    },
];

export function ProjectVisual({ kind }: { kind: Project['kind'] }) {
    const [running, setRunning] = useState(false);
    const [stageIndex, setStageIndex] = useState(2);

    if (kind === 'workflow') {
        const current = workflowStages[stageIndex];
        if (!current)
            return <></>
        return (
            <div className="project-visual workflow-preview">
                <div className="preview-top">
                    <span className="mono">E-PERMIT / WORKFLOW ENGINE</span>
                    <span className="mono">
                        <span className="tiny-dot" /> STAGE 0{stageIndex + 1} / 0{workflowStages.length} · {current.stateLabel}
                    </span>
                </div>

                <div className="workflow-flow">
                    {workflowStages.map((stage, idx) => {
                        const isCurrent = idx === stageIndex;
                        const isCompleted = idx < stageIndex;
                        const Icon = stage.icon;
                        return (
                            <div key={stage.key} style={{ display: 'contents' }}>
                                <div
                                    className={`workflow-node ${isCurrent ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                                    onClick={() => setStageIndex(idx)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setStageIndex(idx); }}
                                    aria-label={`Select stage ${stage.name}`}
                                >
                                    <div className="workflow-icon-wrap">
                                        <Icon size={14} />
                                    </div>
                                    <span className="workflow-node-title">{stage.name}</span>
                                    <small className="mono">{stage.role}</small>
                                </div>
                                {idx < workflowStages.length - 1 && <ArrowRight className="workflow-arrow" size={11} />}
                            </div>
                        );
                    })}
                </div>

                <div className="workflow-card">
                    <div className="workflow-card-header">
                        <div>
                            <span className="mono permit-id">PERMIT #PTW-2024-884 · ELECTRICAL &amp; HOT WORK</span>
                            <h4 className="workflow-card-title">{current.badge}</h4>
                        </div>
                        <span className="workflow-state-pill mono">{current.stateLabel}</span>
                    </div>
                    <p className="workflow-desc">{current.desc}</p>
                    <div className="workflow-safety-grid">
                        <div className="safety-item">
                            <span className="mono label"><ShieldAlert size={10} /> IDENTIFIED HAZARD</span>
                            <span className="val">{current.hazard}</span>
                        </div>
                        <div className="safety-item">
                            <span className="mono label"><Check size={10} /> PPE COMPLIANCE</span>
                            <div className="mini-tags">
                                {current.ppe.map((item) => (
                                    <span className="mini-tag" key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="workflow-bottom">
                    <span className="mono">ROLE-BASED WORKFLOW · 6 USER ROLES</span>
                    <button
                        type="button"
                        className="workflow-step-btn mono"
                        onClick={() => setStageIndex((s) => (s + 1) % workflowStages.length)}
                        aria-label="Advance to next workflow stage"
                    >
                        <span>Next stage</span>
                        <ArrowRight size={10} />
                    </button>
                </div>
            </div>
        );
    }

    if (kind === 'images') return <div className="project-visual image-preview">
        <div className="preview-top"><span className="preview-brand">search<span>image</span></span><span className="mono">CONCEPT PREVIEW</span></div>
        <div className="mock-search"><Search size={14} /><span>Find your next inspiration</span><span className="search-key">⌘ K</span></div>
        <div className="image-mosaic"><img src={alpine} alt="Sample alpine landscape for image-discovery concept" width={1024} height={768} loading="lazy" /><div className="image-detail"><span className="mono">DISCOVER / NATURE</span><h4>A different<br />perspective.</h4><div className="mini-tag">mountains</div><div className="mini-tag">landscape</div><div className="mini-tag">outdoors</div><span className="image-caption">AI-assisted discovery</span></div></div>
    </div>;
    if (kind === 'terminal') return <div className="project-visual terminal-preview">
        <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>agent / workspace</span><Terminal size={14} /></div>
        <div className="terminal-body"><p><span className="signal">❯</span> agent run <span className="terminal-string">"inspect the codebase"</span></p><p className="terminal-muted"># Illustrative execution trace</p><p><span className="signal">01</span> Initializing provider abstraction</p><p><span className="signal">02</span> Streaming model response<span className="cursor">▍</span></p><p className={running ? 'terminal-line active' : 'terminal-line'}><ArrowRight size={13} /> tool_call: read_file("src/main.ts")</p><p className={running ? 'terminal-line active' : 'terminal-line'}><Check size={13} /> Tool result added to context</p><p className={running ? 'terminal-line active' : 'terminal-line'}><ArrowRight size={13} /> Continue model → tool → result loop</p></div>
        <div className="terminal-bottom"><span className="mono">DEMONSTRATION · NOT A LIVE AI SERVICE</span><Button size="icon" variant="ghost" aria-label={running ? 'Reset agent demonstration' : 'Play agent demonstration'} onClick={() => setRunning(!running)}>{running ? <RotateCcw /> : <Play />}</Button></div>
    </div>;
    return <div className="project-visual architecture-preview">
        <div className="preview-top"><span className="mono">HII-CODER / EXECUTION PIPELINE</span><span className="tiny-dot" /></div>
        <div className="architecture-flow"><div className="flow-node"><Code2 /><span>Submission</span><small>Core API</small></div><ArrowRight className="flow-arrow" /><div className="flow-node"><Layers3 /><span>Message queue</span><small>Apache Kafka</small></div><ArrowRight className="flow-arrow" /><div className="flow-node pool-node"><Box /><span>Container pool</span><small>Isolated workers</small><div className="pool-boxes"><i /><i /><i /></div></div></div>
        <div className="flow-return"><Database size={15} /><span>Result persisted</span><ArrowDown size={15} /><span className="signal">Execution complete</span></div>
        <div className="architecture-bottom"><span><span className="tiny-dot" /> WARM CONTAINERS</span><span className="signal">&lt; 500 ms startup</span></div>
    </div>;
}
