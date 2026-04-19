import {ArrowTopRightOnSquareIcon, ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useCallback, useEffect, useState} from 'react';

import {featuredResearch, portfolioItems, SectionId} from '../../data/data';
import {FeaturedResearch as FeaturedResearchType, PortfolioItem, ResearchMediaItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-12">
        {/* Featured Research block */}
        <FeaturedResearchBlock research={featuredResearch} />

        {/* Portfolio grid */}
        {/* Portfolio grid */}
        <div className="flex flex-col gap-y-8">
          <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <ProjectCard item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </div>
        </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

/* -------------------------------------------------------------------------- */
/*  Featured Research block                                                   */
/* -------------------------------------------------------------------------- */

const FeaturedResearchBlock: FC<{research: FeaturedResearchType}> = memo(({research}) => {
  const {title, subtitle, status, description, media, links} = research;

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col items-center gap-y-2">
        <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-300">
          Featured Research
        </span>
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="text-center text-sm text-stone-300">{subtitle}</p>
        <p className="text-center text-xs italic text-stone-400">{status}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Carousel — takes 3/5 width on large screens */}
        <div className="lg:col-span-3">
          <ResearchCarousel autoAdvanceMs={research.autoAdvanceMs} media={media} />
        </div>

        {/* Description + links — takes 2/5 width on large screens */}
        <div className="flex flex-col justify-center gap-y-4 text-stone-300 lg:col-span-2">
          <div className="prose prose-sm prose-invert max-w-none">{description}</div>
          <div className="flex flex-wrap gap-3">
            {links.map((link, idx) => (
              <a
                className={classNames(
                  'inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  link.primary
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'border border-stone-500 text-stone-200 hover:bg-stone-700',
                )}
                href={link.href}
                key={`research-link-${idx}`}
                rel="noopener noreferrer"
                target="_blank">
                {link.text}
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
FeaturedResearchBlock.displayName = 'FeaturedResearchBlock';

/* -------------------------------------------------------------------------- */
/*  Carousel                                                                  */
/* -------------------------------------------------------------------------- */

interface ResearchCarouselProps {
  media: ResearchMediaItem[];
  autoAdvanceMs?: number;
}

const ResearchCarousel: FC<ResearchCarouselProps> = memo(({media, autoAdvanceMs}) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const count = media.length;

  const goPrev = useCallback(() => {
    setIndex(i => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex(i => (i + 1) % count);
  }, [count]);

  const goTo = useCallback((i: number) => {
    setIndex(i);
  }, []);

  // Auto-advance (pauses when the user hovers, focuses, or is viewing a video)
  useEffect(() => {
    if (!autoAdvanceMs || count <= 1 || isPaused) {
      return;
    }
    const current = media[index];
    if (current.type === 'video') {
      // Don't auto-advance while a video is showing — let the user watch it
      return;
    }
    const id = window.setTimeout(goNext, autoAdvanceMs);
    return () => window.clearTimeout(id);
  }, [autoAdvanceMs, count, goNext, index, isPaused, media]);

  if (count === 0) {
    return null;
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-black shadow-xl shadow-black/40"
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      {/* Slides */}
      <div className="relative aspect-video w-full">
        {media.map((item, i) => (
          <div
            aria-hidden={i !== index}
            className={classNames(
              'absolute inset-0 transition-opacity duration-500 ease-in-out',
              i === index ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
            key={`slide-${i}`}>
            {item.type === 'image' ? (
              <Image alt={item.alt} className="h-full w-full object-cover" fill sizes="(max-width: 1024px) 100vw, 60vw" src={item.src} />
            ) : (
              <video
                aria-label={item.alt}
                className="h-full w-full object-cover"
                controls
                playsInline
                poster={typeof item.poster === 'string' ? item.poster : item.poster?.src}
                preload="metadata"
                src={item.src}
              />
            )}
          </div>
        ))}
      </div>

      {/* Prev / Next buttons */}
      {count > 1 && (
        <>
          <button
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={goPrev}
            type="button">
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            aria-label="Next slide"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={goNext}
            type="button">
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {count > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-x-2">
          {media.map((_, i) => (
            <button
              aria-label={`Go to slide ${i + 1}`}
              className={classNames(
                'h-2 w-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-orange-500',
                i === index ? 'w-6 bg-orange-400' : 'bg-white/50 hover:bg-white/80',
              )}
              key={`dot-${i}`}
              onClick={() => goTo(i)}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
});
ResearchCarousel.displayName = 'ResearchCarousel';

/* -------------------------------------------------------------------------- */
/*  Project card — used in the portfolio grid                                 */
/* -------------------------------------------------------------------------- */

const ProjectCard: FC<{item: PortfolioItem}> = memo(({item}) => {
  const {title, subtitle, description, url, image, tags} = item;
  const hasLink = url && url !== '#';
  const linkLabel = (() => {
      if (!url || url === '#') return '';
      if (url.includes('github.com')) return 'View on GitHub';
      if (url.includes('youtube.com') || url.includes('youtu.be')) return 'Watch on YouTube';
      if (url.includes('vimeo.com')) return 'Watch on Vimeo';
      return 'View project';
    })();

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-lg shadow-black/30 transition-transform duration-200 hover:-translate-y-0.5">
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <Image alt={title} className="object-cover" fill placeholder="blur" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src={image} />
      </div>
      <div className="flex flex-1 flex-col gap-y-2 p-4">
        <div className="flex items-baseline justify-between gap-x-2">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          {subtitle && <span className="shrink-0 text-xs text-stone-400">{subtitle}</span>}
        </div>
        <p className="flex-1 text-sm leading-relaxed text-stone-300">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map(tag => (
              <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-stone-300" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        {hasLink && (
          <a
            className="mt-2 inline-flex items-center gap-x-1 text-xs text-orange-300 transition-colors hover:text-orange-200"
            href={url}
            rel="noopener noreferrer"
            target="_blank">
            {linkLabel}
            <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
    
  );
});

ProjectCard.displayName = 'ProjectCard';
