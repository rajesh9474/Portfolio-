import React from 'react';
import { GraduationCap, MapPin, Globe2, Award, Calendar, Brain, Code2, Users, Lightbulb, Compass, Zap } from 'lucide-react';

const softSkills = [
  { name: 'Teamwork', icon: Users, desc: 'Collaborating efficiently in hackathons & team projects' },
  { name: 'Problem Solving', icon: Brain, desc: 'Analytical approach to AI logic & algorithmic design' },
  { name: 'Adaptability', icon: Zap, desc: 'Quick to learn new tools, frameworks & tech stacks' },
  { name: 'Time Management', icon: Calendar, desc: 'Balancing academic excellence with hands-on coding' },
  { name: 'Communication', icon: Globe2, desc: 'Articulating technical concepts across multilingual teams' },
  { name: 'Active Listening', icon: Lightbulb, desc: 'Receptive to constructive feedback & user insights' },
];

const languages = ['Tamil', 'English', 'Hindi'];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Personal Profile</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
            Driven by Curiosity, Empowered by <span className="text-gradient">Artificial Intelligence</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Exploring the nexus of AI algorithms, full-stack software development, and modern user-centric interfaces.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & Core Info (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4 border border-slate-800/80">
              <h3 className="font-outfit text-xl font-bold text-white flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>Biography</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a dedicated <strong className="text-white">B.E. Artificial Intelligence & Machine Learning</strong> student from <strong>Andaman and Nicobar Islands, India</strong>. My passion lies in software development, intelligent applications, and building modern web solutions that solve real-world problems.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Over the course of my engineering journey, I have actively expanded my skills across <strong>Python, React, web frameworks, and AI-assisted workflows</strong>. As a strong team player and methodical problem solver, I thrive in collaborative environments such as hackathons and industrial training masterclasses, continuously turning complex requirements into clean, scalable software.
              </p>

              {/* Location & Languages Footer within Bio */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-300">
                <div className="flex items-center space-x-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Andaman and Nicobar Islands, India</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Globe2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Languages: {languages.join(' • ')}</span>
                </div>
              </div>
            </div>

            {/* Soft Skills Visual Cards */}
            <div className="space-y-4">
              <h3 className="font-outfit text-lg font-bold text-slate-200 flex items-center space-x-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Core Competencies & Soft Skills</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {softSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className="glass-panel p-4 rounded-xl glass-panel-hover border border-slate-800/80 space-y-1.5"
                    >
                      <div className="flex items-center space-x-2 text-cyan-400">
                        <Icon className="w-4 h-4" />
                        <span className="font-outfit font-semibold text-sm text-white">{skill.name}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">{skill.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Education & Timeline Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-outfit text-lg font-bold text-white">Education</h3>
                    <p className="text-xs text-slate-400 font-mono">Higher Education Journey</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold">
                  B.E. Degree
                </div>
              </div>

              {/* Major Title */}
              <div className="space-y-2">
                <h4 className="text-base font-bold text-white leading-snug">
                  B.E. Artificial Intelligence & Machine Learning
                </h4>
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Academic Duration: 2023 – 2027</span>
                </div>
              </div>

              {/* CGPA Highlight Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900/90 border border-cyan-500/30 flex items-center justify-between shadow-inner">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Cumulative GPA</span>
                  <span className="text-2xl font-extrabold text-white font-outfit">8.01 / 10.0</span>
                </div>
                <div className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-400/40">
                  First Class Distinction
                </div>
              </div>

              {/* Academic Timeline Progress */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Timeline Progress (2023 - 2027)</span>
                  <span className="text-cyan-400 font-semibold">Year 2 / 4</span>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden p-0.5 border border-slate-700">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-purple-600 h-full rounded-full transition-all duration-1000 shadow-glow-cyan"
                    style={{ width: '50%' }}
                  />
                </div>

                <div className="grid grid-cols-4 text-[10px] font-mono text-slate-400 text-center pt-1">
                  <span className="text-cyan-400 font-bold">2023</span>
                  <span className="text-cyan-300 font-bold">2024</span>
                  <span>2025</span>
                  <span>2027</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
