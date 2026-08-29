import React, { useState, useEffect, useCallback, useMemo } from "react";
// EmptyState component for GameZone gaming portal

function EmptyStateHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'emptystate-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'EmptyState Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function EmptyStateHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'emptystate-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'EmptyState Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function EmptyStateHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'emptystate-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'EmptyState Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function EmptyStateHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'emptystate-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'EmptyState Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function EmptyStateHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'emptystate-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'EmptyState Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function EmptyStateHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'emptystate-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'EmptyState Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function EmptyStateHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'emptystate-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'EmptyState Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function EmptyStateHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'emptystate-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'EmptyState Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function EmptyStateHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'emptystate-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'EmptyState Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function EmptyStateHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'emptystate-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'EmptyState Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function EmptyState(props) {
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
    <div className="emptystate" data-testid="emptystate">
      <EmptyStateHelper0 value={0} label="EmptyState part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <EmptyStateHelper1 value={1} label="EmptyState part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <EmptyStateHelper2 value={2} label="EmptyState part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <EmptyStateHelper3 value={3} label="EmptyState part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>EmptyState content for GameZone</p>
    </div>
  );
}
export default EmptyState;