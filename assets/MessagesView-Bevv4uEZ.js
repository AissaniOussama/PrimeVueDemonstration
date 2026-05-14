import{B as x,O as W,R as L,e as I,L as T,j as K,k as F,o as l,p as $,w as u,c,h as i,a as p,A as v,n as H,u as O,y as m,q as U,T as q,a9 as w,d as s,aM as J,t as A,b as h,I as o,E as S,F as Z,r as G,K as V}from"./index-B3-OR7Ty.js";import{s as f}from"./index-DYFUxTZI.js";import{_ as P}from"./DemoCard-BrqqJEcJ.js";import"./CodeBlock-ubzJKzSU.js";var Q=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`,X={root:function(n){var t=n.props;return["p-message p-component p-message-"+t.severity,{"p-message-outlined":t.variant==="outlined","p-message-simple":t.variant==="simple","p-message-sm":t.size==="small","p-message-lg":t.size==="large"}]},contentWrapper:"p-message-content-wrapper",content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Y=x.extend({name:"message",style:Q,classes:X}),_={name:"BaseMessage",extends:I,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:Y,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function z(e){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},z(e)}function D(e,n,t){return(n=ee(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ee(e){var n=ne(e,"string");return z(n)=="symbol"?n:n+""}function ne(e,n){if(z(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var d=t.call(e,n);if(z(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var y={name:"Message",extends:_,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var n=this;this.life&&setTimeout(function(){n.visible=!1,n.$emit("life-end")},this.life)},methods:{close:function(n){this.visible=!1,this.$emit("close",n)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return T(D(D({outlined:this.variant==="outlined",simple:this.variant==="simple"},this.severity,this.severity),this.size,this.size))}},directives:{ripple:L},components:{TimesIcon:W}};function B(e){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},B(e)}function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);n&&(d=d.filter(function(g){return Object.getOwnPropertyDescriptor(e,g).enumerable})),t.push.apply(t,d)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?N(Object(t),!0).forEach(function(d){se(e,d,t[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach(function(d){Object.defineProperty(e,d,Object.getOwnPropertyDescriptor(t,d))})}return e}function se(e,n,t){return(n=te(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function te(e){var n=oe(e,"string");return B(n)=="symbol"?n:n+""}function oe(e,n){if(B(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var d=t.call(e,n);if(B(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var re=["data-p"],ae=["data-p"],ie=["data-p"],le=["aria-label","data-p"],de=["data-p"];function ce(e,n,t,d,g,r){var a=K("TimesIcon"),b=F("ripple");return l(),$(q,i({name:"p-message",appear:""},e.ptmi("transition")),{default:u(function(){return[g.visible?(l(),c("div",i({key:0,class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true","data-p":r.dataP},e.ptm("root")),[p("div",i({class:e.cx("contentWrapper")},e.ptm("contentWrapper")),[e.$slots.container?v(e.$slots,"container",{key:0,closeCallback:r.close}):(l(),c("div",i({key:1,class:e.cx("content"),"data-p":r.dataP},e.ptm("content")),[v(e.$slots,"icon",{class:H(e.cx("icon"))},function(){return[(l(),$(O(e.icon?"span":null),i({class:[e.cx("icon"),e.icon],"data-p":r.dataP},e.ptm("icon")),null,16,["class","data-p"]))]}),e.$slots.default?(l(),c("div",i({key:0,class:e.cx("text"),"data-p":r.dataP},e.ptm("text")),[v(e.$slots,"default")],16,ie)):m("",!0),e.closable?U((l(),c("button",i({key:1,class:e.cx("closeButton"),"aria-label":r.closeAriaLabel,type:"button",onClick:n[0]||(n[0]=function(j){return r.close(j)}),"data-p":r.dataP},E(E({},e.closeButtonProps),e.ptm("closeButton"))),[v(e.$slots,"closeicon",{},function(){return[e.closeIcon?(l(),c("i",i({key:0,class:[e.cx("closeIcon"),e.closeIcon],"data-p":r.dataP},e.ptm("closeIcon")),null,16,de)):(l(),$(a,i({key:1,class:[e.cx("closeIcon"),e.closeIcon],"data-p":r.dataP},e.ptm("closeIcon")),null,16,["class","data-p"]))]})],16,le)),[[b]]):m("",!0)],16,ae))],16)],16,re)):m("",!0)]}),_:3},16)}y.render=ce;var pe=`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,ue={root:"p-overlaybadge"},ge=x.extend({name:"overlaybadge",style:pe,classes:ue}),me={name:"OverlayBadge",extends:w,style:ge,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},R={name:"OverlayBadge",extends:me,inheritAttrs:!1,components:{Badge:w}};function be(e,n,t,d,g,r){var a=K("Badge");return l(),c("div",i({class:e.cx("root")},e.ptmi("root")),[v(e.$slots,"default"),s(a,i(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}R.render=be;var fe=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,ve={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},he=x.extend({name:"chip",style:fe,classes:ve}),ye={name:"BaseChip",extends:I,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:he,provide:function(){return{$pcChip:this,$parentInstance:this}}},k={name:"Chip",extends:ye,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(n){(n.key==="Enter"||n.key==="Backspace")&&this.close(n)},close:function(n){this.visible=!1,this.$emit("remove",n)}},computed:{dataP:function(){return T({removable:this.removable})}},components:{TimesCircleIcon:J}},we=["aria-label","data-p"],ke=["src"];function $e(e,n,t,d,g,r){return g.visible?(l(),c("div",i({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":r.dataP}),[v(e.$slots,"default",{},function(){return[e.image?(l(),c("img",i({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,ke)):e.$slots.icon?(l(),$(O(e.$slots.icon),i({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(l(),c("span",i({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):m("",!0),e.label!==null?(l(),c("div",i({key:3,class:e.cx("label")},e.ptm("label")),A(e.label),17)):m("",!0)]}),e.removable?v(e.$slots,"removeicon",{key:0,removeCallback:r.close,keydownCallback:r.onKeydown},function(){return[(l(),$(O(e.removeIcon?"span":"TimesCircleIcon"),i({class:[e.cx("removeIcon"),e.removeIcon],onClick:r.close,onKeydown:r.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):m("",!0)],16,we)):m("",!0)}k.render=$e;var Se=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`,Pe={root:function(n){var t=n.instance;return["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},ze=x.extend({name:"progressbar",style:Se,classes:Pe}),Be={name:"BaseProgressBar",extends:I,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:ze,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},C={name:"ProgressBar",extends:Be,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return T({determinate:this.determinate,indeterminate:this.indeterminate})}}},xe=["aria-valuenow","data-p"],Ce=["data-p"],Ie=["data-p"],Oe=["data-p"];function Me(e,n,t,d,g,r){return l(),c("div",i({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100","data-p":r.dataP},e.ptmi("root")),[r.determinate?(l(),c("div",i({key:0,class:e.cx("value"),style:r.progressStyle,"data-p":r.dataP},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(l(),c("div",i({key:0,class:e.cx("label"),"data-p":r.dataP},e.ptm("label")),[v(e.$slots,"default",{},function(){return[h(A(e.value+"%"),1)]})],16,Ie)):m("",!0)],16,Ce)):r.indeterminate?(l(),c("div",i({key:1,class:e.cx("value"),"data-p":r.dataP},e.ptm("value")),null,16,Oe)):m("",!0)],16,xe)}C.render=Me;var Te=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,je={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Ve=x.extend({name:"progressspinner",style:Te,classes:je}),De={name:"BaseProgressSpinner",extends:I,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Ve,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},M={name:"ProgressSpinner",extends:De,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},Ne=["fill","stroke-width"];function Ee(e,n,t,d,g,r){return l(),c("div",i({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(l(),c("svg",i({class:e.cx("spin"),viewBox:"25 25 50 50",style:r.svgStyle},e.ptm("spin")),[p("circle",i({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,Ne)],16))],16)}M.render=Ee;const Ke={style:{display:"flex","flex-direction":"column",gap:"10px",width:"100%"}},Ae={style:{display:"flex",gap:"10px","flex-wrap":"wrap","align-items":"center"}},Re={style:{display:"flex",gap:"24px","flex-wrap":"wrap","align-items":"center"}},We={style:{position:"relative",display:"inline-flex"}},Le={style:{position:"relative",display:"inline-flex"}},Fe={style:{display:"flex",gap:"8px","flex-wrap":"wrap","align-items":"center"}},He={style:{width:"100%",display:"flex","flex-direction":"column",gap:"16px"}},Ue={style:{display:"flex",gap:"16px","align-items":"center"}},qe={style:{display:"flex",gap:"8px"}},Je=`<Message severity="success">Erfolgreich gespeichert.</Message>
<Message severity="info">Neue Version verfügbar.</Message>
<Message severity="warn">Sitzung läuft ab.</Message>
<Message severity="error">Verbindung unterbrochen.</Message>`,Ze=`<Tag value="Primary" />
<Tag value="Success" severity="success" />
<Tag value="Warning" severity="warn" />
<Tag value="Danger"  severity="danger" />
<Tag value="Rounded" rounded />
<Tag value="Mit Icon" icon="pi pi-check" severity="success" />`,Ge=`<!-- Badge auf Button -->
<OverlayBadge value="2" severity="danger">
  <Button icon="pi pi-bell" rounded outlined />
</OverlayBadge>

<!-- Standalone Badge -->
<Badge value="4" />
<Badge value="8" severity="success" />
<Badge value="!" severity="warn" />`,Qe=`<Chip label="Vue.js" />
<Chip label="PrimeVue" icon="pi pi-star" />
<Chip label="Entfernbar" removable @remove="onRemove" />`,Xe=`function onRemove(event) {
  console.log('Chip entfernt')
}`,Ye=`<ProgressBar :value="val" />
<ProgressBar :value="75" severity="success" />

<!-- Unbestimmter Fortschritt -->
<ProgressBar mode="indeterminate" style="height:6px" />

<!-- Spinner -->
<ProgressSpinner style="width:50px;height:50px" strokeWidth="4" />`,_e="const val = ref(45)",on={__name:"MessagesView",setup(e){const n=V(45),t=V(["JavaScript","CSS","HTML"]);function d(r){console.log("Entfernt:",r)}function g(r){t.value=t.value.filter(a=>a!==r)}return(r,a)=>(l(),c("div",null,[a[9]||(a[9]=p("div",{class:"section-header"},[p("h2",{class:"section-title"},"Nachrichten & Badges"),p("p",{class:"section-subtitle"}," Message, InlineMessage, Tag und Badge für Statusanzeigen, Labels und Benachrichtigungen. ")],-1)),s(P,{title:"Message – Inline-Nachrichten",badge:"Message",code:Je},{default:u(()=>[p("div",Ke,[s(o(y),{severity:"success"},{default:u(()=>[...a[3]||(a[3]=[h("Daten wurden erfolgreich gespeichert.",-1)])]),_:1}),s(o(y),{severity:"info"},{default:u(()=>[...a[4]||(a[4]=[h("Neue Version verfügbar. Bitte aktualisiere die App.",-1)])]),_:1}),s(o(y),{severity:"warn"},{default:u(()=>[...a[5]||(a[5]=[h("Deine Sitzung läuft in 5 Minuten ab.",-1)])]),_:1}),s(o(y),{severity:"error"},{default:u(()=>[...a[6]||(a[6]=[h("Verbindung zum Server unterbrochen.",-1)])]),_:1}),s(o(y),{severity:"secondary"},{default:u(()=>[...a[7]||(a[7]=[h("Sekundäre Hinweismeldung.",-1)])]),_:1}),s(o(y),{severity:"contrast"},{default:u(()=>[...a[8]||(a[8]=[h("Kontrastmeldung für dunkle Hintergründe.",-1)])]),_:1})])]),_:1}),s(P,{title:"Tag – Labels & Status-Badges",badge:"Tag",code:Ze},{default:u(()=>[p("div",Ae,[s(o(f),{value:"Primary"}),s(o(f),{value:"Success",severity:"success"}),s(o(f),{value:"Info",severity:"info"}),s(o(f),{value:"Warning",severity:"warn"}),s(o(f),{value:"Danger",severity:"danger"}),s(o(f),{value:"Rounded",rounded:""}),s(o(f),{value:"Mit Icon",icon:"pi pi-check",severity:"success"}),s(o(f),{value:"NEU",severity:"danger",rounded:""})])]),_:1}),s(P,{title:"Badge – Zähler & Indikatoren",badge:"Badge",code:Ge},{default:u(()=>[p("div",Re,[p("div",We,[s(o(S),{icon:"pi pi-bell",rounded:"",outlined:""}),s(o(w),{value:"5",style:{position:"absolute",top:"-4px",right:"-4px"}})]),p("div",Le,[s(o(S),{icon:"pi pi-envelope",rounded:"",outlined:"",severity:"secondary"}),s(o(w),{value:"12",severity:"danger",style:{position:"absolute",top:"-4px",right:"-4px"}})]),s(o(w),{value:"4"}),s(o(w),{value:"8",severity:"success"}),s(o(w),{value:"!",severity:"warn"}),s(o(R),{value:"2",severity:"danger"},{default:u(()=>[s(o(S),{icon:"pi pi-inbox",rounded:"",outlined:""})]),_:1})])]),_:1}),s(P,{title:"Chip – Entfernbare Tags",badge:"Chip",code:Qe,setupCode:Xe},{default:u(()=>[p("div",Fe,[s(o(k),{label:"Vue.js"}),s(o(k),{label:"PrimeVue",icon:"pi pi-star"}),s(o(k),{label:"TypeScript",removable:"",onRemove:a[0]||(a[0]=b=>d("TypeScript"))}),s(o(k),{label:"Entfernbar",icon:"pi pi-tag",removable:""}),(l(!0),c(Z,null,G(t.value,b=>(l(),$(o(k),{key:b,label:b,removable:"",onRemove:j=>g(b)},null,8,["label","onRemove"]))),128))])]),_:1}),s(P,{title:"ProgressBar & ProgressSpinner",badge:"ProgressBar",code:Ye,setupCode:_e},{default:u(()=>[p("div",He,[s(o(C),{value:n.value},null,8,["value"]),s(o(C),{value:75,severity:"success"}),s(o(C),{mode:"indeterminate",style:{height:"6px"}}),p("div",Ue,[s(o(M),{style:{width:"50px",height:"50px"},strokeWidth:"4"}),s(o(M),{style:{width:"50px",height:"50px"},strokeWidth:"4",animationDuration:".5s"})]),p("div",qe,[s(o(S),{label:"-10",size:"small",outlined:"",onClick:a[1]||(a[1]=b=>n.value=Math.max(0,n.value-10))}),s(o(S),{label:"+10",size:"small",onClick:a[2]||(a[2]=b=>n.value=Math.min(100,n.value+10))})])])]),_:1})]))}};export{on as default};
