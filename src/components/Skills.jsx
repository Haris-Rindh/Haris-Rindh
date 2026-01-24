import React from 'react';

const Skills = () => {
    // We explicitly define the classes here so Tailwind includes them in the build
    const frontendSkills = [
        { name: "HTML5 & CSS3", level: "Expert", class: "bg-green-100 text-green-700" },
        { name: "JavaScript (ES6+)", level: "Advanced", class: "bg-blue-100 text-blue-700" },
        { name: "Tailwind CSS", level: "Advanced", class: "bg-blue-100 text-blue-700" },
        { name: "React.js", level: "Building", class: "bg-purple-100 text-purple-700" },
    ];

    const backendSkills = [
        { name: "Node.js & Express", level: "Intermediate", class: "bg-yellow-100 text-yellow-700" },
        { name: "MongoDB / SQL", level: "In Progress", class: "bg-yellow-100 text-yellow-700" },
        { name: "Git & GitHub", level: "Proficient", class: "bg-green-100 text-green-700" },
        { name: "REST APIs", level: "Proficient", class: "bg-blue-100 text-blue-700" },
    ];

    return (
        <section id="skills" className="py-24 bg-slate-800/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="reveal reveal-up text-sm font-bold text-primary tracking-wide uppercase mb-2">Core Competencies</h2>
                    <h3 className="reveal reveal-up delay-100 text-3xl md:text-4xl font-bold text-white font-display">Technical Proficiency</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Frontend */}
                    <div className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 transition-all hover:shadow-xl hover:-translate-y-1">
                        <h4 className="reveal reveal-up text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <i className="fas fa-laptop-code text-blue-500"></i> Frontend Development
                        </h4>
                        <div className="space-y-4">
                            {frontendSkills.map((skill, idx) => (
                                <div key={idx} className="reveal reveal-up flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                                    <span className="font-medium text-slate-300">{skill.name}</span>
                                    {/* Use the explicit class string */}
                                    <span className={`text-xs px-2 py-1 rounded font-bold ${skill.class}`}>{skill.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 transition-all hover:shadow-xl hover:-translate-y-1">
                        <h4 className="reveal reveal-up text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <i className="fas fa-server text-purple-500"></i> Backend & Tools
                        </h4>
                        <div className="space-y-4">
                            {backendSkills.map((skill, idx) => (
                                <div key={idx} className="reveal reveal-up flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                                    <span className="font-medium text-slate-300">{skill.name}</span>
                                    <span className={`text-xs px-2 py-1 rounded font-bold ${skill.class}`}>{skill.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;