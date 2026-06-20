import { useRef, useEffect } from 'react';

// Mobile-only horizontal carousel: finger-swipeable (native momentum scroll)
// with a gentle, continuous auto-scroll that loops seamlessly. The children are
// rendered twice (the second copy is aria-hidden) so the loop has no visible
// seam. On desktop the whole thing is hidden via CSS (.wdd-mscroll display:none).
//
// Auto-scroll pauses while the user is touching/hovering and resumes shortly
// after they let go. No React state is touched in the effect — it only mutates
// scrollLeft — so it stays cheap and lint-clean.
const MobileAutoCarousel = ({ children, speed = 0.7 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Only run the auto-scroll on mobile widths.
    if (!window.matchMedia('(max-width: 768px)').matches) return;

    let raf;
    let paused = false;
    let resumeTimer;

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
      }, 2500);
    };

    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', scheduleResume, { passive: true });
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', scheduleResume);

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resumeTimer);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', scheduleResume);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', scheduleResume);
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
