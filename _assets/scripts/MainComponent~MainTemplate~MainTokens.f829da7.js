(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{75:function(e,i,t){"use strict";var n=t(62),r={resizeFrom:"child",checkOrigin:!1};i.a={data:function(){return{isBreakpointsActive:!1,iframeWidth:null}},methods:{mountResizableIframe:function(e){e.addEventListener("load",this.setupIframe.bind(this))},unmountResizableIframe:function(e){e.iFrameResizer&&e.iFrameResizer.close(),e.removeEventListener("load",this.setupIframe.bind(this))},setupIframe:function(e){var i=e.currentTarget;if(!i.getAttribute("height")&&"about:blank"!==i.src){var t=i.contentWindow;this.addScriptToIframe(window.UIengine.runtimeSrc,i),this.addScriptToIframe(window.UIengine.previewSrc,i),i.iFrameResizer||Object(n.iframeResizer)(r,i),this.iframeWidth=t.innerWidth,t.onresize=this.iframeResizeHandler.bind(this)}},iframeResizeHandler:function(e){var i=e.target.innerWidth;this.iframeWidth=i},addScriptToIframe:function(e,i){var t=i.contentDocument.getElementsByTagName("head")[0],n=document.createElement("script");n.src=e,n.async=!1,t.appendChild(n)}}}}}]);