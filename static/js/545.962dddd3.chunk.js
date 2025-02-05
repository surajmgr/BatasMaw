/*! For license information please see 545.962dddd3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbatas_maw=self.webpackChunkbatas_maw||[]).push([[545],{6545:function(t,e,i){i.r(e),i.d(e,{default:function(){return I}});var s=i(9874),n=i(5501),a=i(3029),l=i(2901);function o(t,e,i){var s=document.createElement(e);return t&&(s.className=t),i&&i.appendChild(s),s}function h(t,e,i){t.style.width="number"===typeof e?"".concat(e,"px"):e,t.style.height="number"===typeof i?"".concat(i,"px"):i}var r="idle",d="loading",c="loaded",p="error";function u(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,s=[];if(t instanceof Element)s=[t];else if(t instanceof NodeList||Array.isArray(t))s=Array.from(t);else{var n="string"===typeof t?t:e;n&&(s=Array.from(i.querySelectorAll(n)))}return s}function m(){return!(!navigator.vendor||!navigator.vendor.match(/apple/i))}var f=function(){return(0,l.A)((function t(e,i){(0,a.A)(this,t),this.type=e,this.defaultPrevented=!1,i&&Object.assign(this,i)}),[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}])}(),v=function(){return(0,l.A)((function t(){(0,a.A)(this,t),this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}),[{key:"addFilter",value:function(t,e){var i,s,n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;this._filters[t]||(this._filters[t]=[]),null===(i=this._filters[t])||void 0===i||i.push({fn:e,priority:a}),null===(s=this._filters[t])||void 0===s||s.sort((function(t,e){return t.priority-e.priority})),null===(n=this.pswp)||void 0===n||n.addFilter(t,e,a)}},{key:"removeFilter",value:function(t,e){this._filters[t]&&(this._filters[t]=this._filters[t].filter((function(t){return t.fn!==e}))),this.pswp&&this.pswp.removeFilter(t,e)}},{key:"applyFilters",value:function(t){for(var e,i=this,s=arguments.length,n=new Array(s>1?s-1:0),a=1;a<s;a++)n[a-1]=arguments[a];return null===(e=this._filters[t])||void 0===e||e.forEach((function(t){n[0]=t.fn.apply(i,n)})),n[0]}},{key:"on",value:function(t,e){var i,s;this._listeners[t]||(this._listeners[t]=[]),null===(i=this._listeners[t])||void 0===i||i.push(e),null===(s=this.pswp)||void 0===s||s.on(t,e)}},{key:"off",value:function(t,e){var i;this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter((function(t){return e!==t}))),null===(i=this.pswp)||void 0===i||i.off(t,e)}},{key:"dispatch",value:function(t,e){var i,s=this;if(this.pswp)return this.pswp.dispatch(t,e);var n=new f(t,e);return null===(i=this._listeners[t])||void 0===i||i.forEach((function(t){t.call(s,n)})),n}}])}(),y=function(){return(0,l.A)((function t(e,i){if((0,a.A)(this,t),this.element=o("pswp__img pswp__img--placeholder",e?"img":"div",i),e){var s=this.element;s.decoding="async",s.alt="",s.src=e,s.setAttribute("role","presentation")}this.element.setAttribute("aria-hidden","true")}),[{key:"setDisplayedSize",value:function(t,e){this.element&&("IMG"===this.element.tagName?(h(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=function(t,e,i){var s="translate3d(".concat(t,"px,").concat(e||0,"px,0)");return void 0!==i&&(s+=" scale3d(".concat(i,",").concat(i,",1)")),s}(0,0,t/250)):h(this.element,t,e))}},{key:"destroy",value:function(){var t;null!==(t=this.element)&&void 0!==t&&t.parentNode&&this.element.remove(),this.element=null}}])}(),g=function(){return(0,l.A)((function t(e,i,s){(0,a.A)(this,t),this.instance=i,this.data=e,this.index=s,this.element=void 0,this.placeholder=void 0,this.slide=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.isDecoding=!1,this.state=r,this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}),[{key:"removePlaceholder",value:function(){var t=this;this.placeholder&&!this.keepPlaceholder()&&setTimeout((function(){t.placeholder&&(t.placeholder.destroy(),t.placeholder=void 0)}),1e3)}},{key:"load",value:function(t,e){if(this.slide&&this.usePlaceholder())if(this.placeholder){var i=this.placeholder.element;i&&!i.parentElement&&this.slide.container.prepend(i)}else{var s=this.instance.applyFilters("placeholderSrc",!(!this.data.msrc||!this.slide.isFirstSlide)&&this.data.msrc,this);this.placeholder=new y(s,this.slide.container)}this.element&&!e||this.instance.dispatch("contentLoad",{content:this,isLazy:t}).defaultPrevented||(this.isImageContent()?(this.element=o("pswp__img","img"),this.displayedImageWidth&&this.loadImage(t)):(this.element=o("pswp__content","div"),this.element.innerHTML=this.data.html||""),e&&this.slide&&this.slide.updateContentSize(!0))}},{key:"loadImage",value:function(t){var e,i,s=this;if(this.isImageContent()&&this.element&&!this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented){var n=this.element;this.updateSrcsetSizes(),this.data.srcset&&(n.srcset=this.data.srcset),n.src=null!==(e=this.data.src)&&void 0!==e?e:"",n.alt=null!==(i=this.data.alt)&&void 0!==i?i:"",this.state=d,n.complete?this.onLoaded():(n.onload=function(){s.onLoaded()},n.onerror=function(){s.onError()})}}},{key:"setSlide",value:function(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}},{key:"onLoaded",value:function(){this.state=c,this.slide&&this.element&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),this.state!==c&&this.state!==p||this.removePlaceholder())}},{key:"onError",value:function(){this.state=p,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}},{key:"isLoading",value:function(){return this.instance.applyFilters("isContentLoading",this.state===d,this)}},{key:"isError",value:function(){return this.state===p}},{key:"isImageContent",value:function(){return"image"===this.type}},{key:"setDisplayedSize",value:function(t,e){if(this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,e),!this.instance.dispatch("contentResize",{content:this,width:t,height:e}).defaultPrevented&&(h(this.element,t,e),this.isImageContent()&&!this.isError()))){var i=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=e,i?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:e,content:this})}}},{key:"isZoomable",value:function(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==p,this)}},{key:"updateSrcsetSizes",value:function(){if(this.isImageContent()&&this.element&&this.data.srcset){var t=this.element,e=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||e>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=e+"px",t.dataset.largestUsedSize=String(e))}}},{key:"usePlaceholder",value:function(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}},{key:"lazyLoad",value:function(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}},{key:"keepPlaceholder",value:function(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}},{key:"destroy",value:function(){this.hasSlide=!1,this.slide=void 0,this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented||(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=void 0))}},{key:"displayError",value:function(){if(this.slide){var t,e,i=o("pswp__error-msg","div");i.innerText=null!==(t=null===(e=this.instance.options)||void 0===e?void 0:e.errorMsg)&&void 0!==t?t:"",i=this.instance.applyFilters("contentErrorElement",i,this),this.element=o("pswp__content pswp__error-msg-container","div"),this.element.appendChild(i),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}},{key:"append",value:function(){var t=this;if(!this.isAttached&&this.element)if(this.isAttached=!0,this.state!==p){if(!this.instance.dispatch("contentAppend",{content:this}).defaultPrevented){var e="decode"in this.element;this.isImageContent()?e&&this.slide&&(!this.slide.isActive||m())?(this.isDecoding=!0,this.element.decode().catch((function(){})).finally((function(){t.isDecoding=!1,t.appendImage()}))):this.appendImage():this.slide&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}}else this.displayError()}},{key:"activate",value:function(){!this.instance.dispatch("contentActivate",{content:this}).defaultPrevented&&this.slide&&(this.isImageContent()&&this.isDecoding&&!m()?this.appendImage():this.isError()&&this.load(!1,!0),this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","false"))}},{key:"deactivate",value:function(){this.instance.dispatch("contentDeactivate",{content:this}),this.slide&&this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","true")}},{key:"remove",value:function(){this.isAttached=!1,this.instance.dispatch("contentRemove",{content:this}).defaultPrevented||(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}},{key:"appendImage",value:function(){this.isAttached&&(this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),this.state!==c&&this.state!==p||this.removePlaceholder()))}}])}();function w(t,e,i,s,n){var a=0;if(e.paddingFn)a=e.paddingFn(i,s,n)[t];else if(e.padding)a=e.padding[t];else{var l="padding"+t[0].toUpperCase()+t.slice(1);e[l]&&(a=e[l])}return Number(a)||0}var k=function(){return(0,l.A)((function t(e,i,s,n){(0,a.A)(this,t),this.pswp=n,this.options=e,this.itemData=i,this.index=s,this.panAreaSize=null,this.elementSize=null,this.fit=1,this.fill=1,this.vFill=1,this.initial=1,this.secondary=1,this.max=1,this.min=1}),[{key:"update",value:function(t,e,i){var s={x:t,y:e};this.elementSize=s,this.panAreaSize=i;var n=i.x/s.x,a=i.y/s.y;this.fit=Math.min(1,n<a?n:a),this.fill=Math.min(1,n>a?n:a),this.vFill=Math.min(1,a),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}},{key:"_parseZoomLevelOption",value:function(t){var e=t+"ZoomLevel",i=this.options[e];if(i)return"function"===typeof i?i(this):"fill"===i?this.fill:"fit"===i?this.fit:Number(i)}},{key:"_getSecondary",value:function(){var t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,3*this.fit),this.elementSize&&t*this.elementSize.x>4e3&&(t=4e3/this.elementSize.x),t)}},{key:"_getInitial",value:function(){return this._parseZoomLevelOption("initial")||this.fit}},{key:"_getMax",value:function(){return this._parseZoomLevelOption("max")||Math.max(1,4*this.fit)}}])}();function _(t,e,i){var s,n=e.createContentFromData(t,i),a=e.options;if(a){var l;s=new k(a,t,-1),l=e.pswp?e.pswp.viewportSize:function(t,e){if(t.getViewportSizeFn){var i=t.getViewportSizeFn(t,e);if(i)return i}return{x:document.documentElement.clientWidth,y:window.innerHeight}}(a,e);var o=function(t,e,i,s){return{x:e.x-w("left",t,e,i,s)-w("right",t,e,i,s),y:e.y-w("top",t,e,i,s)-w("bottom",t,e,i,s)}}(a,l,t,i);s.update(n.width,n.height,o)}return n.lazyLoad(),s&&n.setDisplayedSize(Math.ceil(n.width*s.initial),Math.ceil(n.height*s.initial)),n}var S=function(t){function e(){return(0,a.A)(this,e),(0,s.A)(this,e,arguments)}return(0,n.A)(e,t),(0,l.A)(e,[{key:"getNumItems",value:function(){var t,e=0,i=null===(t=this.options)||void 0===t?void 0:t.dataSource;i&&"length"in i?e=i.length:i&&"gallery"in i&&(i.items||(i.items=this._getGalleryDOMElements(i.gallery)),i.items&&(e=i.items.length));var s=this.dispatch("numItems",{dataSource:i,numItems:e});return this.applyFilters("numItems",s.numItems,i)}},{key:"createContentFromData",value:function(t,e){return new g(t,this,e)}},{key:"getItemData",value:function(t){var e,i=null===(e=this.options)||void 0===e?void 0:e.dataSource,s={};Array.isArray(i)?s=i[t]:i&&"gallery"in i&&(i.items||(i.items=this._getGalleryDOMElements(i.gallery)),s=i.items[t]);var n=s;n instanceof Element&&(n=this._domElementToItemData(n));var a=this.dispatch("itemData",{itemData:n||{},index:t});return this.applyFilters("itemData",a.itemData,t)}},{key:"_getGalleryDOMElements",value:function(t){var e,i;return null!==(e=this.options)&&void 0!==e&&e.children||null!==(i=this.options)&&void 0!==i&&i.childSelector?u(this.options.children,this.options.childSelector,t)||[]:[t]}},{key:"_domElementToItemData",value:function(t){var e={element:t},i="A"===t.tagName?t:t.querySelector("a");if(i){e.src=i.dataset.pswpSrc||i.href,i.dataset.pswpSrcset&&(e.srcset=i.dataset.pswpSrcset),e.width=i.dataset.pswpWidth?parseInt(i.dataset.pswpWidth,10):0,e.height=i.dataset.pswpHeight?parseInt(i.dataset.pswpHeight,10):0,e.w=e.width,e.h=e.height,i.dataset.pswpType&&(e.type=i.dataset.pswpType);var s,n=t.querySelector("img");if(n)e.msrc=n.currentSrc||n.src,e.alt=null!==(s=n.getAttribute("alt"))&&void 0!==s?s:"";(i.dataset.pswpCropped||i.dataset.cropped)&&(e.thumbCropped=!0)}return this.applyFilters("domItemData",e,t,i)}},{key:"lazyLoadData",value:function(t,e){return _(t,this,e)}}])}(v),I=function(t){function e(t){var i;return(0,a.A)(this,e),(i=(0,s.A)(this,e)).options=t||{},i._uid=0,i.shouldOpen=!1,i._preloadedContent=void 0,i.onThumbnailsClick=i.onThumbnailsClick.bind(i),i}return(0,n.A)(e,t),(0,l.A)(e,[{key:"init",value:function(){var t=this;u(this.options.gallery,this.options.gallerySelector).forEach((function(e){e.addEventListener("click",t.onThumbnailsClick,!1)}))}},{key:"onThumbnailsClick",value:function(t){if(!function(t){return"button"in t&&1===t.button||t.ctrlKey||t.metaKey||t.altKey||t.shiftKey}(t)&&!window.pswp){var e={x:t.clientX,y:t.clientY};e.x||e.y||(e=null);var i=this.getClickedIndex(t);i=this.applyFilters("clickedIndex",i,t,this);var s={gallery:t.currentTarget};i>=0&&(t.preventDefault(),this.loadAndOpen(i,s,e))}}},{key:"getClickedIndex",value:function(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);var e=t.target,i=u(this.options.children,this.options.childSelector,t.currentTarget).findIndex((function(t){return t===e||t.contains(e)}));return-1!==i?i:this.options.children||this.options.childSelector?-1:0}},{key:"loadAndOpen",value:function(t,e,i){if(window.pswp||!this.options)return!1;if(!e&&this.options.gallery&&this.options.children){var s=u(this.options.gallery);s[0]&&(e={gallery:s[0]})}return this.options.index=t,this.options.initialPointerPos=i,this.shouldOpen=!0,this.preload(t,e),!0}},{key:"preload",value:function(t,e){var i=this,s=this.options;e&&(s.dataSource=e);var n,a=[],l=typeof s.pswpModule;if("function"===typeof(n=s.pswpModule)&&n.prototype&&n.prototype.goTo)a.push(Promise.resolve(s.pswpModule));else{if("string"===l)throw new Error("pswpModule as string is no longer supported");if("function"!==l)throw new Error("pswpModule is not valid");a.push(s.pswpModule())}"function"===typeof s.openPromise&&a.push(s.openPromise()),!1!==s.preloadFirstSlide&&t>=0&&(this._preloadedContent=function(t,e){var i=e.getItemData(t);if(!e.dispatch("lazyLoadSlide",{index:t,itemData:i}).defaultPrevented)return _(i,e,t)}(t,this));var o=++this._uid;Promise.all(a).then((function(t){if(i.shouldOpen){var e=t[0];i._openPhotoswipe(e,o)}}))}},{key:"_openPhotoswipe",value:function(t,e){var i=this;if((e===this._uid||!this.shouldOpen)&&(this.shouldOpen=!1,!window.pswp)){var s="object"===typeof t?new t.default(this.options):new t(this.options);this.pswp=s,window.pswp=s,Object.keys(this._listeners).forEach((function(t){var e;null===(e=i._listeners[t])||void 0===e||e.forEach((function(e){s.on(t,e)}))})),Object.keys(this._filters).forEach((function(t){var e;null===(e=i._filters[t])||void 0===e||e.forEach((function(e){s.addFilter(t,e.fn,e.priority)}))})),this._preloadedContent&&(s.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=void 0),s.on("destroy",(function(){i.pswp=void 0,delete window.pswp})),s.init()}}},{key:"destroy",value:function(){var t,e=this;null===(t=this.pswp)||void 0===t||t.destroy(),this.shouldOpen=!1,this._listeners={},u(this.options.gallery,this.options.gallerySelector).forEach((function(t){t.removeEventListener("click",e.onThumbnailsClick,!1)}))}}])}(S)}}]);
//# sourceMappingURL=545.962dddd3.chunk.js.map