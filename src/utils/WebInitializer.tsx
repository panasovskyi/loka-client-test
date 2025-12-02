'use client';

import { useEffect } from 'react';

const WebInitializer = () => {
  useEffect(() => {
    const tg = window?.Telegram?.WebApp;
    if (!tg) return;
    
    tg.ready();
    try {
      tg.requestFullscreen();
    } catch (error) {
      console.warn("Помилка requestFullscreen: метод не підтримується.", error);
    }
 //   tg.expand();
 //   tg.setHeaderColor(bg);
  //  tg.setBackgroundColor(bg);

    tg.disableVerticalSwipes();
    

    tg.onEvent('themeChanged', () => {
      const newBg = tg.themeParams?.bg_color ?? '#0A183280';
      tg.setBackgroundColor(newBg);
    });

  }, []);

  return null;
};

export default WebInitializer;
