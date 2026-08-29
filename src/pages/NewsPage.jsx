import React, { useState, useMemo } from "react";
import { GameCard } from "../components/GameCard.jsx";
import { StatCard } from "../components/StatCard.jsx";
// NewsPage for GameZone

function NewsPageSection0({ data = [], title = 'Section 0' }) {
  const items = useMemo(() => data.slice(0, 10 + 0), [data]);
  return (
    <section className="newspage-section-0">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function NewsPageSection1({ data = [], title = 'Section 1' }) {
  const items = useMemo(() => data.slice(0, 10 + 1), [data]);
  return (
    <section className="newspage-section-1">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function NewsPageSection2({ data = [], title = 'Section 2' }) {
  const items = useMemo(() => data.slice(0, 10 + 2), [data]);
  return (
    <section className="newspage-section-2">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function NewsPageSection3({ data = [], title = 'Section 3' }) {
  const items = useMemo(() => data.slice(0, 10 + 3), [data]);
  return (
    <section className="newspage-section-3">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function NewsPageSection4({ data = [], title = 'Section 4' }) {
  const items = useMemo(() => data.slice(0, 10 + 4), [data]);
  return (
    <section className="newspage-section-4">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function NewsPageSection5({ data = [], title = 'Section 5' }) {
  const items = useMemo(() => data.slice(0, 10 + 5), [data]);
  return (
    <section className="newspage-section-5">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function NewsPageSection6({ data = [], title = 'Section 6' }) {
  const items = useMemo(() => data.slice(0, 10 + 6), [data]);
  return (
    <section className="newspage-section-6">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function NewsPageSection7({ data = [], title = 'Section 7' }) {
  const items = useMemo(() => data.slice(0, 10 + 7), [data]);
  return (
    <section className="newspage-section-7">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function NewsPageSection8({ data = [], title = 'Section 8' }) {
  const items = useMemo(() => data.slice(0, 10 + 8), [data]);
  return (
    <section className="newspage-section-8">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function NewsPageSection9({ data = [], title = 'Section 9' }) {
  const items = useMemo(() => data.slice(0, 10 + 9), [data]);
  return (
    <section className="newspage-section-9">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function NewsPageSection10({ data = [], title = 'Section 10' }) {
  const items = useMemo(() => data.slice(0, 10 + 10), [data]);
  return (
    <section className="newspage-section-10">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function NewsPageSection11({ data = [], title = 'Section 11' }) {
  const items = useMemo(() => data.slice(0, 10 + 11), [data]);
  return (
    <section className="newspage-section-11">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

export function NewsPage(props) {
  const { games = [], onOpen, favorites = [], onFavorite, isFavorite, user, setUser,
    genres = [], platforms = [], genreFilter, platformFilter, onGenreChange, onPlatformChange } = props;
  return (
    <div className="newspage">
      <h1>News</h1>
      <p>NewsPage content</p>
      <NewsPageSection0 data={games} title="NewsPage Section 0" />
      <NewsPageSection1 data={games} title="NewsPage Section 1" />
      <NewsPageSection2 data={games} title="NewsPage Section 2" />
      <NewsPageSection3 data={games} title="NewsPage Section 3" />
      <NewsPageSection4 data={games} title="NewsPage Section 4" />
    </div>
  );
}
export default NewsPage;