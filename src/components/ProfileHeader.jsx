import React, { useState, useEffect, useCallback, useMemo } from "react";
// ProfileHeader component for GameZone gaming portal

function ProfileHeaderHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'profileheader-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ProfileHeader Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ProfileHeaderHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'profileheader-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ProfileHeader Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ProfileHeaderHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'profileheader-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ProfileHeader Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ProfileHeaderHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'profileheader-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ProfileHeader Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ProfileHeaderHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'profileheader-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ProfileHeader Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ProfileHeaderHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'profileheader-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ProfileHeader Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ProfileHeaderHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'profileheader-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ProfileHeader Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ProfileHeaderHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'profileheader-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ProfileHeader Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ProfileHeaderHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'profileheader-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ProfileHeader Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function ProfileHeaderHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'profileheader-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'ProfileHeader Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function ProfileHeader(props) {
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
    <div className="profileheader" data-testid="profileheader">
      <ProfileHeaderHelper0 value={0} label="ProfileHeader part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <ProfileHeaderHelper1 value={1} label="ProfileHeader part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <ProfileHeaderHelper2 value={2} label="ProfileHeader part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <ProfileHeaderHelper3 value={3} label="ProfileHeader part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>ProfileHeader content for GameZone</p>
    </div>
  );
}
export default ProfileHeader;