import { useRef, useEffect } from 'react';

// Mobile-only horizontal carousel: finger-swipeable (native momentum scroll)
// with a gentle, continuous auto-scroll that loops seamlessly. The children are
// rendered twice (the second copy is aria-hidden) so the loop has no visible
// seam. On desktop the whole thing is hidden via CSS (.wdd-mscroll display:none).
//
// Auto-scroll pauses while the user is touching/hovering and resumes shortly
// after they let go. No React state is touched in the effect — it only mutates
// scrollLeft — so it stays cheap and lint-clean.
const MobileAutoCarousel = ({ children, speed = 1.1 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf;
    let paused = false;
    let resumeTimer;

    // Continuous leftward marquee. Runs every frame; the scroll only actually
    // advances when the track is visible and overflowing (mobile only — on
    // desktop .wdd-mscroll is display:none, so scrollWidth === clientWidth === 0).
    const tick = () => {
      if (!paused && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };

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

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
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
