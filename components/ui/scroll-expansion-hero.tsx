'use client';

import {
  ReactNode,
  TouchEvent as ReactTouchEvent,
  WheelEvent as ReactWheelEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export default function ScrollExpandMedia({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent | ReactWheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
        return;
      }

      if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent | ReactTouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent | ReactTouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);

    const handleScroll = () => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel as EventListener, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart as EventListener, {
      passive: false,
    });
    window.addEventListener('touchmove', handleTouchMove as EventListener, {
      passive: false,
    });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel as EventListener);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as EventListener);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = () => setIsMobileState(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);
  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';
  const isPexelsVideoPage = mediaSrc.includes('pexels.com/video/');

  const getPexelsEmbedSrc = (url: string) => {
    const idMatch = url.match(/-(\d+)\/?$/) || url.match(/video\/(\d+)\/?$/);
    const videoId = idMatch?.[1];
    if (!videoId) return null;
    return `https://www.pexels.com/embed/video/${videoId}?autoplay=1&muted=1&loop=1`;
  };

  const pexelsEmbedSrc = isPexelsVideoPage ? getPexelsEmbedSrc(mediaSrc) : null;

  return (
    <div ref={sectionRef} className="overflow-x-hidden transition-colors duration-700 ease-in-out">
      <section className="relative flex min-h-dvh flex-col items-center justify-start">
        <div className="relative flex min-h-dvh w-full flex-col items-center">
          <div
            className="absolute inset-0 z-0 h-full"
            style={{ opacity: 1 - scrollProgress, transition: 'opacity 100ms linear' }}
          >
            <img src={bgImageSrc} alt="Background" className="h-screen w-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="container relative z-10 mx-auto flex flex-col items-center justify-start">
            <div className="relative flex h-dvh w-full flex-col items-center justify-center">
              <div
                className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-2xl transition-none"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {mediaType === 'video' ? (
                  pexelsEmbedSrc ? (
                    <div className="relative h-full w-full pointer-events-none">
                      <iframe
                        width="100%"
                        height="100%"
                        src={pexelsEmbedSrc}
                        className="h-full w-full rounded-xl"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={title || 'Pexels video'}
                      />
                      <div
                        className="absolute inset-0 rounded-xl bg-black/30"
                        style={{
                          opacity: 0.5 - scrollProgress * 0.3,
                          transition: 'opacity 200ms linear',
                        }}
                      />
                    </div>
                  ) : mediaSrc.includes('youtube.com') ? (
                    <div className="relative h-full w-full pointer-events-none">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        className="h-full w-full rounded-xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div
                        className="absolute inset-0 rounded-xl bg-black/30"
                        style={{
                          opacity: 0.5 - scrollProgress * 0.3,
                          transition: 'opacity 200ms linear',
                        }}
                      />
                    </div>
                  ) : (
                    <div className="relative h-full w-full pointer-events-none">
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="h-full w-full rounded-xl object-cover"
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className="absolute inset-0 rounded-xl bg-black/30"
                        style={{
                          opacity: 0.5 - scrollProgress * 0.3,
                          transition: 'opacity 200ms linear',
                        }}
                      />
                    </div>
                  )
                ) : (
                  <div className="relative h-full w-full">
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className="h-full w-full rounded-xl object-cover"
                    />
                    <div
                      className="absolute inset-0 rounded-xl bg-black/50"
                      style={{
                        opacity: 0.7 - scrollProgress * 0.3,
                        transition: 'opacity 200ms linear',
                      }}
                    />
                  </div>
                )}

                <div className="relative z-10 mt-4 flex flex-col items-center text-center transition-none">
                  {date && (
                    <p className="text-2xl text-blue-200" style={{ transform: `translateX(-${textTranslateX}vw)` }}>
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p className="text-center font-medium text-blue-200" style={{ transform: `translateX(${textTranslateX}vw)` }}>
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`relative z-10 flex w-full flex-col items-center justify-center gap-4 text-center transition-none ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <h2
                  className="text-4xl font-bold font-recia text-blue-200 transition-none md:text-6xl lg:text-8xl"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </h2>
                <h2
                  className="text-center text-4xl font-recia font-bold text-blue-200 transition-none md:text-6xl lg:text-8xl"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </h2>
              </div>
            </div>

            <section
              className="flex w-full flex-col px-8 py-10 md:px-16 lg:py-20"
              style={{ opacity: showContent ? 1 : 0, transition: 'opacity 700ms ease' }}
            >
              {children}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
