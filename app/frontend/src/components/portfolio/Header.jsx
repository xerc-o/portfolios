import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { profileData } from '../../data/mock';
import { smoothScrollTo } from '../../utils/animations';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#about' },
    { label: 'Pendidikan', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Sertifikat', href: '#certificates' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-150 ${isScrolled
          ? 'bg-bg-warm border-b border-rule py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand — name only */}
        <button
          className="text-base font-bold text-ink tracking-tight hover:text-accent transition-colors"
          onClick={() => smoothScrollTo('hero')}
        >
          {profileData.name}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-mono text-xs text-ink-muted hover:text-ink transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-ink-muted"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-warm border-t border-rule py-6 px-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-sm text-ink-muted hover:text-ink transition-colors uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
