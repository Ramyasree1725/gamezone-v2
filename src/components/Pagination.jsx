import React, { useState, useEffect, useCallback, useMemo } from "react";
// Pagination component for GameZone gaming portal

function PaginationHelper0(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'pagination-helper-0 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Pagination Helper 0'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PaginationHelper1(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'pagination-helper-1 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Pagination Helper 1'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PaginationHelper2(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'pagination-helper-2 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Pagination Helper 2'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PaginationHelper3(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'pagination-helper-3 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Pagination Helper 3'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PaginationHelper4(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'pagination-helper-4 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Pagination Helper 4'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PaginationHelper5(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'pagination-helper-5 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Pagination Helper 5'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PaginationHelper6(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'pagination-helper-6 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Pagination Helper 6'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PaginationHelper7(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'pagination-helper-7 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Pagination Helper 7'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PaginationHelper8(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'pagination-helper-8 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Pagination Helper 8'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

function PaginationHelper9(props) {
  const { value = 0, label = '', active = false, onChange } = props;
  const [local, setLocal] = useState(value);
  useEffect(() => { setLocal(value); }, [value]);
  const handle = useCallback(() => {
    setLocal((v) => v + 1);
    if (onChange) onChange(local + 1);
  }, [local, onChange]);
  const cls = 'pagination-helper-9 ' + (active ? 'active' : '');
  return (
    <div className={cls}>
      <span>{label || 'Pagination Helper 9'}</span>
      <button type="button" onClick={handle}>{local}</button>
    </div>
  );
}

export function Pagination(props) {
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
    <div className="pagination" data-testid="pagination">
      <PaginationHelper0 value={0} label="Pagination part 0" active={internalState.tab === 0} onChange={() => setInternalState(s => ({...s, tab: 0}))} />
      <PaginationHelper1 value={1} label="Pagination part 1" active={internalState.tab === 1} onChange={() => setInternalState(s => ({...s, tab: 1}))} />
      <PaginationHelper2 value={2} label="Pagination part 2" active={internalState.tab === 2} onChange={() => setInternalState(s => ({...s, tab: 2}))} />
      <PaginationHelper3 value={3} label="Pagination part 3" active={internalState.tab === 3} onChange={() => setInternalState(s => ({...s, tab: 3}))} />
      <p>Pagination content for GameZone</p>
    </div>
  );
}
export default Pagination;