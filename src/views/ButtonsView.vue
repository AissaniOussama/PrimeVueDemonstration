<template>
  <div>
    <div class="section-header">
      <h2 class="section-title">Button-Komponenten</h2>
      <p class="section-subtitle">
        PrimeVue bietet <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-family:monospace">Button</code>,
        <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-family:monospace">SplitButton</code> und
        <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-family:monospace">SpeedDial</code> mit
        diversen Varianten, Größen und Zuständen.
      </p>
    </div>

    <!-- Varianten -->
    <DemoCard
      title="Button – Varianten & Severity"
      badge="Button"
      :code="variantCode"
    >
      <Button label="Primary" />
      <Button label="Secondary" severity="secondary" />
      <Button label="Success" severity="success" />
      <Button label="Warning" severity="warn" />
      <Button label="Danger" severity="danger" />
      <Button label="Info" severity="info" />
      <Button label="Contrast" severity="contrast" />
    </DemoCard>

    <!-- Outlined & Text -->
    <DemoCard
      title="Button – Outlined, Text, Link"
      badge="Button"
      :code="outlinedCode"
    >
      <Button label="Outlined" outlined />
      <Button label="Text" text />
      <Button label="Link" link />
      <Button label="Raised" raised />
      <Button label="Rounded" rounded />
    </DemoCard>

    <!-- Icons -->
    <DemoCard
      title="Button – Mit Icons"
      badge="Button"
      :code="iconCode"
    >
      <Button label="Speichern" icon="pi pi-save" />
      <Button label="Löschen" icon="pi pi-trash" severity="danger" />
      <Button icon="pi pi-search" aria-label="Suchen" rounded />
      <Button label="Rechts" icon="pi pi-arrow-right" iconPos="right" />
      <Button icon="pi pi-heart" rounded outlined severity="danger" />
    </DemoCard>

    <!-- Zustände -->
    <DemoCard
      title="Button – Loading-Zustand"
      badge="Button"
      :code="loadingCode"
      :setupCode="loadingSetup"
    >
      <Button
        label="Laden..."
        :loading="isLoading"
        icon="pi pi-check"
        @click="simulateLoad"
      />
      <Button
        label="Daten abrufen"
        :loading="isLoading2"
        severity="secondary"
        @click="simulateLoad2"
      />
    </DemoCard>

    <!-- SplitButton -->
    <DemoCard
      title="SplitButton – Dropdown-Aktionen"
      badge="SplitButton"
      :code="splitCode"
      :setupCode="splitSetup"
    >
      <SplitButton
        label="Speichern"
        icon="pi pi-save"
        :model="splitItems"
        @click="onSplitClick"
      />
    </DemoCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import SplitButton from 'primevue/splitbutton'
import DemoCard from '../components/DemoCard.vue'

const isLoading = ref(false)
const isLoading2 = ref(false)

function simulateLoad() {
  isLoading.value = true
  setTimeout(() => { isLoading.value = false }, 2000)
}
function simulateLoad2() {
  isLoading2.value = true
  setTimeout(() => { isLoading2.value = false }, 1500)
}

function onSplitClick() {
  alert('Primäre Aktion ausgeführt!')
}

const splitItems = [
  { label: 'Als Entwurf', icon: 'pi pi-pencil', command: () => alert('Entwurf') },
  { label: 'Exportieren', icon: 'pi pi-external-link', command: () => alert('Export') },
  { separator: true },
  { label: 'Löschen', icon: 'pi pi-trash', command: () => alert('Gelöscht') }
]

const variantCode = `<Button label="Primary" />
<Button label="Secondary" severity="secondary" />
<Button label="Success"   severity="success" />
<Button label="Warning"   severity="warn" />
<Button label="Danger"    severity="danger" />
<Button label="Info"      severity="info" />
<Button label="Contrast"  severity="contrast" />`

const outlinedCode = `<Button label="Outlined" outlined />
<Button label="Text"     text />
<Button label="Link"     link />
<Button label="Raised"   raised />
<Button label="Rounded"  rounded />`

const iconCode = `<Button label="Speichern" icon="pi pi-save" />
<Button label="Löschen"  icon="pi pi-trash"  severity="danger" />
<Button icon="pi pi-search" aria-label="Suchen" rounded />
<Button label="Rechts"   icon="pi pi-arrow-right" iconPos="right" />
<Button icon="pi pi-heart" rounded outlined severity="danger" />`

const loadingCode = `<Button
  label="Laden..."
  :loading="isLoading"
  icon="pi pi-check"
  @click="simulateLoad"
/>`

const loadingSetup = `import { ref } from 'vue'
const isLoading = ref(false)

function simulateLoad() {
  isLoading.value = true
  setTimeout(() => { isLoading.value = false }, 2000)
}`

const splitCode = `<SplitButton
  label="Speichern"
  icon="pi pi-save"
  :model="splitItems"
  @click="onSplitClick"
/>`

const splitSetup = `const splitItems = [
  { label: 'Als Entwurf', icon: 'pi pi-pencil',        command: () => {} },
  { label: 'Exportieren', icon: 'pi pi-external-link', command: () => {} },
  { separator: true },
  { label: 'Löschen',     icon: 'pi pi-trash',         command: () => {} }
]`
</script>
