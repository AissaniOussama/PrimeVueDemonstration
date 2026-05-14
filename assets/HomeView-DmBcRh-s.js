import{_ as l}from"./CodeBlock-ubzJKzSU.js";import{o,c as s,a as e,b as p,F as d,r as c,n as m,t as a,d as u}from"./index-B3-OR7Ty.js";const g={class:"overview-grid"},v=["onClick"],b={class:"overview-card-icon"},f={style:{"margin-top":"40px"}},h={class:"demo-card"},k=`import { createApp } from 'vue'
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
app.mount('#app')`,D={__name:"HomeView",emits:["navigate"],setup(S){const n=[{id:"buttons",icon:"pi pi-stop",label:"Button",desc:"Button, SplitButton, SpeedDial"},{id:"forms",icon:"pi pi-pencil",label:"Formulare",desc:"InputText, Dropdown, Calendar, Checkbox, RadioButton"},{id:"data",icon:"pi pi-table",label:"Datentabelle",desc:"DataTable mit Sortierung, Filter, Pagination"},{id:"overlay",icon:"pi pi-window-maximize",label:"Overlays",desc:"Dialog, Toast, ConfirmDialog, Tooltip"},{id:"messages",icon:"pi pi-info-circle",label:"Nachrichten",desc:"Message, InlineMessage, Tag, Badge"},{id:"panels",icon:"pi pi-th-large",label:"Panels",desc:"Card, Panel, Accordion, TabView"},{id:"theming",icon:"pi pi-palette",label:"Theming",desc:"Design-Tokens, Preset-System, Dark Mode"}];return(r,i)=>(o(),s("div",null,[i[2]||(i[2]=e("div",{class:"section-header"},[e("h2",{class:"section-title"},"PrimeVue – Komponentenbibliothek"),e("p",{class:"section-subtitle"}," Interaktive Demos der wichtigsten PrimeVue-Komponenten mit Code-Snippets. Klicke auf eine Kategorie oder nutze die Sidebar. ")],-1)),i[3]||(i[3]=e("div",{class:"info-box"},[e("strong",null,"Was ist PrimeVue?"),p(" PrimeVue ist eine umfangreiche UI-Komponentenbibliothek für Vue 3 von PrimeTek. Sie bietet über 90 Komponenten, mehrere Design-Themes (Aura, Lara, Nora) und vollständige Accessibility-Unterstützung (ARIA). Die Komponenten sind tree-shakeable und unterstützen TypeScript nativ. ")],-1)),e("div",g,[(o(),s(d,null,c(n,t=>e("div",{key:t.id,class:"overview-card",onClick:T=>r.$emit("navigate",t.id)},[e("div",b,[e("i",{class:m(t.icon)},null,2)]),e("h3",null,a(t.label),1),e("p",null,a(t.desc),1)],8,v)),64))]),e("div",f,[i[1]||(i[1]=e("h3",{style:{"font-size":"1.1rem","font-weight":"700","margin-bottom":"16px",color:"var(--color-text)"}}," Installation & Setup ",-1)),e("div",h,[i[0]||(i[0]=e("div",{class:"demo-card-header"},[e("span",{class:"demo-card-title"},"main.js – PrimeVue registrieren"),e("span",{class:"demo-card-badge"},"Setup")],-1)),u(l,{code:k,language:"javascript"})])])]))}};export{D as default};
