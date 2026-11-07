import type { Combatant } from "@/stores/combat"

export const names = {
  player: {
    firstNames: [
      'Lydan',
      'Syrin',
      'Ptorik',
      'Joz',
      'Varog',
      'Kent',
      'Moki',
      'Rankar',
      'Lothe',
      'Ryven',
      'Akibrus',
      'Caldor',
      'Darvyn',
      'Delvin',
      'Syrana',
      'Resha',
      'Varin',
      'Wren',
      'Yuni',
      'Aleera',
      'Azura',
      'Anya',
      'Ariya',
      'Kimora',
      'Mazikeen',
    ],
    lastNames: [
      'Aelindor',
      'Alberich',
      'Ithrael',
      'Sylvaris',
      'Leafglade',
      'Briarsong',
      'Aurelius',
      'Corvian',
      'Valric',
      'Pendragon',
      'Dragoncourt',
      'Beaumont',
      'Drakos',
      'Hexius',
      'Lenoir',
      'Necrothe',
      'Blackstinger',
      'Nightshade',
      'Frostbrande',
      'Warstone',
      'Wisehelm',
    ],
    titles: [
      'The Iron-Blooded',
      'Shield of the Sunken King',
      'Blade of the Ashen March',
      'The Unbroken',
      'Vanguard of the Vale',
      'Weaver of the Veil',
      'The Star-Eclipsed',
      'Sage of Spirits',
      'The Gilded Oracle',
      'The Salt-Bitten',
      'The Coin-Catcher',
      'Swift-Hand',
      'The Gilded Regent',
      'Voice of the Hollow Throne',
    ],
  },
  enemy: {
    firstNames: [
      'Krag',
      'Marna',
      'Tor',
      'Joz',
      'Varog',
      'Sila',
      'Moki',
      'Rankar',
      'Lothe',
      'Barth',
      'Zynara',
      'Drathloth',
    ],
    lastNames: [
      'Vane',
      'Gallowglass',
      'Thorne',
      'Abysstalon',
      'Brinecat',
      'Gloomface',
      'Shadowfiend',
    ],
    titles: ['Iron-Jaw', 'Sharp-Eye', 'The Red', 'The Unbroken', 'The Brick'],
  },
}

export function getRandomInt(min: number, max: number): number {
  const num = Math.floor(Math.random() * (max - min + 1)) + min
  return num
}

export function pick<T>(arr: readonly T[]): T {
  const i = getRandomInt(0, arr.length - 1)
  return arr[i]! // index is within range so variable i can't be undefined unless array is empty which it shouldnt be
}

export function makeCombatant(type: ('player' | 'enemy')): Combatant {
  const initiative = getRandomInt(1, 20)
  const hp = getRandomInt(15, 50)
  const ac = getRandomInt(10, 25)
  const combatant: Combatant = {
    id: crypto.randomUUID(),
    name: type === 'player' ? chooseRandomPlayerName() : chooseRandomEnemyName(),
    type,
    initiative,
    hp,
    hpMax: hp,
    ac,
    conditions: [],
  }
  return combatant
}

export function chooseRandomPlayerName(): string {
  const first = pick(names.player.firstNames)
  const last = pick(names.player.lastNames)
  const title = pick(names.player.titles)
  const name = `${first} ${last} ${title}`
  return name
}

export function chooseRandomEnemyName(): string {
  const first = pick(names.enemy.firstNames)
  const last = pick(names.enemy.lastNames)
  const title = pick(names.enemy.titles)
  const name = `${first} ${last} ${title}`
  return name
}
