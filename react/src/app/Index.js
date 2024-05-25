import React from 'react';
import AppLayout from '../src/app/layout';
import { ThemeProvider } from 'next-themes';

function Index({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default Index;