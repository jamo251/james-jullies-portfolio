import React, { useState, useEffect, useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap';
import { scrollToSection } from '../hooks/useLenis';

interface NavbarProps {
  onNavClick?: () => void;
}

const NAV_LINKS = [
  { href: '#projects', label: 'Achievements' },
  { href: '#skills', label: 'Expertise' },
  { href: '#experience', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState('');
  const lastY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // Hide on scroll down, reveal on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bahrain local-time flourish
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Bahrain',
      hour: '2-digit',
      minute: '2-digit',
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useGSAP(
    () => {
      if (!menuOpen || prefersReducedMotion()) return;
      gsap.from('.menu-link', {
        yPercent: 110,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.07,
        delay: 0.1,
      });
    },
    { scope: menuRef, dependencies: [menuOpen] }
  );

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    onNavClick?.();
    // Let the portfolio view re-mount before scrolling to the anchor
    setTimeout(() => scrollToSection(href), 60);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] bg-ink/85 backdrop-blur-sm border-b border-line transition-transform duration-500 ${
          hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="px-6 md:px-10 h-16 flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              onNavClick?.();
              setTimeout(() => scrollToSection('#root'), 60);
            }}
            className="display-heading text-lg text-paper hover:text-accent transition-colors"
          >
            James Jullies
          </a>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="mono-label text-muted hover:text-paper transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
            <span className="mono-label text-muted/60" aria-hidden="true">
              BAHRAIN {time}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden mono-label text-paper"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div ref={menuRef} className="fixed inset-0 z-[99] bg-ink flex flex-col justify-end p-6 pb-16 md:hidden">
          <div className="space-y-2">
            {NAV_LINKS.map((link, i) => (
              <div key={link.href} className="overflow-hidden">
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="menu-link block display-heading text-[clamp(1.9rem,10vw,3.5rem)] text-paper active:text-accent"
                >
                  <span className="font-mono text-xs text-accent align-top mr-3">0{i + 1}</span>
                  {link.label}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-12 mono-label text-muted">BAHRAIN {time}</div>
        </div>
      )}
    </>
  );
};

export default Navbar;
