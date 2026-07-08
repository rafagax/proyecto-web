import { useRef, useEffect } from 'react';

// Mobile-only horizontal carousel: finger-swipeable (native momentum scroll)
// with a gentle, continuous auto-scroll that loops seamlessly. The children are
// rendered twice (the second copy is aria-hidden) so the loop has no visible
// seam. On desktop the whole thing is hidden via CSS (.wdd-mscroll display:none).
//
// The rAF loop only runs while the track is on screen (IntersectionObserver) —
// so it never runs on desktop, where the element is display:none — and it never
// starts under prefers-reduced-motion (finger swiping still works natively).
// Auto-scroll pauses while the user is touching and resumes shortly after they
// let go. No React state is touched in the effect — it only mutates scrollLeft —
// so it stays cheap and lint-clean.
const MobileAutoCarousel = ({ children, speed = 1.1 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion: no marquee at all, manual swipe stays available.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let running = false;
    let paused = false;
    let resumeTimer;

    // Continuous leftward marquee. Only advances when the track is overflowing
    // (mobile only — on desktop scrollWidth === clientWidth === 0).
    const tick = () => {
      if (!paused && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    // Run the loop only while the carousel is actually in the viewport.
    let observer;
    if (typeof IntersectionObserver === 'undefined') {
      start();
    } else {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      });
      observer.observe(el);
    }

    const pause = () => {
      paused = true;
      clearTimeout(resumeTimer);
    };
    const scheduleResume = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
      }, 800);
    };

    // Touch-only: pause while the user drags, resume shortly after they let go.
    // (No mouse listeners — mobile browsers fire an emulated mouseenter without a
    // matching mouseleave, which would leave the marquee paused forever.)
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', scheduleResume, { passive: true });
    el.addEventListener('touchcancel', scheduleResume, { passive: true });

    return () => {
      stop();
      if (observer) observer.disconnect();
      clearTimeout(resumeTimer);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', scheduleResume);
      el.removeEventListener('touchcancel', scheduleResume);
    };
  }, [speed]);

  return (
    <div className="wdd-mscroll" ref={ref}>
      {children}
      <div className="wdd-mscroll-dup" aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

export default MobileAutoCarousel;
