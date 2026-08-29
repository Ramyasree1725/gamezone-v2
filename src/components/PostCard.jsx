import React, { useState, useEffect, useCallback, useMemo } from "react";
// PostCard component for GameZone gaming portal

function PostCardHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'postcard-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'PostCard Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PostCardHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'postcard-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'PostCard Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PostCardHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'postcard-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'PostCard Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PostCardHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'postcard-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'PostCard Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PostCardHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'postcard-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'PostCard Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PostCardHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'postcard-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'PostCard Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PostCardHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'postcard-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'PostCard Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PostCardHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'postcard-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'PostCard Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PostCardHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'postcard-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'PostCard Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PostCardHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'postcard-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'PostCard Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function PostCard(props) {
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
    <div className="postcard" data-testid="postcard">
      <PostCardHelper0 value={0} label="PostCard part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <PostCardHelper1 value={1} label="PostCard part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <PostCardHelper2 value={2} label="PostCard part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <PostCardHelper3 value={3} label="PostCard part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>PostCard content for GameZone</p>
    </div>
  );
}
export default PostCard;