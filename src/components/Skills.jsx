import React, { useState } from 'react';
import { Code, Server, Wrench, Sparkles, Terminal, CheckCircle } from 'lucide-react';

const skillCategories = [
  { id: 'all', name: 'All', icon: Sparkles },
  { id: 'frontend', name: 'Frontend', icon: Code },
  { id: 'backend', name: 'Backend', icon: Server },
  { id: 'tools', name: 'Tools', icon: Wrench },
];

const skillsData = [
  { name: 'HTML5', category: 'frontend', type: 'Markup', description: 'Semantic, accessible web page structure' },
  { name: 'CSS3', category: 'frontend', type: 'Styling', description: 'Modern CSS Grid, Flexbox & animations' },
  { name: 'JavaScript', category: 'frontend', type: 'Language', description: 'ES6+ dynamic scripts & async APIs' },
  { name: 'Bootstrap', category: 'frontend', type: 'UI Framework', description: 'Responsive grid & rapid component layouts' },
  { name: 'React', category: 'frontend', type: 'UI Library', description: 'Component-driven SPA development' },
  { name: 'Python', category: 'backend', type: 'Core Language', description: 'AI logic, backend scripts & automation' },
  { name: 'Git & GitHub', category: 'tools', type: 'Version Control', description: 'Branch management & team collaboration' },
  { name: 'VS Code', category: 'tools', type: 'IDE', description: 'Primary development workspace' },
  { name: 'Replit', category: 'tools', type: 'Cloud IDE', description: 'Rapid prototyping & cloud collaboration' },
  { name: 'Emergent', category: 'tools', type: 'AI Platform', description: 'Exploring emergent AI architectures' },
  { name: 'Bolt', category: 'tools', type: 'AI Dev Tool', description: 'Full-stack AI rapid app generation' },
  { name: 'Antigravity', category: 'tools', type: 'Agentic Coding', description: 'Advanced AI pair-programming workflows' },
  { name: 'Cursor', category: 'tools', type: 'AI Editor', description: 'AI-assisted code editing & completions' },
  { name: 'Stitch', category: 'tools', type: 'Dev Tool', description: 'Integration & workflow orchestration' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>Tech Stack & Tools</span>
          </div>
          <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Technical Arsenal & <span className="text-gradient">AI Tooling</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base px-2 sm:px-0">
            Mastering core web development principles alongside next-generation AI coding tools and environments.
          </p>
        </div>

        {/* Category Tabs - scrollable on mobile */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-semibold tracking-wide flex items-center space-x-1.5 sm:space-x-2 transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 shadow-glow-cyan font-bold scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`glass-panel p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                  isHovered 
                    ? 'border-cyan-500/50 bg-slate-900/90 shadow-glow-cyan -translate-y-1' 
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 truncate max-w-[80%]">
                      {skill.type}
                    </span>
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 transition-colors ${isHovered ? 'text-cyan-400' : 'text-slate-600'}`} />
                  </div>

                  <h3 className="font-outfit text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-300">Status</span>
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold">Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Workflow Note */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-6 rounded-2xl glass-panel border border-slate-800/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-outfit font-bold text-sm text-white flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Modern AI-Assisted Workflows</span>
            </h4>
            <p className="text-xs text-slate-400">
              Experienced in leveraging AI platforms (Bolt, Antigravity, Cursor, Emergent, Replit) to accelerate full-stack delivery.
            </p>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-mono border border-cyan-500/30 whitespace-nowrap"
          >
            See AI Projects
          </a>
        </div>

      </div>
    </section>
  );
}
