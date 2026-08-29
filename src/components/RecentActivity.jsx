import React, { useState, useEffect, useCallback, useMemo } from "react";
// RecentActivity component for GameZone gaming portal

function RecentActivityHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'recentactivity-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'RecentActivity Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function RecentActivityHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'recentactivity-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'RecentActivity Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function RecentActivityHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'recentactivity-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'RecentActivity Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function RecentActivityHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'recentactivity-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'RecentActivity Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function RecentActivityHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'recentactivity-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'RecentActivity Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function RecentActivityHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'recentactivity-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'RecentActivity Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function RecentActivityHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'recentactivity-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'RecentActivity Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function RecentActivityHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'recentactivity-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'RecentActivity Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function RecentActivityHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'recentactivity-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'RecentActivity Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function RecentActivityHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'recentactivity-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'RecentActivity Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function RecentActivity(props) {
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
    <div className="recentactivity" data-testid="recentactivity">
      <RecentActivityHelper0 value={0} label="RecentActivity part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <RecentActivityHelper1 value={1} label="RecentActivity part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <RecentActivityHelper2 value={2} label="RecentActivity part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <RecentActivityHelper3 value={3} label="RecentActivity part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>RecentActivity content for GameZone</p>
    </div>
  );
}
export default RecentActivity;