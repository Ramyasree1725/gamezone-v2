import React, { useState, useEffect, useCallback, useMemo } from "react";
// UserAvatar component for GameZone gaming portal

function UserAvatarHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'useravatar-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'UserAvatar Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function UserAvatarHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'useravatar-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'UserAvatar Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function UserAvatarHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'useravatar-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'UserAvatar Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function UserAvatarHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'useravatar-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'UserAvatar Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function UserAvatarHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'useravatar-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'UserAvatar Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function UserAvatarHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'useravatar-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'UserAvatar Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function UserAvatarHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'useravatar-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'UserAvatar Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function UserAvatarHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'useravatar-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'UserAvatar Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function UserAvatarHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'useravatar-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'UserAvatar Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function UserAvatarHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'useravatar-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'UserAvatar Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function UserAvatar(props) {
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
    <div className="useravatar" data-testid="useravatar">
      <UserAvatarHelper0 value={0} label="UserAvatar part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <UserAvatarHelper1 value={1} label="UserAvatar part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <UserAvatarHelper2 value={2} label="UserAvatar part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <UserAvatarHelper3 value={3} label="UserAvatar part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>UserAvatar content for GameZone</p>
    </div>
  );
}
export default UserAvatar;