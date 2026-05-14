<template>
  <div>
    <div class="section-header">
      <h2 class="section-title">Overlay-Komponenten</h2>
      <p class="section-subtitle">
        Dialog, Toast, ConfirmDialog und Tooltip – die wichtigsten Overlay-Komponenten
        von PrimeVue für Nutzerinteraktionen und Feedback.
      </p>
    </div>

    <!-- Toast -->
    <DemoCard
      title="Toast – Benachrichtigungen"
      badge="Toast"
      :code="toastCode"
      :setupCode="toastSetup"
    >
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <Button label="Success" severity="success" icon="pi pi-check" @click="showToast('success')" />
        <Button label="Info"    severity="info"    icon="pi pi-info-circle" @click="showToast('info')" />
        <Button label="Warning" severity="warn"    icon="pi pi-exclamation-triangle" @click="showToast('warn')" />
        <Button label="Error"   severity="danger"  icon="pi pi-times" @click="showToast('error')" />
      </div>
    </DemoCard>

    <!-- Dialog -->
    <DemoCard
      title="Dialog – Modal-Fenster"
      badge="Dialog"
      :code="dialogCode"
      :setupCode="dialogSetup"
    >
      <Button label="Dialog öffnen" icon="pi pi-external-link" @click="dialogVisible = true" />
      <Button label="Scrollbarer Dialog" severity="secondary" @click="scrollDialog = true" style="margin-left:8px" />

      <Dialog
        v-model:visible="dialogVisible"
        header="Beispiel-Dialog"
        :style="{ width: '450px' }"
        modal
      >
        <p style="line-height:1.6;color:var(--color-text-muted)">
          Dies ist ein modaler Dialog. Er kann beliebigen Inhalt enthalten –
          Formulare, Bestätigungen oder Detailansichten.
        </p>
        <template #footer>
          <Button label="Abbrechen" text @click="dialogVisible = false" />
          <Button label="Bestätigen" icon="pi pi-check" @click="dialogVisible = false" />
        </template>
      </Dialog>

      <Dialog
        v-model:visible="scrollDialog"
        header="Scrollbarer Dialog"
        :style="{ width: '450px' }"
        modal
        :maximizable="true"
      >
        <p v-for="i in 10" :key="i" style="margin-bottom:12px;color:var(--color-text-muted)">
          Absatz {{ i }}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <template #footer>
          <Button label="Schließen" @click="scrollDialog = false" />
        </template>
      </Dialog>
    </DemoCard>

    <!-- ConfirmDialog -->
    <DemoCard
      title="ConfirmDialog – Bestätigungsdialog"
      badge="ConfirmDialog"
      :code="confirmCode"
      :setupCode="confirmSetup"
    >
      <ConfirmDialog />
      <Button
        label="Löschen bestätigen"
        severity="danger"
        icon="pi pi-trash"
        @click="confirmDelete"
      />
    </DemoCard>

    <!-- Tooltip -->
    <DemoCard
      title="Tooltip – Direktive"
      badge="Tooltip"
      :code="tooltipCode"
      :setupCode="tooltipSetup"
    >
      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <Button
          v-tooltip.top="'Tooltip oben'"
          label="Oben"
          outlined
        />
        <Button
          v-tooltip.right="'Tooltip rechts'"
          label="Rechts"
          outlined
        />
        <Button
          v-tooltip.bottom="'Tooltip unten'"
          label="Unten"
          outlined
        />
        <Button
          v-tooltip.left="'Tooltip links'"
          label="Links"
          outlined
        />
        <i
          class="pi pi-info-circle"
          v-tooltip="'Tooltip auf Icon'"
          style="font-size:1.5rem;color:var(--color-primary);cursor:pointer"
        ></i>
      </div>
    </DemoCard>

    <!-- Popover -->
    <DemoCard
      title="Popover (OverlayPanel)"
      badge="Popover"
      :code="popoverCode"
      :setupCode="popoverSetup"
    >
      <Button
        label="Popover öffnen"
        icon="pi pi-info-circle"
        @click="toggle"
        ref="popoverBtn"
      />
      <Popover ref="popoverRef">
        <div style="padding:8px;max-width:220px">
          <h4 style="font-size:0.875rem;font-weight:600;margin-bottom:8px">Popover-Inhalt</h4>
          <p style="font-size:0.8rem;color:var(--color-text-muted);line-height:1.5">
            Popovers können beliebigen Inhalt enthalten und werden relativ zum Trigger-Element positioniert.
          </p>
        </div>
      </Popover>
    </DemoCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import { useConfirm } from 'primevue/useconfirm'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Popover from 'primevue/popover'
