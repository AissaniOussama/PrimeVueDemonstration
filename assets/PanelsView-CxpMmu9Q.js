import{B as A,e as T,o as l,c as v,h as o,A as u,y,a as d,R as F,E as W,L as H,j as O,t as q,n as w,d as c,w as i,p as m,u as $,q as B,a0 as M,T as G,g as X,V as C,z as L,k as J,F as U,r as oe,az as V,aA as ie,ae as se,ad as N,v as de,a2 as Q,aj as Y,I as p,b as g}from"./index-B3-OR7Ty.js";import{a as le,s as Z}from"./index-YGzTA3cw.js";import{s as ce}from"./index-B15oGeJW.js";import{s as _,a as ue}from"./index-DzHJHZ6F.js";import{s as pe}from"./index-9Sz_5TKx.js";import{_ as z}from"./DemoCard-BrqqJEcJ.js";import"./CodeBlock-ubzJKzSU.js";var be=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,he={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},fe=A.extend({name:"card",style:be,classes:he}),ve={name:"BaseCard",extends:T,style:fe,provide:function(){return{$pcCard:this,$parentInstance:this}}},R={name:"Card",extends:ve,inheritAttrs:!1};function ge(e,t,n,r,s,a){return l(),v("div",o({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(l(),v("div",o({key:0,class:e.cx("header")},e.ptm("header")),[u(e.$slots,"header")],16)):y("",!0),d("div",o({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(l(),v("div",o({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(l(),v("div",o({key:0,class:e.cx("title")},e.ptm("title")),[u(e.$slots,"title")],16)):y("",!0),e.$slots.subtitle?(l(),v("div",o({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[u(e.$slots,"subtitle")],16)):y("",!0)],16)):y("",!0),d("div",o({class:e.cx("content")},e.ptm("content")),[u(e.$slots,"content")],16),e.$slots.footer?(l(),v("div",o({key:1,class:e.cx("footer")},e.ptm("footer")),[u(e.$slots,"footer")],16)):y("",!0)],16)],16)}R.render=ge;var me=`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,ye={root:function(t){var n=t.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",contentWrapper:"p-panel-content-wrapper",content:"p-panel-content",footer:"p-panel-footer"},$e=A.extend({name:"panel",style:me,classes:ye}),Pe={name:"BasePanel",extends:T,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:$e,provide:function(){return{$pcPanel:this,$parentInstance:this}}},j={name:"Panel",extends:Pe,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return H({toggleable:this.toggleable})}},components:{PlusIcon:ce,MinusIcon:le,Button:W},directives:{ripple:F}},Ae=["data-p"],Te=["data-p"],ke=["id"],we=["id","aria-labelledby"];function Be(e,t,n,r,s,a){var h=O("Button");return l(),v("div",o({class:e.cx("root"),"data-p":a.dataP},e.ptmi("root")),[d("div",o({class:e.cx("header"),"data-p":a.dataP},e.ptm("header")),[u(e.$slots,"header",{id:e.$id+"_header",class:w(e.cx("title")),collapsed:s.d_collapsed},function(){return[e.header?(l(),v("span",o({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),q(e.header),17,ke)):y("",!0)]}),d("div",o({class:e.cx("headerActions")},e.ptm("headerActions")),[u(e.$slots,"icons"),e.toggleable?u(e.$slots,"togglebutton",{key:0,collapsed:s.d_collapsed,toggleCallback:function(k){return a.toggle(k)},keydownCallback:function(k){return a.onKeyDown(k)}},function(){return[c(h,o({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":a.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!s.d_collapsed,unstyled:e.unstyled,onClick:t[0]||(t[0]=function(f){return a.toggle(f)}),onKeydown:t[1]||(t[1]=function(f){return a.onKeyDown(f)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:i(function(f){return[u(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:s.d_collapsed},function(){return[(l(),m($(s.d_collapsed?"PlusIcon":"MinusIcon"),o({class:f.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):y("",!0)],16)],16,Te),c(G,o({name:"p-collapsible"},e.ptm("transition")),{default:i(function(){return[B(d("div",o({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[d("div",o({class:e.cx("contentWrapper")},e.ptm("contentWrapper")),[d("div",o({class:e.cx("content")},e.ptm("content")),[u(e.$slots,"default")],16),e.$slots.footer?(l(),v("div",o({key:0,class:e.cx("footer")},e.ptm("footer")),[u(e.$slots,"footer")],16)):y("",!0)],16)],16,we),[[M,!s.d_collapsed]])]}),_:3},16)],16,Ae)}j.render=Be;var Ce={root:"p-accordioncontent",contentWrapper:"p-accordioncontent-wrapper",content:"p-accordioncontent-content"},Ie=A.extend({name:"accordioncontent",classes:Ce}),xe={name:"BaseAccordionContent",extends:T,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Ie,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},x={name:"AccordionContent",extends:xe,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return o(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function Ke(e,t,n,r,s,a){return e.asChild?u(e.$slots,"default",{key:1,class:w(e.cx("root")),active:a.$pcAccordionPanel.active,a11yAttrs:a.a11yAttrs}):(l(),m(G,o({key:0,name:"p-collapsible"},e.ptm("transition",a.ptParams)),{default:i(function(){return[!a.$pcAccordion.lazy||a.$pcAccordionPanel.active?B((l(),m($(e.as),o({key:0,class:e.cx("root")},a.attrs),{default:i(function(){return[d("div",o({class:e.cx("contentWrapper")},e.ptm("contentWrapper",a.ptParams)),[d("div",o({class:e.cx("content")},e.ptm("content",a.ptParams)),[u(e.$slots,"default")],16)],16)]}),_:3},16,["class"])),[[M,a.$pcAccordion.lazy?!0:a.$pcAccordionPanel.active]]):y("",!0)]}),_:3},16))}x.render=Ke;var Se={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},Le=A.extend({name:"accordionheader",classes:Se}),Ne={name:"BaseAccordionHeader",extends:T,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Le,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},K={name:"AccordionHeader",extends:Ne,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowDownKey:function(t){var n=this.findNextPanel(this.findPanel(t.currentTarget));n?this.changeFocusedPanel(t,n):this.onHomeKey(t),t.preventDefault()},onArrowUpKey:function(t){var n=this.findPrevPanel(this.findPanel(t.currentTarget));n?this.changeFocusedPanel(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstPanel();this.changeFocusedPanel(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastPanel();this.changeFocusedPanel(t,n),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findPanel:function(t){return t==null?void 0:t.closest('[data-pc-name="accordionpanel"]')},findHeader:function(t){return L(t,'[data-pc-name="accordionheader"]')},findNextPanel:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=n?t:t.nextElementSibling;return r?C(r,"data-p-disabled")?this.findNextPanel(r):this.findHeader(r):null},findPrevPanel:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=n?t:t.previousElementSibling;return r?C(r,"data-p-disabled")?this.findPrevPanel(r):this.findHeader(r):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(t,n){X(this.findHeader(n))}},computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return o(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return H({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:_,ChevronDownIcon:pe},directives:{ripple:F}};function ze(e,t,n,r,s,a){var h=J("ripple");return e.asChild?u(e.$slots,"default",{key:1,class:w(e.cx("root")),active:a.$pcAccordionPanel.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):B((l(),m($(e.as),o({key:0,"data-p":a.dataP,class:e.cx("root"),onClick:a.onClick},a.attrs),{default:i(function(){return[u(e.$slots,"default",{active:a.$pcAccordionPanel.active}),u(e.$slots,"toggleicon",{active:a.$pcAccordionPanel.active,class:w(e.cx("toggleicon"))},function(){return[a.$pcAccordionPanel.active?(l(),m($(a.$pcAccordion.$slots.collapseicon?a.$pcAccordion.$slots.collapseicon:a.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),o({key:0,class:[a.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",a.ptParams)),null,16,["class"])):(l(),m($(a.$pcAccordion.$slots.expandicon?a.$pcAccordion.$slots.expandicon:a.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),o({key:1,class:[a.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",a.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[h]])}K.render=ze;var Oe={root:function(t){var n=t.instance,r=t.props;return["p-accordionpanel",{"p-accordionpanel-active":n.active,"p-disabled":r.disabled}]}},Ee=A.extend({name:"accordionpanel",classes:Oe}),De={name:"BaseAccordionPanel",extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Ee,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},S={name:"AccordionPanel",extends:De,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return o(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Fe(e,t,n,r,s,a){return e.asChild?u(e.$slots,"default",{key:1,class:w(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs}):(l(),m($(e.as),o({key:0,class:e.cx("root")},a.attrs),{default:i(function(){return[u(e.$slots,"default")]}),_:3},16,["class"]))}S.render=Fe;var He=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,Ve={root:"p-accordion p-component"},We=A.extend({name:"accordion",style:He,classes:Ve}),Ue={name:"BaseAccordion",extends:T,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:We,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},ee={name:"Accordion",extends:Ue,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t},activeIndex:{immediate:!0,handler:function(t){this.hasAccordionTab&&(this.d_value=this.multiple?t==null?void 0:t.map(String):t==null?void 0:t.toString())}}},methods:{isItemActive:function(t){var n;return this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.includes(t):this.d_value===t},updateValue:function(t){var n,r=this.isItemActive(t);this.multiple?r?this.d_value=this.d_value.filter(function(s){return s!==t}):this.d_value?this.d_value.push(t):this.d_value=[t]:this.d_value=r?null:t,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.map(Number):Number(this.d_value)),this.$emit(r?"tab-close":"tab-open",{originalEvent:void 0,index:Number(t)})},isAccordionTab:function(t){return t.type.name==="AccordionTab"},getTabProp:function(t,n){return t.props?t.props[n]:void 0},getKey:function(t,n){return this.getTabProp(t,"header")||n},getHeaderPT:function(t,n){var r=this;return{root:o({onClick:function(a){return r.onTabClick(a,n)}},this.getTabProp(t,"headerProps"),this.getTabPT(t,"header",n)),toggleicon:o(this.getTabProp(t,"headeractionprops"),this.getTabPT(t,"headeraction",n))}},getContentPT:function(t,n){return{root:o(this.getTabProp(t,"contentProps"),this.getTabPT(t,"toggleablecontent",n)),transition:this.getTabPT(t,"transition",n),content:this.getTabPT(t,"content",n)}},getTabPT:function(t,n,r){var s=this.tabs.length,a={props:t.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:r,count:s,first:r===0,last:r===s-1,active:this.isItemActive("".concat(r))}};return o(this.ptm("accordiontab.".concat(n),a),this.ptmo(this.getTabProp(t,"pt"),n,a))},onTabClick:function(t,n){this.$emit("tab-click",{originalEvent:t,index:n})}},computed:{tabs:function(){var t=this;return this.$slots.default().reduce(function(n,r){return t.isAccordionTab(r)?n.push(r):r.children&&r.children instanceof Array&&r.children.forEach(function(s){t.isAccordionTab(s)&&n.push(s)}),n},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:S,AccordionHeader:K,AccordionContent:x,ChevronUpIcon:_,ChevronRightIcon:Z}};function Re(e,t,n,r,s,a){var h=O("AccordionHeader"),f=O("AccordionContent"),k=O("AccordionPanel");return l(),v("div",o({class:e.cx("root")},e.ptmi("root")),[a.hasAccordionTab?(l(!0),v(U,{key:0},oe(a.tabs,function(b,P){return l(),m(k,{key:a.getKey(b,P),value:"".concat(P),pt:{root:a.getTabPT(b,"root",P)},disabled:a.getTabProp(b,"disabled")},{default:i(function(){return[c(h,{class:w(a.getTabProp(b,"headerClass")),pt:a.getHeaderPT(b,P)},{toggleicon:i(function(I){return[I.active?(l(),m($(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),o({key:0,class:[e.collapseIcon,I.class],"aria-hidden":"true"},{ref_for:!0},a.getTabPT(b,"headericon",P)),null,16,["class"])):(l(),m($(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),o({key:1,class:[e.expandIcon,I.class],"aria-hidden":"true"},{ref_for:!0},a.getTabPT(b,"headericon",P)),null,16,["class"]))]}),default:i(function(){return[b.children&&b.children.headericon?(l(),m($(b.children.headericon),{key:0,isTabActive:a.isItemActive("".concat(P)),active:a.isItemActive("".concat(P)),index:P},null,8,["isTabActive","active","index"])):y("",!0),b.props&&b.props.header?(l(),v("span",o({key:1,ref_for:!0},a.getTabPT(b,"headertitle",P)),q(b.props.header),17)):y("",!0),b.children&&b.children.header?(l(),m($(b.children.header),{key:2})):y("",!0)]}),_:2},1032,["class","pt"]),c(f,{pt:a.getContentPT(b,P)},{default:i(function(){return[(l(),m($(b)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):u(e.$slots,"default",{key:1})],16)}ee.render=Re;var je=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,Me={root:function(t){var n=t.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},Je=A.extend({name:"tabs",style:je,classes:Me}),Qe={name:"BaseTabs",extends:T,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Je,provide:function(){return{$pcTabs:this,$parentInstance:this}}},te={name:"Tabs",extends:Qe,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function qe(e,t,n,r,s,a){return l(),v("div",o({class:e.cx("root")},e.ptmi("root")),[u(e.$slots,"default")],16)}te.render=qe;var Ge={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Xe=A.extend({name:"tablist",classes:Ge}),Ye={name:"BaseTabList",extends:T,props:{},style:Xe,provide:function(){return{$pcTabList:this,$parentInstance:this}}},ne={name:"TabList",extends:Ye,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,inkBarObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar(),this.bindInkBarObserver()}}},mounted:function(){var t=this;setTimeout(function(){t.updateInkBar(),t.bindInkBarObserver()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver(),this.unbindInkBarObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,n=this.getVisibleButtonWidths(),r=V(t)-n,s=Math.abs(t.scrollLeft),a=r*.8,h=s-a,f=Math.max(h,0);t.scrollLeft=Q(t)?-1*f:f},onNextButtonClick:function(){var t=this.$refs.content,n=this.getVisibleButtonWidths(),r=V(t)-n,s=Math.abs(t.scrollLeft),a=r*.8,h=s+a,f=t.scrollWidth-r,k=Math.min(h,f);t.scrollLeft=Q(t)?-1*k:k},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},bindInkBarObserver:function(){var t=this;this.unbindInkBarObserver();var n=this.$refs.content,r=L(n,'[data-pc-name="tab"][data-p-active="true"]');r&&(this.inkBarObserver=new ResizeObserver(function(){return t.updateInkBar()}),this.inkBarObserver.observe(r))},unbindInkBarObserver:function(){var t;(t=this.inkBarObserver)===null||t===void 0||t.disconnect(),this.inkBarObserver=void 0},updateInkBar:function(){var t=this.$refs,n=t.content,r=t.inkbar,s=t.tabs;if(r){var a=L(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(r.style.height=se(a)+"px",r.style.top=N(a).top-N(s).top+"px"):(r.style.width=de(a)+"px",r.style.left=N(a).left-N(s).left+"px")}},updateButtonState:function(){var t=this.$refs,n=t.list,r=t.content,s=r.scrollTop,a=r.scrollWidth,h=r.scrollHeight,f=r.offsetWidth,k=r.offsetHeight,b=Math.abs(r.scrollLeft),P=[V(r),ie(r)],I=P[0],re=P[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=s!==0,this.isNextButtonEnabled=n.offsetHeight>=k&&parseInt(s)!==h-re):(this.isPrevButtonEnabled=b!==0,this.isNextButtonEnabled=n.offsetWidth>=f&&parseInt(b)!==a-I)},getVisibleButtonWidths:function(){var t=this.$refs,n=t.prevButton,r=t.nextButton,s=0;return this.showNavigators&&(s=((n==null?void 0:n.offsetWidth)||0)+((r==null?void 0:r.offsetWidth)||0)),s}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return H({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:ue,ChevronRightIcon:Z},directives:{ripple:F}},Ze=["data-p"],_e=["aria-label","tabindex"],et=["data-p"],tt=["aria-orientation"],nt=["aria-label","tabindex"];function at(e,t,n,r,s,a){var h=J("ripple");return l(),v("div",o({ref:"list",class:e.cx("root"),"data-p":a.dataP},e.ptmi("root")),[a.showNavigators&&s.isPrevButtonEnabled?B((l(),v("button",o({key:0,ref:"prevButton",type:"button",class:e.cx("prevButton"),"aria-label":a.prevButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return a.onPrevButtonClick&&a.onPrevButtonClick.apply(a,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(l(),m($(a.templates.previcon||"ChevronLeftIcon"),o({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,_e)),[[h]]):y("",!0),d("div",o({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return a.onScroll&&a.onScroll.apply(a,arguments)}),"data-p":a.dataP},e.ptm("content")),[d("div",o({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":a.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[u(e.$slots,"default"),d("span",o({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,tt)],16,et),a.showNavigators&&s.isNextButtonEnabled?B((l(),v("button",o({key:1,ref:"nextButton",type:"button",class:e.cx("nextButton"),"aria-label":a.nextButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return a.onNextButtonClick&&a.onNextButtonClick.apply(a,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(l(),m($(a.templates.nexticon||"ChevronRightIcon"),o({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,nt)),[[h]]):y("",!0)],16,Ze)}ne.render=at;var rt={root:function(t){var n=t.instance,r=t.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":r.disabled}]}},ot=A.extend({name:"tab",classes:rt}),it={name:"BaseTab",extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:ot,provide:function(){return{$pcTab:this,$parentInstance:this}}},E={name:"Tab",extends:it,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var n=this.findNextTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var n=this.findPrevTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstTab();this.changeFocusedTab(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastTab();this.changeFocusedTab(t,n),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue()},findNextTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=n?t:t.nextElementSibling;return r?C(r,"data-p-disabled")||C(r,"data-pc-section")==="activebar"?this.findNextTab(r):L(r,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=n?t:t.previousElementSibling;return r?C(r,"data-p-disabled")||C(r,"data-pc-section")==="activebar"?this.findPrevTab(r):L(r,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,n){X(n),this.scrollInView(n)},scrollInView:function(t){var n;t==null||(n=t.scrollIntoView)===null||n===void 0||n.call(t,{block:"nearest"})}},computed:{active:function(){var t;return Y((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},attrs:function(){return o(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return H({active:this.active})}},directives:{ripple:F}};function st(e,t,n,r,s,a){var h=J("ripple");return e.asChild?u(e.$slots,"default",{key:1,dataP:a.dataP,class:w(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):B((l(),m($(e.as),o({key:0,class:e.cx("root"),"data-p":a.dataP,onClick:a.onClick},a.attrs),{default:i(function(){return[u(e.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[h]])}E.render=st;var dt={root:"p-tabpanels"},lt=A.extend({name:"tabpanels",classes:dt}),ct={name:"BaseTabPanels",extends:T,props:{},style:lt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},ae={name:"TabPanels",extends:ct,inheritAttrs:!1};function ut(e,t,n,r,s,a){return l(),v("div",o({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[u(e.$slots,"default")],16)}ae.render=ut;var pt={root:function(t){var n=t.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},bt=A.extend({name:"tabpanel",classes:pt}),ht={name:"BaseTabPanel",extends:T,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:bt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},D={name:"TabPanel",extends:ht,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return Y((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},attrs:function(){return o(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function ft(e,t,n,r,s,a){var h,f;return a.$pcTabs?(l(),v(U,{key:1},[e.asChild?u(e.$slots,"default",{key:1,class:w(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs}):(l(),v(U,{key:0},[!((h=a.$pcTabs)!==null&&h!==void 0&&h.lazy)||a.active?B((l(),m($(e.as),o({key:0,class:e.cx("root")},a.attrs),{default:i(function(){return[u(e.$slots,"default")]}),_:3},16,["class"])),[[M,(f=a.$pcTabs)!==null&&f!==void 0&&f.lazy?!0:a.active]]):y("",!0)],64))],64)):u(e.$slots,"default",{key:0})}D.render=ft;const vt={style:{display:"flex",gap:"16px","flex-wrap":"wrap"}},gt={style:{width:"100%"}},mt={style:{width:"100%"}},yt={style:{width:"100%"}},$t=`<Card style="width:220px">
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
</Card>`,Pt=`<Panel header="Standard Panel">
  <p>Inhalt hier.</p>
</Panel>

<!-- Kollabierbares Panel -->
<Panel header="Kollabierbares Panel" toggleable>
  <p>Kann ein- und ausgeklappt werden.</p>
</Panel>`,At=`<Accordion>
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
</Accordion>`,Tt=`<Tabs value="0">
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
</Tabs>`,St={__name:"PanelsView",setup(e){return(t,n)=>(l(),v("div",null,[n[20]||(n[20]=d("div",{class:"section-header"},[d("h2",{class:"section-title"},"Panel-Komponenten"),d("p",{class:"section-subtitle"}," Card, Panel, Accordion und Tabs für strukturierte Inhaltsdarstellung und Navigation. ")],-1)),c(z,{title:"Card – Inhalts-Container",badge:"Card",code:$t},{default:i(()=>[d("div",vt,[c(p(R),{style:{width:"220px"}},{header:i(()=>[...n[0]||(n[0]=[d("div",{style:{background:"linear-gradient(135deg,#6366f1,#818cf8)",height:"80px","border-radius":"6px 6px 0 0",display:"flex","align-items":"center","justify-content":"center"}},[d("i",{class:"pi pi-star",style:{color:"#fff","font-size":"2rem"}})],-1)])]),title:i(()=>[...n[1]||(n[1]=[g("Einfache Card",-1)])]),subtitle:i(()=>[...n[2]||(n[2]=[g("Untertitel",-1)])]),content:i(()=>[...n[3]||(n[3]=[d("p",{style:{"font-size":"0.85rem",color:"var(--color-text-muted)"}}," Cards können Header, Titel, Inhalt und Footer enthalten. ",-1)])]),footer:i(()=>[c(p(W),{label:"Mehr",size:"small",text:""}),c(p(W),{label:"Aktion",size:"small",style:{"margin-left":"8px"}})]),_:1}),c(p(R),{style:{width:"220px"}},{title:i(()=>[...n[4]||(n[4]=[g("Ohne Header",-1)])]),content:i(()=>[...n[5]||(n[5]=[d("p",{style:{"font-size":"0.85rem",color:"var(--color-text-muted)"}}," Alle Slots sind optional – nur der Content-Slot ist Pflicht. ",-1)])]),_:1})])]),_:1}),c(z,{title:"Panel – Kollabierbar",badge:"Panel",code:Pt},{default:i(()=>[d("div",gt,[c(p(j),{header:"Standard Panel",style:{"margin-bottom":"12px"}},{default:i(()=>[...n[6]||(n[6]=[d("p",{style:{"font-size":"0.875rem",color:"var(--color-text-muted)"}}," Ein einfaches Panel mit Header und Inhalt. ",-1)])]),_:1}),c(p(j),{header:"Kollabierbares Panel",toggleable:""},{default:i(()=>[...n[7]||(n[7]=[d("p",{style:{"font-size":"0.875rem",color:"var(--color-text-muted)"}},[g(" Dieser Inhalt kann ein- und ausgeklappt werden. Das "),d("code",null,"toggleable"),g("-Prop aktiviert den Pfeil-Button. ")],-1)])]),_:1})])]),_:1}),c(z,{title:"Accordion – FAQ / Akkordeon",badge:"Accordion",code:At},{default:i(()=>[d("div",mt,[c(p(ee),null,{default:i(()=>[c(p(S),{value:"0"},{default:i(()=>[c(p(K),null,{default:i(()=>[...n[8]||(n[8]=[g("Was ist PrimeVue?",-1)])]),_:1}),c(p(x),null,{default:i(()=>[...n[9]||(n[9]=[d("p",{style:{"font-size":"0.875rem",color:"var(--color-text-muted)"}}," PrimeVue ist eine UI-Komponentenbibliothek für Vue 3 von PrimeTek mit über 90 Komponenten, mehreren Themes und vollständiger Accessibility-Unterstützung. ",-1)])]),_:1})]),_:1}),c(p(S),{value:"1"},{default:i(()=>[c(p(K),null,{default:i(()=>[...n[10]||(n[10]=[g("Welche Themes gibt es?",-1)])]),_:1}),c(p(x),null,{default:i(()=>[...n[11]||(n[11]=[d("p",{style:{"font-size":"0.875rem",color:"var(--color-text-muted)"}},[g(" PrimeVue bietet die Presets "),d("strong",null,"Aura"),g(", "),d("strong",null,"Lara"),g(" und "),d("strong",null,"Nora"),g(". Jedes Preset kann über Design-Tokens vollständig angepasst werden. ")],-1)])]),_:1})]),_:1}),c(p(S),{value:"2"},{default:i(()=>[c(p(K),null,{default:i(()=>[...n[12]||(n[12]=[g("Wie wird PrimeVue installiert?",-1)])]),_:1}),c(p(x),null,{default:i(()=>[...n[13]||(n[13]=[d("code",{style:{"font-family":"monospace","font-size":"0.85rem",background:"#f1f5f9",padding:"6px 10px","border-radius":"4px",display:"block"}}," npm install primevue @primevue/themes primeicons ",-1)])]),_:1})]),_:1})]),_:1})])]),_:1}),c(z,{title:"Tabs – Tab-Navigation",badge:"Tabs",code:Tt},{default:i(()=>[d("div",yt,[c(p(te),{value:"0"},{default:i(()=>[c(p(ne),null,{default:i(()=>[c(p(E),{value:"0"},{default:i(()=>[...n[14]||(n[14]=[d("i",{class:"pi pi-home",style:{"margin-right":"6px"}},null,-1),g("Übersicht",-1)])]),_:1}),c(p(E),{value:"1"},{default:i(()=>[...n[15]||(n[15]=[d("i",{class:"pi pi-cog",style:{"margin-right":"6px"}},null,-1),g("Einstellungen",-1)])]),_:1}),c(p(E),{value:"2"},{default:i(()=>[...n[16]||(n[16]=[d("i",{class:"pi pi-chart-bar",style:{"margin-right":"6px"}},null,-1),g("Statistiken",-1)])]),_:1})]),_:1}),c(p(ae),null,{default:i(()=>[c(p(D),{value:"0"},{default:i(()=>[...n[17]||(n[17]=[d("p",{style:{"font-size":"0.875rem",color:"var(--color-text-muted)",padding:"8px 0"}},[g(" Tabs ermöglichen die Aufteilung von Inhalten in separate Bereiche. Der aktive Tab wird durch "),d("code",null,"value"),g(" gesteuert. ")],-1)])]),_:1}),c(p(D),{value:"1"},{default:i(()=>[...n[18]||(n[18]=[d("p",{style:{"font-size":"0.875rem",color:"var(--color-text-muted)",padding:"8px 0"}}," Einstellungen-Inhalt hier. Jeder TabPanel kann beliebigen Inhalt enthalten. ",-1)])]),_:1}),c(p(D),{value:"2"},{default:i(()=>[...n[19]||(n[19]=[d("p",{style:{"font-size":"0.875rem",color:"var(--color-text-muted)",padding:"8px 0"}}," Statistiken-Inhalt. Tabs können auch programmatisch gesteuert werden. ",-1)])]),_:1})]),_:1})]),_:1})])]),_:1})]))}};export{St as default};
