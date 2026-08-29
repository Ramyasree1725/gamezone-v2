import React, { useState, useEffect, useCallback, useMemo } from "react";
// ErrorBoundary component for GameZone gaming portal

function ErrorBoundaryHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'errorboundary-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ErrorBoundary Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ErrorBoundaryHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'errorboundary-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ErrorBoundary Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ErrorBoundaryHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'errorboundary-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ErrorBoundary Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ErrorBoundaryHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'errorboundary-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ErrorBoundary Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ErrorBoundaryHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'errorboundary-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ErrorBoundary Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ErrorBoundaryHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'errorboundary-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ErrorBoundary Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ErrorBoundaryHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'errorboundary-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ErrorBoundary Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ErrorBoundaryHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'errorboundary-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ErrorBoundary Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ErrorBoundaryHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'errorboundary-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ErrorBoundary Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ErrorBoundaryHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'errorboundary-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ErrorBoundary Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function ErrorBoundary(props) {
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
    <div className="errorboundary" data-testid="errorboundary">
      <ErrorBoundaryHelper0 value={0} label="ErrorBoundary part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <ErrorBoundaryHelper1 value={1} label="ErrorBoundary part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <ErrorBoundaryHelper2 value={2} label="ErrorBoundary part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <ErrorBoundaryHelper3 value={3} label="ErrorBoundary part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>ErrorBoundary content for GameZone</p>
    </div>
  );
}
export default ErrorBoundary;