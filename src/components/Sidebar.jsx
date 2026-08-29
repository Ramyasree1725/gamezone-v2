import React, { useState, useEffect, useCallback, useMemo } from "react";
// Sidebar component for GameZone gaming portal

function SidebarHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'sidebar-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Sidebar Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SidebarHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'sidebar-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Sidebar Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SidebarHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'sidebar-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Sidebar Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SidebarHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'sidebar-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Sidebar Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SidebarHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'sidebar-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Sidebar Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SidebarHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'sidebar-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Sidebar Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SidebarHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'sidebar-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Sidebar Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SidebarHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'sidebar-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Sidebar Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SidebarHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'sidebar-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Sidebar Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SidebarHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'sidebar-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Sidebar Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function Sidebar(props) {
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
    <div className="sidebar" data-testid="sidebar">
      <SidebarHelper0 value={0} label="Sidebar part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <SidebarHelper1 value={1} label="Sidebar part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <SidebarHelper2 value={2} label="Sidebar part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <SidebarHelper3 value={3} label="Sidebar part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <div className="brand"><span>GZ</span><div>GameZone<small>PORTAL</small></div></div>
      <nav>
        {["home","library","tournaments","leaderboard","news","community","profile","settings"].map(p => (
          <button key={p} className={"nav-btn " + (page===p ? "active" : "")} onClick={() => setPage(p)}>
            <span>{p[0].toUpperCase()}</span>{p}
          </button>
        ))}
      </nav>
      <div className="side-user">
        <div className="avatar">{user?.avatar || "U"}</div>
        <div><strong>{user?.name || "Guest"}</strong><small>Lvl {user?.level || 1}</small></div>
      </div>
    </div>
  );
}
export default Sidebar;