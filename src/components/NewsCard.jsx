import React, { useState, useEffect, useCallback, useMemo } from "react";
// NewsCard component for GameZone gaming portal

function NewsCardHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'newscard-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NewsCard Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NewsCardHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'newscard-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NewsCard Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NewsCardHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'newscard-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NewsCard Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NewsCardHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'newscard-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NewsCard Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NewsCardHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'newscard-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NewsCard Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NewsCardHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'newscard-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NewsCard Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NewsCardHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'newscard-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NewsCard Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NewsCardHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'newscard-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NewsCard Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NewsCardHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'newscard-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NewsCard Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NewsCardHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'newscard-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NewsCard Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function NewsCard(props) {
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
    <div className="newscard" data-testid="newscard">
      <NewsCardHelper0 value={0} label="NewsCard part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <NewsCardHelper1 value={1} label="NewsCard part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <NewsCardHelper2 value={2} label="NewsCard part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <NewsCardHelper3 value={3} label="NewsCard part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>NewsCard content for GameZone</p>
    </div>
  );
}
export default NewsCard;