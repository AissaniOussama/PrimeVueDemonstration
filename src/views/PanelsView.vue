<template>
  <div>
    <div class="section-header">
      <h2 class="section-title">Panel-Komponenten</h2>
      <p class="section-subtitle">
        Card, Panel, Accordion und Tabs für strukturierte Inhaltsdarstellung und Navigation.
      </p>
    </div>

    <!-- Card -->
    <DemoCard
      title="Card – Inhalts-Container"
      badge="Card"
      :code="cardCode"
    >
      <div style="display:flex;gap:16px;flex-wrap:wrap">
        <Card style="width:220px">
          <template #header>
            <div style="background:linear-gradient(135deg,#6366f1,#818cf8);height:80px;border-radius:6px 6px 0 0;display:flex;align-items:center;justify-content:center">
              <i class="pi pi-star" style="color:#fff;font-size:2rem"></i>
            </div>
          </template>
          <template #title>Einfache Card</template>
          <template #subtitle>Untertitel</template>
          <template #content>
            <p style="font-size:0.85rem;color:var(--color-text-muted)">
              Cards können Header, Titel, Inhalt und Footer enthalten.
            </p>
          </template>
          <template #footer>
            <Button label="Mehr" size="small" text />
            <Button label="Aktion" size="small" style="margin-left:8px" />
          </template>
        </Card>

        <Card style="width:220px">
          <template #title>Ohne Header</template>
          <template #content>
            <p style="font-size:0.85rem;color:var(--color-text-muted)">
              Alle Slots sind optional – nur der Content-Slot ist Pflicht.
            </p>
          </template>
        </Card>
      </div>
    </DemoCard>

    <!-- Panel -->
    <DemoCard
      title="Panel – Kollabierbar"
      badge="Panel"
      :code="panelCode"
    >
      <div style="width:100%">
        <Panel header="Standard Panel" style="margin-bottom:12px">
          <p style="font-size:0.875rem;color:var(--color-text-muted)">
            Ein einfaches Panel mit Header und Inhalt.
          </p>
        </Panel>
        <Panel header="Kollabierbares Panel" toggleable>
          <p style="font-size:0.875rem;color:var(--color-text-muted)">
            Dieser Inhalt kann ein- und ausgeklappt werden.
            Das <code>toggleable</code>-Prop aktiviert den Pfeil-Button.
          </p>
        </Panel>
      </div>
    </DemoCard>

    <!-- Accordion -->
    <DemoCard
      title="Accordion – FAQ / Akkordeon"
      badge="Accordion"
      :code="accordionCode"
    >
      <div style="width:100%">
        <Accordion>
          <AccordionPanel value="0">
            <AccordionHeader>Was ist PrimeVue?</AccordionHeader>
            <AccordionContent>
              <p style="font-size:0.875rem;color:var(--color-text-muted)">
                PrimeVue ist eine UI-Komponentenbibliothek für Vue 3 von PrimeTek mit über 90 Komponenten,
                mehreren Themes und vollständiger Accessibility-Unterstützung.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel value="1">
            <AccordionHeader>Welche Themes gibt es?</AccordionHeader>
            <AccordionContent>
              <p style="font-size:0.875rem;color:var(--color-text-muted)">
                PrimeVue bietet die Presets <strong>Aura</strong>, <strong>Lara</strong> und <strong>Nora</strong>.
                Jedes Preset kann über Design-Tokens vollständig angepasst werden.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel value="2">
            <AccordionHeader>Wie wird PrimeVue installiert?</AccordionHeader>
            <AccordionContent>
              <code style="font-family:monospace;font-size:0.85rem;background:#f1f5f9;padding:6px 10px;border-radius:4px;display:block">
                npm install primevue @primevue/themes primeicons
              </code>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </DemoCard>

    <!-- Tabs -->
    <DemoCard
      title="Tabs – Tab-Navigation"
      badge="Tabs"
      :code="tabsCode"
    >
      <div style="width:100%">
        <Tabs value="0">
          <TabList>
            <Tab value="0"><i class="pi pi-home" style="margin-right:6px"></i>Übersicht</Tab>
            <Tab value="1"><i class="pi pi-cog" style="margin-right:6px"></i>Einstellungen</Tab>
            <Tab value="2"><i class="pi pi-chart-bar" style="margin-right:6px"></i>Statistiken</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <p style="font-size:0.875rem;color:var(--color-text-muted);padding:8px 0">
                Tabs ermöglichen die Aufteilung von Inhalten in separate Bereiche.
                Der aktive Tab wird durch <code>value</code> gesteuert.
              </p>
            </TabPanel>
            <TabPanel value="1">
              <p style="font-size:0.875rem;color:var(--color-text-muted);padding:8px 0">
                Einstellungen-Inhalt hier. Jeder TabPanel kann beliebigen Inhalt enthalten.
              </p>
            </TabPanel>
            <TabPanel value="2">
              <p style="font-size:0.875rem;color:var(--color-text-muted);padding:8px 0">
                Statistiken-Inhalt. Tabs können auch programmatisch gesteuert werden.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </DemoCard>
  </div>
</template>

<script setup>
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button'
import DemoCard from '../components/DemoCard.vue'

const cardCode = `<Card style="width:220px">
  <template #header>
    <!-- Beliebiger Header-Inhalt -->
  </template>
  <template #title>Titel</template>
  <template #subtitle>Untertitel</template>
  <template #content>
    <p>Inhalt der Card.</p>
  </template>
  <template #footer>
    <Button label="Aktion" />
  </template>
</Card>`

const panelCode = `<Panel header="Standard Panel">
  <p>Inhalt hier.</p>
</Panel>

<!-- Kollabierbares Panel -->
<Panel header="Kollabierbares Panel" toggleable>
  <p>Kann ein- und ausgeklappt werden.</p>
</Panel>`

const accordionCode = `<Accordion>
  <AccordionPanel value="0">
    <AccordionHeader>Frage 1</AccordionHeader>
    <AccordionContent>
      <p>Antwort auf Frage 1.</p>
    </AccordionContent>
  </AccordionPanel>
  <AccordionPanel value="1">
    <AccordionHeader>Frage 2</AccordionHeader>
    <AccordionContent>
      <p>Antwort auf Frage 2.</p>
    </AccordionContent>
  </AccordionPanel>
</Accordion>`

const tabsCode = `<Tabs value="0">
  <TabList>
    <Tab value="0">Tab 1</Tab>
    <Tab value="1">Tab 2</Tab>
    <Tab value="2">Tab 3</Tab>
  </TabList>
  <TabPanels>
    <TabPanel value="0">Inhalt Tab 1</TabPanel>
    <TabPanel value="1">Inhalt Tab 2</TabPanel>
    <TabPanel value="2">Inhalt Tab 3</TabPanel>
  </TabPanels>
</Tabs>`
</script>
