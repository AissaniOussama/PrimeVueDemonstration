<template>
  <div>
    <div class="section-header">
      <h2 class="section-title">Theming & Design-Tokens</h2>
      <p class="section-subtitle">
        PrimeVue 4 nutzt ein Token-basiertes Design-System. Themes werden über CSS-Variablen
        gesteuert und können zur Laufzeit gewechselt werden – ohne Seiten-Reload.
      </p>
    </div>

    <!-- Token-Architektur -->
    <DemoCard
      title="Token-Architektur – 3 Ebenen"
      badge="Theming"
      :code="presetCode"
    >
      <div style="width:100%">
        <div class="info-box">
          <strong>Drei Ebenen der Anpassung:</strong>
          <strong>Primitive Tokens</strong> (Rohwerte) →
          <strong>Semantic Tokens</strong> (Bedeutung/Kontext) →
          <strong>Component Tokens</strong> (komponentenspezifisch).
          Ändere einen Semantic Token, alle Komponenten passen sich an.
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:12px">
          <div style="background:#f8f9fc;border:1px solid #e2e8f0;border-radius:8px;padding:16px">
            <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6366f1;margin-bottom:8px">1 · Primitive</div>
            <code style="font-size:0.78rem;font-family:monospace;color:#475569;display:block;line-height:1.9">
              blue.500 = #3B82F6<br>
              green.300 = #86efac<br>
              red.700 = #b91c1c<br>
              gray.100 = #f3f4f6
            </code>
          </div>
          <div style="background:#f8f9fc;border:1px solid #e2e8f0;border-radius:8px;padding:16px">
            <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6366f1;margin-bottom:8px">2 · Semantic</div>
            <code style="font-size:0.78rem;font-family:monospace;color:#475569;display:block;line-height:1.9">
              primary.color → blue.500<br>
              surface.ground → gray.100<br>
              text.color → gray.900<br>
              border.color → gray.200
            </code>
          </div>
          <div style="background:#f8f9fc;border:1px solid #e2e8f0;border-radius:8px;padding:16px">
            <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6366f1;margin-bottom:8px">3 · Component</div>
            <code style="font-size:0.78rem;font-family:monospace;color:#475569;display:block;line-height:1.9">
              button.background → primary.color<br>
              input.border.color → border.color<br>
              card.shadow → shadow.md<br>
              tag.border.radius → 4px
            </code>
          </div>
        </div>
      </div>
    </DemoCard>

    <!-- Live Preset-Wechsel -->
    <DemoCard
      title="Preset live wechseln – usePreset()"
      badge="Preset"
      :code="presetsCode"
    >
      <div style="width:100%">
        <p style="font-size:0.875rem;color:var(--color-text-muted);margin-bottom:16px">
          Klicke auf ein Preset – alle PrimeVue-Komponenten auf der Seite wechseln sofort:
        </p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px">
          <div
            v-for="p in presets"
            :key="p.name"
            @click="switchPreset(p)"
            :style="{
              border: activePreset === p.name ? '2px solid #6366f1' : '2px solid #e2e8f0',
              background: activePreset === p.name ? '#ede9fe' : '#fff',
              borderRadius: '10px',
              padding: '14px 20px',
              cursor: 'pointer',
              minWidth: '130px',
              textAlign: 'center',
              transition: 'all 0.15s'
            }"
          >
            <div :style="{ width:'36px', height:'36px', borderRadius:'50%', margin:'0 auto 10px', background: p.color }"></div>
            <div style="font-size:0.875rem;font-weight:700">{{ p.name }}</div>
            <div style="font-size:0.72rem;color:var(--color-text-muted);margin-top:3px">{{ p.desc }}</div>
          </div>
        </div>
        <!-- Live-Vorschau -->
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;padding:16px;background:#f8f9fc;border-radius:8px;border:1px solid #e2e8f0">
          <Button label="Primary" />
          <Button label="Success" severity="success" />
          <Button label="Danger" severity="danger" outlined />
          <Tag value="Tag" />
          <Tag value="Info" severity="info" />
          <span style="font-size:0.8rem;color:var(--color-text-muted)">← Alle reagieren auf den Preset-Wechsel</span>
        </div>
      </div>
    </DemoCard>

    <!-- Live Primärfarbe ändern -->
    <DemoCard
      title="Primärfarbe live ändern – updatePreset()"
      badge="Tokens"
      :code="tokenCode"
      :setupCode="tokenSetup"
    >
      <div style="width:100%">
        <p style="font-size:0.875rem;color:var(--color-text-muted);margin-bottom:16px">
          Nur den <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-family:monospace">primary</code>-Token
          überschreiben – der Rest bleibt unverändert:
        </p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px">
          <Button
            v-for="color in colorOptions"
            :key="color.name"
            :label="color.name"
            :style="{ background: color.value, border: 'none', color: '#fff', opacity: selectedColor?.name === color.name ? 1 : 0.7 }"
            @click="applyColor(color)"
          />
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;padding:16px;background:#f8f9fc;border-radius:8px;border:1px solid #e2e8f0;margin-bottom:12px">
          <Button label="Beispiel-Button" />
          <Button label="Outlined" outlined />
          <Tag value="Tag-Beispiel" />
          <span style="font-size:0.8rem;color:var(--color-text-muted)">← Ändert sich mit der Farbe</span>
        </div>
        <div v-if="selectedColor" style="padding:10px 14px;background:#1e1e2e;border-radius:6px;font-family:monospace;font-size:0.8rem;color:#a6e3a1">
          updatePreset({ semantic: { primary: { 500: '{{ selectedColor.value }}', ... } } })
        </div>
      </div>
    </DemoCard>

    <!-- Dark Mode -->
    <DemoCard
      title="Dark Mode – darkModeSelector"
      badge="Dark Mode"
      :code="darkCode"
      :setupCode="darkSetup"
    >
      <div style="width:100%">
        <div class="info-box">
          <strong>Dark Mode Strategie:</strong>
          PrimeVue 4 nutzt CSS-Klassen statt <code>prefers-color-scheme</code>.
          Der Selektor wird über <code>darkModeSelector</code> in der Konfiguration festgelegt –
          z.B. <code>.dark-mode</code> oder <code>system</code> für automatisches Erkennen.
        </div>
        <div style="display:flex;gap:12px;align-items:center;margin-top:12px">
          <Button
            :label="isDark ? 'Light Mode' : 'Dark Mode'"
            :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
            @click="toggleDark"
          />
          <span style="font-size:0.85rem;color:var(--color-text-muted)">
            Aktuell: <strong>{{ isDark ? 'Dark' : 'Light' }}</strong>
          </span>
        </div>
      </div>
    </DemoCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import { usePreset, updatePreset } from '@primeuix/themes'
