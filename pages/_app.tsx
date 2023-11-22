import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from 'src/theme';
import createEmotionCache from 'src/createEmotionCache';
import { motion, AnimatePresence } from 'framer-motion';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;
  const isGoingBack = router.route.length < router.asPath.length;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AnimatePresence mode="wait" >
          <motion.div
            key={router.route}
            initial={isGoingBack ? { x: -300, opacity: 0 } : { x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={isGoingBack ? { x: 300, opacity: 0 } : { x: -300, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 160,
              damping: 10,
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </CacheProvider>
  );
}
