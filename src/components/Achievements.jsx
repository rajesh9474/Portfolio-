import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Building, Cpu, BookOpen } from 'lucide-react';

const certifications = [
  {
    id: 'novitech',
    title: 'Internship Masterclass Certificate',
    issuer: 'Novitech Academy',
    location: 'Chennai, India',
    badge: 'Masterclass',
    icon: Building,
    gradient: 'from-cyan-500/20 to-blue-600/20',
    borderColor: 'border-cyan-500/40',
    textColor: 'text-cyan-400',
    description: 'Successfully completed the Internship Masterclass program focused on practical software development and technical industry skillsets.'
  },
  {
    id: 'qualcomm',
    title: 'AI Upskilling Certificate: Technical Foundation',
    issuer: 'Qualcomm Academy',
    location: 'Global / Online',
    badge: 'AI Foundation',
    icon: Cpu,
    gradient: 'from-purple-500/20 to-pink-600/20',
    borderColor: 'border-purple-500/40',
    textColor: 'text-purple-400',
    description: 'Earned technical qualification in AI foundations, exploring core machine learning concepts and modern AI architecture fundamentals.'
  },
  {
    id: 'suffix',
    title: 'Industrial Visit Certificate',
    issuer: 'Suffix E Solution',
    location: 'Industry Exposure',
    badge: 'Industrial',
    icon: BookOpen,
    gradient: 'from-emerald-500/20 to-teal-600/20',
    borderColor: 'border-emerald-500/40',
    textColor: 'text-emerald-400',
    description: 'Awarded for participating in the official industrial visit, gaining insights into professional software development and enterprise IT operations.'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Upskilling</span>
          </div>
          <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base px-2 sm:px-0">
            Recognitions, masterclasses, and technical certifications earned during engineering studies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.id}
                className={`glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border ${cert.borderColor} glass-panel-hover flex flex-col justify-between relative overflow-hidden group shadow-xl`}
              >
                <div className={`absolute -top-10 -right-10 w-28 sm:w-36 h-28 sm:h-36 rounded-full bg-gradient-to-br ${cert.gradient} blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`} />

                <div className="space-y-4 sm:space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-900 border ${cert.borderColor} ${cert.textColor}`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className={`text-[10px] sm:text-[11px] font-mono font-bold px-2.5 sm:px-3 py-1 rounded-full bg-slate-900 border ${cert.borderColor} ${cert.textColor}`}>
                      {cert.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-outfit text-base sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <div className="flex items-center flex-wrap gap-1.5 mt-1.5 text-xs font-mono text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="font-semibold">{cert.issuer}</span>
                      {cert.location && <span className="text-slate-400 hidden sm:inline">• {cert.location}</span>}
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-800/80 flex items-center justify-between relative z-10 text-xs font-mono">
                  <span className="text-slate-400 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified</span>
                  </span>
                  <span className={cert.textColor}>Active</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
