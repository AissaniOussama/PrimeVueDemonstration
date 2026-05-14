import{B as R,s as U,R as j,e as V,f as P,z as K,M as F,Y as W,C as Y,D as J,v as E,x as A,S as Q,g as L,l as B,J as X,m as G,h as l,i as _,j as S,k as $,o as c,p as k,w as y,c as v,F as D,r as ee,a as T,q as te,u as C,n as M,y as g,t as ne,T as Z,d as a,A as w,E as f,G as O,H as ie,I as m,K as z}from"./index-BOVHa-KS.js";import{s as re}from"./index-BLkbyncR.js";import{O as se}from"./index-CcMPIfmf.js";import{s as oe}from"./index-BefXe2LS.js";import{_ as x}from"./DemoCard-CYkpsRvi.js";import"./CodeBlock-Dajbh6Tt.js";var ae=`
    .p-tieredmenu {
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        min-width: 12.5rem;
    }
    

    .p-tieredmenu-root-list,
    .p-tieredmenu-submenu {
        margin: 0;
        padding: dt('tieredmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('tieredmenu.list.gap');
    }

    .p-tieredmenu-submenu {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        box-shadow: dt('tieredmenu.shadow');
    }

    .p-tieredmenu-item {
        position: relative;
    }

    .p-tieredmenu-item-content {
        transition:
            background dt('tieredmenu.transition.duration'),
            color dt('tieredmenu.transition.duration');
        border-radius: dt('tieredmenu.item.border.radius');
        color: dt('tieredmenu.item.color');
    }

    .p-tieredmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('tieredmenu.item.padding');
        gap: dt('tieredmenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-tieredmenu-item-label {
        line-height: 1;
    }

    .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.color');
    }

    .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('tieredmenu.submenu.icon.size');
        width: dt('tieredmenu.submenu.icon.size');
        height: dt('tieredmenu.submenu.icon.size');
    }

    .p-tieredmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.active.color');
        background: dt('tieredmenu.item.active.background');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.active.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.active.color');
    }

    .p-tieredmenu-separator {
        border-block-start: 1px solid dt('tieredmenu.separator.border.color');
    }

    .p-tieredmenu-overlay {
        box-shadow: dt('tieredmenu.shadow');
        will-change: transform;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {
        padding-inline-start: 0;
        padding-inline-end: dt('tieredmenu.submenu.mobile.indent');
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`,ue={submenu:function(e){var n=e.instance,r=e.processedItem;return{display:n.isItemActive(r)?"flex":"none"}}},de={root:function(e){var n=e.props,r=e.instance;return["p-tieredmenu p-component",{"p-tieredmenu-overlay":n.popup,"p-tieredmenu-mobile":r.queryMatches}]},start:"p-tieredmenu-start",rootList:"p-tieredmenu-root-list",item:function(e){var n=e.instance,r=e.processedItem;return["p-tieredmenu-item",{"p-tieredmenu-item-active":n.isItemActive(r),"p-focus":n.isItemFocused(r),"p-disabled":n.isItemDisabled(r)}]},itemContent:"p-tieredmenu-item-content",itemLink:"p-tieredmenu-item-link",itemIcon:"p-tieredmenu-item-icon",itemLabel:"p-tieredmenu-item-label",submenuIcon:"p-tieredmenu-submenu-icon",submenu:"p-tieredmenu-submenu",separator:"p-tieredmenu-separator",end:"p-tieredmenu-end"},le=R.extend({name:"tieredmenu",style:ae,classes:de,inlineStyles:ue}),ce={name:"BaseTieredMenu",extends:V,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},breakpoint:{type:String,default:"960px"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:le,provide:function(){return{$pcTieredMenu:this,$parentInstance:this}}},H={name:"TieredMenuSub",hostName:"TieredMenu",extends:V,emits:["item-click","item-mouseenter","item-mousemove"],container:null,props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,r){return e&&e.item?G(e.item[n],r):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,n,r){return this.ptm(r,{context:{item:e.item,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return P(e.items)},onEnter:function(){_(this.container,this.level)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(r){return n.isItemVisible(r)&&n.getItemProp(r,"separator")}).length+1},getMenuItemProps:function(e,n){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,n,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,n,"itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions(e,n,"itemLabel")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,n,"submenuIcon"))}},containerRef:function(e){this.container=e}},components:{AngleRightIcon:oe},directives:{ripple:j}},me=["tabindex"],fe=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],he=["onClick","onMouseenter","onMousemove"],pe=["href","target"],be=["id"],Ie=["id"];function ve(t,e,n,r,o,i){var d=S("AngleRightIcon"),b=S("TieredMenuSub",!0),u=$("ripple");return c(),k(Z,l({name:"p-anchored-overlay",onEnter:i.onEnter},t.ptm("menu.transition")),{default:y(function(){return[n.level===0||n.visible?(c(),v("ul",{key:0,ref:i.containerRef,tabindex:n.tabindex},[(c(!0),v(D,null,ee(n.items,function(s,h){return c(),v(D,{key:i.getItemKey(s)},[i.isItemVisible(s)&&!i.getItemProp(s,"separator")?(c(),v("li",l({key:0,id:i.getItemId(s),style:i.getItemProp(s,"style"),class:[t.cx("item",{processedItem:s}),i.getItemProp(s,"class")],role:"menuitem","aria-label":i.getItemLabel(s),"aria-disabled":i.isItemDisabled(s)||void 0,"aria-expanded":i.isItemGroup(s)?i.isItemActive(s):void 0,"aria-haspopup":i.isItemGroup(s)&&!i.getItemProp(s,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(h)},{ref_for:!0},i.getPTOptions(s,h,"item"),{"data-p-active":i.isItemActive(s),"data-p-focused":i.isItemFocused(s),"data-p-disabled":i.isItemDisabled(s)}),[T("div",l({class:t.cx("itemContent"),onClick:function(I){return i.onItemClick(I,s)},onMouseenter:function(I){return i.onItemMouseEnter(I,s)},onMousemove:function(I){return i.onItemMouseMove(I,s)}},{ref_for:!0},i.getPTOptions(s,h,"itemContent")),[n.templates.item?(c(),k(C(n.templates.item),{key:1,item:s.item,hasSubmenu:!!i.getItemProp(s,"items"),label:i.getItemLabel(s),props:i.getMenuItemProps(s,h)},null,8,["item","hasSubmenu","label","props"])):te((c(),v("a",l({key:0,href:i.getItemProp(s,"url"),class:t.cx("itemLink"),target:i.getItemProp(s,"target"),tabindex:"-1"},{ref_for:!0},i.getPTOptions(s,h,"itemLink")),[n.templates.itemicon?(c(),k(C(n.templates.itemicon),{key:0,item:s.item,class:M(t.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(s,"icon")?(c(),v("span",l({key:1,class:[t.cx("itemIcon"),i.getItemProp(s,"icon")]},{ref_for:!0},i.getPTOptions(s,h,"itemIcon")),null,16)):g("",!0),T("span",l({id:i.getItemLabelId(s),class:t.cx("itemLabel")},{ref_for:!0},i.getPTOptions(s,h,"itemLabel")),ne(i.getItemLabel(s)),17,be),i.getItemProp(s,"items")?(c(),v(D,{key:2},[n.templates.submenuicon?(c(),k(C(n.templates.submenuicon),l({key:0,class:t.cx("submenuIcon"),active:i.isItemActive(s)},{ref_for:!0},i.getPTOptions(s,h,"submenuIcon")),null,16,["class","active"])):(c(),k(d,l({key:1,class:t.cx("submenuIcon")},{ref_for:!0},i.getPTOptions(s,h,"submenuIcon")),null,16,["class"]))],64)):g("",!0)],16,pe)),[[u]])],16,he),i.isItemVisible(s)&&i.isItemGroup(s)?(c(),k(b,l({key:0,id:i.getItemId(s)+"_list",class:t.cx("submenu"),style:t.sx("submenu",!0,{processedItem:s}),"aria-labelledby":i.getItemLabelId(s),role:"menu",menuId:n.menuId,focusedItemId:n.focusedItemId,items:s.items,templates:n.templates,activeItemPath:n.activeItemPath,level:n.level+1,visible:i.isItemActive(s)&&i.isItemGroup(s),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(p){return t.$emit("item-click",p)}),onItemMouseenter:e[1]||(e[1]=function(p){return t.$emit("item-mouseenter",p)}),onItemMousemove:e[2]||(e[2]=function(p){return t.$emit("item-mousemove",p)})},{ref_for:!0},t.ptm("submenu")),null,16,["id","class","style","aria-labelledby","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled"])):g("",!0)],16,fe)):g("",!0),i.isItemVisible(s)&&i.getItemProp(s,"separator")?(c(),v("li",l({key:1,id:i.getItemId(s),style:i.getItemProp(s,"style"),class:[t.cx("separator"),i.getItemProp(s,"class")],role:"separator"},{ref_for:!0},t.ptm("separator")),null,16,Ie)):g("",!0)],64)}),128))],8,me)):g("",!0)]}),_:1},16,["onEnter"])}H.render=ve;var N={name:"TieredMenu",extends:ce,inheritAttrs:!1,emits:["focus","blur","before-show","before-hide","hide","show"],outsideClickListener:null,matchMediaListener:null,scrollHandler:null,resizeListener:null,target:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!this.popup,submenuVisible:!1,dirty:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){this.popup||(P(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener()))}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&A.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,n){return e?G(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return P(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&P(e.items)},toggle:function(e){this.visible?this.hide(e,!0):this.show(e)},show:function(e,n){this.popup&&(this.$emit("before-show"),this.visible=!0,this.target=e.currentTarget,this.relatedTarget=e.relatedTarget||null),n&&L(this.menubar)},hide:function(e,n){this.popup&&(this.$emit("before-hide"),this.visible=!1),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},n&&L(this.relatedTarget||this.target||this.menubar),this.dirty=!1,this.target=null},onFocus:function(e){this.focused=!0,this.popup||(this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&X(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,n){var r=e.processedItem,o=e.isFocus;if(!B(r)){var i=r.index,d=r.key,b=r.level,u=r.parentKey,s=r.items,h=P(s),p=this.activeItemPath.filter(function(I){return I.parentKey!==u&&I.parentKey!==d});h&&(p.push(r),this.submenuVisible=!0),this.focusedItemInfo={index:i,level:b,parentKey:u},h&&(this.dirty=!0),o&&L(this.menubar),!(n==="hover"&&this.queryMatches)&&(this.activeItemPath=p)}},onOverlayClick:function(e){se.emit("overlay-click",{originalEvent:e,target:this.target})},onItemClick:function(e){var n=e.originalEvent,r=e.processedItem,o=this.isProccessedItemGroup(r),i=B(r.parent),d=this.isSelected(r);if(d){var b=r.index,u=r.key,s=r.level,h=r.parentKey;this.activeItemPath=this.activeItemPath.filter(function(I){return u!==I.key&&u.startsWith(I.key)}),this.focusedItemInfo={index:b,level:s,parentKey:h},this.dirty=!i,L(this.menubar)}else if(o)this.onItemChange(e);else{var p=i?r:this.activeItemPath.find(function(I){return I.parentKey===""});this.hide(n),this.changeFocusedItemIndex(n,p?p.index:-1),L(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var n=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(n);!r&&this.onItemChange({originalEvent:e,processedItem:n})}this.popup&&this.hide(e,!0),e.preventDefault()}else{var o=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}},onArrowLeftKey:function(e){var n=this,r=this.visibleItems[this.focusedItemInfo.index],o=this.activeItemPath.find(function(d){return d.key===r.parentKey}),i=B(r.parent);i||(this.focusedItemInfo={index:-1,parentKey:o?o.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(d){return d.parentKey!==n.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(n);r&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=K(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),r=n&&K(n,'[data-pc-section="itemlink"]');if(r?r.click():n&&n.click(),!this.popup){var o=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(o);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.popup||this.focusedItemInfo.level!==0){var n=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(n.parentKey.split("_")[0]),level:0,parentKey:""},this.popup&&L(this.target)}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(n);!r&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},onEnter:function(e){this.autoZIndex&&A.set("menu",e,this.baseZIndex||this.$primevue.config.zIndex.menu),Q(e,{position:"absolute",top:"0"}),this.alignOverlay(),L(this.menubar),this.scrollInView()},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.container=null,this.dirty=!1},onAfterLeave:function(e){this.autoZIndex&&A.clear(e)},alignOverlay:function(){J(this.container,this.target);var e=E(this.target);e>E(this.container)&&(this.container.style.minWidth=E(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var r=e.container&&!e.container.contains(n.target),o=e.popup?!(e.target&&(e.target===n.target||e.target.contains(n.target))):!0;r&&o&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Y(this.target,function(n){e.hide(n,!0)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(n){W()||e.hide(n,!0)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getProccessedItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return F(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,r=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(o){return n.isValidItem(o)}):-1;return r>-1?r+e+1:e},findPrevItemIndex:function(e){var n=this,r=e>0?F(this.visibleItems.slice(0,e),function(o){return n.isValidItem(o)}):-1;return r>-1?r:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,n){var r=this;this.searchValue=(this.searchValue||"")+n;var o=-1,i=!1;return this.focusedItemInfo.index!==-1?(o=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(d){return r.isItemMatched(d)}),o=o===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(d){return r.isItemMatched(d)}):o+this.focusedItemInfo.index):o=this.visibleItems.findIndex(function(d){return r.isItemMatched(d)}),o!==-1&&(i=!0),o===-1&&this.focusedItemInfo.index===-1&&(o=this.findFirstFocusedItemIndex()),o!==-1&&this.changeFocusedItemIndex(e,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemId,r=K(this.menubar,'li[id="'.concat(n,'"]'));r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",d=[];return e&&e.forEach(function(b,u){var s=(i!==""?i+"_":"")+u,h={item:b,index:u,level:r,key:s,parent:o,parentKey:i};h.items=n.createProcessedItems(b.items,r+1,h,s),d.push(h)}),d},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,n=this.activeItemPath.find(function(r){return r.key===e.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(P(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{TieredMenuSub:H,Portal:U}},ye=["id"];function ge(t,e,n,r,o,i){var d=S("TieredMenuSub"),b=S("Portal");return c(),k(b,{appendTo:t.appendTo,disabled:!t.popup},{default:y(function(){return[a(Z,l({name:"p-anchored-overlay",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:y(function(){return[o.visible?(c(),v("div",l({key:0,ref:i.containerRef,id:t.$id,class:t.cx("root"),onClick:e[0]||(e[0]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},t.ptmi("root")),[t.$slots.start?(c(),v("div",l({key:0,class:t.cx("start")},t.ptm("start")),[w(t.$slots,"start")],16)):g("",!0),a(d,l({ref:i.menubarRef,id:t.$id+"_list",class:t.cx("rootList"),tabindex:t.disabled?-1:t.tabindex,role:"menubar","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-disabled":t.disabled||void 0,"aria-orientation":"vertical","aria-activedescendant":o.focused?i.focusedItemId:void 0,menuId:t.$id,focusedItemId:o.focused?i.focusedItemId:void 0,items:i.processedItems,templates:t.$slots,activeItemPath:o.activeItemPath,level:0,visible:o.submenuVisible,pt:t.pt,unstyled:t.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},t.ptm("rootList")),null,16,["id","class","tabindex","aria-label","aria-labelledby","aria-disabled","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),t.$slots.end?(c(),v("div",l({key:1,class:t.cx("end")},t.ptm("end")),[w(t.$slots,"end")],16)):g("",!0)],16,ye)):g("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}N.render=ge;var ke=`
    .p-splitbutton {
        display: inline-flex;
        position: relative;
        border-radius: dt('splitbutton.border.radius');
    }

    .p-splitbutton-button.p-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
        border-inline-end: 0 none;
    }

    .p-splitbutton-button.p-button:focus-visible,
    .p-splitbutton-dropdown.p-button:focus-visible {
        z-index: 1;
    }

    .p-splitbutton-button.p-button:not(:disabled):hover,
    .p-splitbutton-button.p-button:not(:disabled):active {
        border-inline-end: 0 none;
    }

    .p-splitbutton-dropdown.p-button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-splitbutton-fluid {
        display: flex;
    }

    .p-splitbutton-rounded .p-splitbutton-dropdown.p-button {
        border-start-end-radius: dt('splitbutton.rounded.border.radius');
        border-end-end-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-rounded .p-splitbutton-button.p-button {
        border-start-start-radius: dt('splitbutton.rounded.border.radius');
        border-end-start-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-raised {
        box-shadow: dt('splitbutton.raised.shadow');
    }
`,Le={root:function(e){var n=e.instance,r=e.props;return["p-splitbutton p-component",{"p-splitbutton-raised":r.raised,"p-splitbutton-rounded":r.rounded,"p-splitbutton-fluid":n.hasFluid}]},pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown"},we=R.extend({name:"splitbutton",style:ke,classes:Le}),Pe={name:"BaseSplitButton",extends:V,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1},fluid:{type:Boolean,default:null},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:we,provide:function(){return{$pcSplitButton:this,$parentInstance:this}}},q={name:"SplitButton",extends:Pe,inheritAttrs:!1,emits:["click"],inject:{$pcFluid:{default:null}},data:function(){return{isExpanded:!1}},mounted:function(){var e=this;this.$watch("$refs.menu.visible",function(n){e.isExpanded=n})},methods:{onDropdownButtonClick:function(e){e&&e.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(e){(e.code==="ArrowDown"||e.code==="ArrowUp")&&(this.onDropdownButtonClick(),e.preventDefault())},onDefaultButtonClick:function(e){this.isExpanded&&this.$refs.menu.hide(e),this.$emit("click",e)}},computed:{containerClass:function(){return[this.cx("root"),this.class]},hasFluid:function(){return B(this.fluid)?!!this.$pcFluid:this.fluid}},components:{PVSButton:f,PVSMenu:N,ChevronDownIcon:re}},Se=["data-p-severity"];function xe(t,e,n,r,o,i){var d=S("PVSButton"),b=S("PVSMenu");return c(),v("div",l({class:i.containerClass,style:t.style},t.ptmi("root"),{"data-p-severity":t.severity}),[a(d,l({type:"button",class:t.cx("pcButton"),label:t.label,disabled:t.disabled,severity:t.severity,text:t.text,icon:t.icon,outlined:t.outlined,size:t.size,fluid:t.fluid,"aria-label":t.label,onClick:i.onDefaultButtonClick},t.buttonProps,{pt:t.ptm("pcButton"),unstyled:t.unstyled}),O({default:y(function(){return[w(t.$slots,"default")]}),_:2},[t.$slots.icon?{name:"icon",fn:y(function(u){return[w(t.$slots,"icon",{class:M(u.class)},function(){return[T("span",l({class:[t.icon,u.class]},t.ptm("pcButton").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","label","disabled","severity","text","icon","outlined","size","fluid","aria-label","onClick","pt","unstyled"]),a(d,l({ref:"button",type:"button",class:t.cx("pcDropdown"),disabled:t.disabled,"aria-haspopup":"true","aria-expanded":o.isExpanded,"aria-controls":o.isExpanded?t.$id+"_overlay":void 0,onClick:i.onDropdownButtonClick,onKeydown:i.onDropdownKeydown,severity:t.severity,text:t.text,outlined:t.outlined,size:t.size,unstyled:t.unstyled},t.menuButtonProps,{pt:t.ptm("pcDropdown")}),{icon:y(function(u){return[w(t.$slots,t.$slots.dropdownicon?"dropdownicon":"menubuttonicon",{class:M(u.class)},function(){return[(c(),k(C(t.menuButtonIcon||t.dropdownIcon?"span":"ChevronDownIcon"),l({class:[t.dropdownIcon||t.menuButtonIcon,u.class]},t.ptm("pcDropdown").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","severity","text","outlined","size","unstyled","pt"]),a(b,{ref:"menu",id:t.$id+"_overlay",model:t.model,popup:!0,autoZIndex:t.autoZIndex,baseZIndex:t.baseZIndex,appendTo:t.appendTo,unstyled:t.unstyled,pt:t.ptm("pcMenu")},O({_:2},[t.$slots.menuitemicon?{name:"itemicon",fn:y(function(u){return[w(t.$slots,"menuitemicon",{item:u.item,class:M(u.class)})]}),key:"0"}:void 0,t.$slots.item?{name:"item",fn:y(function(u){return[w(t.$slots,"item",{item:u.item,hasSubmenu:u.hasSubmenu,label:u.label,props:u.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,Se)}q.render=xe;const Be=`<Button label="Primary" />
<Button label="Secondary" severity="secondary" />
<Button label="Success"   severity="success" />
<Button label="Warning"   severity="warn" />
<Button label="Danger"    severity="danger" />
<Button label="Info"      severity="info" />
<Button label="Contrast"  severity="contrast" />`,Ce=`<Button label="Outlined" outlined />
<Button label="Text"     text />
<Button label="Link"     link />
<Button label="Raised"   raised />
<Button label="Rounded"  rounded />`,Me=`<Button label="Speichern" icon="pi pi-save" />
<Button label="Löschen"  icon="pi pi-trash"  severity="danger" />
<Button icon="pi pi-search" aria-label="Suchen" rounded />
<Button label="Rechts"   icon="pi pi-arrow-right" iconPos="right" />
<Button icon="pi pi-heart" rounded outlined severity="danger" />`,Ke=`<Button
  label="Laden..."
  :loading="isLoading"
  icon="pi pi-check"
  @click="simulateLoad"
/>`,Ee=`import { ref } from 'vue'
const isLoading = ref(false)

function simulateLoad() {
  isLoading.value = true
  setTimeout(() => { isLoading.value = false }, 2000)
}`,Ae=`<SplitButton
  label="Speichern"
  icon="pi pi-save"
  :model="splitItems"
  @click="onSplitClick"
/>`,De=`const splitItems = [
  { label: 'Als Entwurf', icon: 'pi pi-pencil',        command: () => {} },
  { label: 'Exportieren', icon: 'pi pi-external-link', command: () => {} },
  { separator: true },
  { label: 'Löschen',     icon: 'pi pi-trash',         command: () => {} }
]`,Ge={__name:"ButtonsView",setup(t){const e=z(!1),n=z(!1);function r(){e.value=!0,setTimeout(()=>{e.value=!1},2e3)}function o(){n.value=!0,setTimeout(()=>{n.value=!1},1500)}function i(){alert("Primäre Aktion ausgeführt!")}const d=[{label:"Als Entwurf",icon:"pi pi-pencil",command:()=>alert("Entwurf")},{label:"Exportieren",icon:"pi pi-external-link",command:()=>alert("Export")},{separator:!0},{label:"Löschen",icon:"pi pi-trash",command:()=>alert("Gelöscht")}];return(b,u)=>(c(),v("div",null,[u[0]||(u[0]=ie('<div class="section-header"><h2 class="section-title">Button-Komponenten</h2><p class="section-subtitle"> PrimeVue bietet <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-family:monospace;">Button</code>, <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-family:monospace;">SplitButton</code> und <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-family:monospace;">SpeedDial</code> mit diversen Varianten, Größen und Zuständen. </p></div>',1)),a(x,{title:"Button – Varianten & Severity",badge:"Button",code:Be},{default:y(()=>[a(m(f),{label:"Primary"}),a(m(f),{label:"Secondary",severity:"secondary"}),a(m(f),{label:"Success",severity:"success"}),a(m(f),{label:"Warning",severity:"warn"}),a(m(f),{label:"Danger",severity:"danger"}),a(m(f),{label:"Info",severity:"info"}),a(m(f),{label:"Contrast",severity:"contrast"})]),_:1}),a(x,{title:"Button – Outlined, Text, Link",badge:"Button",code:Ce},{default:y(()=>[a(m(f),{label:"Outlined",outlined:""}),a(m(f),{label:"Text",text:""}),a(m(f),{label:"Link",link:""}),a(m(f),{label:"Raised",raised:""}),a(m(f),{label:"Rounded",rounded:""})]),_:1}),a(x,{title:"Button – Mit Icons",badge:"Button",code:Me},{default:y(()=>[a(m(f),{label:"Speichern",icon:"pi pi-save"}),a(m(f),{label:"Löschen",icon:"pi pi-trash",severity:"danger"}),a(m(f),{icon:"pi pi-search","aria-label":"Suchen",rounded:""}),a(m(f),{label:"Rechts",icon:"pi pi-arrow-right",iconPos:"right"}),a(m(f),{icon:"pi pi-heart",rounded:"",outlined:"",severity:"danger"})]),_:1}),a(x,{title:"Button – Loading-Zustand",badge:"Button",code:Ke,setupCode:Ee},{default:y(()=>[a(m(f),{label:"Laden...",loading:e.value,icon:"pi pi-check",onClick:r},null,8,["loading"]),a(m(f),{label:"Daten abrufen",loading:n.value,severity:"secondary",onClick:o},null,8,["loading"])]),_:1}),a(x,{title:"SplitButton – Dropdown-Aktionen",badge:"SplitButton",code:Ae,setupCode:De},{default:y(()=>[a(m(q),{label:"Speichern",icon:"pi pi-save",model:d,onClick:i})]),_:1})]))}};export{Ge as default};
