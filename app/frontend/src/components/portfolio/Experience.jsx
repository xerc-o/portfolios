import React from 'react';
import { experienceData } from '../../data/mock';

const Experience = () => {
    const organizations = experienceData.filter((exp) => exp.type === 'organization');

    return (
        <section id="experience" className="py-24 bg-bg-alt border-b border-rule fade-in-slide delay-200">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-16">
                    <h2 className="text-3xl font-sans font-bold text-ink tracking-tight">
                        Experience & Involvement
                    </h2>
                </div>

                <div className="flex flex-col">
                    {organizations.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`py-8 flex flex-col md:flex-row gap-6 md:gap-16 ${index !== 0 ? 'border-t border-rule' : ''}`}
                        >
                            <div className="md:w-1/3 flex flex-col items-start pt-1">
                                <h3 className="text-xl font-bold text-ink mb-1">
                                    {exp.title}
                                </h3>
                                <p className="text-base text-ink-muted font-medium">
                                    {exp.organization}
                                </p>
                                <span className="font-mono text-xs text-ink-faint mt-2 block">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="md:w-2/3 flex flex-col pt-1">
                                <p className="text-base text-ink-muted leading-relaxed max-w-2xl">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
