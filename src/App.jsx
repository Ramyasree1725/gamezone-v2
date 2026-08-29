import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Sidebar } from "./components/Sidebar.jsx";
import { TopBar } from "./components/TopBar.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LibraryPage } from "./pages/LibraryPage.jsx";
import { TournamentsPage } from "./pages/TournamentsPage.jsx";
import { LeaderboardPage } from "./pages/LeaderboardPage.jsx";
import { NewsPage } from "./pages/NewsPage.jsx";
import { CommunityPage } from "./pages/CommunityPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { SettingsPage } from "./pages/SettingsPage.jsx";
import { GameModal } from "./components/GameModal.jsx";
import { useFavorites } from "./hooks/useFavorites.js";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { seedGames } from "./data/seedGames.js";
import { genres, platforms } from "./data/constants.js";
import "./styles/App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [platformFilter, setPlatformFilter] = useState("All");
  const [selectedGame, setSelectedGame] = useState(null);
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [user, setUser] = useLocalStorage("gamezone-user", {
    name: "PlayerOne", level: 42, xp: 8750, avatar: "P",
  });
  const filteredGames = useMemo(() => {
    return seedGames.filter((g) => {
      const matchSearch = !search || g.title.toLowerCase().includes(search.toLowerCase()) || g.description.toLowerCase().includes(search.toLowerCase());
      const matchGenre = genreFilter === "All" || g.genre === genreFilter;
      const matchPlatform = platformFilter === "All" || g.platform === platformFilter;
      return matchSearch && matchGenre && matchPlatform;
    });
  }, [search, genreFilter, platformFilter]);
  const handleOpenGame = useCallback((game) => setSelectedGame(game), []);
  const handleCloseModal = useCallback(() => setSelectedGame(null), []);
  useEffect(() => { document.title = "GameZone | " + page.charAt(0).toUpperCase() + page.slice(1); }, [page]);
  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage games={seedGames.slice(0, 8)} onOpen={handleOpenGame} favorites={favorites} onFavorite={toggleFavorite} />;
      case "library": return <LibraryPage games={filteredGames} genres={genres} platforms={platforms} genreFilter={genreFilter} platformFilter={platformFilter} onGenreChange={setGenreFilter} onPlatformChange={setPlatformFilter} onOpen={handleOpenGame} favorites={favorites} onFavorite={toggleFavorite} isFavorite={isFavorite} />;
      case "tournaments": return <TournamentsPage />;
      case "leaderboard": return <LeaderboardPage />;
      case "news": return <NewsPage />;
      case "community": return <CommunityPage />;
      case "profile": return <ProfilePage user={user} setUser={setUser} favorites={favorites} games={seedGames} />;
      case "settings": return <SettingsPage user={user} setUser={setUser} />;
      default: return <HomePage games={seedGames.slice(0, 8)} onOpen={handleOpenGame} favorites={favorites} onFavorite={toggleFavorite} />;
    }
  };
  return (
    <div className="shell">
      <Sidebar page={page} setPage={setPage} user={user} />
      <div className="main">
        <TopBar search={search} setSearch={setSearch} user={user} />
        <div className="page">{renderPage()}</div>
      </div>
      {selectedGame && <GameModal game={selectedGame} onClose={handleCloseModal} isFavorite={isFavorite(selectedGame.id)} onFavorite={() => toggleFavorite(selectedGame.id)} />}
    </div>
  );
}
