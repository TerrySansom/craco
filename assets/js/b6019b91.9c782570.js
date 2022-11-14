"use strict";(self.webpackChunkcraco_website=self.webpackChunkcraco_website||[]).push([[3839],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1673:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={},l="Use html-loader",c={unversionedId:"use-html-loader",id:"use-html-loader",title:"Use html-loader",description:"",source:"@site/recipes/use-html-loader.md",sourceDirName:".",slug:"/use-html-loader",permalink:"/recipes/use-html-loader",draft:!1,editUrl:"https://github.com/dilanx/craco/tree/main/website/recipes/use-html-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Use Dart Sass",permalink:"/recipes/use-dart-sass"},next:{title:"Use less-loader",permalink:"/recipes/use-less-loader"}},s={},i=[],p={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-html-loader"},"Use html-loader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="craco.config.js"',title:'"craco.config.js"'},"/**\n * To use this, ensure you have added `html-loader` as a dev dependency in your `package.json` first\n * Learn more: https://github.com/webpack-contrib/html-loader\n */\nconst { loaderByName, addBeforeLoader } = require('@craco/craco');\n\nmodule.exports = {\n  webpack: {\n    configure: (webpackConfig) => {\n      webpackConfig.resolve.extensions.push('.html');\n\n      const htmlLoader = {\n        loader: require.resolve('html-loader'),\n        test: /\\.html$/,\n        exclude: /node_modules/,\n      };\n\n      addBeforeLoader(webpackConfig, loaderByName('file-loader'), htmlLoader);\n\n      return webpackConfig;\n    },\n  },\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typings.d.ts"',title:'"typings.d.ts"'},"/**\n * To resolve \"Cannot find module error on importing html file in webpack\" if you use Typescript\n * Usage: import foo from './foo.html';\n */\ndeclare module '*.html' {\n  const value: string;\n  export default value;\n}\n")))}u.isMDXComponent=!0}}]);