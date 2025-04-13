'use client';

/**
 * This registry is crucial for Styled Components to work with Next.js 13+ (App Router).
 * It ensures:
 * 1. Proper handling of server-side rendering (SSR) for styles
 * 2. Prevention of Flash of Unstyled Content
 * 3. Style collection and injection during SSR
 * 4. Cleanup of styles to prevent memory leaks
 *
 * Without this registry, styles may flicker or fail to load correctly
 * during the initial page render.
 */

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
