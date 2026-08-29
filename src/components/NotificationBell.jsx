import React, { useState, useEffect, useCallback, useMemo } from "react";
// NotificationBell component for GameZone gaming portal

function NotificationBellHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'notificationbell-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NotificationBell Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NotificationBellHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'notificationbell-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NotificationBell Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NotificationBellHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'notificationbell-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NotificationBell Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NotificationBellHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'notificationbell-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NotificationBell Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NotificationBellHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'notificationbell-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NotificationBell Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NotificationBellHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'notificationbell-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NotificationBell Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NotificationBellHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'notificationbell-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NotificationBell Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NotificationBellHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'notificationbell-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NotificationBell Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NotificationBellHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'notificationbell-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NotificationBell Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NotificationBellHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'notificationbell-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NotificationBell Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function NotificationBell(props) {
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
    <div className="notificationbell" data-testid="notificationbell">
      <NotificationBellHelper0 value={0} label="NotificationBell part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <NotificationBellHelper1 value={1} label="NotificationBell part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <NotificationBellHelper2 value={2} label="NotificationBell part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <NotificationBellHelper3 value={3} label="NotificationBell part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>NotificationBell content for GameZone</p>
    </div>
  );
}
export default NotificationBell;