'use client';
import React, { useEffect, useState } from 'react';
import '@/i18n/config';
import { I18nextProvider } from 'react-i18next';
import i18n from './config';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div
        aria-hidden={!mounted}
        style={{ visibility: mounted ? 'visible' : 'hidden' }}
      >
        {children}
      </div>
    </I18nextProvider>
  );
}