import Aura from '@primevue/themes/aura'
import Lara from '@primevue/themes/lara'
import Nora from '@primevue/themes/nora'
import DemoCard from '../components/DemoCard.vue'

const activePreset = ref('Aura')
const selectedColor = ref(null)
const isDark = ref(false)

const presets = [
  { name: 'Aura', preset: Aura, color: 'linear-gradient(135deg,#6366f1,#8b5cf6)', desc: 'Modern & Clean' },
  { name: 'Lara', preset: Lara, color: 'linear-gradient(135deg,#3b82f6,#06b6d4)', desc: 'Corporate' },
  { name: 'Nora', preset: Nora, color: 'linear-gradient(135deg,#10b981,#059669)', desc: 'Minimalist' },
]

// Vollständige Farbskalen für updatePreset – nur so funktioniert es korrekt
const colorOptions = [
  { name: 'Indigo', value: '#6366f1', scale: { 50:'#eef2ff',100:'#e0e7ff',200:'#c7d2fe',300:'#a5b4fc',400:'#818cf8',500:'#6366f1',600:'#4f46e5',700:'#4338ca',800:'#3730a3',900:'#312e81',950:'#1e1b4b' } },
  { name: 'Blau',   value: '#3b82f6', scale: { 50:'#eff6ff',100:'#dbeafe',200:'#bfdbfe',300:'#93c5fd',400:'#60a5fa',500:'#3b82f6',600:'#2563eb',700:'#1d4ed8',800:'#1e40af',900:'#1e3a8a',950:'#172554' } },
  { name: 'Grün',   value: '#10b981', scale: { 50:'#ecfdf5',100:'#d1fae5',200:'#a7f3d0',300:'#6ee7b7',400:'#34d399',500:'#10b981',600:'#059669',700:'#047857',800:'#065f46',900:'#064e3b',950:'#022c22' } },
  { name: 'Rot',    value: '#ef4444', scale: { 50:'#fef2f2',100:'#fee2e2',200:'#fecaca',300:'#fca5a5',400:'#f87171',500:'#ef4444',600:'#dc2626',700:'#b91c1c',800:'#991b1b',900:'#7f1d1d',950:'#450a0a' } },
  { name: 'Orange', value: '#f97316', scale: { 50:'#fff7ed',100:'#ffedd5',200:'#fed7aa',300:'#fdba74',400:'#fb923c',500:'#f97316',600:'#ea580c',700:'#c2410c',800:'#9a3412',900:'#7c2d12',950:'#431407' } },
]

function switchPreset(p) {
  activePreset.value = p.name
  usePreset(p.preset)
}

function applyColor(color) {
  selectedColor.value = color
  updatePreset({
    semantic: {
      primary: color.scale
    }
  })
}

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark-mode', isDark.value)
}

// Code-Snippets
const presetCode = `// main.js – Preset auswählen
import Aura from '@primevue/themes/aura'
// import Lara from '@primevue/themes/lara'
// import Nora from '@primevue/themes/nora'

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark-mode'
    }
  }
})`

const presetsCode = `// Preset zur Laufzeit wechseln
import { usePreset } from 'primevue/config'
import Lara from '@primevue/themes/lara'

// Wechselt alle Komponenten sofort auf Lara
usePreset(Lara)`

const tokenCode = `<!-- Diese Komponenten reagieren live auf updatePreset() -->
<Button label="Beispiel-Button" />
<Button label="Outlined" outlined />
<Tag value="Tag-Beispiel" />`

const tokenSetup = `import { updatePreset } from 'primevue/config'

// Nur den primary-Token überschreiben
// Alle anderen Tokens bleiben unverändert
updatePreset({
  semantic: {
    primary: {
      50:  '#eef2ff',
      500: '#6366f1',  // ← Hauptfarbe
      600: '#4f46e5',
      900: '#312e81'
    }
  }
})`

const darkCode = `<Button
  :label="isDark ? 'Light Mode' : 'Dark Mode'"
  :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
  @click="toggleDark"
/>`

const darkSetup = `// main.js
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark-mode'
      // Alternativ: 'system' für prefers-color-scheme
    }
  }
})

// Komponente
const isDark = ref(false)
function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark-mode', isDark.value)
}`
</script>
