import React from 'react';
import { profileData } from '../../data/mock';

const About = () => {
    const stats = [
        { label: 'Completed Engagements', value: '3' },
        { label: 'Academic Standing (GPA)', value: profileData.gpa },
        { label: 'CTF Flags Captured', value: '15+' }
    ];

    return (
        <section id="about" className="py-24 bg-bg-alt border-b border-rule fade-in-slide delay-300">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Left Side: Statement */}
                <div className="flex-1">
                    <h2 className="text-3xl font-sans font-bold text-ink tracking-tight mb-8">
                        Offensive Security
                    </h2>
                    <p className="text-lg text-ink-muted leading-relaxed mb-8 max-w-lg">
                        Cara terbaik untuk mempertahankan sebuah sistem adalah dengan memahami bagaimana sistem itu bisa ditembus. Saya senang mempelajari teknik-teknik serangan, aktif berlatih melalui CTF, dan memahami bagaimana kerentanan teknis bisa berdampak pada risiko sistem di dunia nyata.
                    </p>
                    <div className="pl-6 border-l-2 border-ink py-2" style={{ borderColor: 'var(--color-accent)' }}>
                        <p className="italic text-ink leading-relaxed">
                            "Tujuan saya adalah untuk terus belajar dan berkontribusi dalam membangun masa depan digital yang lebih aman bagi semua orang."
                        </p>
                    </div>
                </div>

                {/* Right Side: Stats */}
                <div className="w-full lg:w-1/3 flex flex-row flex-wrap lg:flex-col gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col pb-4 lg:pb-6 border-b border-rule last:border-0 last:pb-0 min-w-[120px] flex-1 lg:flex-none">
                            <span className="text-3xl lg:text-4xl font-bold text-ink mb-2">{stat.value}</span>
                            <span className="font-mono text-xs text-ink-faint uppercase tracking-widest leading-tight">{stat.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
