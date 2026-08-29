import { useState, useEffect, useCallback } from "react";

export function useFavorites(key = "gamezone-favorites") {
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key) || "[]"); }
    catch { return []; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(favorites)); }, [favorites, key]);
  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  }, []);
  const isFavorite = useCallback((id) => favorites.includes(id), [favorites]);
  const clearFavorites = useCallback(() => setFavorites([]), []);
  return { favorites, toggleFavorite, isFavorite, clearFavorites, setFavorites };
}

export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch { return initial; }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.warn("localStorage set failed", e); }
  }, [key, value]);
  return [value, setValue];
}

export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    const m = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    m.addEventListener("change", handler);
    setMatches(m.matches);
    return () => m.removeEventListener("change", handler);
  }, [query]);
  return matches;
}
