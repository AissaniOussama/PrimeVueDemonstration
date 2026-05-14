import{B as K,s as A,R as I,a8 as P,e as H,_ as j,Y as F,C as U,aG as N,g as V,D as Z,ad as O,aH as q,af as W,x as L,S as J,j as z,k as S,o as g,p as M,w as d,d as i,T as G,h as w,q as h,c as k,A as x,y as Y,aI as Q,aJ as X,a as u,I as s,E as a,aK as T,F as _,r as $,t as ee,K as E}from"./index-B3-OR7Ty.js";import{O as y}from"./index-7E4XSKm4.js";import{_ as m}from"./DemoCard-BrqqJEcJ.js";import"./CodeBlock-ubzJKzSU.js";var te=`
    .p-popover {
        margin-block-start: dt('popover.gutter');
        background: dt('popover.background');
        color: dt('popover.color');
        border: 1px solid dt('popover.border.color');
        border-radius: dt('popover.border.radius');
        box-shadow: dt('popover.shadow');
        will-change: transform;
    }

    .p-popover-content {
        padding: dt('popover.content.padding');
    }

    .p-popover-flipped {
        margin-block-start: calc(dt('popover.gutter') * -1);
        margin-block-end: dt('popover.gutter');
    }

    .p-popover:after,
    .p-popover:before {
        bottom: 100%;
        left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-popover:after {
        border-width: calc(dt('popover.gutter') - 2px);
        margin-left: calc(-1 * (dt('popover.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.background');
    }

    .p-popover:before {
        border-width: dt('popover.gutter');
        margin-left: calc(-1 * dt('popover.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.border.color');
    }

    .p-popover-flipped:after,
    .p-popover-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-popover.p-popover-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('popover.background');
    }

    .p-popover.p-popover-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('popover.border.color');
    }
`,ne={root:"p-popover p-component",content:"p-popover-content"},ie=K.extend({name:"popover",style:te,classes:ne}),oe={name:"BasePopover",extends:H,props:{dismissable:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeOnEscape:{type:Boolean,default:!0}},style:ie,provide:function(){return{$pcPopover:this,$parentInstance:this}}},R={name:"Popover",extends:oe,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,contentResizeObserver:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.unbindContentResizeListener(),this.target=null,this.container&&this.autoZIndex&&L.clear(this.container),this.overlayEventListener&&(y.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,r){this.visible?this.hide():this.show(e,r)},show:function(e,r){this.visible=!0,this.eventTarget=e.currentTarget,this.target=r||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var r=this;J(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&L.set("overlay",e,this.baseZIndex||this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(c){r.container.contains(c.target)&&(r.selfClick=!0)},this.bindContentResizeListener(),this.focus(),y.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),this.unbindContentResizeListener(),y.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&L.clear(e)},alignOverlay:function(){Z(this.container,this.target,!1);var e=O(this.container),r=O(this.target),c=0;e.left<r.left&&(c=r.left-e.left),this.container.style.setProperty(q("popover.arrow.left").name,"".concat(c,"px")),e.top<r.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.isUnstyled&&W(this.container,"p-popover-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.hide(),V(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&N()&&(this.outsideClickListener=function(r){e.visible&&!e.selfClick&&!e.isTargetClicked(r)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new U(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!F()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindContentResizeListener:function(){var e=this;this.contentResizeObserver||(this.contentResizeObserver=new ResizeObserver(function(){e.visible&&e.alignOverlay()}),this.contentResizeObserver.observe(this.container))},unbindContentResizeListener:function(){this.contentResizeObserver&&(this.contentResizeObserver.disconnect(),this.contentResizeObserver=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",j(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var r="";for(var c in this.breakpoints)r+=`
                        @media screen and (max-width: `.concat(c,`) {
                            .p-popover[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[c],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=r}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){y.emit("overlay-click",{originalEvent:e,target:this.target})}},directives:{focustrap:P,ripple:I},components:{Portal:A}},re=["aria-modal"];function se(t,e,r,c,p,o){var v=z("Portal"),C=S("focustrap");return g(),M(v,{appendTo:t.appendTo},{default:d(function(){return[i(G,w({name:"p-anchored-overlay",onEnter:o.onEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},t.ptm("transition")),{default:d(function(){return[p.visible?h((g(),k("div",w({key:0,ref:o.containerRef,role:"dialog","aria-modal":p.visible,onClick:e[3]||(e[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),class:t.cx("root")},t.ptmi("root")),[t.$slots.container?x(t.$slots,"container",{key:0,closeCallback:o.hide,keydownCallback:function(f){return o.onButtonKeydown(f)}}):(g(),k("div",w({key:1,class:t.cx("content"),onClick:e[0]||(e[0]=function(){return o.onContentClick&&o.onContentClick.apply(o,arguments)}),onMousedown:e[1]||(e[1]=function(){return o.onContentClick&&o.onContentClick.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onContentKeydown&&o.onContentKeydown.apply(o,arguments)})},t.ptm("content")),[x(t.$slots,"default")],16))],16,re)),[[C]]):Y("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}R.render=se;const le={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},ae={style:{display:"flex",gap:"12px","flex-wrap":"wrap","align-items":"center"}},ce={class:"pi pi-info-circle",style:{"font-size":"1.5rem",color:"var(--color-primary)",cursor:"pointer"}},de=`<Toast />
<Button label="Success" severity="success" @click="showSuccess" />
<Button label="Error"   severity="danger"  @click="showError" />`,ue=`import { useToast } from 'primevue/usetoast'
const toast = useToast()

// app.use(ToastService) in main.js erforderlich!

function showSuccess() {
  toast.add({
    severity: 'success',
    summary: 'Erfolgreich',
    detail: 'Aktion ausgeführt.',
    life: 3000
  })
}`,pe=`<Dialog
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

<Button label="Öffnen" @click="visible = true" />`,fe="const visible = ref(false)",ve=`<ConfirmDialog />
<Button
  label="Löschen"
  severity="danger"
  @click="confirmDelete"
/>`,he=`import { useConfirm } from 'primevue/useconfirm'
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
}`,be=`<!-- Als Direktive verwenden -->
<Button v-tooltip.top="'Tooltip oben'" label="Oben" />
<Button v-tooltip.right="'Tooltip rechts'" label="Rechts" />
<i class="pi pi-info-circle" v-tooltip="'Info'" />`,me=`// In main.js registrieren:
import Tooltip from 'primevue/tooltip'
app.directive('tooltip', Tooltip)`,ge=`<Button label="Öffnen" @click="toggle" />
<Popover ref="popRef">
  <div>Beliebiger Inhalt</div>
</Popover>`,ye=`const popRef = ref(null)
function toggle(event) {
  popRef.value.toggle(event)
}`,Ee={__name:"OverlayView",setup(t){const e=Q(),r=X(),c=E(!1),p=E(!1),o=E(null);function v(f){const n={success:{summary:"Erfolgreich",detail:"Aktion wurde erfolgreich ausgeführt."},info:{summary:"Information",detail:"Hier ist eine hilfreiche Information."},warn:{summary:"Warnung",detail:"Bitte prüfe deine Eingaben."},error:{summary:"Fehler",detail:"Ein Fehler ist aufgetreten."}};e.add({severity:f,...n[f],life:3e3})}function C(){r.require({message:"Möchtest du diesen Eintrag wirklich löschen?",header:"Löschen bestätigen",icon:"pi pi-exclamation-triangle",acceptLabel:"Ja, löschen",rejectLabel:"Abbrechen",acceptClass:"p-button-danger",accept:()=>e.add({severity:"success",summary:"Gelöscht",detail:"Eintrag wurde gelöscht.",life:2e3}),reject:()=>e.add({severity:"info",summary:"Abgebrochen",life:1500})})}function D(f){o.value.toggle(f)}return(f,n)=>{const B=z("ConfirmDialog"),b=S("tooltip");return g(),k("div",null,[n[13]||(n[13]=u("div",{class:"section-header"},[u("h2",{class:"section-title"},"Overlay-Komponenten"),u("p",{class:"section-subtitle"}," Dialog, Toast, ConfirmDialog und Tooltip – die wichtigsten Overlay-Komponenten von PrimeVue für Nutzerinteraktionen und Feedback. ")],-1)),i(m,{title:"Toast – Benachrichtigungen",badge:"Toast",code:de,setupCode:ue},{default:d(()=>[u("div",le,[i(s(a),{label:"Success",severity:"success",icon:"pi pi-check",onClick:n[0]||(n[0]=l=>v("success"))}),i(s(a),{label:"Info",severity:"info",icon:"pi pi-info-circle",onClick:n[1]||(n[1]=l=>v("info"))}),i(s(a),{label:"Warning",severity:"warn",icon:"pi pi-exclamation-triangle",onClick:n[2]||(n[2]=l=>v("warn"))}),i(s(a),{label:"Error",severity:"danger",icon:"pi pi-times",onClick:n[3]||(n[3]=l=>v("error"))})])]),_:1}),i(m,{title:"Dialog – Modal-Fenster",badge:"Dialog",code:pe,setupCode:fe},{default:d(()=>[i(s(a),{label:"Dialog öffnen",icon:"pi pi-external-link",onClick:n[4]||(n[4]=l=>c.value=!0)}),i(s(a),{label:"Scrollbarer Dialog",severity:"secondary",onClick:n[5]||(n[5]=l=>p.value=!0),style:{"margin-left":"8px"}}),i(s(T),{visible:c.value,"onUpdate:visible":n[8]||(n[8]=l=>c.value=l),header:"Beispiel-Dialog",style:{width:"450px"},modal:""},{footer:d(()=>[i(s(a),{label:"Abbrechen",text:"",onClick:n[6]||(n[6]=l=>c.value=!1)}),i(s(a),{label:"Bestätigen",icon:"pi pi-check",onClick:n[7]||(n[7]=l=>c.value=!1)})]),default:d(()=>[n[11]||(n[11]=u("p",{style:{"line-height":"1.6",color:"var(--color-text-muted)"}}," Dies ist ein modaler Dialog. Er kann beliebigen Inhalt enthalten – Formulare, Bestätigungen oder Detailansichten. ",-1))]),_:1},8,["visible"]),i(s(T),{visible:p.value,"onUpdate:visible":n[10]||(n[10]=l=>p.value=l),header:"Scrollbarer Dialog",style:{width:"450px"},modal:"",maximizable:!0},{footer:d(()=>[i(s(a),{label:"Schließen",onClick:n[9]||(n[9]=l=>p.value=!1)})]),default:d(()=>[(g(),k(_,null,$(10,l=>u("p",{key:l,style:{"margin-bottom":"12px",color:"var(--color-text-muted)"}}," Absatz "+ee(l)+": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",1)),64))]),_:1},8,["visible"])]),_:1}),i(m,{title:"ConfirmDialog – Bestätigungsdialog",badge:"ConfirmDialog",code:ve,setupCode:he},{default:d(()=>[i(B),i(s(a),{label:"Löschen bestätigen",severity:"danger",icon:"pi pi-trash",onClick:C})]),_:1}),i(m,{title:"Tooltip – Direktive",badge:"Tooltip",code:be,setupCode:me},{default:d(()=>[u("div",ae,[h(i(s(a),{label:"Oben",outlined:""},null,512),[[b,"Tooltip oben",void 0,{top:!0}]]),h(i(s(a),{label:"Rechts",outlined:""},null,512),[[b,"Tooltip rechts",void 0,{right:!0}]]),h(i(s(a),{label:"Unten",outlined:""},null,512),[[b,"Tooltip unten",void 0,{bottom:!0}]]),h(i(s(a),{label:"Links",outlined:""},null,512),[[b,"Tooltip links",void 0,{left:!0}]]),h(u("i",ce,null,512),[[b,"Tooltip auf Icon"]])])]),_:1}),i(m,{title:"Popover (OverlayPanel)",badge:"Popover",code:ge,setupCode:ye},{default:d(()=>[i(s(a),{label:"Popover öffnen",icon:"pi pi-info-circle",onClick:D,ref:"popoverBtn"},null,512),i(s(R),{ref_key:"popoverRef",ref:o},{default:d(()=>[...n[12]||(n[12]=[u("div",{style:{padding:"8px","max-width":"220px"}},[u("h4",{style:{"font-size":"0.875rem","font-weight":"600","margin-bottom":"8px"}},"Popover-Inhalt"),u("p",{style:{"font-size":"0.8rem",color:"var(--color-text-muted)","line-height":"1.5"}}," Popovers können beliebigen Inhalt enthalten und werden relativ zum Trigger-Element positioniert. ")],-1)])]),_:1},512)]),_:1})])}}};export{Ee as default};
