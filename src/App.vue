<template>
  <div class="app-layout">
    <!-- Globale Overlays: Toast und ConfirmDialog müssen auf Root-Ebene liegen -->
    <Toast position="bottom-left" />
    <ConfirmDialog />
    <!-- Sidebar -->
    <nav class="sidebar">
      <div class="sidebar-logo">
        <h1>
          <i class="pi pi-prime" style="color:#6366f1;margin-right:8px"></i>
          PrimeVue Demo
        </h1>
        <span>Komponentenbibliothek v4</span>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-section-label">Einstieg</div>
        <button
          class="sidebar-item"
          :class="{ active: currentView === 'home' }"
          @click="navigate('home')"
        >
          <i class="pi pi-home"></i>
          Übersicht
        </button>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-section-label">Komponenten</div>
        <button
          v-for="item in navItems"
          :key="item.id"
          class="sidebar-item"
          :class="{ active: currentView === item.id }"
          @click="navigate(item.id)"
        >
          <i :class="item.icon"></i>
          {{ item.label }}
        </button>
      </div>

      <div style="margin-top:auto;padding:16px 12px;border-top:1px solid rgba(255,255,255,0.06)">
        <a
          href="https://primevue.org"
          target="_blank"
          class="sidebar-item"
          style="text-decoration:none"
        >
          <i class="pi pi-external-link"></i>
          primevue.org
        </a>
      </div>
    </nav>

    <!-- Main -->
    <div class="main-content">
      <div class="topbar">
        <div class="topbar-breadcrumb">
          PrimeVue Demo &rsaquo; <strong>{{ currentLabel }}</strong>
        </div>
        <div class="topbar-actions">
          <span style="font-size:0.78rem;color:var(--color-text-muted);background:#f1f5f9;padding:4px 10px;border-radius:20px;font-family:monospace">
            primevue@4.5.5
          </span>
        </div>
      </div>

      <div class="page-content">
        <transition name="fade" mode="out-in">
          <component :is="currentComponent" :key="currentView" @navigate="navigate" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue'
import Tooltip from 'primevue/tooltip'
import Toast from 'primevue/toast'
import ConfirmDialog from 'primevue/confirmdialog'

// Direktive global registrieren
import { getCurrentInstance } from 'vue'
const app = getCurrentInstance()?.appContext.app
if (app) app.directive('tooltip', Tooltip)

const currentView = ref('home')

const navItems = [
  { id: 'buttons',  icon: 'pi pi-stop',           label: 'Button' },
  { id: 'forms',    icon: 'pi pi-pencil',          label: 'Formulare' },
  { id: 'data',     icon: 'pi pi-table',           label: 'DataTable' },
  { id: 'overlay',  icon: 'pi pi-window-maximize', label: 'Overlays' },
  { id: 'messages', icon: 'pi pi-info-circle',     label: 'Nachrichten' },
  { id: 'panels',   icon: 'pi pi-th-large',        label: 'Panels' },
  { id: 'theming',  icon: 'pi pi-palette',         label: 'Theming' },
]

const views = {
  home:     defineAsyncComponent(() => import('./views/HomeView.vue')),
  buttons:  defineAsyncComponent(() => import('./views/ButtonsView.vue')),
  forms:    defineAsyncComponent(() => import('./views/FormsView.vue')),
  data:     defineAsyncComponent(() => import('./views/DataView.vue')),
  overlay:  defineAsyncComponent(() => import('./views/OverlayView.vue')),
  messages: defineAsyncComponent(() => import('./views/MessagesView.vue')),
  panels:   defineAsyncComponent(() => import('./views/PanelsView.vue')),
  theming:  defineAsyncComponent(() => import('./views/ThemingView.vue')),
}

const currentComponent = computed(() => views[currentView.value] || views.home)

const currentLabel = computed(() => {
  if (currentView.value === 'home') return 'Übersicht'
  return navItems.find(i => i.id === currentView.value)?.label || ''
})

function navigate(id) {
  currentView.value = id
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
