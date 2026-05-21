# PrimeVue Komponenten-Demo

Interaktiver Prototyp zur Demonstration zentraler PrimeVue-Komponenten mit Live-Vorschau und Code-Snippets.

## Schnellstart (lokal)

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Dev-Server starten
npm run dev

# 3. Im Browser öffnen
# → http://localhost:5173
```

## Projektstruktur

```
src/
  main.js              ← PrimeVue-Konfiguration (Einstiegspunkt)
  App.vue              ← Sidebar-Navigation & Layout
  style.css            ← Globale Styles
  components/
    CodeBlock.vue      ← Syntax-Highlighting + Copy-to-Clipboard
    DemoCard.vue       ← Vorschau/Code-Tab-Wrapper
  views/
    HomeView.vue       ← Übersicht + Setup-Snippet
    ButtonsView.vue    ← Button, SplitButton
    FormsView.vue      ← InputText, Select, Checkbox, DatePicker, Slider
    DataView.vue       ← DataTable (Sortierung, Filter, Pagination, Selection)
    OverlayView.vue    ← Toast, Dialog, ConfirmDialog, Tooltip, Popover
    MessagesView.vue   ← Message, Tag, Badge, Chip, ProgressBar
    PanelsView.vue     ← Card, Panel, Accordion, Tabs
    ThemingView.vue    ← Preset-System, Design-Tokens, Dark Mode
```

## Stack

| Paket | Version |
|---|---|
| Vue | 3.5.x |
| PrimeVue | 4.5.5 |
| @primevue/themes | 4.5.4 |
| PrimeIcons | 7.0.0 |
| Prism.js | 1.30.0 |
| Vite | 6.x |

