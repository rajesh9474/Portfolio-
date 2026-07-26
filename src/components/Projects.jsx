import React, { useState } from 'react';
import { Bot, Sparkles, ExternalLink, Globe, Layers, CheckCircle2, Users, ArrowUpRight, X } from 'lucide-react';

export default function Projects() {
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 relative z-10 border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Engineered with <span className="text-gradient">Precision & AI</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base px-2 sm:px-0">
            Showcasing real-world web applications and intelligent software solutions built by Rajesh.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 sm:space-y-12">
          
          {/* FEATURED PROJECT 1: BrainNova AI */}
          <div className="glass-panel rounded-2xl sm:rounded-3xl border border-cyan-500/30 p-5 sm:p-8 lg:p-10 relative overflow-hidden group hover:border-cyan-500/60 transition-all duration-300 shadow-2xl">
            
            <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
              
              {/* Details */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold border border-cyan-400/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Main Featured Project</span>
                </div>

                <div>
                  <h3 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    BrainNova AI
                  </h3>
                  <p className="text-cyan-400 font-mono text-xs sm:text-sm mt-1">
                    AI-Powered Note-Taking Application with Conversational Assistant
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Built and deployed an intelligent note-taking web application featuring an integrated conversational AI assistant. Designed to boost productivity by automating text transformation and note curation.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {['AI-Powered Summarization', 'Automated Grammar Correction', 'Conversational Content Editing', 'Intelligent Note Management'].map(f => (
                    <div key={f} className="flex items-center space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {['React', 'AI Assistant', 'Python Logic', 'Vercel', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://note-mind-ai-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold text-xs tracking-wider uppercase flex items-center space-x-2 shadow-glow-cyan hover:opacity-95 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setActiveProjectModal('brainnova')}
                    className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs tracking-wider flex items-center space-x-2 transition-all hover:border-cyan-500/50"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>

                  <a
                    href="https://note-mind-ai-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800"
                  >
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>note-mind-ai-six.vercel.app</span>
                  </a>
                </div>

              </div>

              {/* App Preview Mockup */}
              <div className="lg:col-span-5">
                <a
                  href="https://note-mind-ai-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-xl sm:rounded-2xl bg-slate-900/90 border border-cyan-500/30 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-inner group-hover:border-cyan-400/50 transition-all"
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 relative z-10">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 flex items-center space-x-1">
                      <Bot className="w-3 h-3" />
                      <span>BrainNova Assistant v1.0</span>
                    </span>
                  </div>

                  <div className="space-y-2.5 py-4 relative z-10">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200">
                      <span className="text-cyan-400 font-mono font-bold block mb-1 text-[11px]">User Input:</span>
                      "Summarize my notes on Neural Networks."
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs text-cyan-200">
                      <span className="text-purple-300 font-mono font-bold flex items-center space-x-1 mb-1 text-[11px]">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span>BrainNova AI:</span>
                      </span>
                      "Summary: Forward propagation, gradient descent, loss optimization."
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 flex justify-between relative z-10">
                    <span>Status: Deployed & Active</span>
                    <span className="text-emerald-400 flex items-center space-x-1">
                      <span>Open App</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* PROJECT 2: Inter-College Hackathon Website */}
          <div className="glass-panel rounded-2xl sm:rounded-3xl border border-slate-800/80 p-5 sm:p-8 lg:p-10 relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
              
              {/* Details */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono font-semibold border border-purple-500/30">
                  <Users className="w-3.5 h-3.5" />
                  <span>Team Collaboration Project</span>
                </div>

                <div>
                  <h3 className="font-outfit text-xl sm:text-2xl lg:text-3xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                    Inter-College Hackathon Website
                  </h3>
                  <p className="text-purple-400 font-mono text-xs sm:text-sm mt-1">
                    Event Management & Registration Platform Frontend
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Developed the complete frontend interface for an inter-college hackathon event website as part of a collaborative engineering team. Engineered responsive UI components to deliver a seamless registration experience.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {['Responsive UI Components', 'Event Schedule Pages', 'Team Registration Interface', 'Optimized User Experience'].map(f => (
                    <div key={f} className="flex items-center space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://ignite2k26.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs tracking-wider uppercase flex items-center space-x-2 hover:opacity-95 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setActiveProjectModal('hackathon')}
                    className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs tracking-wider flex items-center space-x-2 transition-all hover:border-purple-500/50"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
                  </button>

                  <a
                    href="https://ignite2k26.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono text-slate-300 hover:text-purple-300 transition-colors bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800"
                  >
                    <Globe className="w-3.5 h-3.5 text-purple-400" />
                    <span>ignite2k26.vercel.app</span>
                  </a>
                </div>

              </div>

              {/* Visual Area */}
              <div className="lg:col-span-5">
                <a
                  href="https://ignite2k26.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-inner hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-[10px] font-mono text-slate-400">Hackathon Event Portal</span>
                    <span className="text-[10px] font-mono text-purple-400 flex items-center space-x-1">
                      <span>ignite2k26.vercel.app</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  <div className="space-y-2 py-4">
                    <div className="w-full h-7 sm:h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-between px-3 text-xs font-mono text-slate-300">
                      <span>Event Registration Form</span>
                      <span className="text-emerald-400 text-[10px]">Live</span>
                    </div>
                    <div className="w-full h-7 sm:h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-between px-3 text-xs font-mono text-slate-300">
                      <span>Tracks & Problem Statements</span>
                      <span className="text-cyan-400 text-[10px]">Responsive</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex justify-between">
                    <span>Frontend Developer</span>
                    <span className="text-purple-300">Open Live Site</span>
                  </div>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Modal */}
      {activeProjectModal && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={(e) => e.target === e.currentTarget && setActiveProjectModal(null)}
        >
          <div className="glass-panel w-full sm:max-w-2xl rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-5 relative max-h-[90vh] overflow-y-auto">
            
            <div className="flex justify-between items-start border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white">
                  {activeProjectModal === 'brainnova' ? 'BrainNova AI' : 'Inter-College Hackathon Website'}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  {activeProjectModal === 'brainnova' ? 'AI Note-Taking Application' : 'Event Platform Frontend'}
                </p>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white ml-4 flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              {activeProjectModal === 'brainnova' ? (
                <>
                  <p>
                    <strong>BrainNova AI</strong> is Rajesh's flagship project. The application provides an intelligent canvas to write notes, query a conversational AI assistant, generate summaries, correct grammar, and organize notes intelligently.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Live Deployment</span>
                    <a href="https://note-mind-ai-six.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="text-xs font-mono text-cyan-300 hover:underline flex items-center space-x-1 break-all">
                      <span>https://note-mind-ai-six.vercel.app/</span>
                      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    The <strong>Inter-College Hackathon Website</strong> was a collaborative team project. Rajesh built responsive, mobile-first frontend pages covering event guidelines, schedules, problem statements, and registration forms.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Live Deployment</span>
                    <a href="https://ignite2k26.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="text-xs font-mono text-purple-300 hover:underline flex items-center space-x-1 break-all">
                      <span>https://ignite2k26.vercel.app/</span>
                      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                    </a>
                  </div>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
              <a
                href={activeProjectModal === 'brainnova' ? 'https://note-mind-ai-six.vercel.app/' : 'https://ignite2k26.vercel.app/'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold text-xs uppercase flex items-center justify-center space-x-2"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-bold text-xs uppercase hover:bg-slate-700 text-center"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
