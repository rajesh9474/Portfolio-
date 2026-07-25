import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Building, Cpu, BookOpen } from 'lucide-react';

const certifications = [
  {
    id: 'novitech',
    title: 'Internship Masterclass Certificate',
    issuer: 'Novitech Academy',
    location: 'Chennai, India',
    badge: 'Internship Masterclass',
    icon: Building,
    gradient: 'from-cyan-500/20 to-blue-600/20',
    borderColor: 'border-cyan-500/40',
    textColor: 'text-cyan-400',
    description: 'Successfully completed the intensive Internship Masterclass program focused on practical software development and technical industry skillsets.'
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
    description: 'Earned technical qualification in artificial intelligence foundations, exploring core machine learning concepts and modern AI architecture fundamentals.'
  },
  {
    id: 'suffix',
    title: 'Industrial Visit Certificate',
    issuer: 'Suffix E Solution',
    location: 'Industry Exposure',
    badge: 'Industrial Exposure',
    icon: BookOpen,
    gradient: 'from-emerald-500/20 to-teal-600/20',
    borderColor: 'border-emerald-500/40',
    textColor: 'text-emerald-400',
    description: 'Awarded certificate for participating in the official industrial visit, gaining valuable insights into professional software development and enterprise IT operations.'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Upskilling</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Recognitions, masterclasses, and technical certifications earned during engineering studies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.id}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border ${cert.borderColor} glass-panel-hover flex flex-col justify-between relative overflow-hidden group shadow-xl`}
              >
                {/* Background Ambient Glow */}
                <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br ${cert.gradient} blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`} />

                <div className="space-y-5 relative z-10">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-slate-900 border ${cert.borderColor} ${cert.textColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-900 border ${cert.borderColor} ${cert.textColor}`}>
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1.5 text-xs font-mono text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="font-semibold">{cert.issuer}</span>
                      {cert.location && <span className="text-slate-400">• {cert.location}</span>}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Status */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between relative z-10 text-xs font-mono">
                  <span className="text-slate-400 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Credential</span>
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
