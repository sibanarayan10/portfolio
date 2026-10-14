import { useState } from 'react';
import { ArrowDown, ArrowRight, Box, Check, Code2, Database, Layers3, Play, RotateCcw, Search, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/portfolio';
import alpine from '@/assets/alpine.jpg';

export function ProjectVisual({ kind }: { kind: Project['kind'] }) {
  const [running, setRunning] = useState(false);
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
