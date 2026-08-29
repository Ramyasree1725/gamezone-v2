import React, { useState, useMemo } from "react";
import { GameCard } from "../components/GameCard.jsx";
import { StatCard } from "../components/StatCard.jsx";
// HomePage for GameZone

function HomePageSection0({ data = [], title = 'Section 0' }) {
  const items = useMemo(() => data.slice(0, 10 + 0), [data]);
  return (
    <section className="homepage-section-0">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function HomePageSection1({ data = [], title = 'Section 1' }) {
  const items = useMemo(() => data.slice(0, 10 + 1), [data]);
  return (
    <section className="homepage-section-1">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function HomePageSection2({ data = [], title = 'Section 2' }) {
  const items = useMemo(() => data.slice(0, 10 + 2), [data]);
  return (
    <section className="homepage-section-2">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function HomePageSection3({ data = [], title = 'Section 3' }) {
  const items = useMemo(() => data.slice(0, 10 + 3), [data]);
  return (
    <section className="homepage-section-3">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function HomePageSection4({ data = [], title = 'Section 4' }) {
  const items = useMemo(() => data.slice(0, 10 + 4), [data]);
  return (
    <section className="homepage-section-4">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function HomePageSection5({ data = [], title = 'Section 5' }) {
  const items = useMemo(() => data.slice(0, 10 + 5), [data]);
  return (
    <section className="homepage-section-5">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function HomePageSection6({ data = [], title = 'Section 6' }) {
  const items = useMemo(() => data.slice(0, 10 + 6), [data]);
  return (
    <section className="homepage-section-6">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function HomePageSection7({ data = [], title = 'Section 7' }) {
  const items = useMemo(() => data.slice(0, 10 + 7), [data]);
  return (
    <section className="homepage-section-7">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function HomePageSection8({ data = [], title = 'Section 8' }) {
  const items = useMemo(() => data.slice(0, 10 + 8), [data]);
  return (
    <section className="homepage-section-8">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function HomePageSection9({ data = [], title = 'Section 9' }) {
  const items = useMemo(() => data.slice(0, 10 + 9), [data]);
  return (
    <section className="homepage-section-9">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function HomePageSection10({ data = [], title = 'Section 10' }) {
  const items = useMemo(() => data.slice(0, 10 + 10), [data]);
  return (
    <section className="homepage-section-10">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function HomePageSection11({ data = [], title = 'Section 11' }) {
  const items = useMemo(() => data.slice(0, 10 + 11), [data]);
  return (
    <section className="homepage-section-11">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

export function HomePage(props) {
  const { games = [], onOpen, favorites = [], onFavorite, isFavorite, user, setUser,
    genres = [], platforms = [], genreFilter, platformFilter, onGenreChange, onPlatformChange } = props;
  return (
    <div className="homepage">
      <h1>Home</h1>
      <div className="hero">
        <h1>Welcome to GameZone</h1>
        <p>Discover, play and compete in the ultimate gaming portal.</p>
      </div>
      <div className="stats-grid">
        <StatCard icon="🎮" label="Games" value={games.length} sub="in catalog" />
        <StatCard icon="⭐" label="Favorites" value={favorites.length} sub="saved" />
      </div>
      <div className="game-grid">
        {games.map(g => (
          <GameCard key={g.id} game={g} favorite={favorites.includes?.(g.id)} onFavorite={onFavorite} onOpen={onOpen} />
        ))}
      </div>
      <HomePageSection0 data={games} title="HomePage Section 0" />
      <HomePageSection1 data={games} title="HomePage Section 1" />
      <HomePageSection2 data={games} title="HomePage Section 2" />
      <HomePageSection3 data={games} title="HomePage Section 3" />
      <HomePageSection4 data={games} title="HomePage Section 4" />
    </div>
  );
}
export default HomePage;