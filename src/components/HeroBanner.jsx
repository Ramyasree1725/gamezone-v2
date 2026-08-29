import React, { useState, useEffect, useCallback, useMemo } from "react";
// HeroBanner component for GameZone gaming portal

function HeroBannerHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'herobanner-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'HeroBanner Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function HeroBannerHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'herobanner-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'HeroBanner Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function HeroBannerHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'herobanner-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'HeroBanner Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function HeroBannerHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'herobanner-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'HeroBanner Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function HeroBannerHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'herobanner-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'HeroBanner Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function HeroBannerHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'herobanner-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'HeroBanner Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function HeroBannerHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'herobanner-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'HeroBanner Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function HeroBannerHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'herobanner-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'HeroBanner Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function HeroBannerHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'herobanner-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'HeroBanner Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function HeroBannerHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'herobanner-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'HeroBanner Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function HeroBanner(props) {
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
    <div className="herobanner" data-testid="herobanner">
      <HeroBannerHelper0 value={0} label="HeroBanner part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <HeroBannerHelper1 value={1} label="HeroBanner part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <HeroBannerHelper2 value={2} label="HeroBanner part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <HeroBannerHelper3 value={3} label="HeroBanner part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>HeroBanner content for GameZone</p>
    </div>
  );
}
export default HeroBanner;