import { describe, expect, test } from "vitest";
import { createMockCombatants } from '@/stores/combat'

describe('createMockCombatants', () => {
  test('returns array of Combatants with players and enemies', () => {
    const result = createMockCombatants(2, 2)
    expect(result).toHaveLength(4)
    expect(result).toMatchObject([
      { id: expect.any(String), name: expect.any(String), type: 'player' },
      { id: expect.any(String), name: expect.any(String), type: 'player' },
      { id: expect.any(String), name: expect.any(String), type: 'enemy' },
      { id: expect.any(String), name: expect.any(String), type: 'enemy' },
    ])
  })
  test('returns objects where hp is equal to hpMax', () => {
    const result = createMockCombatants(2, 2)
    result.forEach(combatant => {
      expect(combatant.hp).toBe(combatant.hpMax)
    })
  })
  test('returns a minimum of 2 players and 2 enemies', () => {
    expect(createMockCombatants(1, 1)).toHaveLength(4) // min 2 players 2 enemies
  })
  test('returns a maximum of 5 players and players + 2 enemies', () => {
    expect(createMockCombatants(20, 20)).toHaveLength(12) // max 5 players, max (players + 2) enemies
  })
})