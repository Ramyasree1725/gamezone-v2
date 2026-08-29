import React, { useState, useEffect, useCallback, useMemo } from "react";
// NavButton component for GameZone gaming portal

function NavButtonHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'navbutton-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NavButton Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NavButtonHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'navbutton-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NavButton Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NavButtonHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'navbutton-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NavButton Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NavButtonHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'navbutton-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NavButton Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NavButtonHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'navbutton-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NavButton Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NavButtonHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'navbutton-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NavButton Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NavButtonHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'navbutton-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NavButton Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NavButtonHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'navbutton-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NavButton Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NavButtonHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'navbutton-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NavButton Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function NavButtonHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'navbutton-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'NavButton Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function NavButton(props) {
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
    <div className="navbutton" data-testid="navbutton">
      <NavButtonHelper0 value={0} label="NavButton part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <NavButtonHelper1 value={1} label="NavButton part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <NavButtonHelper2 value={2} label="NavButton part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <NavButtonHelper3 value={3} label="NavButton part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>NavButton content for GameZone</p>
    </div>
  );
}
export default NavButton;