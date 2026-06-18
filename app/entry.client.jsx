import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';

// Signal to the inline failsafe (in root's <head>) that the JS bundle loaded,
// so it won't force-reveal content. If the bundle never loads (flaky network),
// the failsafe reveals everything after a few seconds.
window.__appReady = true;

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
