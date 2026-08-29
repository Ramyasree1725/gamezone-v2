import React, { useState, useEffect, useCallback, useMemo } from "react";
// LeaderboardRow component for GameZone gaming portal

function LeaderboardRowHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'leaderboardrow-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LeaderboardRow Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LeaderboardRowHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'leaderboardrow-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LeaderboardRow Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LeaderboardRowHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'leaderboardrow-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LeaderboardRow Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LeaderboardRowHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'leaderboardrow-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LeaderboardRow Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LeaderboardRowHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'leaderboardrow-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LeaderboardRow Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LeaderboardRowHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'leaderboardrow-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LeaderboardRow Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LeaderboardRowHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'leaderboardrow-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LeaderboardRow Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LeaderboardRowHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'leaderboardrow-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LeaderboardRow Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LeaderboardRowHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'leaderboardrow-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LeaderboardRow Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function LeaderboardRowHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'leaderboardrow-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'LeaderboardRow Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function LeaderboardRow(props) {
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
    <div className="leaderboardrow" data-testid="leaderboardrow">
      <LeaderboardRowHelper0 value={0} label="LeaderboardRow part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <LeaderboardRowHelper1 value={1} label="LeaderboardRow part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <LeaderboardRowHelper2 value={2} label="LeaderboardRow part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <LeaderboardRowHelper3 value={3} label="LeaderboardRow part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>LeaderboardRow content for GameZone</p>
    </div>
  );
}
export default LeaderboardRow;