import React, { useEffect, useState } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie_consent');
    if (!hasConsented) {
      // Small delay so it animates in nicely
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50 px-4">
      <div className="max-w-7xl mx-auto p-4 bg-slate-900 rounded-lg shadow-xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-300">
          We use cookies to improve your experience and analyze our traffic. By continuing, you agree to our use of cookies.
        </p>
        <div className="flex-shrink-0 flex gap-4">
          <button
            onClick={acceptCookies}
            className="flex-shrink-0 px-6 py-2.5 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
          >
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
