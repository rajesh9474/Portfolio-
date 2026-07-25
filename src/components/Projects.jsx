import React, { useState } from 'react';
import { Bot, Sparkles, ExternalLink, Globe, Layers, CheckCircle2, Code2, Users, ArrowUpRight, FileText } from 'lucide-react';

export default function Projects() {
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
            Engineered with <span className="text-gradient">Precision & AI</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Showcasing real-world web applications and intelligent software solutions built by Rajesh.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          
          {/* FEATURED PROJECT 1: BrainNova AI */}
          <div className="glass-panel rounded-3xl border border-cyan-500/30 p-6 sm:p-8 lg:p-10 relative overflow-hidden group hover:border-cyan-500/60 transition-all duration-300 shadow-2xl">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Details (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Featured Tag */}
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold border border-cyan-400/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Main Featured Project</span>
                </div>

                <div>
                  <h3 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    BrainNova AI
                  </h3>
                  <p className="text-cyan-400 font-mono text-xs sm:text-sm mt-1">
                    AI-Powered Note-Taking Application with Conversational Assistant
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Built and deployed an intelligent note-taking web application featuring an integrated conversational AI assistant. Designed to boost productivity by automating text transformation and note curation.
                </p>

                {/* Key AI Capabilities List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>AI-Powered Summarization</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Automated Grammar Correction</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Conversational Content Editing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Intelligent Note Management</span>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['React', 'AI Assistant', 'Python Logic', 'Vercel Deployment', 'Tailwind CSS', 'AI Workflows'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="https://note-mind-ai-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold text-xs tracking-wider uppercase flex items-center space-x-2 shadow-glow-cyan hover:opacity-95 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setActiveProjectModal('brainnova')}
                    className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs tracking-wider flex items-center space-x-2 transition-all hover:border-cyan-500/50"
                  >
                    <span>Explore Details</span>
                    <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                  </button>

                  <a
                    href="https://note-mind-ai-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800"
                  >
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>note-mind-ai-six.vercel.app</span>
                  </a>
                </div>

              </div>

              {/* Right Interactive Visual Area (5 Cols) */}
              <div className="lg:col-span-5 relative">
                <a
                  href="https://note-mind-ai-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full aspect-video rounded-2xl bg-slate-900/90 border border-cyan-500/30 p-6 flex flex-col justify-between relative overflow-hidden shadow-inner group-hover:border-cyan-400/50 transition-all"
                >
                  
                  {/* Decorative Mesh Lines */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                  {/* Header Mockup Bar */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 relative z-10">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 flex items-center space-x-1">
                      <Bot className="w-3 h-3" />
                      <span>BrainNova Assistant v1.0</span>
                    </span>
                  </div>

                  {/* Simulated Conversational Assistant Interface */}
                  <div className="space-y-3 py-4 relative z-10">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200">
                      <span className="text-cyan-400 font-mono font-bold block mb-1">User Input:</span>
                      "Summarize my notes on Neural Network Architecture and correct grammar."
                    </div>
                    <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs text-cyan-200 shadow-glow-cyan">
                      <span className="text-purple-300 font-mono font-bold flex items-center space-x-1 mb-1">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span>BrainNova AI Response:</span>
                      </span>
                      "Summary generated in 0.4s: Key concepts include forward propagation, gradient descent, and loss optimization."
                    </div>
                  </div>

                  {/* Footer Tag */}
                  <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 flex justify-between relative z-10">
                    <span>Status: Deployed & Active</span>
                    <span className="text-emerald-400 flex items-center space-x-1">
                      <span>Click to Open Live App</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </span>
                  </div>

                </a>
              </div>

            </div>
          </div>

          {/* PROJECT 2: Inter-College Hackathon Website */}
          <div className="glass-panel rounded-3xl border border-slate-800/80 p-6 sm:p-8 lg:p-10 relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Details (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono font-semibold border border-purple-500/30">
                  <Users className="w-3.5 h-3.5" />
                  <span>Team Collaboration Project</span>
                </div>

                <div>
                  <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                    Inter-College Hackathon Website
                  </h3>
                  <p className="text-purple-400 font-mono text-xs sm:text-sm mt-1">
                    Event Management & Registration Platform Frontend
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Developed the complete frontend interface for an inter-college hackathon event website as part of a collaborative engineering team. Engineered responsive user interface components to deliver a seamless event registration experience.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Responsive UI Components</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Comprehensive Event Schedule Pages</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Team Registration Interface</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Optimized User Experience</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'Bootstrap / Tailwind', 'Teamwork', 'Responsive Web Design'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://ignite2k26.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs tracking-wider uppercase flex items-center space-x-2 shadow-glow-purple hover:opacity-95 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setActiveProjectModal('hackathon')}
                    className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs tracking-wider flex items-center space-x-2 transition-all hover:border-purple-500/50"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 text-purple-400" />
                  </button>

                  <a
                    href="https://ignite2k26.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-mono text-slate-300 hover:text-purple-300 transition-colors bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800"
                  >
                    <Globe className="w-3.5 h-3.5 text-purple-400" />
                    <span>ignite2k26.vercel.app</span>
                  </a>
                </div>

              </div>

              {/* Right Visual Area (5 Cols) */}
              <div className="lg:col-span-5 relative">
                <a
                  href="https://ignite2k26.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full aspect-video rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden shadow-inner hover:border-purple-500/50 transition-all group"
                >
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-[10px] font-mono text-slate-400">Hackathon Event Portal</span>
                    <span className="text-[10px] font-mono text-purple-400 flex items-center space-x-1">
                      <span>ignite2k26.vercel.app</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </span>
                  </div>

                  <div className="space-y-2 py-4">
                    <div className="w-full h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-between px-3 text-xs font-mono text-slate-300">
                      <span>Event Registration Form</span>
                      <span className="text-emerald-400 text-[10px]">Validated</span>
                    </div>
                    <div className="w-full h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-between px-3 text-xs font-mono text-slate-300">
                      <span>Tracks & Problem Statements</span>
                      <span className="text-cyan-400 text-[10px]">Responsive</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex justify-between">
                    <span>Role: Frontend UI Developer</span>
                    <span className="text-purple-300">Click to Open Live Site</span>
                  </div>

                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* PROJECT DETAILS MODAL */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-panel max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-6 relative animate-fadeIn">
            
            <div className="flex justify-between items-start border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-outfit text-2xl font-bold text-white">
                  {activeProjectModal === 'brainnova' ? 'BrainNova AI' : 'Inter-College Hackathon Website'}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  {activeProjectModal === 'brainnova' ? 'AI Note-Taking Application' : 'Event Platform Frontend'}
                </p>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              {activeProjectModal === 'brainnova' ? (
                <>
                  <p>
                    <strong>BrainNova AI</strong> is Rajesh's flagship project, demonstrating how modern AI capabilities can be integrated into daily productivity software. The application provides users with an intelligent canvas to write notes, query an AI conversational assistant, generate quick summaries of dense text, perform real-time grammar enhancements, and organize notes intelligently.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Live Deployment</span>
                    <a
                      href="https://note-mind-ai-six.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-cyan-300 hover:underline flex items-center space-x-1"
                    >
                      <span>https://note-mind-ai-six.vercel.app/</span>
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    The <strong>Inter-College Hackathon Website</strong> was engineered as a collaborative team project. Rajesh focused on building responsive, mobile-first frontend pages, ensuring smooth user navigation across event guidelines, schedules, problem statements, and registration forms.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Live Deployment</span>
                    <a
                      href="https://ignite2k26.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-purple-300 hover:underline flex items-center space-x-1"
                    >
                      <span>https://ignite2k26.vercel.app/</span>
                      <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                    </a>
                  </div>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <a
                href={activeProjectModal === 'brainnova' ? 'https://note-mind-ai-six.vercel.app/' : 'https://ignite2k26.vercel.app/'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold text-xs uppercase flex items-center space-x-2"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-bold text-xs uppercase hover:bg-slate-700"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
