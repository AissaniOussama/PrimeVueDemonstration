<template>
  <div>
    <div class="section-header">
      <h2 class="section-title">DataTable</h2>
      <p class="section-subtitle">
        Die <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-family:monospace">DataTable</code>-Komponente
        ist eines der Kernstücke von PrimeVue: Sortierung, Filterung, Pagination,
        Row-Selection und Inline-Editing out of the box.
      </p>
    </div>

    <!-- Einfache Tabelle -->
    <DemoCard
      title="DataTable – Basis mit Sortierung"
      badge="DataTable"
      :code="basicCode"
      :setupCode="basicSetup"
    >
      <div style="width:100%">
        <DataTable :value="products" sortMode="multiple" stripedRows>
          <Column field="id"       header="ID"       sortable style="width:60px" />
          <Column field="name"     header="Name"     sortable />
          <Column field="category" header="Kategorie" sortable />
          <Column field="price"    header="Preis"    sortable>
            <template #body="{ data }">
              {{ data.price.toFixed(2) }} €
            </template>
          </Column>
          <Column field="inStock"  header="Verfügbar">
            <template #body="{ data }">
              <Tag
                :value="data.inStock ? 'Ja' : 'Nein'"
                :severity="data.inStock ? 'success' : 'danger'"
              />
            </template>
          </Column>
        </DataTable>
      </div>
    </DemoCard>

    <!-- Filterung & Pagination -->
    <DemoCard
      title="DataTable – Filter & Pagination"
      badge="DataTable"
      :code="filterCode"
      :setupCode="filterSetup"
    >
      <div style="width:100%">
        <DataTable
          :value="products"
          :paginator="true"
          :rows="3"
          v-model:filters="filters"
          filterDisplay="row"
          :globalFilterFields="['name','category']"
        >
          <template #header>
            <div style="display:flex;justify-content:flex-end">
              <div class="p-inputgroup" style="max-width:250px">
                <span class="p-inputgroup-addon"><i class="pi pi-search"></i></span>
                <InputText
                  v-model="filters['global'].value"
                  placeholder="Suchen..."
                />
              </div>
            </div>
          </template>
          <Column field="name"     header="Name"      filter filterPlaceholder="Name" />
          <Column field="category" header="Kategorie" filter filterPlaceholder="Kategorie" />
          <Column field="price"    header="Preis">
            <template #body="{ data }">{{ data.price.toFixed(2) }} €</template>
          </Column>
        </DataTable>
      </div>
    </DemoCard>

    <!-- Row Selection -->
    <DemoCard
      title="DataTable – Row Selection"
      badge="DataTable"
      :code="selectionCode"
    >
      <div style="width:100%">
        <p style="font-size:0.8rem;color:var(--color-text-muted);margin-bottom:12px">
          Ausgewählt: {{ selectedProducts.map(p => p.name).join(', ') || '–' }}
        </p>
        <DataTable
          :value="products"
          v-model:selection="selectedProducts"
          selectionMode="multiple"
          :metaKeySelection="false"
          dataKey="id"
        >
          <Column selectionMode="multiple" style="width:3rem" />
          <Column field="name"     header="Name" />
          <Column field="category" header="Kategorie" />
          <Column field="price"    header="Preis">
            <template #body="{ data }">{{ data.price.toFixed(2) }} €</template>
          </Column>
        </DataTable>
      </div>
    </DemoCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import InputText from 'primevue/inputtext'
import DemoCard from '../components/DemoCard.vue'

// FilterMatchMode direkt definiert (PrimeVue 4 exportiert es nicht mehr aus 'primevue/api')
const FilterMatchMode = {
  STARTS_WITH: 'startsWith',
  CONTAINS: 'contains',
}

const products = ref([
  { id: 1, name: 'Laptop Pro',      category: 'Elektronik', price: 1299.99, inStock: true },
  { id: 2, name: 'Wireless Mouse',  category: 'Zubehör',    price: 29.99,  inStock: true },
  { id: 3, name: 'USB-C Hub',       category: 'Zubehör',    price: 49.99,  inStock: false },
  { id: 4, name: 'Monitor 27"',     category: 'Elektronik', price: 399.00, inStock: true },
  { id: 5, name: 'Mechanical Keyboard', category: 'Zubehör', price: 89.99, inStock: true },
  { id: 6, name: 'Webcam HD',       category: 'Elektronik', price: 79.99,  inStock: false },
])

const selectedProducts = ref([])

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name:   { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  category: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

const basicCode = `<DataTable :value="products" sortMode="multiple" stripedRows>
  <Column field="id"       header="ID"        sortable />
  <Column field="name"     header="Name"      sortable />
  <Column field="category" header="Kategorie" sortable />
  <Column field="price"    header="Preis"     sortable>
    <template #body="{ data }">
      {{ data.price.toFixed(2) }} €
    </template>
  </Column>
  <Column field="inStock" header="Verfügbar">
    <template #body="{ data }">
      <Tag
        :value="data.inStock ? 'Ja' : 'Nein'"
        :severity="data.inStock ? 'success' : 'danger'"
      />
    </template>
  </Column>
</DataTable>`

const basicSetup = `const products = ref([
  { id: 1, name: 'Laptop Pro', category: 'Elektronik',
    price: 1299.99, inStock: true },
  // ...
])`

const filterCode = `<DataTable
  :value="products"
  :paginator="true"
  :rows="5"
  v-model:filters="filters"
  filterDisplay="row"
  :globalFilterFields="['name','category']"
>
  <template #header>
    <InputText
      v-model="filters['global'].value"
      placeholder="Suchen..."
    />
  </template>
  <Column field="name"     header="Name"      filter />
  <Column field="category" header="Kategorie" filter />
</DataTable>`

const filterSetup = `// FilterMatchMode direkt definiert (PrimeVue 4)
const FilterMatchMode = {
  STARTS_WITH: 'startsWith',
  CONTAINS: 'contains',
}

const filters = ref({
  global:   { value: null, matchMode: FilterMatchMode.CONTAINS },
  name:     { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  category: { value: null, matchMode: FilterMatchMode.CONTAINS }
})`

const selectionCode = `<DataTable
  :value="products"
  v-model:selection="selectedProducts"
  selectionMode="multiple"
  :metaKeySelection="false"
  dataKey="id"
>
  <Column selectionMode="multiple" style="width:3rem" />
  <Column field="name"     header="Name" />
  <Column field="category" header="Kategorie" />
</DataTable>`
</script>
