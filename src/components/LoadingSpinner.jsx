import React, { useState, useEffect, useCallback, useMemo } from "react";
// LoadingSpinner component for GameZone gaming portal

function LoadingSpinnerHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'loadingspinner-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LoadingSpinner Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LoadingSpinnerHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'loadingspinner-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LoadingSpinner Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LoadingSpinnerHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'loadingspinner-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LoadingSpinner Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LoadingSpinnerHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'loadingspinner-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LoadingSpinner Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LoadingSpinnerHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'loadingspinner-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LoadingSpinner Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LoadingSpinnerHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'loadingspinner-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LoadingSpinner Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LoadingSpinnerHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'loadingspinner-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LoadingSpinner Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LoadingSpinnerHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'loadingspinner-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LoadingSpinner Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LoadingSpinnerHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'loadingspinner-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LoadingSpinner Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LoadingSpinnerHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'loadingspinner-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LoadingSpinner Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function LoadingSpinner(props) {
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
    <div className="loadingspinner" data-testid="loadingspinner">
      <LoadingSpinnerHelper0 value={0} label="LoadingSpinner part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <LoadingSpinnerHelper1 value={1} label="LoadingSpinner part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <LoadingSpinnerHelper2 value={2} label="LoadingSpinner part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <LoadingSpinnerHelper3 value={3} label="LoadingSpinner part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>LoadingSpinner content for GameZone</p>
    </div>
  );
}
export default LoadingSpinner;