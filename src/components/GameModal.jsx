import React, { useState, useEffect, useCallback, useMemo } from "react";
// GameModal component for GameZone gaming portal

function GameModalHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamemodal-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameModal Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameModalHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamemodal-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameModal Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameModalHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamemodal-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameModal Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameModalHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamemodal-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameModal Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameModalHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamemodal-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameModal Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameModalHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamemodal-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameModal Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameModalHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamemodal-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameModal Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameModalHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamemodal-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameModal Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameModalHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamemodal-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameModal Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function GameModalHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'gamemodal-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'GameModal Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function GameModal(props) {
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
    <div className="gamemodal" data-testid="gamemodal">
      <GameModalHelper0 value={0} label="GameModal part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <GameModalHelper1 value={1} label="GameModal part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <GameModalHelper2 value={2} label="GameModal part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <GameModalHelper3 value={3} label="GameModal part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      {game && (
        <div className="modal-backdrop" onClick={onClose}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={onClose}>×</button>
            <div className="modal-art"><span>{game.emoji}</span></div>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <div className="modal-stats">
              <span>{game.genre}</span><span>{game.platform}</span>
              <span>★ {game.rating}</span><span>{game.price}</span>
            </div>
            <button className="full" onClick={() => onFavorite?.(game.id)}>
              {isFavorite ? "Remove Favorite" : "Add Favorite"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default GameModal;