import { useState, useEffect, useCallback } from 'react';

export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const clean = path.replace(/\/+$/, '');
  return clean || '/';
}

export function useNavigation() {
  const [pathname, setPathname] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const target = normalizePath(to);
    if (typeof window !== 'undefined') {
      if (normalizePath(window.location.pathname) !== target) {
        window.history.pushState({}, '', target);
        setPathname(target);
        window.scrollTo(0, 0);
      }
    }
  }, []);

  return { pathname, navigate };
}
