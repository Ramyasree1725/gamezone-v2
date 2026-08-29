import React, { useState, useEffect, useCallback, useMemo } from "react";
// QuickActions component for GameZone gaming portal

function QuickActionsHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'quickactions-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'QuickActions Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function QuickActionsHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'quickactions-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'QuickActions Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function QuickActionsHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'quickactions-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'QuickActions Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function QuickActionsHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'quickactions-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'QuickActions Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function QuickActionsHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'quickactions-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'QuickActions Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function QuickActionsHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'quickactions-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'QuickActions Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function QuickActionsHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'quickactions-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'QuickActions Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function QuickActionsHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'quickactions-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'QuickActions Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function QuickActionsHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'quickactions-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'QuickActions Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function QuickActionsHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'quickactions-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'QuickActions Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function QuickActions(props) {
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
    <div className="quickactions" data-testid="quickactions">
      <QuickActionsHelper0 value={0} label="QuickActions part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <QuickActionsHelper1 value={1} label="QuickActions part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <QuickActionsHelper2 value={2} label="QuickActions part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <QuickActionsHelper3 value={3} label="QuickActions part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>QuickActions content for GameZone</p>
    </div>
  );
}
export default QuickActions;