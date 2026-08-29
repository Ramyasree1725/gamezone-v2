import React, { useState, useEffect, useCallback, useMemo } from "react";
// StatCard component for GameZone gaming portal

function StatCardHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'statcard-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'StatCard Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function StatCardHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'statcard-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'StatCard Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function StatCardHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'statcard-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'StatCard Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function StatCardHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'statcard-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'StatCard Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function StatCardHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'statcard-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'StatCard Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function StatCardHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'statcard-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'StatCard Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function StatCardHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'statcard-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'StatCard Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function StatCardHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'statcard-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'StatCard Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function StatCardHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'statcard-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'StatCard Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function StatCardHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'statcard-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'StatCard Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function StatCard(props) {
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
    <div className="statcard" data-testid="statcard">
      <StatCardHelper0 value={0} label="StatCard part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <StatCardHelper1 value={1} label="StatCard part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <StatCardHelper2 value={2} label="StatCard part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <StatCardHelper3 value={3} label="StatCard part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <div className="stat-card">
        <div className="stat-icon">{props.icon || "📊"}</div>
        <div><span>{props.label}</span><strong>{props.value}</strong><small>{props.sub}</small></div>
      </div>
    </div>
  );
}
export default StatCard;