import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../types';
import { MarkdownText } from './MarkdownText';
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap';
import MagneticButton from './MagneticButton';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const CATEGORY_LABELS: Record<Project['category'], string> = {
  Data: 'Business Intelligence & Data Eng',
  Martech: 'Martech Orchestration',
  AI: 'Applied Generative AI',
  Web: 'Web Architecture',
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loadingError, setLoadingError] = useState<Record<number, boolean>>({});
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rootRef.current?.scrollTo(0, 0);
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project, isFullscreen]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          rootRef.current,
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 0.9, ease: 'power4.inOut' }
        );
        gsap.from('.detail-char', {
          yPercent: 110,
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.018,
          delay: 0.5,
        });
        gsap.from('.detail-meta', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.9,
        });
      });
    },
    { scope: rootRef, dependencies: [project.id] }
  );

  const gallery = project.galleryImages || [project.imageUrl];

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleImageError = (index: number, source: string) => {
    console.error(`ProjectDetail: Error loading asset: ${source} (Base: ${window.location.href})`);
    setLoadingError((prev) => ({ ...prev, [index]: true }));
  };

  const squareNavButton =
    'w-12 h-12 flex items-center justify-center border border-line text-paper hover:bg-accent hover:text-ink hover:border-accent transition-colors';

  return (
    <div
      ref={rootRef}
      data-lenis-prevent
      className="fixed inset-0 z-[110] bg-ink overflow-y-auto"
    >
      {/* Top bar */}
      <nav className="sticky top-0 z-30 bg-ink/85 backdrop-blur-sm border-b border-line h-16">
        <div className="px-6 md:px-10 h-full flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-3 mono-label text-muted hover:text-accent transition-colors group"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to Portfolio
          </button>
          <div className="mono-label text-accent">{project.category} Case Study</div>
        </div>
      </nav>

      {/* Fullscreen lightbox */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[120] bg-ink/97 flex flex-col items-center justify-center p-4 md:p-12"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            className="absolute top-6 right-6 md:top-8 md:right-10 mono-label text-muted hover:text-accent transition-colors"
            aria-label="Close fullscreen"
          >
            Close ✕
          </button>

          <div className="relative w-full max-w-6xl flex items-center justify-center h-full">
            <button onClick={prevImage} className={`absolute left-0 z-10 ${squareNavButton} bg-ink`} aria-label="Previous image">
              ←
            </button>
            <div className="w-full h-full flex items-center justify-center">
              {!loadingError[activeImage] ? (
                <img
                  src={gallery[activeImage]}
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                  alt="Dashboard Preview"
                  onError={() => handleImageError(activeImage, gallery[activeImage])}
                />
              ) : (
                <div className="text-muted font-mono text-center p-12 border border-line">
                  <div className="text-4xl mb-4">⚠️</div>
                  <div className="text-sm tracking-widest uppercase mb-2">Image Not Found</div>
                  <span className="text-[10px] opacity-30 break-all">{gallery[activeImage]}</span>
                </div>
              )}
            </div>
            <button onClick={nextImage} className={`absolute right-0 z-10 ${squareNavButton} bg-ink`} aria-label="Next image">
              →
            </button>
          </div>

          <div className="absolute bottom-8 font-mono text-xs text-muted uppercase tracking-[0.15em]">
            {gallery[activeImage].split('/').pop()} · {String(activeImage + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
          </div>
        </div>
      )}

      {/* Title block */}
      <header className="px-6 md:px-10 pt-20 md:pt-28 pb-12 md:pb-16 border-b border-line">
        <h1 className="display-heading text-[clamp(2.5rem,9vw,8.5rem)] text-paper break-words">
          {project.title.split(' ').map((word, wi) => (
            <span key={wi} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em] mr-[0.22em] last:mr-0">
              {word.split('').map((char, ci) => (
                <span key={ci} className="detail-char inline-block">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <div className="detail-meta flex flex-wrap gap-x-6 gap-y-2 mt-8">
          {project.tags.map((tag) => (
            <span key={tag} className="mono-label text-muted">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Lead figure */}
      <figure className="detail-meta px-6 md:px-10 py-12 md:py-16 border-b border-line">
        <div className="bg-surface border border-line flex items-center justify-center max-h-[70vh] overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full max-h-[70vh] object-contain"
            onError={(e) => {
              console.error(`Hero: Failed to load ${project.imageUrl}`);
              e.currentTarget.style.opacity = '0.2';
            }}
          />
        </div>
        <figcaption className="mono-label text-muted mt-4">
          {project.title} — 01
        </figcaption>
      </figure>

      <div className="px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-20 md:space-y-28">
            {/* Overview */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-xs text-accent">A</span>
                <span className="w-10 h-px bg-line" aria-hidden="true" />
                <h2 className="mono-label text-muted">Project Context</h2>
              </div>
              <p className="text-xl md:text-3xl text-paper leading-snug font-light whitespace-pre-wrap">
                <MarkdownText text={project.description} />
              </p>
            </section>

            {/* Gallery */}
            {project.galleryImages && (
              <section className="space-y-8">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-xs text-accent">B</span>
                      <span className="w-10 h-px bg-line" aria-hidden="true" />
                      <h2 className="mono-label text-muted">Gallery</h2>
                    </div>
                    <h3 className="display-heading text-2xl md:text-4xl text-paper">
                      Dashboard Architecture
                    </h3>
                    <p className="text-muted text-sm mt-2">
                      Interactive visualization layer built on enterprise data streams.
                    </p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <button onClick={prevImage} className={squareNavButton} aria-label="Previous image">
                      ←
                    </button>
                    <button onClick={nextImage} className={squareNavButton} aria-label="Next image">
                      →
                    </button>
                  </div>
                </div>

                <div
                  className="relative border border-line bg-surface cursor-zoom-in min-h-[320px] md:min-h-[480px] flex items-center justify-center group"
                  onClick={() => setIsFullscreen(true)}
                >
                  <div className="aspect-video relative w-full flex items-center justify-center">
                    {!loadingError[activeImage] ? (
                      <img
                        key={activeImage}
                        src={gallery[activeImage]}
                        alt={`Dashboard frame ${activeImage + 1}`}
                        loading="lazy"
                        className="w-full h-full object-contain"
                        onError={() => handleImageError(activeImage, gallery[activeImage])}
                      />
                    ) : (
                      <div className="text-muted font-mono text-center flex flex-col items-center py-20">
                        <div className="text-[10px] tracking-[0.4em] uppercase opacity-40">Static_Asset_Error</div>
                        <div className="text-[8px] mt-4 opacity-20 break-all px-12">{gallery[activeImage]}</div>
                      </div>
                    )}
                  </div>

                  <div className="absolute top-4 left-4 mono-label text-accent bg-ink/70 px-3 py-2 border border-line">
                    Insight Layer {String(activeImage + 1).padStart(2, '0')}
                  </div>
                  <div className="absolute bottom-4 right-4 font-mono text-xs text-muted bg-ink/70 px-3 py-2 border border-line opacity-0 group-hover:opacity-100 transition-opacity">
                    {String(activeImage + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')} — Click to expand
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative shrink-0 w-28 md:w-44 aspect-video overflow-hidden border transition-all duration-300 bg-surface ${
                        idx === activeImage
                          ? 'border-accent'
                          : 'border-line opacity-40 hover:opacity-100'
                      }`}
                      aria-label={`Show image ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt="Thumbnail"
                        loading="lazy"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.opacity = '0.1';
                        }}
                      />
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* Deep dive */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-xs text-accent">{project.galleryImages ? 'C' : 'B'}</span>
                <span className="w-10 h-px bg-line" aria-hidden="true" />
                <h2 className="mono-label text-muted">Implementation Deep Dive</h2>
              </div>
              <div className="text-muted text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                <MarkdownText text={project.longDescription} />
              </div>
            </section>
          </div>

          {/* Spec sheet sidebar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 border border-line bg-surface p-8 md:p-10 space-y-10">
              <div>
                <h3 className="mono-label text-paper pb-4 border-b border-line">Project Specs</h3>
                <dl className="mt-6 space-y-6">
                  <div>
                    <dt className="mono-label text-muted mb-2">Category</dt>
                    <dd className="text-paper">{CATEGORY_LABELS[project.category]}</dd>
                  </div>
                  <div>
                    <dt className="mono-label text-muted mb-2">Primary Stack</dt>
                    <dd className="font-mono text-xs text-accent leading-loose uppercase tracking-[0.1em]">
                      {project.tags.join(' · ')}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="space-y-4">
                {project.link && (
                  <MagneticButton className="w-full">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-accent text-ink py-5 font-mono text-xs uppercase tracking-[0.2em] hover:bg-paper transition-colors group"
                    >
                      View Live Dashboard
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
                    </a>
                  </MagneticButton>
                )}
                <MagneticButton className="w-full">
                  <button
                    onClick={() => setIsFullscreen(true)}
                    className="flex items-center justify-center gap-3 w-full border border-line text-paper py-5 font-mono text-xs uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-colors"
                  >
                    Inspect Screenshots
                  </button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
