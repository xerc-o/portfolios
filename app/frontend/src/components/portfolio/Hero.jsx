import { profileData } from '../../data/mock';
import { smoothScrollTo } from '../../utils/animations';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden border-b border-rule fade-in-slide">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24 opacity-0 fade-in-slide delay-100">

        {/* Left Side: Typography manifesto */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl">
          <p className="font-mono text-xs text-ink-faint uppercase tracking-widest mb-6">
            Cybersecurity Engineer
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold text-ink leading-[1.05] mb-6 tracking-tight">
            {profileData.name}
          </h1>
          <p className="text-lg text-ink-muted mb-10 max-w-md leading-relaxed">
            {profileData.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              className="bg-accent text-[#F5F3EF] font-semibold px-8 py-3 hover:bg-accent-hover transition-colors w-full sm:w-auto"
              onClick={() => smoothScrollTo('projects')}
            >
              Lihat Proyek
            </button>
            <a
              href="https://drive.google.com/drive/folders/1gvKPf-brm8ghHXVGXLvQ6-9hV8jFTzQ5"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-rule text-ink font-medium px-8 py-3 hover:bg-bg-alt transition-colors text-center w-full sm:w-auto"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side: Spare geometric block */}
        <div className="flex-1 w-full hidden lg:flex justify-end">
          <div className="w-full max-w-sm aspect-square bg-bg-alt border border-rule flex flex-col justify-end p-10">
            <span className="font-mono text-xs text-ink-faint uppercase tracking-widest block mb-4">
              01 / Approach
            </span>
            <p className="text-base text-ink-muted leading-relaxed">
              Offense-first thinking. Understanding how systems break is the only way to know how to defend them.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
