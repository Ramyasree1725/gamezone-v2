import React, { useState, useEffect, useCallback, useMemo } from "react";
// SettingsForm component for GameZone gaming portal

function SettingsFormHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'settingsform-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'SettingsForm Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SettingsFormHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'settingsform-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'SettingsForm Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SettingsFormHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'settingsform-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'SettingsForm Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SettingsFormHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'settingsform-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'SettingsForm Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SettingsFormHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'settingsform-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'SettingsForm Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SettingsFormHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'settingsform-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'SettingsForm Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SettingsFormHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'settingsform-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'SettingsForm Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SettingsFormHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'settingsform-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'SettingsForm Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SettingsFormHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'settingsform-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'SettingsForm Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function SettingsFormHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'settingsform-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'SettingsForm Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function SettingsForm(props) {
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
    <div className="settingsform" data-testid="settingsform">
      <SettingsFormHelper0 value={0} label="SettingsForm part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <SettingsFormHelper1 value={1} label="SettingsForm part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <SettingsFormHelper2 value={2} label="SettingsForm part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <SettingsFormHelper3 value={3} label="SettingsForm part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>SettingsForm content for GameZone</p>
    </div>
  );
}
export default SettingsForm;