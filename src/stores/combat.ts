// The brain of the application
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getRandomInt, makeCombatant } from '@/data/mockCombatants'

export type Condition =
  | 'blinded'
  | 'charmed'
  | 'deafened'
  | 'exhaustion'
  | 'frightened'
  | 'grappled'
  | 'incapacitated'
  | 'invisible'
  | 'paralyzed'
  | 'petrified'
  | 'poisoned'
  | 'prone'
  | 'restrained'
  | 'stunned'
  | 'unconscious'

export interface Combatant {
  id: string
  name: string
  type: 'player' | 'enemy'
  initiative: number
  hp: number
  hpMax: number
  ac: number
  conditions: Condition[]
}

export interface LogEntry {
  id: string
  timestamp: number
  type: 'damage' | 'heal' | 'roll' | 'system'
  message: string
}

export const useCombatStore = defineStore('combat', () => {
  const combatants = ref(createMockCombatants())
  const round = ref(0)
  const log = ref<LogEntry[]>([])
  const currentTurnIndex = ref(0)
  return { combatants, round, log, currentTurnIndex }
})

export function createMockCombatants(numPlayers?: number, numEnemies?: number): Combatant[] {
  const players = Math.max(2, numPlayers ?? getRandomInt(2, 5))
  const enemies = Math.max(2, numEnemies ?? Math.min(Math.max(getRandomInt(2, 8), players), players + 2))
  const combatants: Combatant[] = []
  for (let i = 0; i < players; i++) {
    const player = makeCombatant('player')
    combatants.push(player)
  }
  for (let i = 0; i < enemies; i++) {
    const enemy = makeCombatant('enemy')
    combatants.push(enemy)
  }

  return combatants
}
