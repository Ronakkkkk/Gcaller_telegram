import { useState, useEffect } from 'react';

export function useTelegramWebApp() {
  const [webApp, setWebApp] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp) {
      const app = (window as any).Telegram.WebApp;
      app.ready();
      app.expand();
      
      // Configure appearance
      app.setHeaderColor('#YOUR_HEADER_COLOR');
      app.setBackgroundColor('#YOUR_BG_COLOR');
      
      setWebApp(app);
    }
  }, []);

  const closeSafely = () => {
    webApp?.close();
  };

  return { webApp, closeSafely };
}
