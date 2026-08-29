import React, { useState, useMemo } from "react";
import { GameCard } from "../components/GameCard.jsx";
import { StatCard } from "../components/StatCard.jsx";
// LibraryPage for GameZone

function LibraryPageSection0({ data = [], title = 'Section 0' }) {
  const items = useMemo(() => data.slice(0, 10 + 0), [data]);
  return (
    <section className="librarypage-section-0">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LibraryPageSection1({ data = [], title = 'Section 1' }) {
  const items = useMemo(() => data.slice(0, 10 + 1), [data]);
  return (
    <section className="librarypage-section-1">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LibraryPageSection2({ data = [], title = 'Section 2' }) {
  const items = useMemo(() => data.slice(0, 10 + 2), [data]);
  return (
    <section className="librarypage-section-2">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LibraryPageSection3({ data = [], title = 'Section 3' }) {
  const items = useMemo(() => data.slice(0, 10 + 3), [data]);
  return (
    <section className="librarypage-section-3">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LibraryPageSection4({ data = [], title = 'Section 4' }) {
  const items = useMemo(() => data.slice(0, 10 + 4), [data]);
  return (
    <section className="librarypage-section-4">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LibraryPageSection5({ data = [], title = 'Section 5' }) {
  const items = useMemo(() => data.slice(0, 10 + 5), [data]);
  return (
    <section className="librarypage-section-5">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LibraryPageSection6({ data = [], title = 'Section 6' }) {
  const items = useMemo(() => data.slice(0, 10 + 6), [data]);
  return (
    <section className="librarypage-section-6">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LibraryPageSection7({ data = [], title = 'Section 7' }) {
  const items = useMemo(() => data.slice(0, 10 + 7), [data]);
  return (
    <section className="librarypage-section-7">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LibraryPageSection8({ data = [], title = 'Section 8' }) {
  const items = useMemo(() => data.slice(0, 10 + 8), [data]);
  return (
    <section className="librarypage-section-8">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LibraryPageSection9({ data = [], title = 'Section 9' }) {
  const items = useMemo(() => data.slice(0, 10 + 9), [data]);
  return (
    <section className="librarypage-section-9">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LibraryPageSection10({ data = [], title = 'Section 10' }) {
  const items = useMemo(() => data.slice(0, 10 + 10), [data]);
  return (
    <section className="librarypage-section-10">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LibraryPageSection11({ data = [], title = 'Section 11' }) {
  const items = useMemo(() => data.slice(0, 10 + 11), [data]);
  return (
    <section className="librarypage-section-11">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

export function LibraryPage(props) {
  const { games = [], onOpen, favorites = [], onFavorite, isFavorite, user, setUser,
    genres = [], platforms = [], genreFilter, platformFilter, onGenreChange, onPlatformChange } = props;
  return (
    <div className="librarypage">
      <h1>Library</h1>
      <div className="filters">
        <select value={genreFilter} onChange={e => onGenreChange?.(e.target.value)}>
          {genres.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
        <select value={platformFilter} onChange={e => onPlatformChange?.(e.target.value)}>
          {platforms.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div className="game-grid">
        {games.map(g => (
          <GameCard key={g.id} game={g} favorite={isFavorite?.(g.id)} onFavorite={onFavorite} onOpen={onOpen} />
        ))}
      </div>
      <LibraryPageSection0 data={games} title="LibraryPage Section 0" />
      <LibraryPageSection1 data={games} title="LibraryPage Section 1" />
      <LibraryPageSection2 data={games} title="LibraryPage Section 2" />
      <LibraryPageSection3 data={games} title="LibraryPage Section 3" />
      <LibraryPageSection4 data={games} title="LibraryPage Section 4" />
    </div>
  );
}
export default LibraryPage;