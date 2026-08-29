import React, { useState, useMemo } from "react";
import { GameCard } from "../components/GameCard.jsx";
import { StatCard } from "../components/StatCard.jsx";
// LeaderboardPage for GameZone

function LeaderboardPageSection0({ data = [], title = 'Section 0' }) {
  const items = useMemo(() => data.slice(0, 10 + 0), [data]);
  return (
    <section className="leaderboardpage-section-0">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LeaderboardPageSection1({ data = [], title = 'Section 1' }) {
  const items = useMemo(() => data.slice(0, 10 + 1), [data]);
  return (
    <section className="leaderboardpage-section-1">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LeaderboardPageSection2({ data = [], title = 'Section 2' }) {
  const items = useMemo(() => data.slice(0, 10 + 2), [data]);
  return (
    <section className="leaderboardpage-section-2">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LeaderboardPageSection3({ data = [], title = 'Section 3' }) {
  const items = useMemo(() => data.slice(0, 10 + 3), [data]);
  return (
    <section className="leaderboardpage-section-3">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LeaderboardPageSection4({ data = [], title = 'Section 4' }) {
  const items = useMemo(() => data.slice(0, 10 + 4), [data]);
  return (
    <section className="leaderboardpage-section-4">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LeaderboardPageSection5({ data = [], title = 'Section 5' }) {
  const items = useMemo(() => data.slice(0, 10 + 5), [data]);
  return (
    <section className="leaderboardpage-section-5">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LeaderboardPageSection6({ data = [], title = 'Section 6' }) {
  const items = useMemo(() => data.slice(0, 10 + 6), [data]);
  return (
    <section className="leaderboardpage-section-6">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LeaderboardPageSection7({ data = [], title = 'Section 7' }) {
  const items = useMemo(() => data.slice(0, 10 + 7), [data]);
  return (
    <section className="leaderboardpage-section-7">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LeaderboardPageSection8({ data = [], title = 'Section 8' }) {
  const items = useMemo(() => data.slice(0, 10 + 8), [data]);
  return (
    <section className="leaderboardpage-section-8">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LeaderboardPageSection9({ data = [], title = 'Section 9' }) {
  const items = useMemo(() => data.slice(0, 10 + 9), [data]);
  return (
    <section className="leaderboardpage-section-9">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LeaderboardPageSection10({ data = [], title = 'Section 10' }) {
  const items = useMemo(() => data.slice(0, 10 + 10), [data]);
  return (
    <section className="leaderboardpage-section-10">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function LeaderboardPageSection11({ data = [], title = 'Section 11' }) {
  const items = useMemo(() => data.slice(0, 10 + 11), [data]);
  return (
    <section className="leaderboardpage-section-11">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

export function LeaderboardPage(props) {
  const { games = [], onOpen, favorites = [], onFavorite, isFavorite, user, setUser,
    genres = [], platforms = [], genreFilter, platformFilter, onGenreChange, onPlatformChange } = props;
  return (
    <div className="leaderboardpage">
      <h1>Leaderboard</h1>
      <p>LeaderboardPage content</p>
      <LeaderboardPageSection0 data={games} title="LeaderboardPage Section 0" />
      <LeaderboardPageSection1 data={games} title="LeaderboardPage Section 1" />
      <LeaderboardPageSection2 data={games} title="LeaderboardPage Section 2" />
      <LeaderboardPageSection3 data={games} title="LeaderboardPage Section 3" />
      <LeaderboardPageSection4 data={games} title="LeaderboardPage Section 4" />
    </div>
  );
}
export default LeaderboardPage;