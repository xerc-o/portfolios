import React from 'react';
import { educationData, profileData } from '../../data/mock';

const Education = () => {
    return (
        <section id="education" className="py-24 bg-bg-warm border-b border-rule fade-in-slide delay-100">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 md:gap-24">

                <div className="md:w-1/3">
                    <h2 className="text-3xl font-sans font-bold text-ink tracking-tight mb-8">
                        Academic Background
                    </h2>
                    <p className="text-lg text-ink-muted leading-relaxed max-w-md">
                        Pendidikan formal yang membekali fondasi teknis dan analitis yang kuat untuk menyelesaikan kompleksitas dalam bidang keamanan informasi.
                    </p>
                </div>

                <div className="md:w-2/3 flex flex-col gap-12">
                    <div className="flex flex-col border-b border-rule pb-8">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                            <h3 className="text-2xl font-bold text-ink">{educationData.university}</h3>
                            <span className="font-mono text-xs text-ink-faint mt-1 sm:mt-0">{educationData.period}</span>
                        </div>
                        <p className="text-lg font-medium text-ink-muted mb-6">{educationData.degree}, {educationData.major}</p>

                        <div className="flex flex-row gap-12 mb-8">
                            <div className="flex flex-col">
                                <span className="font-mono text-xs text-ink-faint uppercase tracking-widest mb-1">GPA</span>
                                <span className="text-xl font-bold text-ink">{educationData.gpa}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-mono text-xs text-ink-faint uppercase tracking-widest mb-1">Semester</span>
                                <span className="text-xl font-bold text-ink">{profileData.semester}</span>
                            </div>
                        </div>

                        <div>
                            <span className="font-mono text-xs text-ink-faint uppercase tracking-widest block mb-4">
                                Relevant Coursework
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {educationData.coursework.map((course, index) => (
                                    <span
                                        key={index}
                                        className="font-mono text-xs text-ink-muted bg-bg-alt border border-rule px-3 py-1"
                                    >
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
