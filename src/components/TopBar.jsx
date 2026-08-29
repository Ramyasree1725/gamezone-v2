import React, { useState, useEffect, useCallback, useMemo } from "react";
// TopBar component for GameZone gaming portal

function TopBarHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'topbar-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TopBar Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TopBarHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'topbar-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TopBar Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TopBarHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'topbar-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TopBar Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TopBarHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'topbar-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TopBar Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TopBarHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'topbar-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TopBar Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TopBarHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'topbar-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TopBar Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TopBarHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'topbar-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TopBar Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TopBarHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'topbar-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TopBar Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TopBarHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'topbar-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TopBar Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TopBarHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'topbar-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TopBar Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function TopBar(props) {
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
    <div className="topbar" data-testid="topbar">
      <TopBarHelper0 value={0} label="TopBar part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <TopBarHelper1 value={1} label="TopBar part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <TopBarHelper2 value={2} label="TopBar part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <TopBarHelper3 value={3} label="TopBar part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <div className="search">
        <span>🔍</span>
        <input value={search || ""} onChange={(e) => setSearch?.(e.target.value)} placeholder="Search games..." />
      </div>
      <div className="top-actions">
        <button type="button">🔔</button>
        <div className="top-avatar">{user?.avatar || "U"}</div>
      </div>
    </div>
  );
}
export default TopBar;