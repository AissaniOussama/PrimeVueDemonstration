<template>
  <div>
    <div class="section-header">
      <h2 class="section-title">PrimeVue – Komponentenbibliothek</h2>
      <p class="section-subtitle">
        Interaktive Demos der wichtigsten PrimeVue-Komponenten mit Code-Snippets.
        Klicke auf eine Kategorie oder nutze die Sidebar.
      </p>
    </div>

    <div class="info-box">
      <strong>Was ist PrimeVue?</strong>
      PrimeVue ist eine umfangreiche UI-Komponentenbibliothek für Vue 3 von PrimeTek.
      Sie bietet über 90 Komponenten, mehrere Design-Themes (Aura, Lara, Nora) und vollständige
      Accessibility-Unterstützung (ARIA). Die Komponenten sind tree-shakeable und unterstützen
      TypeScript nativ.
    </div>

    <div class="overview-grid">
      <div
        v-for="item in categories"
        :key="item.id"
        class="overview-card"
        @click="$emit('navigate', item.id)"
      >
        <div class="overview-card-icon">
          <i :class="item.icon"></i>
        </div>
        <h3>{{ item.label }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </div>

    <!-- Setup-Snippet -->
    <div style="margin-top: 40px;">
      <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;color:var(--color-text)">
        Installation &amp; Setup
      </h3>
      <div class="demo-card">
        <div class="demo-card-header">
          <span class="demo-card-title">main.js – PrimeVue registrieren</span>
          <span class="demo-card-badge">Setup</span>
        </div>
        <CodeBlock :code="setupSnippet" language="javascript" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CodeBlock from '../components/CodeBlock.vue'

defineEmits(['navigate'])

const categories = [
  { id: 'buttons',   icon: 'pi pi-stop',        label: 'Button',      desc: 'Button, SplitButton, SpeedDial' },
  { id: 'forms',     icon: 'pi pi-pencil',       label: 'Formulare',   desc: 'InputText, Dropdown, Calendar, Checkbox, RadioButton' },
  { id: 'data',      icon: 'pi pi-table',        label: 'Datentabelle',desc: 'DataTable mit Sortierung, Filter, Pagination' },
  { id: 'overlay',   icon: 'pi pi-window-maximize', label: 'Overlays', desc: 'Dialog, Toast, ConfirmDialog, Tooltip' },
  { id: 'messages',  icon: 'pi pi-info-circle',  label: 'Nachrichten', desc: 'Message, InlineMessage, Tag, Badge' },
  { id: 'panels',    icon: 'pi pi-th-large',     label: 'Panels',      desc: 'Card, Panel, Accordion, TabView' },
  { id: 'theming',   icon: 'pi pi-palette',      label: 'Theming',     desc: 'Design-Tokens, Preset-System, Dark Mode' },
]

const setupSnippet = `import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import 'primeicons/primeicons.css'

const app = createApp(App)

// PrimeVue mit Aura-Theme konfigurieren
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.dark-mode',
      cssLayer: false
    }
  }
})

app.use(ToastService)
app.mount('#app')`
</script>
