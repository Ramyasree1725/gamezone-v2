import { describe, it, expect } from 'vitest';
import { seedGames, genres, platforms } from '../src/data/seedGames.js';

describe('GameZone Frontend Suite', () => {
  it('should load seed game catalog with items', () => {
    expect(seedGames).toBeDefined();
    expect(Array.isArray(seedGames)).toBe(true);
    expect(seedGames.length).toBeGreaterThan(0);
  });
  it('should have valid game catalog item structures', () => {
    const firstGame = seedGames[0];
    expect(firstGame).toHaveProperty('id');
    expect(firstGame).toHaveProperty('title');
    expect(firstGame).toHaveProperty('genre');
    expect(firstGame).toHaveProperty('platform');
    expect(firstGame).toHaveProperty('rating');
  });
  it('should verify game ratings are numbers within valid range', () => {
    seedGames.forEach(game => {
      expect(typeof game.rating).toBe('number');
      expect(game.rating).toBeGreaterThanOrEqual(0);
      expect(game.rating).toBeLessThanOrEqual(5);
    });
  });
  it('should have genres and platforms constants', () => {
    expect(genres.length).toBeGreaterThan(1);
    expect(platforms.length).toBeGreaterThan(1);
  });
});
