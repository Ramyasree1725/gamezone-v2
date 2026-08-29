import React, { useState, useEffect, useCallback, useMemo } from "react";
// GameCard component for GameZone gaming portal

function GameCardHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamecard-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameCard Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameCardHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamecard-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameCard Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameCardHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamecard-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameCard Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameCardHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamecard-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameCard Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameCardHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamecard-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameCard Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameCardHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamecard-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameCard Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameCardHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamecard-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameCard Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameCardHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamecard-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameCard Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameCardHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamecard-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameCard Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameCardHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamecard-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameCard Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function GameCard(props) {
  const {
    page, setPage, user, search, setSearch, games = [],
    onOpen, favorites = [], onFavorite, isFavorite,
    game, onClose, genreFilter, platformFilter,
    onGenreChange, onPlatformChange, genres = [], platforms = [],
    ...rest
  } = props;
  const [internalState, setInternalState] = useState({ open: false, tab: 0 });
  const memoized = useMemo(() => (games || []).map((g, i) => ({ ...g, index: i })), [games]);
  return (
    <div className="gamecard" data-testid="gamecard">
      <GameCardHelper0 value={0} label="GameCard part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <GameCardHelper1 value={1} label="GameCard part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <GameCardHelper2 value={2} label="GameCard part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <GameCardHelper3 value={3} label="GameCard part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      {memoized.slice(0, 1).map(g => (
        <article key={g.id} className="game-card">
          <div className="game-art"><span>{g.emoji || "🎮"}</span>
            <button className="heart" onClick={() => onFavorite?.(g.id)}>{isFavorite?.(g.id) ? "♥" : "♡"}</button>
            <div className="game-rating">★ {g.rating}</div>
          </div>
          <div className="game-info">
            <div className="game-tags"><span>{g.genre}</span><span>{g.platform}</span></div>
            <h3>{g.title}</h3><p>{g.description}</p>
            <div className="game-bottom"><span>{g.players} players</span>
              <button onClick={() => onOpen?.(g)}>View</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
export default GameCard;