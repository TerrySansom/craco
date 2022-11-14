"use strict";(self.webpackChunkcraco_website=self.webpackChunkcraco_website||[]).push([[7255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||c;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const c={},i="Use a Jest config file",a={unversionedId:"use-a-jest-config-file",id:"use-a-jest-config-file",title:"Use a Jest config file",description:"",source:"@site/recipes/use-a-jest-config-file.md",sourceDirName:".",slug:"/use-a-jest-config-file",permalink:"/recipes/use-a-jest-config-file",draft:!1,editUrl:"https://github.com/dilanx/craco/tree/main/website/recipes/use-a-jest-config-file.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Set css-loader locals convention",permalink:"/recipes/set-css-loader-locals-convention"},next:{title:"Use a PostCSS config file",permalink:"/recipes/use-a-postcss-config-file"}},s={},l=[],f={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-a-jest-config-file"},"Use a Jest config file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="craco.config.js"',title:'"craco.config.js"'},"module.exports = {\n  jest: {\n    configure: {\n      globals: {\n        CONFIG: true,\n      },\n    },\n  },\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jest.config.js"',title:'"jest.config.js"'},"const { createJestConfig } = require('@craco/craco');\n\nconst cracoConfig = require('./craco.config.js');\nconst jestConfig = createJestConfig(cracoConfig);\n\nmodule.exports = jestConfig;\n")))}p.isMDXComponent=!0}}]);