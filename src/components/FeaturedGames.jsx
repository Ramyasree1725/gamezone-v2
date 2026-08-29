import React, { useState, useEffect, useCallback, useMemo } from "react";
// FeaturedGames component for GameZone gaming portal

function FeaturedGamesHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'featuredgames-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FeaturedGames Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FeaturedGamesHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'featuredgames-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FeaturedGames Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FeaturedGamesHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'featuredgames-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FeaturedGames Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FeaturedGamesHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'featuredgames-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FeaturedGames Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FeaturedGamesHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'featuredgames-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FeaturedGames Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FeaturedGamesHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'featuredgames-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FeaturedGames Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FeaturedGamesHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'featuredgames-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FeaturedGames Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FeaturedGamesHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'featuredgames-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FeaturedGames Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FeaturedGamesHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'featuredgames-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FeaturedGames Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FeaturedGamesHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'featuredgames-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FeaturedGames Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function FeaturedGames(props) {
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
    <div className="featuredgames" data-testid="featuredgames">
      <FeaturedGamesHelper0 value={0} label="FeaturedGames part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <FeaturedGamesHelper1 value={1} label="FeaturedGames part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <FeaturedGamesHelper2 value={2} label="FeaturedGames part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <FeaturedGamesHelper3 value={3} label="FeaturedGames part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>FeaturedGames content for GameZone</p>
    </div>
  );
}
export default FeaturedGames;