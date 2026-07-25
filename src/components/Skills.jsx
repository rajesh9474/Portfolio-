import React, { useState } from 'react';
import { Code, Server, Wrench, Sparkles, Terminal, CheckCircle } from 'lucide-react';

const skillCategories = [
  {
    id: 'all',
    name: 'All Skills',
    icon: Sparkles,
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    icon: Code,
  },
  {
    id: 'backend',
    name: 'Backend & Core',
    icon: Server,
  },
  {
    id: 'tools',
    name: 'Tools & AI Platforms',
    icon: Wrench,
  },
];

const skillsData = [
  // Frontend
  { name: 'HTML5', category: 'frontend', type: 'Core Markup', description: 'Semantic, accessible web page structure' },
  { name: 'CSS3', category: 'frontend', type: 'Styling & Animation', description: 'Modern CSS Grid, Flexbox, & keyframe animations' },
  { name: 'JavaScript', category: 'frontend', type: 'Language', description: 'ES6+ dynamic scripts, DOM manipulation, async APIs' },
  { name: 'Bootstrap', category: 'frontend', type: 'UI Framework', description: 'Responsive grid systems & rapid component layouts' },
  { name: 'React', category: 'frontend', type: 'UI Library', description: 'Component-driven SPA development & state management' },

  // Backend
  { name: 'Python', category: 'backend', type: 'Core Language', description: 'Data structures, AI logic, backend scripts, & automation' },

  // Tools
  { name: 'Git & GitHub', category: 'tools', type: 'Version Control', description: 'Branch management, pull requests, & team collaboration' },
  { name: 'VS Code', category: 'tools', type: 'IDE', description: 'Primary development workspace & extension workflow' },
  { name: 'Replit', category: 'tools', type: 'Cloud IDE', description: 'Rapid prototyping & collaborative cloud environment' },
  { name: 'Emergent', category: 'tools', type: 'AI Platform', description: 'Exploring emergent AI architectures & models' },
  { name: 'Bolt', category: 'tools', type: 'AI Development Tool', description: 'Full-stack AI rapid app generation' },
  { name: 'Antigravity', category: 'tools', type: 'AI Agentic Coding', description: 'Advanced AI pair-programming & automated agent workflows' },
  { name: 'Cursor', category: 'tools', type: 'AI Code Editor', description: 'AI-assisted code editing & inline completions' },
  { name: 'Stitch', category: 'tools', type: 'Development Tool', description: 'Integration & workflow orchestration' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>Tech Stack & Tools</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
            Technical Arsenal & <span className="text-gradient">AI Tooling</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Mastering core web development principles alongside next-generation AI coding tools and environments.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide flex items-center space-x-2 transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 shadow-glow-cyan font-bold scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`glass-panel p-5 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                  isHovered 
                    ? 'border-cyan-500/50 bg-slate-900/90 shadow-glow-cyan -translate-y-1' 
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                      {skill.type}
                    </span>
                    <CheckCircle className={`w-4 h-4 transition-colors ${isHovered ? 'text-cyan-400' : 'text-slate-600'}`} />
                  </div>

                  <h3 className="font-outfit text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Practical proficiency status bar without fake percentages */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-300">Status</span>
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold">Active Tool</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on AI Developer Workflows */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-slate-800/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-outfit font-bold text-sm text-white flex items-center justify-center sm:justify-start space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Modern AI-Assisted Workflows</span>
            </h4>
            <p className="text-xs text-slate-400">
              Experienced in leveraging Agentic AI platforms (Bolt, Antigravity, Cursor, Emergent, Replit) to accelerate full-stack delivery and clean software architecture.
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
