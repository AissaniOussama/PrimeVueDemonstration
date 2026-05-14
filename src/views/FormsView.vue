<template>
  <div>
    <div class="section-header">
      <h2 class="section-title">Formular-Komponenten</h2>
      <p class="section-subtitle">
        PrimeVue stellt vollständige Formular-Inputs bereit: von einfachen Textfeldern
        bis hin zu Datepickern, Dropdowns und Toggles.
      </p>
    </div>

    <!-- InputText & Textarea -->
    <DemoCard
      title="InputText – Texteingabe"
      badge="InputText"
      :code="inputCode"
    >
      <div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:400px">
        <InputText v-model="text1" placeholder="Normales Textfeld" />
        <InputText v-model="text1" placeholder="Disabled" disabled />
        <InputText v-model="text1" placeholder="Invalid" invalid />
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon"><i class="pi pi-user"></i></span>
          <InputText v-model="text1" placeholder="Mit Icon-Addon" />
        </div>
        <Textarea v-model="text2" rows="3" placeholder="Mehrzeiliges Textarea" autoResize />
      </div>
    </DemoCard>

    <!-- Select / Dropdown -->
    <DemoCard
      title="Select – Dropdown-Auswahl"
      badge="Select"
      :code="selectCode"
      :setupCode="selectSetup"
    >
      <div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:400px">
        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Stadt auswählen"
        />
        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Mit Filter"
          filter
        />
      </div>
    </DemoCard>

    <!-- Checkbox & RadioButton -->
    <DemoCard
      title="Checkbox & RadioButton"
      badge="Checkbox"
      :code="checkCode"
      :setupCode="checkSetup"
    >
      <div style="display:flex;flex-direction:column;gap:16px">
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
          <div v-for="item in checkboxItems" :key="item.key" style="display:flex;align-items:center;gap:8px">
            <Checkbox v-model="selectedChecks" :inputId="item.key" :value="item.name" />
            <label :for="item.key" style="font-size:0.875rem;cursor:pointer">{{ item.name }}</label>
          </div>
        </div>
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
          <div v-for="item in radioItems" :key="item.key" style="display:flex;align-items:center;gap:8px">
            <RadioButton v-model="selectedRadio" :inputId="item.key" :value="item.name" />
            <label :for="item.key" style="font-size:0.875rem;cursor:pointer">{{ item.name }}</label>
          </div>
        </div>
        <div style="font-size:0.8rem;color:var(--color-text-muted)">
          Checkbox: {{ selectedChecks.join(', ') || '–' }} | Radio: {{ selectedRadio || '–' }}
        </div>
      </div>
    </DemoCard>

    <!-- DatePicker -->
    <DemoCard
      title="DatePicker – Datumsauswahl"
      badge="DatePicker"
      :code="dateCode"
    >
      <div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:400px">
        <DatePicker v-model="date1" placeholder="Datum wählen" showIcon />
        <DatePicker v-model="date2" placeholder="Datumsbereich" selectionMode="range" showIcon />
      </div>
    </DemoCard>

    <!-- Slider & InputNumber -->
    <DemoCard
      title="Slider & InputNumber"
      badge="Slider"
      :code="sliderCode"
      :setupCode="sliderSetup"
    >
      <div style="width:100%;max-width:400px;display:flex;flex-direction:column;gap:20px">
        <div>
          <label style="font-size:0.8rem;color:var(--color-text-muted);display:block;margin-bottom:8px">
            Wert: {{ sliderVal }}
          </label>
          <Slider v-model="sliderVal" :min="0" :max="100" />
        </div>
        <InputNumber v-model="numVal" placeholder="Zahl eingeben" showButtons :min="0" :max="999" />
        <InputNumber v-model="priceVal" mode="currency" currency="EUR" locale="de-DE" placeholder="Preis" />
      </div>
    </DemoCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import RadioButton from 'primevue/radiobutton'
import DatePicker from 'primevue/datepicker'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'
import DemoCard from '../components/DemoCard.vue'

const text1 = ref('')
const text2 = ref('')
const selectedCity = ref(null)
const selectedChecks = ref([])
const selectedRadio = ref(null)
const date1 = ref(null)
const date2 = ref(null)
const sliderVal = ref(40)
const numVal = ref(null)
const priceVal = ref(null)

const cities = [
  { name: 'Berlin', code: 'BER' },
  { name: 'München', code: 'MUC' },
  { name: 'Hamburg', code: 'HAM' },
  { name: 'Köln', code: 'CGN' },
  { name: 'Frankfurt', code: 'FRA' }
]

const checkboxItems = [
  { key: 'vue', name: 'Vue' },
  { key: 'react', name: 'React' },
  { key: 'angular', name: 'Angular' }
]

const radioItems = [
  { key: 'ts', name: 'TypeScript' },
  { key: 'js', name: 'JavaScript' },
  { key: 'py', name: 'Python' }
]

const inputCode = `<InputText v-model="text" placeholder="Normales Textfeld" />
<InputText v-model="text" disabled />
<InputText v-model="text" invalid />

<!-- InputGroup mit Icon-Addon -->
<div class="p-inputgroup">
  <span class="p-inputgroup-addon">
    <i class="pi pi-user"></i>
  </span>
  <InputText v-model="text" placeholder="Mit Icon-Addon" />
</div>

<Textarea v-model="text" rows="3" autoResize />`

const selectCode = `<Select
  v-model="selectedCity"
  :options="cities"
  optionLabel="name"
  placeholder="Stadt auswählen"
/>

<!-- Mit Suchfilter -->
<Select
  v-model="selectedCity"
  :options="cities"
  optionLabel="name"
  placeholder="Mit Filter"
  filter
/>`

const selectSetup = `const cities = [
  { name: 'Berlin',    code: 'BER' },
  { name: 'München',   code: 'MUC' },
  { name: 'Hamburg',   code: 'HAM' },
]
const selectedCity = ref(null)`

const checkCode = `<!-- Checkbox-Gruppe -->
<Checkbox v-model="selected" inputId="vue" value="Vue" />
<label for="vue">Vue</label>

<!-- RadioButton-Gruppe -->
<RadioButton v-model="lang" inputId="ts" value="TypeScript" />
<label for="ts">TypeScript</label>`

const checkSetup = `const selected = ref([])   // Array für Mehrfachauswahl
const lang    = ref(null)  // String für Einzelauswahl`

const dateCode = `<!-- Einzeldatum mit Icon -->
<DatePicker v-model="date" placeholder="Datum wählen" showIcon />

<!-- Datumsbereich -->
<DatePicker
  v-model="range"
  selectionMode="range"
  placeholder="Datumsbereich"
  showIcon
/>`

const sliderCode = `<Slider v-model="val" :min="0" :max="100" />

<!-- Numerisches Eingabefeld mit Buttons -->
<InputNumber v-model="num" showButtons :min="0" :max="999" />

<!-- Währungsformat -->
<InputNumber
  v-model="price"
  mode="currency"
  currency="EUR"
  locale="de-DE"
/>`

const sliderSetup = `const val   = ref(40)
const num   = ref(null)
const price = ref(null)`
</script>