import Tooltip from 'primevue/tooltip'
import DemoCard from '../components/DemoCard.vue'

const toast = useToast()
const confirm = useConfirm()

const dialogVisible = ref(false)
const scrollDialog = ref(false)
const popoverRef = ref(null)

function showToast(severity) {
  const messages = {
    success: { summary: 'Erfolgreich', detail: 'Aktion wurde erfolgreich ausgeführt.' },
    info:    { summary: 'Information', detail: 'Hier ist eine hilfreiche Information.' },
    warn:    { summary: 'Warnung',     detail: 'Bitte prüfe deine Eingaben.' },
    error:   { summary: 'Fehler',      detail: 'Ein Fehler ist aufgetreten.' }
  }
  toast.add({ severity, ...messages[severity], life: 3000 })
}

function confirmDelete() {
  confirm.require({
    message: 'Möchtest du diesen Eintrag wirklich löschen?',
    header: 'Löschen bestätigen',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Ja, löschen',
    rejectLabel: 'Abbrechen',
    acceptClass: 'p-button-danger',
    accept: () => toast.add({ severity: 'success', summary: 'Gelöscht', detail: 'Eintrag wurde gelöscht.', life: 2000 }),
    reject: () => toast.add({ severity: 'info', summary: 'Abgebrochen', life: 1500 })
  })
}

function toggle(event) {
  popoverRef.value.toggle(event)
}

const toastCode = `<Toast />
<Button label="Success" severity="success" @click="showSuccess" />
<Button label="Error"   severity="danger"  @click="showError" />`

const toastSetup = `import { useToast } from 'primevue/usetoast'
const toast = useToast()

// app.use(ToastService) in main.js erforderlich!

function showSuccess() {
  toast.add({
    severity: 'success',
    summary: 'Erfolgreich',
    detail: 'Aktion ausgeführt.',
    life: 3000
  })
}`

const dialogCode = `<Dialog
  v-model:visible="visible"
  header="Beispiel-Dialog"
  :style="{ width: '450px' }"
  modal
>
  <p>Dialog-Inhalt hier.</p>
  <template #footer>
    <Button label="Abbrechen" text @click="visible = false" />
    <Button label="OK" icon="pi pi-check" @click="visible = false" />
  </template>
</Dialog>

<Button label="Öffnen" @click="visible = true" />`

const dialogSetup = `const visible = ref(false)`

const confirmCode = `<ConfirmDialog />
<Button
  label="Löschen"
  severity="danger"
  @click="confirmDelete"
/>`

const confirmSetup = `import { useConfirm } from 'primevue/useconfirm'
const confirm = useConfirm()

// app.use(ConfirmationService) in main.js erforderlich!

function confirmDelete() {
  confirm.require({
    message: 'Wirklich löschen?',
    header: 'Bestätigung',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Ja',
    rejectLabel: 'Nein',
    acceptClass: 'p-button-danger',
    accept: () => { /* Löschlogik */ },
    reject: () => { /* Abbruch */ }
  })
}`

const tooltipCode = `<!-- Als Direktive verwenden -->
<Button v-tooltip.top="'Tooltip oben'" label="Oben" />
<Button v-tooltip.right="'Tooltip rechts'" label="Rechts" />
<i class="pi pi-info-circle" v-tooltip="'Info'" />`

const tooltipSetup = `// In main.js registrieren:
import Tooltip from 'primevue/tooltip'
app.directive('tooltip', Tooltip)`

const popoverCode = `<Button label="Öffnen" @click="toggle" />
<Popover ref="popRef">
  <div>Beliebiger Inhalt</div>
</Popover>`

const popoverSetup = `const popRef = ref(null)
function toggle(event) {
  popRef.value.toggle(event)
}`
</script>
