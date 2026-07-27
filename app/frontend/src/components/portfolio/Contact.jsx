import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { profileData } from '../../data/mock';

const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: profileData.email,
            href: `mailto:${profileData.email}`,
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'LinkedIn Profile',
            href: profileData.linkedin,
        },
        {
            icon: Github,
            label: 'GitHub',
            value: profileData.github?.replace('https://', ''),
            href: profileData.github,
        },
    ];

    return (
        <section id="contact" className="py-24 bg-bg-alt border-b border-rule fade-in-slide delay-100">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Left: Big CTA */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight mb-8 leading-tight">
                        Mari Terhubung.
                    </h2>
                    <p className="text-lg text-ink-muted leading-relaxed max-w-md mb-10">
                        Memiliki tantangan keamanan, peluang eksplorasi sistem, atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya.
                    </p>
                    <div className="inline-flex items-center gap-3 font-mono text-sm text-ink-muted">
                        <MapPin className="w-4 h-4 text-ink-faint" />
                        {profileData.location}
                    </div>
                </div>

                {/* Right: Bare link list */}
                <div className="md:w-1/2 flex flex-col gap-0 justify-center">
                    {contactInfo.map((item, index) => (
                        <div key={index} className="border-b border-rule group py-6 first:border-t">
                            <span className="font-mono text-xs text-ink-faint uppercase tracking-widest block mb-2">
                                {item.label}
                            </span>
                            <a
                                href={item.href}
                                target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                className="text-xl font-bold text-ink hover:text-accent transition-colors"
                            >
                                {item.value}
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Contact;
