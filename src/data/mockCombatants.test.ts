import { describe, expect, test } from "vitest";
import { chooseRandomPlayerName, chooseRandomEnemyName, getRandomInt, pick, names } from '@/data/mockCombatants'

// pickRandomInt
describe('getRandomInt', () => {
  test('returns random number between min and max parameters', () => {
    expect(getRandomInt(2, 2)).toBe(2)
  })
})

//pick
describe('pick', () => {
  test('returns a random selection from an array', () => {
    const arr = ['red', 'blue', 'green']
    expect(pick(arr)).toBeOneOf(['red', 'blue', 'green'])
  })
})

// makeCombatant
// todo

// chooseRandomPlayerName
describe('chooseRandomPlayerName', () => {
  test('returns a player with a name from the player name list', () => {
    const result = chooseRandomPlayerName()
    expect(names.player.firstNames).toContain(result)
  })
})

// chooseRandomEnemyName
describe('chooseRandomEnemyName', () => {
  test('returns an enemy with a name from the enemy name list', () => {
    const result = chooseRandomEnemyName()
    expect(names.enemy.firstNames).toContain(result)
  })
})