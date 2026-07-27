import React from 'react';
import { skillsData } from '../../data/mock';

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-bg-alt border-b border-rule fade-in-slide delay-200">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-16">
                    <h2 className="text-3xl font-sans font-bold text-ink tracking-tight">
                        Competencies
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mb-24">
                    {skillsData.map((category, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className="text-sm font-mono uppercase tracking-widest text-ink-faint mb-6 border-b border-rule pb-2">
                                {category.category}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {category.items.map((skill) => (
                                    <li
                                        key={skill}
                                        className="text-base text-ink font-medium"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Focus Block — stark dark section */}
                <div className="p-10 md:p-14 bg-bg-dark text-[#EDEAE4]">
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                        <div className="flex-1">
                            <h4 className="text-2xl font-bold mb-6">Primary Focus</h4>
                            <p className="text-[#9BA3A0] leading-relaxed text-lg max-w-lg">
                                Minat saya berfokus pada offensive security. Saya aktif berlatih melalui CyClab, TryHackMe, HackTheBox, dan platform CTF lainnya untuk mengasah kemampuan eksploitasi secara praktis.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex flex-col justify-center gap-8 border-t md:border-t-0 md:border-l border-[#2E3834] pt-8 md:pt-0 md:pl-8">
                            <div className="flex flex-col">
                                <span className="font-mono text-xs text-[#5A625F] uppercase tracking-widest mb-1">Methodology</span>
                                <span className="text-xl font-bold text-[#EDEAE4]">Red Team</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-mono text-xs text-[#5A625F] uppercase tracking-widest mb-1">Platform</span>
                                <span className="text-xl font-bold text-[#EDEAE4]">CTF / HackTheBox</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
