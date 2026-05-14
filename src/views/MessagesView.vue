<template>
  <div>
    <div class="section-header">
      <h2 class="section-title">Nachrichten & Badges</h2>
      <p class="section-subtitle">
        Message, InlineMessage, Tag und Badge für Statusanzeigen, Labels und Benachrichtigungen.
      </p>
    </div>

    <!-- Message -->
    <DemoCard
      title="Message – Inline-Nachrichten"
      badge="Message"
      :code="messageCode"
    >
      <div style="display:flex;flex-direction:column;gap:10px;width:100%">
        <Message severity="success">Daten wurden erfolgreich gespeichert.</Message>
        <Message severity="info">Neue Version verfügbar. Bitte aktualisiere die App.</Message>
        <Message severity="warn">Deine Sitzung läuft in 5 Minuten ab.</Message>
        <Message severity="error">Verbindung zum Server unterbrochen.</Message>
        <Message severity="secondary">Sekundäre Hinweismeldung.</Message>
        <Message severity="contrast">Kontrastmeldung für dunkle Hintergründe.</Message>
      </div>
    </DemoCard>

    <!-- Tag -->
    <DemoCard
      title="Tag – Labels & Status-Badges"
      badge="Tag"
      :code="tagCode"
    >
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
        <Tag value="Primary" />
        <Tag value="Success" severity="success" />
        <Tag value="Info"    severity="info" />
        <Tag value="Warning" severity="warn" />
        <Tag value="Danger"  severity="danger" />
        <Tag value="Rounded" rounded />
        <Tag value="Mit Icon" icon="pi pi-check" severity="success" />
        <Tag value="NEU" severity="danger" rounded />
      </div>
    </DemoCard>

    <!-- Badge -->
    <DemoCard
      title="Badge – Zähler & Indikatoren"
      badge="Badge"
      :code="badgeCode"
    >
      <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:center">
        <div style="position:relative;display:inline-flex">
          <Button icon="pi pi-bell" rounded outlined />
          <Badge value="5" style="position:absolute;top:-4px;right:-4px" />
        </div>
        <div style="position:relative;display:inline-flex">
          <Button icon="pi pi-envelope" rounded outlined severity="secondary" />
          <Badge value="12" severity="danger" style="position:absolute;top:-4px;right:-4px" />
        </div>
        <Badge value="4" />
        <Badge value="8" severity="success" />
        <Badge value="!" severity="warn" />
        <OverlayBadge value="2" severity="danger">
          <Button icon="pi pi-inbox" rounded outlined />
        </OverlayBadge>
      </div>
    </DemoCard>

    <!-- Chip -->
    <DemoCard
      title="Chip – Entfernbare Tags"
      badge="Chip"
      :code="chipCode"
      :setupCode="chipSetup"
    >
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
        <Chip label="Vue.js" />
        <Chip label="PrimeVue" icon="pi pi-star" />
        <Chip label="TypeScript" removable @remove="onChipRemove('TypeScript')" />
        <Chip label="Entfernbar" icon="pi pi-tag" removable />
        <Chip v-for="chip in chips" :key="chip" :label="chip" removable @remove="removeChip(chip)" />
      </div>
    </DemoCard>

    <!-- ProgressBar -->
    <DemoCard
      title="ProgressBar & ProgressSpinner"
      badge="ProgressBar"
      :code="progressCode"
      :setupCode="progressSetup"
    >
      <div style="width:100%;display:flex;flex-direction:column;gap:16px">
        <ProgressBar :value="progressVal" />
        <ProgressBar :value="75" severity="success" />
        <ProgressBar mode="indeterminate" style="height:6px" />
        <div style="display:flex;gap:16px;align-items:center">
          <ProgressSpinner style="width:50px;height:50px" strokeWidth="4" />
          <ProgressSpinner style="width:50px;height:50px" strokeWidth="4" animationDuration=".5s" />
        </div>
        <div style="display:flex;gap:8px">
          <Button label="-10" size="small" outlined @click="progressVal = Math.max(0, progressVal - 10)" />
          <Button label="+10" size="small" @click="progressVal = Math.min(100, progressVal + 10)" />
        </div>
      </div>
    </DemoCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Message from 'primevue/message'
import Tag from 'primevue/tag'
import Badge from 'primevue/badge'
import OverlayBadge from 'primevue/overlaybadge'
import Chip from 'primevue/chip'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'
import Button from 'primevue/button'
import DemoCard from '../components/DemoCard.vue'

const progressVal = ref(45)
const chips = ref(['JavaScript', 'CSS', 'HTML'])

function onChipRemove(label) {
  console.log('Entfernt:', label)
}
function removeChip(chip) {
  chips.value = chips.value.filter(c => c !== chip)
}

const messageCode = `<Message severity="success">Erfolgreich gespeichert.</Message>
<Message severity="info">Neue Version verfügbar.</Message>
<Message severity="warn">Sitzung läuft ab.</Message>
<Message severity="error">Verbindung unterbrochen.</Message>`

const tagCode = `<Tag value="Primary" />
<Tag value="Success" severity="success" />
<Tag value="Warning" severity="warn" />
<Tag value="Danger"  severity="danger" />
<Tag value="Rounded" rounded />
<Tag value="Mit Icon" icon="pi pi-check" severity="success" />`

const badgeCode = `<!-- Badge auf Button -->
<OverlayBadge value="2" severity="danger">
  <Button icon="pi pi-bell" rounded outlined />
</OverlayBadge>

<!-- Standalone Badge -->
<Badge value="4" />
<Badge value="8" severity="success" />
<Badge value="!" severity="warn" />`

const chipCode = `<Chip label="Vue.js" />
<Chip label="PrimeVue" icon="pi pi-star" />
<Chip label="Entfernbar" removable @remove="onRemove" />`

const chipSetup = `function onRemove(event) {
  console.log('Chip entfernt')
}`

const progressCode = `<ProgressBar :value="val" />
<ProgressBar :value="75" severity="success" />

<!-- Unbestimmter Fortschritt -->
<ProgressBar mode="indeterminate" style="height:6px" />

<!-- Spinner -->
<ProgressSpinner style="width:50px;height:50px" strokeWidth="4" />`

const progressSetup = `const val = ref(45)`
</script>
