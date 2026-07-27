import React from 'react';
import { certificatesData } from '../../data/mock';

const Certificates = () => {
    return (
        <section id="certificates" className="py-24 bg-bg-warm border-b border-rule fade-in-slide delay-300">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">

                <div className="lg:w-1/3">
                    <h2 className="text-3xl font-sans font-bold text-ink tracking-tight mb-8">
                        Certifications
                    </h2>
                    <p className="text-lg text-ink-muted leading-relaxed max-w-md">
                        Kumpulan sertifikasi yang memvalidasi keahlian saya dalam bidang keamanan siber dan teknologi informasi.
                    </p>
                </div>

                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-12 gap-y-12">
                    {certificatesData.map((cert) => (
                        <div key={cert.id} className="flex flex-col border-b border-rule pb-8">
                            <span className="font-mono text-xs text-ink-faint uppercase tracking-widest mb-3">
                                {cert.date}
                            </span>
                            <h3 className="text-base font-bold text-ink leading-tight mb-2">
                                {cert.name}
                            </h3>
                            <span className="font-mono text-xs text-accent">
                                {cert.issuer}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certificates;
