import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../../data/mock';

const Footer = () => {
    const quickLinks = [
        { label: 'Tentang', href: '#about' },
        { label: 'Proyek', href: '#projects' },
        { label: 'Sertifikat', href: '#certificates' },
        { label: 'Kontak', href: '#contact' },
    ];

    return (
        <footer className="bg-bg-dark text-[#EDEAE4]">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <h3 className="text-2xl font-bold mb-3">{profileData.name}</h3>
                        <p className="font-mono text-xs text-[#5A625F] leading-relaxed">
                            Cybersecurity Engineering Student — Offensive Security Enthusiast
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-3">
                        <span className="font-mono text-xs text-[#5A625F] uppercase tracking-widest mb-1">Navigate</span>
                        {quickLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-mono text-xs text-[#9BA3A0] hover:text-[#EDEAE4] transition-colors uppercase tracking-wider"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-3">
                        <span className="font-mono text-xs text-[#5A625F] uppercase tracking-widest mb-1">Contact</span>
                        <a href={profileData.github} target="_blank" rel="noopener noreferrer"
                            className="font-mono text-xs text-[#9BA3A0] hover:text-[#EDEAE4] transition-colors flex items-center gap-2">
                            <Github size={13} /> GitHub
                        </a>
                        <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer"
                            className="font-mono text-xs text-[#9BA3A0] hover:text-[#EDEAE4] transition-colors flex items-center gap-2">
                            <Linkedin size={13} /> LinkedIn
                        </a>
                        <a href={`mailto:${profileData.email}`}
                            className="font-mono text-xs text-[#9BA3A0] hover:text-[#EDEAE4] transition-colors flex items-center gap-2">
                            <Mail size={13} /> Email
                        </a>
                    </div>
                </div>

                <div className="border-t border-[#2E3834] pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="font-mono text-xs text-[#5A625F]">© {new Date().getFullYear()} {profileData.name}</span>
                    <span className="font-mono text-xs text-[#5A625F]">Built with React</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
