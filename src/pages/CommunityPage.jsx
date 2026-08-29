import React, { useState, useMemo } from "react";
import { GameCard } from "../components/GameCard.jsx";
import { StatCard } from "../components/StatCard.jsx";
// CommunityPage for GameZone

function CommunityPageSection0({ data = [], title = 'Section 0' }) {
  const items = useMemo(() => data.slice(0, 10 + 0), [data]);
  return (
    <section className="communitypage-section-0">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function CommunityPageSection1({ data = [], title = 'Section 1' }) {
  const items = useMemo(() => data.slice(0, 10 + 1), [data]);
  return (
    <section className="communitypage-section-1">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function CommunityPageSection2({ data = [], title = 'Section 2' }) {
  const items = useMemo(() => data.slice(0, 10 + 2), [data]);
  return (
    <section className="communitypage-section-2">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function CommunityPageSection3({ data = [], title = 'Section 3' }) {
  const items = useMemo(() => data.slice(0, 10 + 3), [data]);
  return (
    <section className="communitypage-section-3">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function CommunityPageSection4({ data = [], title = 'Section 4' }) {
  const items = useMemo(() => data.slice(0, 10 + 4), [data]);
  return (
    <section className="communitypage-section-4">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function CommunityPageSection5({ data = [], title = 'Section 5' }) {
  const items = useMemo(() => data.slice(0, 10 + 5), [data]);
  return (
    <section className="communitypage-section-5">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function CommunityPageSection6({ data = [], title = 'Section 6' }) {
  const items = useMemo(() => data.slice(0, 10 + 6), [data]);
  return (
    <section className="communitypage-section-6">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function CommunityPageSection7({ data = [], title = 'Section 7' }) {
  const items = useMemo(() => data.slice(0, 10 + 7), [data]);
  return (
    <section className="communitypage-section-7">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function CommunityPageSection8({ data = [], title = 'Section 8' }) {
  const items = useMemo(() => data.slice(0, 10 + 8), [data]);
  return (
    <section className="communitypage-section-8">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function CommunityPageSection9({ data = [], title = 'Section 9' }) {
  const items = useMemo(() => data.slice(0, 10 + 9), [data]);
  return (
    <section className="communitypage-section-9">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function CommunityPageSection10({ data = [], title = 'Section 10' }) {
  const items = useMemo(() => data.slice(0, 10 + 10), [data]);
  return (
    <section className="communitypage-section-10">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

function CommunityPageSection11({ data = [], title = 'Section 11' }) {
  const items = useMemo(() => data.slice(0, 10 + 11), [data]);
  return (
    <section className="communitypage-section-11">
      <h3>{title}</h3>
      <div className="grid">
        {items.map((item, i) => (
          <div key={i} className="item">{typeof item === 'object' ? (item.title || item.name || JSON.stringify(item).slice(0,40)) : String(item)}</div>
        ))}
      </div>
    </section>
  );
}

export function CommunityPage(props) {
  const { games = [], onOpen, favorites = [], onFavorite, isFavorite, user, setUser,
    genres = [], platforms = [], genreFilter, platformFilter, onGenreChange, onPlatformChange } = props;
  return (
    <div className="communitypage">
      <h1>Community</h1>
      <p>CommunityPage content</p>
      <CommunityPageSection0 data={games} title="CommunityPage Section 0" />
      <CommunityPageSection1 data={games} title="CommunityPage Section 1" />
      <CommunityPageSection2 data={games} title="CommunityPage Section 2" />
      <CommunityPageSection3 data={games} title="CommunityPage Section 3" />
      <CommunityPageSection4 data={games} title="CommunityPage Section 4" />
    </div>
  );
}
export default CommunityPage;