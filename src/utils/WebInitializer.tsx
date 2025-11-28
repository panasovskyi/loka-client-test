'use client';

import { useEffect } from 'react';

const WebInitializer = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;

      if (!tg.isExpanded) {
        tg.expand();
      }
      const headerColor = '#ffffff';

      tg.setHeaderColor(headerColor);

      tg.setBackgroundColor(tg.themeParams.bg_color || '#ffffff');

      tg.ready();
    }
  }, []);

  return null;
};

export default WebInitializer;