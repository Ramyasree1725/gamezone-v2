import React, { useState, useEffect, useCallback, useMemo } from "react";
// FilterBar component for GameZone gaming portal

function FilterBarHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'filterbar-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FilterBar Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FilterBarHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'filterbar-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FilterBar Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FilterBarHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'filterbar-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FilterBar Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FilterBarHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'filterbar-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FilterBar Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FilterBarHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'filterbar-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FilterBar Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FilterBarHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'filterbar-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FilterBar Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FilterBarHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'filterbar-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FilterBar Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FilterBarHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'filterbar-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FilterBar Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FilterBarHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'filterbar-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FilterBar Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function FilterBarHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'filterbar-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'FilterBar Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function FilterBar(props) {
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
    <div className="filterbar" data-testid="filterbar">
      <FilterBarHelper0 value={0} label="FilterBar part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <FilterBarHelper1 value={1} label="FilterBar part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <FilterBarHelper2 value={2} label="FilterBar part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <FilterBarHelper3 value={3} label="FilterBar part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>FilterBar content for GameZone</p>
    </div>
  );
}
export default FilterBar;