import React, { useState, useEffect, useCallback, useMemo } from "react";
// TabBar component for GameZone gaming portal

function TabBarHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'tabbar-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TabBar Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TabBarHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'tabbar-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TabBar Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TabBarHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'tabbar-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TabBar Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TabBarHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'tabbar-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TabBar Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TabBarHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'tabbar-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TabBar Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TabBarHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'tabbar-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TabBar Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TabBarHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'tabbar-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TabBar Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TabBarHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'tabbar-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TabBar Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TabBarHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'tabbar-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TabBar Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function TabBarHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'tabbar-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'TabBar Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function TabBar(props) {
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
    <div className="tabbar" data-testid="tabbar">
      <TabBarHelper0 value={0} label="TabBar part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <TabBarHelper1 value={1} label="TabBar part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <TabBarHelper2 value={2} label="TabBar part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <TabBarHelper3 value={3} label="TabBar part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>TabBar content for GameZone</p>
    </div>
  );
}
export default TabBar;