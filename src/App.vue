<script setup lang="ts">
import { useCombatStore } from './stores/combat'
const combat = useCombatStore()
</script>

<template>
  <div class="bg-slate-950 text-slate-200 min-h-screen">
    <pre>
Round: {{ combat.round }} {{
        combat.round === 0 ? `(not started)` : ``
      }}</pre>
      <pre>Log: {{ combat.log }}</pre>
    <pre>Combatants: {{ combat.combatants }}</pre>
  </div>
</template>
